import { CaseSheet } from "./types";

const DB_NAME = "ChakkalamuttuHomoeopathicDB";
const STORE_NAME = "caseSheets";
const DB_VERSION = 1;

// Initialize the IndexedDB
export function initIndexedDB(): Promise<IDBDatabase> {
  // Request native browser persistence so the operating system never auto-deletes the database files
  if (typeof navigator !== "undefined" && navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().then((persistent) => {
      console.log(`Persistent storage status: ${persistent ? "GUARANTEED" : "BEST_EFFORT"}`);
    }).catch(err => console.error("Error requesting storage persistence:", err));
  }

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
      console.error("IndexedDB open error:", event);
      reject(new Error("Unable to open offline IndexedDB database."));
    };

    request.onsuccess = (event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
  });
}

// Save or Update a single case sheet to IndexedDB (as well as backup localStorage)
export async function saveCaseSheet(sheet: CaseSheet): Promise<void> {
  // Primary write: IndexedDB
  try {
    const db = await initIndexedDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(sheet);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error("IndexedDB write failed, relying on localStorage only:", err);
  }

  // Double redundancy fallback: localStorage
  try {
    const cached = localStorage.getItem("homoeopathic_case_sheets");
    let list: CaseSheet[] = cached ? JSON.parse(cached) : [];
    const index = list.findIndex((item) => item.id === sheet.id);

    if (index >= 0) {
      list[index] = sheet;
    } else {
      list.unshift(sheet);
    }
    localStorage.setItem("homoeopathic_case_sheets", JSON.stringify(list));
  } catch (err) {
    console.error("localStorage backup sync failed:", err);
  }
}

// Delete a case sheet from both IndexedDB and localStorage
export async function deleteCaseSheet(id: string): Promise<void> {
  // Delete from IndexedDB
  try {
    const db = await initIndexedDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error("IndexedDB delete failed:", err);
  }

  // Synchronize localStorage
  try {
    const cached = localStorage.getItem("homoeopathic_case_sheets");
    if (cached) {
      const list: CaseSheet[] = JSON.parse(cached);
      const updated = list.filter((item) => item.id !== id);
      localStorage.setItem("homoeopathic_case_sheets", JSON.stringify(updated));
    }
  } catch (err) {
    console.error("localStorage delete sync failed:", err);
  }
}

// Save multiple case sheets to IndexedDB (e.g., during Backup Restore / Import)
export async function saveMultipleCaseSheets(sheets: CaseSheet[]): Promise<void> {
  try {
    const db = await initIndexedDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);

      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);

      sheets.forEach((sheet) => {
        store.put(sheet);
      });
    });
  } catch (err) {
    console.error("Multiple IndexedDB writes failed:", err);
  }

  // Backup to localStorage
  try {
    localStorage.setItem("homoeopathic_case_sheets", JSON.stringify(sheets));
  } catch (err) {
    console.error("Backup localStorage update failed:", err);
  }
}

// Load all case sheets from both IndexedDB and localStorage (with automatic double-layer healing reconciliation)
export async function loadAllCaseSheets(): Promise<CaseSheet[]> {
  let dbRecords: CaseSheet[] = [];
  let storageRecords: CaseSheet[] = [];

  // 1. Fetch from IndexedDB
  try {
    const db = await initIndexedDB();
    dbRecords = await new Promise<CaseSheet[]>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error("IndexedDB read failed:", err);
  }

  // 2. Fetch from localStorage fallback
  try {
    const cached = localStorage.getItem("homoeopathic_case_sheets");
    if (cached) {
      storageRecords = JSON.parse(cached);
    }
  } catch (err) {
    console.error("localStorage read failed:", err);
  }

  // 3. Double-layer Auto-healing reconciliation. If one store has missing records compared to the other, merge them!
  const recordMap = new Map<string, CaseSheet>();

  // Use createdAt/updatedAt timestamp to resolve versions if collisions occur
  // Sort by date/timestamp to make sure the newest or newly added records are loaded at the top
  const mergeRecords = (existing: CaseSheet[], incoming: CaseSheet[]) => {
    existing.forEach((item) => recordMap.set(item.id, item));
    incoming.forEach((item) => {
      const existingItem = recordMap.get(item.id);
      if (!existingItem) {
        recordMap.set(item.id, item);
      } else {
        // Keep the latest write
        const t1 = new Date(existingItem.updatedAt || existingItem.date || 0).getTime();
        const t2 = new Date(item.updatedAt || item.date || 0).getTime();
        if (t2 > t1) {
          recordMap.set(item.id, item);
        }
      }
    });
  };

  mergeRecords(dbRecords, storageRecords);

  const mergedList = Array.from(recordMap.values()).sort((a, b) => {
    const dateA = a.updatedAt || a.date || "";
    const dateB = b.updatedAt || b.date || "";
    return dateB.localeCompare(dateA); // Newest records show up first
  });

  // Healing Sync: Write back to both databases so they are identical
  if (mergedList.length > 0) {
    if (dbRecords.length !== mergedList.length) {
      console.log(`Healing sync: Writing ${mergedList.length} unified records to IndexedDB.`);
      // Run background save
      saveMultipleCaseSheets(mergedList).catch((e) => console.error(e));
    } else if (storageRecords.length !== mergedList.length) {
      console.log(`Healing sync: Writing ${mergedList.length} unified records to localStorage.`);
      try {
        localStorage.setItem("homoeopathic_case_sheets", JSON.stringify(mergedList));
      } catch (e) {
        console.error(e);
      }
    }
  }

  return mergedList;
}

// Core Backup File Downloader (JSON representation)
export function exportDatabaseBackup(records: CaseSheet[]) {
  const dataStr = JSON.stringify(records, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  const timestamp = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `Chakkalamuttu_Homoeopathic_Ledger_Backup_${timestamp}.json`;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
