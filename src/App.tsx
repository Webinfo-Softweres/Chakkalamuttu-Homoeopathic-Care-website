/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  Save,
  Trash2,
  List as ListIcon,
  RefreshCw,
  Home,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  HeartPulse,
  Printer,
  ChevronLeft,
  ChevronRight,
  Database,
  Search,
} from "lucide-react";

import { CaseSheet, createEmptyCaseSheet, getTodayDateString, generateAdNo } from "./types";
import Page1Form from "./components/Page1Form";
import Page2Form from "./components/Page2Form";
import Page3Form from "./components/Page3Form";
import Page4Form from "./components/Page4Form";
import Page5Form from "./components/Page5Form";
import Page6Form from "./components/Page6Form";
import Page7Form from "./components/Page7Form";
import ListModal from "./components/ListModal";
import WelcomeScreen from "./components/WelcomeScreen";
import { 
  loadAllCaseSheets, 
  saveCaseSheet, 
  deleteCaseSheet, 
  saveMultipleCaseSheets, 
  exportDatabaseBackup 
} from "./db";

export default function App() {
  // Navigation & Screen Control STATE
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<number>(1);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  // Active form data
  const [activeCase, setActiveCase] = useState<CaseSheet>(createEmptyCaseSheet());

  // Locally persisted database records state
  const [records, setRecords] = useState<CaseSheet[]>([]);

  // Simple toast alert state for positive feedback
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  // PWA install states
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState<boolean>(false);

  // Detect install prompt and standalone status
  useEffect(() => {
    // Detect if app is already running under standalone desktop/mobile app window
    if (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone) {
      setIsStandalone(true);
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      console.log("PWA install prompt deferred successfully.");
    };

    const handleAppInstalled = () => {
      setIsStandalone(true);
      setDeferredPrompt(null);
      showToast("Chakkalamuttu Homoeopathic Care Patient Ledger successfully installed to Desktop!", "success");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  // Trigger PWA install
  const handleInstallApp = async () => {
    if (!deferredPrompt) {
      showToast("Desktop app install option is currently not available, already installed, or unsupported on this web browser.", "info");
      return;
    }
    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User design choice for installation: ${outcome}`);
      if (outcome === "accepted") {
        showToast("Great choice! Access this ledger anytime directly from your desktop app list.", "success");
        setIsStandalone(true);
      }
      setDeferredPrompt(null);
    } catch (err) {
      console.error("Installation dialogue prompt error:", err);
    }
  };

  // Load records from 100% Offline IndexedDB + LocalStorage redundancy on mount
  useEffect(() => {
    async function loadInitialData() {
      try {
        const loaded = await loadAllCaseSheets();
        setRecords(loaded);
      } catch (err) {
        console.error("Failed to load offline database records on mount:", err);
        showToast("Database load fallback: checks active local cache.", "info");
      }
    }
    loadInitialData();
  }, []);

  // Back up Download: exports the database records to JSON file
  const handleExportBackup = () => {
    if (records.length === 0) {
      showToast("No records exist in the local database to backup.", "info");
      return;
    }
    try {
      exportDatabaseBackup(records);
      showToast(`Successfully downloaded Chakkalamuttu Clinic backup with ${records.length} patients.`, "success");
    } catch (err) {
      console.error("Backup export failure:", err);
      showToast("Backup export failed.", "error");
    }
  };

  // Backup Restore: imports the database records from JSON file
  const handleImportBackup = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const text = e.target?.result as string;
        const importedData = JSON.parse(text);

        if (!Array.isArray(importedData)) {
          showToast("Invalid backup file. Must contain a patient list array.", "error");
          return;
        }

        // Basic verification
        const validRecords = importedData.filter(
          (item) => item && typeof item === "object" && item.id && item.adNo
        );

        if (validRecords.length === 0) {
          showToast("No valid patients found in the chosen backup file.", "error");
          return;
        }

        // Merge with existing records in state
        const recordMap = new Map<string, CaseSheet>();
        records.forEach((r) => recordMap.set(r.id, r));
        validRecords.forEach((r) => recordMap.set(r.id, r));

        const unifiedList = Array.from(recordMap.values());
        await saveMultipleCaseSheets(unifiedList);
        
        // Reload
        const updated = await loadAllCaseSheets();
        setRecords(updated);
        showToast(`Database Restored! successfully imported and synchronized ${validRecords.length} offline case files.`, "success");
      } catch (err) {
        console.error("Backup JSON parse failure:", err);
        showToast("Failed to parse chosen file. Is it a valid clinic backup .json?", "error");
      }
    };
    reader.readAsText(file);
    event.target.value = ""; // Clear input for next triggers
  };

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // HANDLER: Form input updates
  const handleFieldChange = (field: keyof CaseSheet, value: any) => {
    setActiveCase((prev) => ({
      ...prev,
      [field]: value,
      updatedAt: getTodayDateString(),
    }));
  };

  // CRUD: New Record (Clear current fields)
  const handleClear = () => {
    const emptyCase = createEmptyCaseSheet();
    setActiveCase(emptyCase);
    setActivePage(1);
    showToast("Form cleared. Generated a new Patient Case Sheet.", "info");
  };

  // CRUD: Save Record (Writes to IndexedDB + Local Cache)
  const handleSave = async () => {
    // Validate required identifiers
    if (!activeCase.adNo.trim()) {
      showToast("Admission Number (Ad No) is required to save records.", "error");
      return;
    }

    const finalCase: CaseSheet = {
      ...activeCase,
      updatedAt: getTodayDateString(),
    };

    // If it's a completely new file, apply a proper createdAt too
    if (!records.some(rec => rec.id === finalCase.id)) {
      finalCase.createdAt = getTodayDateString();
    }

    try {
      await saveCaseSheet(finalCase);
      const allRecords = await loadAllCaseSheets();
      setRecords(allRecords);
      setActiveCase(finalCase);
      showToast(`Saved! Dr. Chakkalamuttu, "${finalCase.name || "Ad No: " + finalCase.adNo}" is permanently saved and will auto-load tomorrow.`, "success");
    } catch (err) {
      console.error("Commit database error:", err);
      showToast("Db failure: Local storage space depleted.", "error");
    }
  };

  // CRUD: Delete active record
  const handleDelete = async () => {
    const matchedRecord = records.find((rec) => rec.id === activeCase.id || rec.adNo === activeCase.adNo);
    if (!matchedRecord) {
      showToast("This unsaved case does not exist in the database.", "error");
      return;
    }

    const confirmDel = confirm(`Are you sure you want to permanently delete the patient record for "${matchedRecord.name || matchedRecord.adNo}" across all physical database layers? This action is IRREVERSIBLE.`);
    if (!confirmDel) return;

    try {
      await deleteCaseSheet(matchedRecord.id);
      const allRecords = await loadAllCaseSheets();
      setRecords(allRecords);
      handleClear();
      showToast("Patient record completely purged from offline databases.", "info");
    } catch (err) {
      console.error("Purge record error:", err);
      showToast("Failed to delete patient from database.", "error");
    }
  };

  // Action: Select record from List Modal
  const handleSelectRecord = (selected: CaseSheet) => {
    setActiveCase(selected);
    setIsListOpen(false);
    setActivePage(1); // Return to first page of case sheet upon selection
    showToast(`Loaded details for patient "${selected.name || "Ad No: " + selected.adNo}"`, "success");
  };

  // Action: Delete item from within List Modal selection
  const handleDeleteFromList = async (idToDel: string) => {
    try {
      await deleteCaseSheet(idToDel);
      const allRecords = await loadAllCaseSheets();
      setRecords(allRecords);

      // If deleting the active user, reset the active template
      if (activeCase.id === idToDel) {
        handleClear();
      }
      showToast("Patient record successfully deleted.", "info");
    } catch (err) {
      console.error("List modal direct delete error:", err);
    }
  };

  // Navigation handlers
  const handleNextPage = () => {
    if (activePage < 7) {
      setActivePage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (activePage > 1) {
      setActivePage((prev) => prev - 1);
    }
  };

  // Trigger printing the page
  const handlePrint = () => {
    window.print();
  };

  // Component pages matrix selector
  const renderActiveForm = () => {
    switch (activePage) {
      case 1:
        return <Page1Form data={activeCase} onChange={handleFieldChange} />;
      case 2:
        return <Page2Form data={activeCase} onChange={handleFieldChange} />;
      case 3:
        return <Page3Form data={activeCase} onChange={handleFieldChange} />;
      case 4:
        return <Page4Form data={activeCase} onChange={handleFieldChange} />;
      case 5:
        return <Page5Form data={activeCase} onChange={handleFieldChange} />;
      case 6:
        return <Page6Form data={activeCase} onChange={handleFieldChange} />;
      case 7:
        return <Page7Form data={activeCase} onChange={handleFieldChange} />;
      default:
        return <Page1Form data={activeCase} onChange={handleFieldChange} />;
    }
  };

  // Check if we are showing the Welcome introduction screen
  if (showWelcome) {
    return (
      <WelcomeScreen
        onEnter={() => setShowWelcome(false)}
        onInstall={handleInstallApp}
        showInstallButton={!!deferredPrompt}
        totalRecordsCount={records.length}
        onExportBackup={handleExportBackup}
        onImportBackup={handleImportBackup}
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-slate-200 text-slate-800 flex flex-col font-sans select-none print:bg-white"
      id="main-workspace"
    >
      {/* Toast notifications */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-3 rounded-lg shadow-xl text-xs font-bold uppercase tracking-wider border text-white ${
              toast.type === "success"
                ? "bg-[#858000] border-[#737000]"
                : toast.type === "error"
                ? "bg-rose-600 border-rose-500"
                : "bg-amber-500 border-amber-400"
            }`}
            id="notification-toast"
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-4 h-4 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0" />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Windows classic simulated menu bar */}
      <div className="bg-[#a2b5cd] border-b border-slate-400 text-slate-900 px-3 py-1 text-xs select-none shadow-sm flex flex-wrap items-center justify-between print:hidden">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5 text-rose-700 animate-pulse" />
            <span>HOMOEOPATHIC MEDICAL CENTRE, CHAKKALAMUTTU, NF GATE TRIPUNITHURA</span>
          </div>
          
          {/* Dropdown triggers imitating physical desk options */}
          <div className="hidden md:flex items-center gap-3 border-l border-slate-400 pl-4">
            <button
              onClick={handleClear}
              className="text-slate-700 hover:text-black hover:bg-slate-300/40 px-1.5 py-0.5 rounded transition-all font-semibold uppercase text-[10px]"
            >
              File: New Patient
            </button>
            <button
              onClick={() => setIsListOpen(true)}
              className="text-slate-700 hover:text-black hover:bg-slate-300/40 px-1.5 py-0.5 rounded transition-all font-semibold uppercase text-[10px]"
            >
              Daily Entry: Lookup
            </button>
            <button
              onClick={handlePrint}
              className="text-slate-700 hover:text-black hover:bg-slate-300/40 px-1.5 py-0.5 rounded transition-all font-semibold uppercase text-[10px]"
            >
              Tools: Print Screen
            </button>
          </div>
        </div>

        {/* Home portal trigger info */}
        <button
          onClick={() => {
            if (confirm("Are you sure you want to close this session and return to the main introduction? Current unsaved entries will reset.")) {
              setShowWelcome(true);
            }
          }}
          className="flex items-center gap-1 hover:bg-slate-300/50 px-2 py-0.5 rounded font-bold uppercase text-[10px] text-slate-800 tracking-wide transition-all"
        >
          <Home className="w-3 h-3 text-[#858000]" />
          <span>Exit Workspace</span>
        </button>
      </div>

      {/* Main Ledger card envelope */}
      <div className="flex-1 w-full max-w-none p-2 md:p-4 flex flex-col gap-4">
        
        {/* Active patient banner card to remind user who is selected */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white border border-slate-350 rounded-lg shadow-sm gap-3 print:hidden">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#fafad2] text-[#858000] rounded-lg shadow-xs">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs text-slate-400 font-extrabold uppercase font-mono">Current Patient File</span>
              <span className="font-black text-slate-900 text-base md:text-lg">
                {activeCase.name || <span className="italic font-normal text-slate-400">Add New Patient</span>}
              </span>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2 text-sm">
            {/* Install PWA Options */}
            {deferredPrompt ? (
              <button
                onClick={handleInstallApp}
                title="Install this patient ledger as a lightweight offline desktop application"
                className="font-black text-xs bg-slate-700 hover:bg-slate-800 text-white border-2 border-slate-900 px-3 py-1.5 rounded-lg hover:scale-[1.03] transition-all uppercase cursor-pointer flex items-center gap-1 shadow-sm"
              >
                <span>🖥️ Install Desktop App</span>
              </button>
            ) : isStandalone ? (
              <span className="font-black text-xs bg-[#e0f2fe] text-[#0369a1] border-2 border-[#bae6fd] px-3 py-1.5 rounded-lg uppercase tracking-wider inline-flex items-center gap-1 select-none">
                🖥️ Connected via Desktop App
              </span>
            ) : null}

            {/* Offline Database connection badge */}
            <span className="font-extrabold text-slate-700 uppercase tracking-widest text-xs bg-slate-100 border-2 border-slate-300 px-3.5 py-1.5 rounded-lg inline-flex items-center gap-1.5 select-none shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
              </span>
              <span>Local Offline Database</span>
            </span>

            <span className="font-extrabold text-slate-600 uppercase tracking-widest text-xs bg-slate-100 border-2 border-slate-250 px-3 py-1.5 rounded-lg">
              Ad No: <strong className="font-mono text-slate-800">{activeCase.adNo || "N/A"}</strong>
            </span>
            <span className="font-extrabold text-slate-600 uppercase tracking-widest text-xs bg-slate-100 border-2 border-slate-250 px-3 py-1.5 rounded-lg font-mono">
              Saved Date: <strong className="text-slate-800">{activeCase.date}</strong>
            </span>
          </div>
        </div>

        {/* Master Case Sheet Layout Panel */}
        <div className="bg-[#b4c6d0]/40 border-2 border-slate-350 shadow-md rounded-lg overflow-hidden flex flex-col select-none print:border-none print:shadow-none bg-linear-to-b from-slate-105 to-slate-100">
          
          {/* Header Title: Replicating CASE SHEET PAGE[X] exactly. Theme: Olive/gold header with lime/lime accents */}
          <div className="bg-[#858000] text-white px-5 py-3 flex items-center justify-between select-none">
            <span className="font-sans font-black text-lg md:text-xl uppercase tracking-widest text-[#ffffdd]">
              Case Sheet Page {activePage}
            </span>
            <span className="text-xs bg-[#ffffaa] text-[#424000] font-black px-3.5 py-1 rounded uppercase tracking-widest">
              Diagnostic Ledger
            </span>
          </div>

          {/* Navigtion & Actions Bar: Replicating Page2, Page3 ... List, Save, Delete, Close */}
          <div className="bg-slate-200 border-b border-slate-350 p-4 flex flex-col xl:flex-row gap-4 items-stretch xl:items-center justify-between print:hidden">
            
            {/* Nav pages selectors */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 w-full xl:w-auto">
              {[1, 2, 3, 4, 5, 6, 7].map((pageNum) => (
                <button
                  key={pageNum}
                  title={`Go to Case Sheet Page ${pageNum}`}
                  onClick={() => setActivePage(pageNum)}
                  className={`px-3 py-3 border-2 leading-none text-sm md:text-base font-black transition-all uppercase rounded-md cursor-pointer block text-center shadow-xs ${
                    activePage === pageNum
                      ? "bg-[#fafad2] border-[#858000] text-[#858000] ring-2 ring-[#858000] shadow font-extrabold scale-[1.03]"
                      : "bg-[#e1e9ef] hover:bg-white border-slate-350 text-slate-705 hover:text-black font-extrabold"
                  }`}
                >
                  Page {pageNum}
                </button>
              ))}
            </div>

            {/* General Database Action buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full xl:w-auto">
              <button
                onClick={() => setIsListOpen(true)}
                title="Lookup existing patient files from database"
                className="px-4 py-3 bg-[#0284c7] hover:bg-sky-700 active:bg-sky-800 border-2 border-[#0369a1] text-white font-black text-sm md:text-base uppercase rounded-md shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ListIcon className="w-4 h-4" />
                <span>List</span>
              </button>

              <button
                onClick={handleSave}
                title="Save current patient entries to database"
                className="px-4 py-3 bg-[#858000] hover:bg-[#737000] active:bg-[#605c00] border-2 border-[#737000] text-white font-black text-sm md:text-base uppercase rounded-md shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>

              <button
                onClick={handleDelete}
                title="Delete current patient case"
                className="px-4 py-3 bg-[#be123c] hover:bg-rose-700 active:bg-rose-800 border-2 border-[#9f1239] text-white font-black text-sm md:text-base uppercase rounded-md shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>

              <button
                onClick={handleClear}
                title="Clear current inputs and start fresh case sheet"
                className="px-4 py-3 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 border-2 border-slate-450 text-slate-805 font-black text-sm md:text-base uppercase rounded-md shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Clear Fields</span>
              </button>
            </div>
          </div>

          {/* Active form page workspace with animated entry */}
          <div className="p-4 md:p-6 bg-white min-h-[500px]">
            {renderActiveForm()}
          </div>

          {/* Bottom Footer toolbar for navigation: Previous, Page indicators, Next */}
          <div className="bg-slate-100 border-t border-slate-350 px-4 py-3 flex items-center justify-between print:hidden select-none">
            
            <button
              onClick={handlePrevPage}
              disabled={activePage === 1}
              className={`px-4 py-1.5 border rounded text-xs font-bold uppercase transition-all flex items-center gap-1 ${
                activePage === 1
                  ? "bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed"
                  : "bg-white border-slate-300 hover:bg-slate-100 text-slate-700 cursor-pointer"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev Page</span>
            </button>

            <span className="text-xs text-slate-500 font-bold tracking-wider font-mono">
              Page {activePage} of 7 • Chakkalamuttu Homoeopathic Care
            </span>

            <button
              onClick={handleNextPage}
              disabled={activePage === 7}
              className={`px-4 py-1.5 border rounded text-xs font-bold uppercase transition-all flex items-center gap-1 ${
                activePage === 7
                  ? "bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed"
                  : "bg-white border-slate-300 hover:bg-slate-100 text-slate-700 cursor-pointer"
              }`}
            >
              <span>Next Page</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>

        {/* Tip for diagnostic use */}
        <div className="bg-slate-50 border border-slate-300 rounded p-3 text-xs text-slate-500 flex items-start gap-2 print:hidden leading-normal">
          <HelpCircle className="w-4 h-4 text-[#858000] shrink-0 mt-0.5" />
          <div>
            Patient records are cached reliably in your browser local cache. You can look up previously saved patients anytime by clicking the <strong>List Database</strong> tab or menu option, then double-clicking on a patient to populate their records.
          </div>
        </div>

      </div>

      {/* Pop up Lookup Databases Modal */}
      <ListModal
        isOpen={isListOpen}
        onClose={() => setIsListOpen(false)}
        records={records}
        onSelectRecord={handleSelectRecord}
        onDeleteRecord={handleDeleteFromList}
      />
    </div>
  );
}
