"use client";

import { A9DimensionBreakdown, RufusDimensionBreakdown } from "@/app/(competitor-analysis)/types/api";
import { useState } from "react";


interface Props { breakdown: { a9: A9DimensionBreakdown; rufus: RufusDimensionBreakdown } }

function Bar({ label, value }: { label: string; value: number }) {
  const color = value >= 60 ? "bg-success" : value >= 30 ? "bg-warning" : "bg-error";
  return (
    <div className="flex items-center gap-3">
      <p className="text-ds-body-sm text-n-700 w-48 shrink-0 capitalize">{label.replace(/_/g, " ")}</p>
      <div className="flex-1 h-2 bg-n-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-ds-body-sm font-mono text-n-900 w-8 text-right">{value}</span>
    </div>
  );
}

export default function Section3A9RufusRadar({ breakdown }: Props) {
  const [tab, setTab] = useState<"a9" | "rufus">("a9");
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-6">A9 vs Rufus Breakdown</h2>
      <div className="flex gap-2 mb-6">
        {(["a9", "rufus"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-full text-ds-body-sm font-medium transition-colors ${tab === t ? "bg-brand text-white" : "bg-n-100 text-n-600 hover:bg-n-200"}`}>
            {t === "a9" ? "A9 Compliance" : "Rufus Readiness"}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {(Object.entries(tab === "a9" ? breakdown.a9 : breakdown.rufus) as [string, number][]).map(([k, v]) => (
          <Bar key={k} label={k} value={v} />
        ))}
      </div>
    </section>
  );
}
