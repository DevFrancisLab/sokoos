import React from "react";

export type InsightItem = {
  id?: string;
  label: string;
  value: string;
  score?: number; // optional 0-100 for visual meter
  trend?: "up" | "down" | "neutral";
  hint?: string; // small subtext
};

type AiInsightsProps = {
  items?: InsightItem[];
  columns?: number; // responsive grid columns (default 2)
};

export function AiInsights({
  items = [
    { id: "lead", label: "Lead Score", value: "42", score: 42, trend: "neutral", hint: "moderate" },
    { id: "sentiment", label: "Customer Sentiment", value: "Neutral", trend: "neutral" },
    { id: "intent", label: "Purchase Intent", value: "Consider", trend: "neutral" },
    { id: "urgency", label: "Urgency", value: "Low", trend: "down" },
    { id: "status", label: "Conversation Status", value: "AI Handling", trend: "up" },
    { id: "followup", label: "Next Follow-up", value: "Tomorrow morning", hint: "Suggested" },
  ],
  columns = 2,
}: AiInsightsProps) {
  const gridCols = columns === 3 ? "grid-cols-3" : columns === 1 ? "grid-cols-1" : "grid-cols-2";

  const trendColor = (t?: string) => {
    if (t === "up") return "text-[#059669]"; // muted green
    if (t === "down") return "text-[#B91C1C]"; // muted red
    return "text-[#64748B]"; // neutral slate
  };

  return (
    <div className={`grid ${gridCols} gap-3`}>
      {items.map((it) => (
        <div key={it.id ?? it.label} className="rounded-xl bg-[#FBFDFF] border border-[#EAF0F6] p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748B]">{it.label}</div>
              <div className="mt-1 flex items-baseline gap-2">
                <div className="text-sm font-semibold text-[#0F172A] truncate">{it.value}</div>
                {it.hint ? <div className="text-xs text-[#94A3B8]">{it.hint}</div> : null}
              </div>
            </div>
            <div className="shrink-0 text-right">
              {typeof it.score === "number" ? (
                <div className="w-20">
                  <div className="h-2 w-full rounded-full bg-[#F1F5F9]">
                    <div
                      className="h-2 rounded-full bg-[#22C55E]"
                      style={{ width: `${Math.max(0, Math.min(100, it.score))}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className={`${trendColor(it.trend)} text-sm font-medium`}>{it.trend === "up" ? "↑" : it.trend === "down" ? "↓" : "–"}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AiInsights;
