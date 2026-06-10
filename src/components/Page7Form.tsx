import { CaseSheet } from "../types";

interface FormProps {
  data: CaseSheet;
  onChange: (field: keyof CaseSheet, value: any) => void;
}

export default function Page7Form({ data, onChange }: FormProps) {
  return (
    <div className="space-y-6 animate-fadeIn" id="page7-form-container">
      {/* Top details */}
      <div className="flex bg-slate-100 p-3 rounded border border-slate-300 items-center justify-between">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Case sheet 7 Data fields</span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Ad No Reference:</span>
          <span className="font-mono bg-slate-200 border border-slate-300 text-slate-800 text-xs px-2.5 py-0.5 rounded font-semibold">{data.adNo || "N/A"}</span>
        </div>
      </div>

      {/* Structured analytical layout grouping the final diagnosis sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-50 p-4 border border-slate-300 rounded shadow-sm">
        
        {/* Row block 1 */}
        <div className="space-y-4">
          <div>
            <label htmlFor="p7-consciousness" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Consciousness</label>
            <input
              id="p7-consciousness"
              type="text"
              placeholder="Alert, drowsy, comatose..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.consciousness}
              onChange={(e) => onChange("consciousness", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p7-final-diag" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 text-rose-800">Final Diagnosis</label>
            <textarea
              id="p7-final-diag"
              rows={3}
              placeholder="Final verified diagnosis with ICD-10 or clinical markers..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.finalDiagnosis}
              onChange={(e) => onChange("finalDiagnosis", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p7-const-diag" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Constitutional Diagnosis</label>
            <textarea
              id="p7-const-diag"
              rows={3}
              placeholder="Remedy matching physical-mental constitution (e.g. Sulphur, Pulsatilla)..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.constitutionalDiagnosis}
              onChange={(e) => onChange("constitutionalDiagnosis", e.target.value)}
            />
          </div>
        </div>

        {/* Row block 2 */}
        <div className="space-y-4">
          <div>
            <label htmlFor="p7-reactions" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Reactions</label>
            <input
              id="p7-reactions"
              type="text"
              placeholder="Reactions to cold, heat, pressure, foods..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.reactionsP7}
              onChange={(e) => onChange("reactionsP7", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p7-analysis" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Analysis of Symptoms</label>
            <textarea
              id="p7-analysis"
              rows={3}
              placeholder="Hierarchy of mental, physical generals and particulars..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.analysisOfSymptoms}
              onChange={(e) => onChange("analysisOfSymptoms", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p7-disease-diag" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Disease Diagnosis</label>
            <textarea
              id="p7-disease-diag"
              rows={3}
              placeholder="Pathological classification..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.diseaseDiagnosisP7}
              onChange={(e) => onChange("diseaseDiagnosisP7", e.target.value)}
            />
          </div>
        </div>

        {/* Row block 3 */}
        <div className="space-y-4">
          <div>
            <label htmlFor="p7-food" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Food and Daily Regiments</label>
            <input
              id="p7-food"
              type="text"
              placeholder="Diet restrictions, thermal routines..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.foodAndDailyRegiments}
              onChange={(e) => onChange("foodAndDailyRegiments", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="p7-evaluation" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Evaluation of Symptoms</label>
            <textarea
              id="p7-evaluation"
              rows={3}
              placeholder="Miasmatic weight, intensity, intensity rating..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.evaluationOfSymptoms}
              onChange={(e) => onChange("evaluationOfSymptoms", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="p7-phys-general" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1">Physical Gen</label>
              <textarea
                id="p7-phys-general"
                rows={3}
                placeholder="Thermal, appetite..."
                className="w-full p-1.5 border border-slate-300 bg-white rounded text-xs"
                value={data.physicalGeneral}
                onChange={(e) => onChange("physicalGeneral", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="p7-particulars" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1">Particulars</label>
              <textarea
                id="p7-particulars"
                rows={3}
                placeholder="Local tissues..."
                className="w-full p-1.5 border border-slate-300 bg-white rounded text-xs"
                value={data.particulars}
                onChange={(e) => onChange("particulars", e.target.value)}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Grid 2: Ailments From, Miasmatic, Regionals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-100 p-4 rounded border border-slate-300">
        <div>
          <label htmlFor="p7-ailments-from" className="block text-xs font-semibold text-slate-600 mb-1 uppercase text-slate-700">Ailments From</label>
          <input
            id="p7-ailments-from"
            type="text"
            className="w-full px-2 py-1 border border-slate-300 bg-white rounded text-xs"
            value={data.ailmentsFroms}
            onChange={(e) => onChange("ailmentsFroms", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="p7-miasmatic" className="block text-xs font-semibold text-slate-600 mb-1 uppercase text-slate-700">Miasmatic background</label>
          <input
            id="p7-miasmatic"
            type="text"
            placeholder="Psora, Sycosis, Syphilis, Tubercular..."
            className="w-full px-2 py-1 border border-slate-300 bg-white rounded text-xs"
            value={data.miasmatic}
            onChange={(e) => onChange("miasmatic", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="p7-regionals" className="block text-xs font-semibold text-slate-600 mb-1 uppercase text-slate-700">Regionals</label>
          <input
            id="p7-regionals"
            type="text"
            className="w-full px-2 py-1 border border-slate-300 bg-white rounded text-xs"
            value={data.regionals}
            onChange={(e) => onChange("regionals", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="p7-common" className="block text-xs font-semibold text-slate-600 mb-1 uppercase text-slate-700">Common symptoms</label>
          <input
            id="p7-common"
            type="text"
            className="w-full px-2 py-1 border border-slate-300 bg-white rounded text-xs"
            value={data.commonP7}
            onChange={(e) => onChange("commonP7", e.target.value)}
          />
        </div>
      </div>

      {/* Grid 3: Examinations, Investigations, Mental Plane, Physical Plane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50 p-4 border border-slate-300 rounded shadow-inner">
        <div className="lg:col-span-4 space-y-4">
          <div>
            <label htmlFor="p7-phys-exam" className="block text-xs font-semibold text-slate-700 mb-1 uppercase">Physical Examinations</label>
            <textarea
              id="p7-phys-exam"
              rows={3}
              placeholder="Pulse, BP, Tongue, Respiratory rate, cardiac apex..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.physicalExaminations}
              onChange={(e) => onChange("physicalExaminations", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p7-prov-diag" className="block text-xs font-semibold text-slate-700 mb-1 uppercase">Provisional Diagnosis with D/D</label>
            <textarea
              id="p7-prov-diag"
              rows={3}
              placeholder="Differential diagnostics checklist..."
              className="w-full px-2.5 py-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.provisionalDiagnosis}
              onChange={(e) => onChange("provisionalDiagnosis", e.target.value)}
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <label htmlFor="p7-investigations" className="block text-xs font-semibold text-slate-705 mb-1 uppercase text-rose-800 font-bold">Investigations Picture / Scan (N)?</label>
          <textarea
            id="p7-investigations"
            rows={8}
            placeholder="X-Ray, Ultrasound, Blood count, MRI observations details..."
            className="w-full px-2.5 py-2.5 border border-slate-300 bg-white rounded text-xs font-mono"
            value={data.investigations}
            onChange={(e) => onChange("investigations", e.target.value)}
          />
        </div>

        <div className="lg:col-span-3 space-y-4 bg-yellow-50/50 p-3 rounded border border-yellow-200">
          <div>
            <label htmlFor="p7-mental-plane" className="block text-xs font-bold text-yellow-800 tracking-wide uppercase mb-1">Mental Plane</label>
            <textarea
              id="p7-mental-plane"
              rows={3}
              placeholder="Synthesis of mental symptoms..."
              className="w-full p-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.mentalPlane}
              onChange={(e) => onChange("mentalPlane", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="p7-physical-plane" className="block text-xs font-bold text-yellow-800 tracking-wide uppercase mb-1">Physical Plane</label>
            <textarea
              id="p7-physical-plane"
              rows={3}
              placeholder="Synthesis of physical general systems..."
              className="w-full p-1.5 border border-slate-300 bg-white rounded text-xs"
              value={data.physicalPlane}
              onChange={(e) => onChange("physicalPlane", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
