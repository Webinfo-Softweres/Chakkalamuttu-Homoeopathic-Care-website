import { CaseSheet } from "../types";

interface FormProps {
  data: CaseSheet;
  onChange: (field: keyof CaseSheet, value: any) => void;
}

export default function Page6Form({ data, onChange }: FormProps) {
  return (
    <div className="space-y-6 animate-fadeIn" id="page6-form-container">
      {/* Top Bar banner */}
      <div className="flex bg-slate-100 p-3 rounded border border-slate-300 items-center justify-between">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Case sheet 6 Data fields</span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Ad No Reference:</span>
          <span className="font-mono bg-slate-200 border border-slate-300 text-slate-800 text-xs px-2.5 py-0.5 rounded font-semibold">{data.adNo || "N/A"}</span>
        </div>
      </div>

      {/* Extreme 4-column Psychological Matrix layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 bg-slate-50 p-4 border border-slate-300 rounded shadow-sm">
        
        {/* Column 1: Family & Core Temperament */}
        <div className="space-y-3">
          <span className="block text-[11px] font-extrabold text-slate-700 uppercase border-b border-sky-300 pb-1 mb-2">Relatives & Reactions</span>
          
          <div className="flex items-center gap-2">
            <label htmlFor="p6-aunt" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Aunt</label>
            <input
              id="p6-aunt"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.aunt}
              onChange={(e) => onChange("aunt", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-uncle" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Uncle</label>
            <input
              id="p6-uncle"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.uncle}
              onChange={(e) => onChange("uncle", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-daughter" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Daughter</label>
            <input
              id="p6-daughter"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.daughter}
              onChange={(e) => onChange("daughter", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-wife" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Wife</label>
            <input
              id="p6-wife"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.wife}
              onChange={(e) => onChange("wife", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-son" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Son</label>
            <input
              id="p6-son"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.son}
              onChange={(e) => onChange("son", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-living" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Living</label>
            <input
              id="p6-living"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.living}
              onChange={(e) => onChange("living", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-dead" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Dead</label>
            <input
              id="p6-dead"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.dead}
              onChange={(e) => onChange("dead", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-emotion" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Emotion</label>
            <input
              id="p6-emotion"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.emotion}
              onChange={(e) => onChange("emotion", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-reaction" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Reaction</label>
            <input
              id="p6-reaction"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.reaction}
              onChange={(e) => onChange("reaction", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-intellectual" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Intellectual</label>
            <input
              id="p6-intellectual"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.intellectual}
              onChange={(e) => onChange("intellectual", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-addictions" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Addictions</label>
            <input
              id="p6-addictions"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.addictions}
              onChange={(e) => onChange("addictions", e.target.value)}
            />
          </div>
        </div>

        {/* Column 2: Habits & Characteristics */}
        <div className="space-y-3">
          <span className="block text-[11px] font-extrabold text-slate-700 uppercase border-b border-sky-300 pb-1 mb-2">Daily Habits & Active Traits</span>
          
          <div className="flex items-center gap-2">
            <label htmlFor="p6-tea" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Tea consumption</label>
            <input
              id="p6-tea"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.tea}
              onChange={(e) => onChange("tea", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-coffee" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Coffee</label>
            <input
              id="p6-coffee"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.coffee}
              onChange={(e) => onChange("coffee", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-alcohol" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Alcohol</label>
            <input
              id="p6-alcohol"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.alcohol}
              onChange={(e) => onChange("alcohol", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-beer" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Beer</label>
            <input
              id="p6-beer"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.beer}
              onChange={(e) => onChange("beer", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-tobacco" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Tobacco</label>
            <input
              id="p6-tobacco"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.tobacco}
              onChange={(e) => onChange("tobacco", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-chewing" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Chewing</label>
            <input
              id="p6-chewing"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.chewing}
              onChange={(e) => onChange("chewing", e.target.value)}
            />
          </div>
          
          <div className="pt-2 border-t border-slate-200">
            <span className="block text-[10px] font-bold text-slate-500 uppercase mb-2">Mental Characteristics</span>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <label htmlFor="p6-activity" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Activity</label>
                <input
                  id="p6-activity"
                  type="text"
                  placeholder="Hyperactive, slow, structured..."
                  className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
                  value={data.mentalActivity}
                  onChange={(e) => onChange("mentalActivity", e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="p6-behaviour" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Behaviour</label>
                <input
                  id="p6-behaviour"
                  type="text"
                  placeholder="Polite, aggressive, reserved..."
                  className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
                  value={data.mentalBehaviour}
                  onChange={(e) => onChange("mentalBehaviour", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Social & Stressors */}
        <div className="space-y-3">
          <span className="block text-[11px] font-extrabold text-slate-700 uppercase border-b border-sky-300 pb-1 mb-2">Social & Circumstantial Strain</span>
          
          <div className="flex items-center gap-2">
            <label htmlFor="p6-parental" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Parental attitude</label>
            <input
              id="p6-parental"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.parentalAttitude}
              onChange={(e) => onChange("parentalAttitude", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-society" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Society (P6)</label>
            <input
              id="p6-society"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.societyP6}
              onChange={(e) => onChange("societyP6", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-workplace" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Work place</label>
            <input
              id="p6-workplace"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.workPlace}
              onChange={(e) => onChange("workPlace", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-family" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Family (P6)</label>
            <input
              id="p6-family"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.familyP6}
              onChange={(e) => onChange("familyP6", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-dissatisfaction" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Dissatisfaction</label>
            <input
              id="p6-dissatisfaction"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-305 bg-white rounded text-xs"
              value={data.dissatisfaction}
              onChange={(e) => onChange("dissatisfaction", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-strain" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Strain (P6)</label>
            <input
              id="p6-strain"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.strainP6}
              onChange={(e) => onChange("strainP6", e.target.value)}
            />
          </div>
          
          <div className="pt-2 border-t border-slate-200">
            <span className="block text-[10px] font-bold text-slate-500 uppercase mb-2">Mental Physical Fields</span>
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <label htmlFor="p6-mp-work" className="text-[10px] font-semibold text-slate-600 w-[60px] truncate">Work</label>
                <input
                  id="p6-mp-work"
                  type="text"
                  className="flex-1 px-2 py-0.5 border border-slate-200 bg-white rounded text-xs"
                  value={data.mentalPhysicalWork}
                  onChange={(e) => onChange("mentalPhysicalWork", e.target.value)}
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="p6-mp-family" className="text-[10px] font-semibold text-slate-600 w-[60px] truncate">Family</label>
                <input
                  id="p6-mp-family"
                  type="text"
                  className="flex-1 px-2 py-0.5 border border-slate-200 bg-white rounded text-xs"
                  value={data.mentalPhysicalFamily}
                  onChange={(e) => onChange("mentalPhysicalFamily", e.target.value)}
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="p6-mp-society" className="text-[10px] font-semibold text-slate-600 w-[60px] truncate">Society</label>
                <input
                  id="p6-mp-society"
                  type="text"
                  className="flex-1 px-2 py-0.5 border border-slate-200 bg-white rounded text-xs"
                  value={data.mentalPhysicalSociety}
                  onChange={(e) => onChange("mentalPhysicalSociety", e.target.value)}
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="p6-mp-friends" className="text-[10px] font-semibold text-slate-600 w-[60px] truncate">Friends</label>
                <input
                  id="p6-mp-friends"
                  type="text"
                  className="flex-1 px-2 py-0.5 border border-slate-200 bg-white rounded text-xs"
                  value={data.mentalPhysicalFriends}
                  onChange={(e) => onChange("mentalPhysicalFriends", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Inner Emotions & Mind state */}
        <div className="space-y-3">
          <span className="block text-[11px] font-extrabold text-slate-700 uppercase border-b border-sky-300 pb-1 mb-2">Affections & Emotions</span>
          
          <div className="flex items-center gap-2">
            <label htmlFor="p6-love" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Love</label>
            <input
              id="p6-love"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.love}
              onChange={(e) => onChange("love", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-hate" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Hate</label>
            <input
              id="p6-hate"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.hate}
              onChange={(e) => onChange("hate", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-attachment" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Attachment</label>
            <input
              id="p6-attachment"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.attachment}
              onChange={(e) => onChange("attachment", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-anger" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Anger</label>
            <input
              id="p6-anger"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.anger}
              onChange={(e) => onChange("anger", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-sadness" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Sadness</label>
            <input
              id="p6-sadness"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.sadness}
              onChange={(e) => onChange("sadness", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-anxiety" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Anxiety</label>
            <input
              id="p6-anxiety"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.anxiety}
              onChange={(e) => onChange("anxiety", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-ego" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Ego</label>
            <input
              id="p6-ego"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.ego}
              onChange={(e) => onChange("ego", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-jealous" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Jealous</label>
            <input
              id="p6-jealous"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.jealous}
              onChange={(e) => onChange("jealous", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-suspicious" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Suspicious</label>
            <input
              id="p6-suspicious"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.suspicious}
              onChange={(e) => onChange("suspicious", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-envy" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Envy</label>
            <input
              id="p6-envy"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.envy}
              onChange={(e) => onChange("envy", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="p6-memory" className="text-xs font-semibold text-slate-600 w-[100px] shrink-0">Memory</label>
            <input
              id="p6-memory"
              type="text"
              className="flex-1 px-2 py-1 border border-slate-300 bg-white rounded text-xs"
              value={data.memory}
              onChange={(e) => onChange("memory", e.target.value)}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
