import { CaseSheet } from "../types";

interface FormProps {
  data: CaseSheet;
  onChange: (field: keyof CaseSheet, value: any) => void;
}

export default function Page2Form({ data, onChange }: FormProps) {
  return (
    <div className="space-y-6 animate-fadeIn" id="page2-form-container">
      {/* Page Header metadata */}
      <div className="flex bg-slate-100 p-3 rounded border border-slate-300 items-center justify-between">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Case sheet 2 Data fields</span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Ad No Reference:</span>
          <span className="font-mono bg-slate-200 border border-slate-300 text-slate-800 text-xs px-2.5 py-0.5 rounded font-semibold">{data.adNo || "N/A"}</span>
        </div>
      </div>

      {/* Primary detail inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <label htmlFor="p2-occupation" className="text-sm font-semibold text-slate-700 min-w-[110px]">Occupation</label>
          <input
            id="p2-occupation"
            type="text"
            className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
            value={data.occupation}
            onChange={(e) => onChange("occupation", e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="p2-vaccination" className="text-sm font-semibold text-slate-700 min-w-[110px]">Vaccination</label>
          <input
            id="p2-vaccination"
            type="text"
            className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
            value={data.vaccination}
            onChange={(e) => onChange("vaccination", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="flex gap-3">
            <label htmlFor="p2-related-to" className="text-sm font-semibold text-slate-700 min-w-[110px] mt-1">Related To</label>
            <textarea
              id="p2-related-to"
              rows={2}
              className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600 resize-none"
              value={data.relatedTo}
              onChange={(e) => onChange("relatedTo", e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <label htmlFor="p2-diagnosis" className="text-sm font-semibold text-slate-700 min-w-[110px] mt-1">Diagnosis</label>
            <textarea
              id="p2-diagnosis"
              rows={3}
              placeholder="Clinical or Differential diagnosis..."
              className="flex-1 px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
              value={data.diagnosis}
              onChange={(e) => onChange("diagnosis", e.target.value)}
            />
          </div>
        </div>

        {/* Presenting complaint general overview */}
        <div className="bg-slate-50 border border-slate-200 rounded p-4 flex flex-col justify-between">
          <div>
            <label htmlFor="p2-presenting-complaint" className="block text-sm font-semibold text-slate-700 mb-1">Presenting Complaint</label>
            <textarea
              id="p2-presenting-complaint"
              rows={4}
              placeholder="Primary patient complains..."
              className="w-full px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600 resize-none text-sm"
              value={data.presentingCompliant}
              onChange={(e) => onChange("presentingCompliant", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Sub-aspects: Sensation, Location, Modalities, Concomitants */}
      <div className="bg-slate-50 border border-slate-300 rounded p-4 shadow-inner">
        <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Presenting Complaint Breakdown</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="p2-sensation" className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Sensation</label>
            <input
              id="p2-sensation"
              type="text"
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-lime-600"
              value={data.sensationP2}
              onChange={(e) => onChange("sensationP2", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p2-location" className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Location</label>
            <input
              id="p2-location"
              type="text"
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-lime-600"
              value={data.locationP2}
              onChange={(e) => onChange("locationP2", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p2-modalities" className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Modalities</label>
            <input
              id="p2-modalities"
              type="text"
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-lime-600"
              value={data.modalitiesP2}
              onChange={(e) => onChange("modalitiesP2", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p2-concomitants" className="block text-xs font-semibold text-slate-600 mb-1 uppercase">Concomitants</label>
            <input
              id="p2-concomitants"
              type="text"
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-lime-600"
              value={data.concomitantsP2}
              onChange={(e) => onChange("concomitantsP2", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="p2-history-pres" className="text-sm font-semibold text-slate-700">History of Presenting Complaints</label>
        <textarea
          id="p2-history-pres"
          rows={3}
          placeholder="Narrative summary of progression, timing, previous therapies..."
          className="w-full px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
          value={data.historyOfPresentingComplaints}
          onChange={(e) => onChange("historyOfPresentingComplaints", e.target.value)}
        />
      </div>

      {/* History of Previous Ailments (Structured Grid) */}
      <div className="bg-white border border-slate-300 rounded overflow-hidden">
        <div className="bg-slate-200 px-3 py-1.5 border-b border-slate-300 text-xs font-bold text-slate-700 tracking-wide uppercase">
          History of Previous Ailments
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <label htmlFor="p2-prev-disease" className="text-xs font-semibold text-slate-600 w-[90px]">Disease</label>
              <input
                id="p2-prev-disease"
                type="text"
                className="flex-1 px-2.5 py-1 border border-slate-300 rounded text-xs"
                value={data.prevAilmentsDisease}
                onChange={(e) => onChange("prevAilmentsDisease", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="p2-prev-year" className="text-xs font-semibold text-slate-600 w-[90px]">Year</label>
              <input
                id="p2-prev-year"
                type="text"
                className="flex-1 px-2.5 py-1 border border-slate-300 rounded text-xs"
                value={data.prevAilmentsYear}
                onChange={(e) => onChange("prevAilmentsYear", e.target.value)}
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <label htmlFor="p2-prev-method" className="text-xs font-semibold text-slate-600 w-[140px]">Method of Treatment</label>
              <input
                id="p2-prev-method"
                type="text"
                className="flex-1 px-2.5 py-1 border border-slate-300 rounded text-xs"
                value={data.prevAilmentsMethod}
                onChange={(e) => onChange("prevAilmentsMethod", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="p2-prev-results" className="text-xs font-semibold text-slate-600 w-[140px]">Results</label>
              <input
                id="p2-prev-results"
                type="text"
                className="flex-1 px-2.5 py-1 border border-slate-300 rounded text-xs"
                value={data.prevAilmentsResults}
                onChange={(e) => onChange("prevAilmentsResults", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Extended Row for taken therapies */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="p2-treatment-taken" className="block text-[11px] font-bold text-slate-600 mb-1 uppercase">Treatment Taken</label>
            <input
              id="p2-treatment-taken"
              type="text"
              className="w-full px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.prevAilmentsTreatmentTaken}
              onChange={(e) => onChange("prevAilmentsTreatmentTaken", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p2-prev-duration" className="block text-[11px] font-bold text-slate-600 mb-1 uppercase">Duration</label>
            <input
              id="p2-prev-duration"
              type="text"
              className="w-full px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.prevAilmentsDuration}
              onChange={(e) => onChange("prevAilmentsDuration", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p2-prev-result-treat" className="block text-[11px] font-bold text-slate-600 mb-1 uppercase">Result Of Treatment</label>
            <input
              id="p2-prev-result-treat"
              type="text"
              className="w-full px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.prevAilmentsResultOfTreatment}
              onChange={(e) => onChange("prevAilmentsResultOfTreatment", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Life Periods Section */}
      <div className="bg-slate-100 border border-slate-300 rounded p-4">
        <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Life Epochs / Developmental Epochs</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
            <label htmlFor="p2-infancy" className="text-xs font-semibold text-slate-700 w-[90px]">Infancy</label>
            <input
              id="p2-infancy"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-lime-500"
              value={data.infancy}
              onChange={(e) => onChange("infancy", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
            <label htmlFor="p2-puberty" className="text-xs font-semibold text-slate-700 w-[90px]">Puberty</label>
            <input
              id="p2-puberty"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-lime-500"
              value={data.pubertyP2}
              onChange={(e) => onChange("pubertyP2", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
            <label htmlFor="p2-teen" className="text-xs font-semibold text-slate-700 w-[90px]">Teen Age</label>
            <input
              id="p2-teen"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-lime-500"
              value={data.teenAge}
              onChange={(e) => onChange("teenAge", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
            <label htmlFor="p2-adulthood" className="text-xs font-semibold text-slate-700 w-[90px]">Adulthood</label>
            <input
              id="p2-adulthood"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-lime-500"
              value={data.adulthood}
              onChange={(e) => onChange("adulthood", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
            <label htmlFor="p2-middle" className="text-xs font-semibold text-slate-700 w-[90px]">Middle Age</label>
            <input
              id="p2-middle"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-lime-500"
              value={data.middleAge}
              onChange={(e) => onChange("middleAge", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
            <label htmlFor="p2-old" className="text-xs font-semibold text-slate-700 w-[90px]">Old Age</label>
            <input
              id="p2-old"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-lime-500"
              value={data.oldAge}
              onChange={(e) => onChange("oldAge", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Family History */}
      <div className="flex flex-col gap-1">
        <label htmlFor="p2-family-hist" className="text-sm font-semibold text-slate-700">Family History Details</label>
        <textarea
          id="p2-family-hist"
          rows={3}
          placeholder="Maternal and paternal chronic illnesses, genetic conditions, siblings status..."
          className="w-full px-3 py-1.5 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
          value={data.familyHistory}
          onChange={(e) => onChange("familyHistory", e.target.value)}
        />
      </div>
    </div>
  );
}
