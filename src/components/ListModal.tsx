import { useState } from "react";
import { CaseSheet } from "../types";
import { Search, Calendar, FolderOpen, Trash2, X } from "lucide-react";

// Helper component to highlight matching search characters
function HighlightText({ text, search }: { text: string; search: string }) {
  if (!text) return null;
  if (!search.trim()) return <span>{text}</span>;
  
  // Escape regex special chars to prevent issues
  const escapedSearch = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`(${escapedSearch})`, "gi");
  const parts = text.split(regex);
  
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 text-yellow-950 font-extrabold px-1 py-0.5 rounded shadow-xs mix-blend-multiply">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
}

interface ListModalProps {
  isOpen: boolean;
  onClose: () => void;
  records: CaseSheet[];
  onSelectRecord: (record: CaseSheet) => void;
  onDeleteRecord: (id: string) => void;
}

export default function ListModal({
  isOpen,
  onClose,
  records,
  onSelectRecord,
  onDeleteRecord,
}: ListModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");

  if (!isOpen) return null;

  // Filter records based on name/admission number/address/residence and date
  const filteredRecords = records.filter((rec) => {
    const textMatch =
      (rec.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (rec.adNo || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (rec.address || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (rec.residence || "").toLowerCase().includes(searchTerm.toLowerCase());

    const dateMatch = filterDate ? rec.date === filterDate : true;

    return textMatch && dateMatch;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      id="list-modal-backdrop"
    >
      <div
        className="w-full max-w-5xl bg-white border-2 border-slate-400 shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[90vh] animate-scaleUp"
        id="list-modal"
      >
        {/* Modal Header */}
        <div className="bg-slate-800 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FolderOpen className="w-6 h-6 text-amber-400" />
            <h2 className="font-extrabold text-lg md:text-xl tracking-wider uppercase">Patient Database Records</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close database modal"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Filter Controls */}
        <div className="p-4 md:p-6 bg-slate-100 border-b-2 border-slate-300 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search text filter */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-500" />
            </span>
            <input
              type="text"
              aria-label="Search patient records"
              placeholder="Search by Name, Ad No, Address, Residence..."
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#858000] focus:border-[#858000] text-base font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Date Picker filter */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Calendar className="w-5 h-5 text-slate-500" />
            </span>
            <input
              type="date"
              aria-label="Filter patient records by date"
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#858000] focus:border-[#858000] text-base font-medium"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>
        </div>

        {/* Clear filters badge row if active */}
        {(searchTerm || filterDate) && (
          <div className="px-6 py-3 bg-yellow-50 flex items-center justify-between text-sm text-yellow-905 border-b-2 border-yellow-250">
            <span className="font-bold">
              Showing {filteredRecords.length} of {records.length} patients matching filters.
            </span>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterDate("");
              }}
              className="font-black hover:underline text-[#858000]"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Table of Patients */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {filteredRecords.length === 0 ? (
            <div className="text-center py-20">
              <FolderOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 font-extrabold text-lg">No medical records found.</p>
              <p className="text-slate-500 text-sm mt-1">
                Try amending your search term or date filter.
              </p>
            </div>
          ) : (
            <div className="border border-slate-300 rounded-xl overflow-hidden bg-white shadow-xs">
              <table className="w-full text-left col-span-12 table-auto text-base">
                <thead className="bg-slate-700 text-white uppercase text-xs md:text-sm tracking-wider select-none">
                  <tr>
                    <th className="px-5 py-4">Ad No</th>
                    <th className="px-5 py-4">Patient Name</th>
                    <th className="px-5 py-4">Age/Sex</th>
                    <th className="px-5 py-4">Address</th>
                    <th className="px-5 py-4">Date Saved</th>
                    <th className="px-5 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-205">
                  {filteredRecords.map((rec) => (
                    <tr
                      key={rec.id}
                      onDoubleClick={() => onSelectRecord(rec)}
                      className="group hover:bg-[#fafad2]/50 cursor-pointer transition-colors select-none"
                      title="Double-click to load record fields"
                    >
                      <td className="px-5 py-4 font-mono font-black text-slate-800 group-hover:text-[#858000] text-base">
                        <HighlightText text={rec.adNo} search={searchTerm} />
                      </td>
                      <td className="px-5 py-4 font-black text-slate-900 text-base md:text-lg">
                        {rec.name ? (
                          <HighlightText text={rec.name} search={searchTerm} />
                        ) : (
                          <em className="text-slate-400 font-normal">Unnamed Patient</em>
                        )}
                      </td>
                      <td className="px-5 py-4 text-sm md:text-base font-semibold text-slate-700">
                        {rec.age ? `${rec.age} ${rec.ageUnit ?? "Year"}s` : "Unknown"}
                        {rec.sex ? ` / ${rec.sex}` : ""}
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-600 max-w-[280px]" title={rec.address}>
                        <div className="truncate font-medium">
                          {rec.address ? (
                            <HighlightText text={rec.address} search={searchTerm} />
                          ) : (
                            <span className="italic text-slate-300">No address</span>
                          )}
                        </div>
                        {rec.residence && (
                          <span className="block text-xs text-slate-500 font-semibold mt-0.5">
                            Residence: <HighlightText text={rec.residence} search={searchTerm} />
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 font-mono text-sm font-semibold text-slate-600">
                        {rec.date}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => onSelectRecord(rec)}
                            className="bg-[#858000] hover:bg-[#737000] active:bg-[#605c00] text-white px-4 py-2 rounded-lg text-sm font-black transition-colors flex items-center gap-1 shadow-sm uppercase cursor-pointer"
                          >
                            Load
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm(`Are you sure you want to delete patient ${rec.name || rec.adNo}?`)) {
                                onDeleteRecord(rec.id);
                              }
                            }}
                            aria-label={`Delete record for ${rec.name || rec.adNo}`}
                            className="text-rose-600 hover:text-rose-900 p-2 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t-2 border-slate-205 px-6 py-4.5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-650">
          <span className="font-semibold text-center sm:text-left">💡 <strong className="text-slate-800">Double-click</strong> on any row list item to load its details immediately.</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-200 hover:bg-slate-350 text-slate-800 font-extrabold border-2 border-slate-350 rounded-lg transition-colors text-base uppercase cursor-pointer"
          >
            Close Database List
          </button>
        </div>
      </div>
    </div>
  );
}
