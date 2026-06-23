"use client";

import { useState } from "react";
import type { A9DimensionBreakdown, RufusDimensionBreakdown } from "@/app/(competitor-analysis)/types/api";

interface Props { breakdown: { a9: A9DimensionBreakdown; rufus: RufusDimensionBreakdown } }

function Panel({ title, entries }: { title: string; entries: [string, number][] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-n-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-ds-h3 font-display text-n-900 bg-n-50 hover:bg-n-100 transition-colors">
        {title}<span className="text-n-400">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="p-5 space-y-3">
          {entries.map(([key, val]) => (
            <div key={key} className="flex items-center gap-3">
              <p className="text-ds-body-sm text-n-700 w-52 capitalize">{key.replace(/_/g, " ")}</p>
              <div className="flex-1 h-2 bg-n-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand rounded-full" style={{ width: `${val}%` }} />
              </div>
              <span className="text-ds-body-sm font-mono text-n-900 w-8 text-right">{val}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Section12DimensionExplorer({ breakdown }: Props) {
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-2">Dimension Explorer</h2>
      <p className="text-ds-body-sm text-n-500 mb-6">Detailed sub-scores for advanced analysis</p>
      <div className="space-y-3">
        <Panel title="A9 Compliance"   entries={Object.entries(breakdown.a9)    as [string, number][]} />
        <Panel title="Rufus Readiness" entries={Object.entries(breakdown.rufus)  as [string, number][]} />
      </div>
    </section>
  );
}
