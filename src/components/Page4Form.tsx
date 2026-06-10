import { CaseSheet } from "../types";

interface FormProps {
  data: CaseSheet;
  onChange: (field: keyof CaseSheet, value: any) => void;
}

export default function Page4Form({ data, onChange }: FormProps) {
  return (
    <div className="space-y-6 animate-fadeIn" id="page4-form-container">
      {/* Banner reference */}
      <div className="flex bg-slate-100 p-3 rounded border border-slate-300 items-center justify-between">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Case sheet 4 Data fields</span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Ad No Reference:</span>
          <span className="font-mono bg-slate-200 border border-slate-300 text-slate-800 text-xs px-2.5 py-0.5 rounded font-semibold">{data.adNo || "N/A"}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (Respiratory, Nervous, ... ) - spanning 4 units */}
        <div className="lg:col-span-4 bg-slate-50 border border-slate-300 rounded p-4 space-y-3">
          <span className="block text-xs font-bold text-slate-600 uppercase tracking-wider border-b border-slate-200 pb-1.5 mb-2">Systemic Susceptibility</span>
          
          <div className="flex items-center gap-2">
            <label htmlFor="p4-respiratory" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Respiratory</label>
            <input
              id="p4-respiratory"
              type="text"
              className="flex-1 px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.respiratory}
              onChange={(e) => onChange("respiratory", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p4-nervous" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Nervous</label>
            <input
              id="p4-nervous"
              type="text"
              className="flex-1 px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.nervous}
              onChange={(e) => onChange("nervous", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p4-cancerous" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Cancerous</label>
            <input
              id="p4-cancerous"
              type="text"
              className="flex-1 px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.cancerous}
              onChange={(e) => onChange("cancerous", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p4-convulsive" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Convulsive</label>
            <input
              id="p4-convulsive"
              type="text"
              className="flex-1 px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.convulsive}
              onChange={(e) => onChange("convulsive", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p4-obesity" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Obesity</label>
            <input
              id="p4-obesity"
              type="text"
              className="flex-1 px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.obesity}
              onChange={(e) => onChange("obesity", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p4-glands" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Glands</label>
            <input
              id="p4-glands"
              type="text"
              className="flex-1 px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.glands}
              onChange={(e) => onChange("glands", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p4-sleep" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Sleep</label>
            <input
              id="p4-sleep"
              type="text"
              className="flex-1 px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.sleepP4}
              onChange={(e) => onChange("sleepP4", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p4-dream" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Dream</label>
            <input
              id="p4-dream"
              type="text"
              className="flex-1 px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.dream}
              onChange={(e) => onChange("dream", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-1.5">
            <label htmlFor="p4-clothing" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Clothing details</label>
            <input
              id="p4-clothing"
              type="text"
              className="flex-1 px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.clothing}
              onChange={(e) => onChange("clothing", e.target.value)}
            />
          </div>
        </div>

        {/* Center / Middle Column (Aggravation, Amelioration, Excretions) - spanning 5 units */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 border border-slate-300 rounded p-4 space-y-3">
            <span className="block text-xs font-bold text-slate-600 uppercase tracking-wider border-b border-slate-200 pb-1.5 mb-2">Aggravation & Amelioration</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="p4-position-move" className="block text-[11px] font-semibold text-slate-500 mb-1">Position and Movement</label>
                <input
                  id="p4-position-move"
                  type="text"
                  className="w-full px-2 py-1 border border-slate-300 bg-white rounded text-xs"
                  value={data.positionAndMovement}
                  onChange={(e) => onChange("positionAndMovement", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="p4-meteriological" className="block text-[11px] font-semibold text-slate-500 mb-1">Meteorological</label>
                <input
                  id="p4-meteriological"
                  type="text"
                  className="w-full px-2 py-1 border border-slate-300 bg-white rounded text-xs"
                  value={data.meteriological}
                  onChange={(e) => onChange("meteriological", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="p4-stomach-appetite" className="block text-[11px] font-semibold text-slate-500 mb-1">Stomach & Appetite</label>
                <input
                  id="p4-stomach-appetite"
                  type="text"
                  className="w-full px-2 py-1 border border-slate-300 bg-white rounded text-xs"
                  value={data.stomachAndAppetite}
                  onChange={(e) => onChange("stomachAndAppetite", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="p4-thirst" className="block text-[11px] font-semibold text-slate-500 mb-1">Thirst</label>
                <input
                  id="p4-thirst"
                  type="text"
                  className="w-full px-2 py-1 border border-slate-300 bg-white rounded text-xs"
                  value={data.thirst}
                  onChange={(e) => onChange("thirst", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="p4-desires-aversions" className="block text-[11px] font-semibold text-slate-500 mb-1">Desires and Aversions</label>
              <input
                id="p4-desires-aversions"
                type="text"
                className="w-full px-2 py-1 border border-slate-300 bg-white rounded text-xs"
                value={data.desiresAndAversions}
                onChange={(e) => onChange("desiresAndAversions", e.target.value)}
              />
            </div>
          </div>

          {/* Excretions Table Input */}
          <div className="bg-white border border-slate-300 rounded overflow-hidden">
            <div className="bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700 tracking-wider uppercase border-b border-slate-300">
              Excreta Breakdown
            </div>
            <div className="p-3 space-y-3">
              {/* Table labels */}
              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-slate-500 uppercase">
                <div>Type</div>
                <div>Consistency</div>
                <div>Colour</div>
                <div>Odour</div>
              </div>

              {/* Stool Row */}
              <div className="grid grid-cols-4 gap-2 items-center">
                <span className="text-xs font-semibold text-slate-600 pl-1">Stool</span>
                <input
                  aria-label="Stool consistency"
                  type="text"
                  className="px-2 py-1 border border-slate-200 rounded text-xs"
                  value={data.stoolConsistency}
                  onChange={(e) => onChange("stoolConsistency", e.target.value)}
                />
                <input
                  aria-label="Stool color"
                  type="text"
                  className="px-2 py-1 border border-slate-200 rounded text-xs"
                  value={data.stoolColour}
                  onChange={(e) => onChange("stoolColour", e.target.value)}
                />
                <input
                  aria-label="Stool odor"
                  type="text"
                  className="px-2 py-1 border border-slate-200 rounded text-xs"
                  value={data.stoolOdour}
                  onChange={(e) => onChange("stoolOdour", e.target.value)}
                />
              </div>

              {/* Urine Row */}
              <div className="grid grid-cols-4 gap-2 items-center">
                <span className="text-xs font-semibold text-slate-600 pl-1">Urine</span>
                <input
                  aria-label="Urine consistency"
                  type="text"
                  className="px-2 py-1 border border-slate-200 rounded text-xs"
                  value={data.urineConsistency}
                  onChange={(e) => onChange("urineConsistency", e.target.value)}
                />
                <input
                  aria-label="Urine color"
                  type="text"
                  className="px-2 py-1 border border-slate-200 rounded text-xs"
                  value={data.urineColour}
                  onChange={(e) => onChange("urineColour", e.target.value)}
                />
                <input
                  aria-label="Urine odor"
                  type="text"
                  className="px-2 py-1 border border-slate-200 rounded text-xs"
                  value={data.urineOdour}
                  onChange={(e) => onChange("urineOdour", e.target.value)}
                />
              </div>

              {/* Perspiration Row */}
              <div className="grid grid-cols-4 gap-2 items-center">
                <span className="text-xs font-semibold text-slate-600 pl-1">Sweat</span>
                <input
                  aria-label="Sweat consistency"
                  type="text"
                  className="px-2 py-1 border border-slate-200 rounded text-xs"
                  value={data.perspirationConsistency}
                  onChange={(e) => onChange("perspirationConsistency", e.target.value)}
                />
                <input
                  aria-label="Sweat color"
                  type="text"
                  className="px-2 py-1 border border-slate-200 rounded text-xs"
                  value={data.perspirationColour}
                  onChange={(e) => onChange("perspirationColour", e.target.value)}
                />
                <input
                  aria-label="Sweat odor"
                  type="text"
                  className="px-2 py-1 border border-slate-200 rounded text-xs"
                  value={data.perspirationOdour}
                  onChange={(e) => onChange("perspirationOdour", e.target.value)}
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200">
              <label htmlFor="p4-abnormal-discharge" className="block text-[11px] font-bold text-slate-650 uppercase mb-1">Abnormal Discharge Details</label>
              <input
                id="p4-abnormal-discharge"
                type="text"
                placeholder="Characteristics of any abnormal discharges..."
                className="w-full px-2.5 py-1 border border-slate-300 bg-white rounded text-xs"
                value={data.abnormalDischarge}
                onChange={(e) => onChange("abnormalDischarge", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Right Column (Menstrual History) - spanning 3 units */}
        <div className="lg:col-span-3 bg-slate-50 border border-slate-300 rounded p-4 space-y-4">
          <span className="block text-xs font-bold text-slate-600 uppercase tracking-wider border-b border-slate-200 pb-1.5 mb-2">Menstrual History</span>

          <div>
            <label htmlFor="p4-lmp" className="block text-xs font-semibold text-slate-600 mb-1">L.M.P.</label>
            <input
              id="p4-lmp"
              type="text"
              placeholder="Last Menstrual Period Date/Traits"
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.menstrualLmp}
              onChange={(e) => onChange("menstrualLmp", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p4-puberty-men" className="block text-xs font-semibold text-slate-600 mb-1">Age of Puberty</label>
            <input
              id="p4-puberty-men"
              type="text"
              placeholder="Puberty onset characteristics"
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.menstrualPuberty}
              onChange={(e) => onChange("menstrualPuberty", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p4-menopause" className="block text-xs font-semibold text-slate-600 mb-1">Menopause Status</label>
            <input
              id="p4-menopause"
              type="text"
              placeholder="Age / details of menopause"
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.menstrualMenopause}
              onChange={(e) => onChange("menstrualMenopause", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p4-amenorrhoea" className="block text-xs font-semibold text-slate-600 mb-1">Amenorrhoea / Irregularities</label>
            <textarea
              id="p4-amenorrhoea"
              rows={4}
              placeholder="Notes on absent, painful or irregular menstrual loops..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs resize-none"
              value={data.menstrualAmenorrhoea}
              onChange={(e) => onChange("menstrualAmenorrhoea", e.target.value)}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
