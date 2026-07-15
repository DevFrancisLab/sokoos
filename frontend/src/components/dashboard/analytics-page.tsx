import { Activity, ArrowLeft, BarChart3, Sparkles } from "lucide-react";

type AnalyticsPageProps = {
  onBack: () => void;
};

export default function AnalyticsPage({ onBack }: AnalyticsPageProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-[24px] border border-[#ECFDF5] bg-gradient-to-br from-[#F0FDF4] to-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Insights</p>
            <h1 className="mt-2 text-[34px] font-semibold text-[#0F172A]">See what is helping your business grow</h1>
            <p className="mt-3 text-[15px] text-[#475569]">Use customer activity, response quality, and lead trends to refine the AI over time.</p>
          </div>
          <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-[24px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white hover:bg-[#16A34A]">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-[#22C55E]" />
            <h2 className="text-[24px] font-semibold text-[#0F172A]">Weekly performance</h2>
          </div>
          <div className="mt-5 rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] p-5">
            <div className="flex items-center gap-2 text-[#047857]">
              <Sparkles className="h-4 w-4" />
              <span className="font-semibold">AI response quality is trending up</span>
            </div>
            <p className="mt-3 text-sm text-[#475569]">The assistant is helping more customers get answers quickly and is handing off more complex cases appropriately.</p>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-[#22C55E]" />
            <h2 className="text-[24px] font-semibold text-[#0F172A]">What to watch</h2>
          </div>
          <div className="mt-5 space-y-3 text-sm text-[#475569]">
            <div className="rounded-[20px] bg-[#F9FAFB] p-4">• Lead volume is increasing after AI-assisted replies.</div>
            <div className="rounded-[20px] bg-[#F9FAFB] p-4">• Customers still need clearer answers during off-hours.</div>
            <div className="rounded-[20px] bg-[#F9FAFB] p-4">• Product recommendations can be further tailored to local needs.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
