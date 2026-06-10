import { CaseSheet } from "../types";

interface FormProps {
  data: CaseSheet;
  onChange: (field: keyof CaseSheet, value: any) => void;
}

export default function Page5Form({ data, onChange }: FormProps) {
  return (
    <div className="space-y-6 animate-fadeIn" id="page5-form-container">
      {/* Banner info */}
      <div className="flex bg-slate-100 p-3 rounded border border-slate-300 items-center justify-between">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Case sheet 5 Data fields</span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Ad No Reference:</span>
          <span className="font-mono bg-slate-200 border border-slate-300 text-slate-800 text-xs px-2.5 py-0.5 rounded font-semibold">{data.adNo || "N/A"}</span>
        </div>
      </div>

      {/* Extreme 4-column layout replicating the exact image columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 bg-slate-50 p-4 border border-slate-350 rounded shadow-sm">
        
        {/* Column 1 */}
        <div className="space-y-3">
          <span className="block text-[11px] font-extrabold text-slate-600 uppercase border-b border-rose-300 pb-1 mb-2">Cycle & Flow Characteristics</span>
          
          <div className="flex items-center gap-2">
            <label htmlFor="p5-menses" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Menses</label>
            <input
              id="p5-menses"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.menses}
              onChange={(e) => onChange("menses", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-cycle" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Cycle</label>
            <input
              id="p5-cycle"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.cycle}
              onChange={(e) => onChange("cycle", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-duration" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Duration</label>
            <input
              id="p5-duration"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.durationP5}
              onChange={(e) => onChange("durationP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-flow" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Flow</label>
            <input
              id="p5-flow"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.flow}
              onChange={(e) => onChange("flow", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-sexual-hist" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Sexual History</label>
            <input
              id="p5-sexual-hist"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.sexualHistory}
              onChange={(e) => onChange("sexualHistory", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-obstetrical" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Obstetrical Hist</label>
            <input
              id="p5-obstetrical"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.obstetricalHistory}
              onChange={(e) => onChange("obstetricalHistory", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-maternal" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Maternal (P5)</label>
            <input
              id="p5-maternal"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.maternalP5}
              onChange={(e) => onChange("maternalP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-sister" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Sister (P5)</label>
            <input
              id="p5-sister"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.sisterP5}
              onChange={(e) => onChange("sisterP5", e.target.value)}
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-3">
          <span className="block text-[11px] font-extrabold text-slate-600 uppercase border-b border-rose-300 pb-1 mb-2">Quantity, Clots & Relations</span>
          
          <div className="flex items-center gap-2">
            <label htmlFor="p5-quantity" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Quantity</label>
            <input
              id="p5-quantity"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.quantityP5}
              onChange={(e) => onChange("quantityP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-colour" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Colour</label>
            <input
              id="p5-colour"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.colourP5}
              onChange={(e) => onChange("colourP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-clots" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Clots</label>
            <input
              id="p5-clots"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.clots}
              onChange={(e) => onChange("clots", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-consistency" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Consistency</label>
            <input
              id="p5-consistency"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.consistencyP5}
              onChange={(e) => onChange("consistencyP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-mothers-oh" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Mothers OH</label>
            <input
              id="p5-mothers-oh"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.mothersOh}
              onChange={(e) => onChange("mothersOh", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-fever" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Fever (P5)</label>
            <input
              id="p5-fever"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.feverP5}
              onChange={(e) => onChange("feverP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-onset" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Onset (P5)</label>
            <input
              id="p5-onset"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.onsetP5}
              onChange={(e) => onChange("onsetP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-sweat" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Sweat (P5)</label>
            <input
              id="p5-sweat"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.sweatP5}
              onChange={(e) => onChange("sweatP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-husband" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Husband (P5)</label>
            <input
              id="p5-husband"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.husbandP5}
              onChange={(e) => onChange("husbandP5", e.target.value)}
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-3">
          <span className="block text-[11px] font-extrabold text-slate-600 uppercase border-b border-rose-300 pb-1 mb-2">Excretory timing & Chill States</span>
          
          <div className="flex items-center gap-2">
            <label htmlFor="p5-odour" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Odour</label>
            <input
              id="p5-odour"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.odourP5}
              onChange={(e) => onChange("odourP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-stain" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Stain</label>
            <input
              id="p5-stain"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.stain}
              onChange={(e) => onChange("stain", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-before" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Before (P5)</label>
            <input
              id="p5-before"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.beforeP5}
              onChange={(e) => onChange("beforeP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-during" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">During (P5)</label>
            <input
              id="p5-during"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.duringP5}
              onChange={(e) => onChange("duringP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-type" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Type (P5)</label>
            <input
              id="p5-type"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.typeP5}
              onChange={(e) => onChange("typeP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-chill" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Chill (P5)</label>
            <input
              id="p5-chill"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.chillP5}
              onChange={(e) => onChange("chillP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-time" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Time (P5)</label>
            <input
              id="p5-time"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.timeP5}
              onChange={(e) => onChange("timeP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-past-history" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Past History</label>
            <input
              id="p5-past-history"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.pastHistoryP5}
              onChange={(e) => onChange("pastHistoryP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-pain" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Pain (P5)</label>
            <input
              id="p5-pain"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.painP5}
              onChange={(e) => onChange("painP5", e.target.value)}
            />
          </div>
        </div>

        {/* Column 4 */}
        <div className="space-y-3">
          <span className="block text-[11px] font-extrabold text-slate-600 uppercase border-b border-rose-300 pb-1 mb-2">Relational Chronology & Interventions</span>
          
          <div className="flex items-center gap-2">
            <label htmlFor="p5-after" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">After (P5)</label>
            <input
              id="p5-after"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.afterP5}
              onChange={(e) => onChange("afterP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-marriage-before" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Marriage Before</label>
            <input
              id="p5-marriage-before"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.marriageBefore}
              onChange={(e) => onChange("marriageBefore", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-marriage-after" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Marriage After</label>
            <input
              id="p5-marriage-after"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.marriageAfter}
              onChange={(e) => onChange("marriageAfter", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-preg-after" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Pregnancy After</label>
            <input
              id="p5-preg-after"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.pregnancyAfter}
              onChange={(e) => onChange("pregnancyAfter", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-personal" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Personal (P5)</label>
            <input
              id="p5-personal"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.personalP5}
              onChange={(e) => onChange("personalP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-concomitant" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Concomitant P5</label>
            <input
              id="p5-concomitant"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.concomitantP5}
              onChange={(e) => onChange("concomitantP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-paternal" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Paternal P5</label>
            <input
              id="p5-paternal"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.paternalP5}
              onChange={(e) => onChange("paternalP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-brother" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Brother P5</label>
            <input
              id="p5-brother"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.brotherP5}
              onChange={(e) => onChange("brotherP5", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p5-drugs" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Drugs P5</label>
            <input
              id="p5-drugs"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.drugsP5}
              onChange={(e) => onChange("drugsP5", e.target.value)}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
