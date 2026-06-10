import { CaseSheet } from "../types";

interface FormProps {
  data: CaseSheet;
  onChange: (field: keyof CaseSheet, value: any) => void;
}

export default function Page3Form({ data, onChange }: FormProps) {
  return (
    <div className="space-y-6 animate-fadeIn" id="page3-form-container">
      {/* Top Banner details */}
      <div className="flex bg-slate-100 p-3 rounded border border-slate-300 items-center justify-between">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Case sheet 3 Data fields</span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Ad No Reference:</span>
          <span className="font-mono bg-slate-200 border border-slate-300 text-slate-800 text-xs px-2.5 py-0.5 rounded font-semibold">{data.adNo || "N/A"}</span>
        </div>
      </div>

      {/* Primary Causation panel */}
      <div className="bg-slate-50 border border-slate-300 rounded p-4">
        <label htmlFor="p3-causation" className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Causation</label>
        <textarea
          id="p3-causation"
          rows={2}
          placeholder="Pathological triggers, emotional shock, thermal exposure, post-surgical, dietary, etc."
          className="w-full px-3 py-2 border border-slate-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-lime-600 text-sm"
          value={data.causation}
          onChange={(e) => onChange("causation", e.target.value)}
        />
      </div>

      {/* Disease/Treatment table row */}
      <div className="bg-white border border-slate-300 rounded p-4 shadow-sm">
        <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Therapeutics & Generals Timeline</span>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <label htmlFor="p3-disease" className="block text-xs font-semibold text-slate-600 mb-1">Disease Name</label>
            <input
              id="p3-disease"
              type="text"
              className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs"
              value={data.diseaseP3}
              onChange={(e) => onChange("diseaseP3", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p3-year" className="block text-xs font-semibold text-slate-600 mb-1">Year</label>
            <input
              id="p3-year"
              type="text"
              className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs"
              value={data.yearP3}
              onChange={(e) => onChange("yearP3", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p3-history" className="block text-xs font-semibold text-slate-600 mb-1">Treatment History</label>
            <input
              id="p3-history"
              type="text"
              className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs"
              value={data.treatmentHistoryP3}
              onChange={(e) => onChange("treatmentHistoryP3", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p3-methods" className="block text-xs font-semibold text-slate-600 mb-1">Method of Treatments</label>
            <input
              id="p3-methods"
              type="text"
              className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs"
              value={data.methodOfTreatmentsP3}
              onChange={(e) => onChange("methodOfTreatmentsP3", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p3-results" className="block text-xs font-semibold text-slate-600 mb-1">Results</label>
            <input
              id="p3-results"
              type="text"
              className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs"
              value={data.resultsP3}
              onChange={(e) => onChange("resultsP3", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Generals, Mental, Head Physical */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-50 border border-slate-300 rounded p-3">
          <label htmlFor="p3-generals" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">Generals</label>
          <textarea
            id="p3-generals"
            rows={2}
            className="w-full p-2 border border-slate-300 bg-white rounded text-xs"
            placeholder="Systemic / thermal states..."
            value={data.generalsP3}
            onChange={(e) => onChange("generalsP3", e.target.value)}
          />
        </div>
        <div className="bg-slate-50 border border-slate-300 rounded p-3">
          <label htmlFor="p3-mental" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">Mental</label>
          <textarea
            id="p3-mental"
            rows={2}
            className="w-full p-2 border border-slate-300 bg-white rounded text-xs"
            placeholder="Core temperament patterns..."
            value={data.mentalP3}
            onChange={(e) => onChange("mentalP3", e.target.value)}
          />
        </div>
        <div className="bg-slate-50 border border-slate-300 rounded p-3">
          <label htmlFor="p3-head-phys" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">HEAD Physical</label>
          <textarea
            id="p3-head-phys"
            rows={2}
            className="w-full p-2 border border-slate-300 bg-white rounded text-xs"
            placeholder="Headache locations, skull traits..."
            value={data.headPhysicalP3}
            onChange={(e) => onChange("headPhysicalP3", e.target.value)}
          />
        </div>
      </div>

      {/* GRANULAR GRID matrix of specific symptoms from Image 3 */}
      <div className="bg-slate-200 border border-slate-300 rounded p-4">
        <span className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-4 border-b border-slate-300 pb-2">Granular Symptomatic & Head Matrix</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-parietal" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Parietal</label>
              <input
                id="p3-parietal"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.parietal}
                onChange={(e) => onChange("parietal", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-vertex" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Vertex</label>
              <input
                id="p3-vertex"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.vertex}
                onChange={(e) => onChange("vertex", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-sensation" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Sensation</label>
              <input
                id="p3-sensation"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.sensationP3}
                onChange={(e) => onChange("sensationP3", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-sleep" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Sleep</label>
              <input
                id="p3-sleep"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.sleepP3}
                onChange={(e) => onChange("sleepP3", e.target.value)}
              />
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-head-injury" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Head Injury</label>
              <input
                id="p3-head-injury"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.headInjury}
                onChange={(e) => onChange("headInjury", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-head-skin" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Head Skin</label>
              <input
                id="p3-head-skin"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.headSkin}
                onChange={(e) => onChange("headSkin", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-concomitants" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Concomitants</label>
              <input
                id="p3-concomitants"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.concomitantsP3}
                onChange={(e) => onChange("concomitantsP3", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-modality" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Modality</label>
              <input
                id="p3-modality"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.modalityP3}
                onChange={(e) => onChange("modalityP3", e.target.value)}
              />
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-perspiration" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Perspiration</label>
              <input
                id="p3-perspiration"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.perspirationP3}
                onChange={(e) => onChange("perspirationP3", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-alcoholic" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Alcoholic</label>
              <input
                id="p3-alcoholic"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.alcoholic}
                onChange={(e) => onChange("alcoholic", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-movement" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Movement</label>
              <input
                id="p3-movement"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.movementP3}
                onChange={(e) => onChange("movementP3", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-endocrine" className="text-xs font-semibold text-slate-600 w-[90px ] shrink-0">Endocrine</label>
              <input
                id="p3-endocrine"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.endocrine}
                onChange={(e) => onChange("endocrine", e.target.value)}
              />
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-vertigo" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Vertigo</label>
              <input
                id="p3-vertigo"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.vertigo}
                onChange={(e) => onChange("vertigo", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-time-vertigo" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Time Vertigo</label>
              <input
                id="p3-time-vertigo"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.timeOfVertigo}
                onChange={(e) => onChange("timeOfVertigo", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-vomiting" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Vomiting</label>
              <input
                id="p3-vomiting"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.vomitingP3}
                onChange={(e) => onChange("vomitingP3", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-300">
              <label htmlFor="p3-dropsical" className="text-xs font-semibold text-slate-600 w-[90px] shrink-0">Dropsical</label>
              <input
                id="p3-dropsical"
                type="text"
                className="w-full px-2 py-0.5 border border-slate-200 rounded text-xs"
                value={data.dropsical}
                onChange={(e) => onChange("dropsical", e.target.value)}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
