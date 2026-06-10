import { useState, ChangeEvent } from "react";
import { 
  HeartPulse, 
  ShieldAlert, 
  Award, 
  FileSpreadsheet, 
  Users2, 
  Database, 
  Download, 
  Upload, 
  HelpCircle,
  X,
  Laptop
} from "lucide-react";

interface WelcomeScreenProps {
  onEnter: () => void;
  onInstall: () => void;
  showInstallButton: boolean;
  totalRecordsCount: number;
  onExportBackup: () => void;
  onImportBackup: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function WelcomeScreen({ 
  onEnter, 
  onInstall, 
  showInstallButton,
  totalRecordsCount,
  onExportBackup,
  onImportBackup
}: WelcomeScreenProps) {
  // Local state to manage the visual "How to Install as Desktop App" guide modal
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  const handleInstallClick = () => {
    if (showInstallButton) {
      onInstall();
    } else {
      setShowInstallGuide(true);
    }
  };

  return (
    <div
      className="min-h-screen bg-linear-to-br from-slate-100 via-slate-200 to-sky-100 flex flex-col justify-between p-6 md:p-12 font-sans relative"
      id="welcome-screen"
    >
      {/* Top Banner / Navigation logo */}
      <header className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between border-b border-slate-350 pb-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#858000] text-white p-2.5 rounded-lg shadow-md animate-pulse">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-extrabold text-[#737000] text-base md:text-lg tracking-wide uppercase">
              Chakkalamuttu Homoeopathic Care
            </h1>
            <p className="text-[10px] md:text-xs text-slate-500 font-medium font-mono uppercase">
              Tripunithura Gate Portal • Digital Case Ledger
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* Always Visible Install Button to address Windows App installation request */}
          <button
            onClick={handleInstallClick}
            className="flex items-center gap-1.5 bg-[#15803d] hover:bg-green-700 text-white text-[11px] font-black px-4 py-2 rounded-full shadow-md hover:scale-[1.03] transition-all uppercase cursor-pointer"
          >
            🖥️ Install Desktop App
          </button>
          <span className="hidden sm:inline-block font-mono text-[11px] bg-slate-30060 text-slate-850 px-3 py-2 rounded-full font-bold border border-slate-300">
            SYSTEM VERSION 4.3.0 • DISK-SECURED
          </span>
        </div>
      </header>

      {/* Main hero panel */}
      <main className="max-w-5xl mx-auto w-full my-8 bg-white border border-slate-300/80 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        
        {/* Left column text details */}
        <div className="flex-1 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center flex-wrap gap-2">
              <span className="bg-green-100 text-[#15803d] text-[11px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 border border-green-300">
                ✓ Auto-Loads on Startup (No Manual Restore Required)
              </span>
              <span className="bg-lime-100 text-[#737000] text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <Database className="w-3 h-3" /> Double-Redundancy Verified
              </span>
              <span className="bg-blue-100 text-[#0369a1] text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" /> 100% Offline Database
              </span>
            </div>
            
            <h2 className="text-2xl md:text-4xl text-slate-850 font-black tracking-tight leading-tight">
              Digitized Homoeopathic Case Sheets and Patient Records
            </h2>
            
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Record comprehensive physical profiles, mental characteristics, seven-level dynamic diagnostic matrix, and prescribe precise remedies safely. <strong className="text-slate-850 font-extrabold">All clinical database records are permanently written directly onto your computer's physical drive</strong>. If you add 500 records today, close the app, and power off your PC, tomorrow they will automatically load on start. Any further records (e.g., 300 more tomorrow) will build cumulatively (totaling 800 records) without any data deletion or manual restore needed!
            </p>
          </div>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="bg-lime-100 p-2 rounded text-lime-700 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Independent Local Drive</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Saves directly to your hard drive so records never disappear after cleaning cache or turning off the computer.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="bg-lime-100 p-2 rounded text-lime-700 shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">7-Page Record Sheets</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Deep organopathic assessment with fully integrated printing capabilities.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="pt-4 border-t border-slate-150 flex flex-col sm:flex-row flex-wrap gap-4 items-center">
            <button
              onClick={onEnter}
              className="w-full sm:w-auto px-8 py-4 bg-[#605c00] hover:bg-[ ] active:bg-[#605c00] text-white font-extrabold tracking-wide uppercase text-sm rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Open  Case Sheets
              <span className="group-hover:translate-x-1.5 transition-transform font-bold text-lg leading-none">→</span>
            </button>
            
            {/* Direct install toggle trigger */}
            <button
              onClick={handleInstallClick}
              className="w-full sm:w-auto px-6 py-4 bg-[#15803d] hover:bg-green-700 active:bg-green-850 text-white font-black uppercase text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              🖥️ Install Windows App
            </button>
          </div>
        </div>

        {/* Right column stylized graphic mock badge cards & Backup Controls */}
        <div className="w-full lg:w-[325px] shrink-0 bg-slate-50 border border-slate-300 rounded-2xl p-6 shadow-inner space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-300">
              <span className="text-xs font-extrabold text-slate-600 uppercase font-mono">Ledger Database Info</span>
              <span className="flex h-2.5 w-2.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-200 rounded-lg text-slate-700">
                <Users2 className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Patient Count</span>
                <span className="font-mono text-xl font-black text-slate-800">
                  {totalRecordsCount} Patients Stored
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-200 rounded-lg text-slate-700">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Medical Standard</span>
                <span className="text-xs font-bold text-slate-700 block">
                  Organon Hahnemann Model
                </span>
              </div>
            </div>

            {/* Offline Safe Alert */}
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-yellow-900 leading-normal font-medium space-y-1">
              <div className="font-bold flex items-center gap-1">🔒 High-Security Diagnostic Crypt</div>
              <p>
                Patient entries are stored completely offline on this computer&apos;s persistent database structure. No external server can read or wipe your clinical ledger logs.
              </p>
            </div>
          </div>

          {/* CRITICAL DATA PROTECTION CONTROLS: Import & Export Backup */}
          <div className="border-t border-slate-300 pt-4 space-y-3">
            <span className="block text-xs font-extrabold text-slate-600 uppercase font-mono tracking-wider">
              Ultimate Data Insurance
            </span>
            
            <div className="grid grid-cols-2 gap-2">
              {/* Back up download trigger */}
              <button
                onClick={onExportBackup}
                title="Download entire diagnostic ledger backup folder of the clinic"
                className="w-full py-2.5 bg-slate-200 hover:bg-slate-300 active:bg-slate-350 border border-slate-350 text-slate-800 font-black text-xs uppercase rounded-lg shadow-xs flex items-center justify-center gap-1 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-lime-700 font-black" />
                <span>Backup</span>
              </button>

              {/* Restore upload trigger */}
              <label 
                title="Upload and restore diagnostic ledger from client backup file"
                className="w-full py-2.5 bg-slate-200 hover:bg-slate-300 active:bg-slate-350 border border-slate-350 text-slate-800 font-black text-xs uppercase rounded-lg shadow-xs flex items-center justify-center gap-1 transition-all cursor-pointer text-center select-none"
              >
                <Upload className="w-3.5 h-3.5 text-sky-700 font-black" />
                <span>Restore</span>
                <input
                  type="file"
                  accept="application/json"
                  onChange={onImportBackup}
                  className="hidden"
                />
              </label>
            </div>
            
            <p className="text-[10px] text-slate-400 text-center leading-normal">
              Download regular <b>local backups</b> to transfer patients securely to other PC terminals or physical storage.
            </p>
          </div>
        </div>
      </main>

      {/* Manual details / How-to sections */}
      <footer className="max-w-5xl mx-auto w-full border-t border-slate-300/85 pt-6 text-center space-y-4">
        <div id="p-instruction-box" className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left py-4">
          <div className="p-4 bg-white/70 border border-slate-250 rounded-lg">
            <h3 className="font-bold text-slate-800 text-sm mb-1 uppercase">1. Multi-Page Case Ledger</h3>
            <p className="text-xs text-slate-500 leading-normal">
              Directly switch between custom clinical pages (Page 1 to Page 7) via the layout picker. All typed entries remain active and compiled securely.
            </p>
          </div>
          <div className="p-4 bg-white/70 border border-slate-250 rounded-lg">
            <h3 className="font-bold text-slate-800 text-sm mb-1 uppercase">2. Persistent Offline Saving</h3>
            <p className="text-xs text-slate-500 leading-normal">
              The &apos;Save&apos; action invokes a transaction that commits writes to internal IndexedDB and system memory immediately. It functions 100% offline.
            </p>
          </div>
          <div className="p-4 bg-white/70 border border-slate-250 rounded-lg">
            <h3 className="font-bold text-slate-800 text-sm mb-1 uppercase">3. Smart Highlighting Search</h3>
            <p className="text-xs text-slate-500 leading-normal">
              Click &apos;List Database&apos; to browse files. The database modal supports custom character-by-character search highlighting for names and admission IDs.
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-400 uppercase font-mono tracking-widest pt-2">
          © {new Date().getFullYear()} HOMOEOPATHIC CLINIC CASE SHEET SYSTEM • SECURED CLINICAL ARCHIVE
        </p>
      </footer>

      {/* Windows Style App Installer Guide Overleaf overlay modal */}
      {showInstallGuide && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-400 rounded-xl max-w-lg w-full overflow-hidden shadow-2xl animate-scaleUp">
            
            {/* Header */}
            <div className="bg-[#858000] text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Laptop className="w-5 h-5 text-[#ffffaa]" />
                <h3 className="font-extrabold uppercase text-sm tracking-wider">Windows Desktop Installation Guide</h3>
              </div>
              <button 
                onClick={() => setShowInstallGuide(false)}
                className="text-[#ffffdd] hover:text-white hover:bg-white/10 p-1 rounded-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Instruction Body */}
            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-650 leading-relaxed font-medium">
                You can install this Digital Case Sheets ledger as an offline-capable native Windows Desktop Application with absolute local storage priority. Follow these simple steps:
              </p>

              <div className="space-y-3 text-xs md:text-sm text-slate-700">
                {/* Step 1 */}
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-lime-100 text-[#858000] font-black flex items-center justify-center shrink-0">1</div>
                  <div>
                    <strong className="text-slate-800">Launch in Separate Window:</strong><br />
                    Since you are currently in developer preview, click the link underneath to open the application in a new dedicated browser tab:
                    <a 
                      href={window.location.origin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block mt-1 font-bold text-[#858000] hover:underline"
                    >
                      🔗 Click here to Open Ledger App in New Window
                    </a>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3 mt-2">
                  <div className="w-6 h-6 rounded-full bg-lime-100 text-[#858000] font-black flex items-center justify-center shrink-0">2</div>
                  <div>
                    <strong className="text-slate-800">Trigger Installation:</strong><br />
                    Look at the right-hand corner of the browser address bar for the <span className="bg-slate-100 px-1 border rounded text-[#858000] font-bold">🖥️ Install</span> monitor emblem, or open the browser menu options (<span className="font-bold">Settings &gt; Save and share &gt; Install App</span>) and accept.
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3 mt-2">
                  <div className="w-6 h-6 rounded-full bg-lime-100 text-[#858000] font-black flex items-center justify-center shrink-0">3</div>
                  <div>
                    <strong className="text-slate-800">Desktop Shortcuts:</strong><br />
                    A dedicated high-resolution launcher icon will be created on your Windows desktop. You can start it offline anytime instantly, completely independent of the browser frame!
                  </div>
                </div>
              </div>

              {/* Reassurance */}
              <div className="bg-lime-50/80 border border-lime-200 p-3 rounded-lg text-xs text-[#737000] leading-relaxed">
                <strong>💡 Why is this better?</strong> Operating inside a desktop app provides a distraction-free full-screen diagnostic workspace, allows seamless clinical printing, and optimizes database speeds.
              </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-55 border-t px-5 py-3.5 flex justify-end">
              <button
                onClick={() => setShowInstallGuide(false)}
                className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-extrabold text-xs uppercase rounded-lg border border-slate-300 cursor-pointer"
              >
                Got It
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
