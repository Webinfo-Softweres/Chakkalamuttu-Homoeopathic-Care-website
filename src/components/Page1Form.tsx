import { CaseSheet } from "../types";

interface FormProps {
  data: CaseSheet;
  onChange: (field: keyof CaseSheet, value: any) => void;
}

export default function Page1Form({ data, onChange }: FormProps) {
  return (
    <div className="space-y-6" id="page1-form-container">
      {/* Top Controls: Ad No and Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-100 p-4 rounded border border-slate-300">
        <div className="flex items-center gap-3">
          <label htmlFor="adNo-input" className="text-sm font-semibold text-slate-700 min-w-[100px]">Ad No</label>
          <input
            id="adNo-input"
            type="text"
            className="flex-1 px-3 py-1.5 border border-slate-300 bg-white font-mono text-slate-800 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
            value={data.adNo}
            onChange={(e) => onChange("adNo", e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="date-input" className="text-sm font-semibold text-slate-700 min-w-[100px]">Date</label>
          <input
            id="date-input"
            type="date"
            className="flex-1 px-3 py-1.5 border border-slate-300 bg-white font-mono text-slate-800 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
            value={data.date}
            onChange={(e) => onChange("date", e.target.value)}
          />
        </div>
      </div>

      {/* Main personal detail form blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <label htmlFor="name-input" className="text-sm font-semibold text-slate-700 min-w-[100px]">Name</label>
            <input
              id="name-input"
              type="text"
              placeholder="Patient Name"
              className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
              value={data.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <label htmlFor="address-textarea" className="text-sm font-semibold text-slate-700 min-w-[100px] mt-1">Address</label>
            <textarea
              id="address-textarea"
              rows={3}
              placeholder="Full Address"
              className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600 resize-none"
              value={data.address}
              onChange={(e) => onChange("address", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="residence-input" className="text-sm font-semibold text-slate-700 min-w-[100px]">Residence</label>
            <input
              id="residence-input"
              type="text"
              placeholder="Place of Residence"
              className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
              value={data.residence}
              onChange={(e) => onChange("residence", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="phNo-input" className="text-sm font-semibold text-slate-700 min-w-[100px]">Ph No</label>
            <input
              id="phNo-input"
              type="tel"
              placeholder="Landline / Alternate Phone"
              className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
              value={data.phNo}
              onChange={(e) => onChange("phNo", e.target.value)}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <label htmlFor="age-input" className="text-sm font-semibold text-slate-700 min-w-[100px] lg:min-w-0 lg:w-[80px]">Age</label>
              <div className="flex flex-1 gap-1">
                <input
                  id="age-input"
                  type="text"
                  placeholder="Age"
                  className="w-1/2 min-w-0 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                  value={data.age}
                  onChange={(e) => onChange("age", e.target.value)}
                />
                <select
                  aria-label="Age unit"
                  className="w-1/2 min-w-0 px-2 py-1.5 border border-slate-300 bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-lime-600"
                  value={data.ageUnit}
                  onChange={(e) => onChange("ageUnit", e.target.value)}
                >
                  <option value="Year">Year</option>
                  <option value="Month">Month</option>
                  <option value="Day">Day</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="sex-select" className="text-sm font-semibold text-slate-700 w-[60px]">Sex</label>
              <select
                id="sex-select"
                className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                value={data.sex}
                onChange={(e) => onChange("sex", e.target.value)}
              >
                <option value="">Select</option>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <label htmlFor="bloodGroup-input" className="text-sm font-semibold text-slate-700 min-w-[100px] lg:min-w-0 lg:w-[80px]">Blood Gp</label>
              <input
                id="bloodGroup-input"
                type="text"
                placeholder="e.g. O+"
                className="flex-1 min-w-0 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                value={data.bloodGroup}
                onChange={(e) => onChange("bloodGroup", e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="maritalStatus-select" className="text-sm font-semibold text-slate-700 w-[60px]">Marital</label>
              <select
                id="maritalStatus-select"
                className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-lime-600"
                value={data.maritalStatus}
                onChange={(e) => onChange("maritalStatus", e.target.value)}
              >
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="mobNo-input" className="text-sm font-semibold text-slate-700 min-w-[100px]">Mob No</label>
            <input
              id="mobNo-input"
              type="tel"
              placeholder="Mobile Number"
              className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
              value={data.mobNo}
              onChange={(e) => onChange("mobNo", e.target.value)}
            />
          </div>

          {/* Action indicator simulating physical files */}
          <div className="flex justify-end pt-2">
            <button
              type="button"
              id="reports-btn"
              onClick={() => alert("Upload patient reports feature: Mock Triggered.")}
              className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 border border-slate-400 text-slate-700 text-xs font-semibold rounded shadow transition-all"
            >
              Reports Attachment Folder
            </button>
          </div>
        </div>
      </div>

      {/* Two wide columns: MEDICINE & KEY NOTE with signature yellow text labels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <div className="bg-yellow-100 border border-yellow-200 px-3 py-1 text-xs font-bold text-yellow-800 tracking-wide rounded-t select-none uppercase">
            Medicine Prescriptions
          </div>
          <textarea
            aria-label="Medicine prescription details"
            rows={8}
            className="w-full p-3 border-l border-r border-b border-slate-300 bg-white rounded-b focus:outline-none focus:ring-2 focus:ring-lime-600 font-mono text-sm leading-relaxed"
            placeholder="Type medicines, doses, cycle and specific instructions..."
            value={data.medicine}
            onChange={(e) => onChange("medicine", e.target.value)}
          />
        </div>

        <div>
          <div className="bg-yellow-100 border border-yellow-200 px-3 py-1 text-xs font-bold text-yellow-800 tracking-wide rounded-t select-none uppercase">
            Key Note / Main Observations
          </div>
          <textarea
            aria-label="Key note and main observation details"
            rows={8}
            className="w-full p-3 border-l border-r border-b border-slate-300 bg-white rounded-b focus:outline-none focus:ring-2 focus:ring-lime-600 font-sans text-sm leading-relaxed"
            placeholder="Key clinical notes, symptoms priority list, special mental traits..."
            value={data.keyNote}
            onChange={(e) => onChange("keyNote", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
