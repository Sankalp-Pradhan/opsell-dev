"use client";

import { Feedback } from "@/app/(competitor-analysis)/types/api";
import { useState } from "react";

/**
 * SECTION 7 — Strengths & quick wins panel
 * Source: LQS API (`feedback`)
 */
export default function StrengthsQuickWinsSection({ feedback }: { feedback: Feedback }) {
  const warning = feedback.health?.find((h) => h.level === "WARNING");
  const { executive_summary } = feedback;

  return (
    <div className="bg-white rounded-xl border border-n-border shadow-elev-1 overflow-hidden">
      {warning && (
        <div className="bg-warning-light text-warning border-b border-warning/30 px-4 py-2 text-ds-caption">
          ⚠ {warning.msg}
        </div>
      )}

      <div className="p-5">
        <h2 className="text-ds-h3 font-display text-n-800 mb-4">
          What's working &amp; what to do next
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — strengths */}
          <div className="flex flex-col gap-3">
            <span className="text-ds-caption font-medium text-n-500 uppercase tracking-wide">
              Strengths
            </span>
            {feedback.strengths.map((strength, idx) => (
              <div
                key={idx}
                className="bg-success-light border border-success rounded-lg p-4 flex items-start gap-2"
              >
                <span className="text-success shrink-0">✓</span>
                <p className="text-ds-body-sm text-n-800">{strength}</p>
              </div>
            ))}
          </div>

          {/* Right — quick wins */}
          <div className="flex flex-col gap-3">
            <span className="text-ds-caption font-medium text-n-500 uppercase tracking-wide">
              Quick wins
            </span>
            {feedback.quick_wins.map((win, idx) => (
              <QuickWinRow key={idx} index={idx + 1} text={win} />
            ))}
          </div>
        </div>
      </div>

      {/* Executive summary strip */}
      <div className="bg-n-50 border-t border-n-border px-4 py-2 flex flex-wrap gap-4 text-ds-caption text-n-600">
        <span>
          <strong className="text-n-800">{executive_summary.overall_gap_to_leader}</strong>{" "}
          overall gap to leader
        </span>
        <span>
          <strong className="text-n-800">{executive_summary.high_flag_count}</strong> high-priority
          flag{executive_summary.high_flag_count === 1 ? "" : "s"}
        </span>
        <span>
          {executive_summary.rufus_gap_to_leader <= 0 ? "Rufus leads" : "Rufus trails"}
        </span>
      </div>
    </div>
  );
}

function QuickWinRow({ index, text }: { index: number; text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-start gap-3 bg-n-50 rounded-lg p-3">
      <span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-ds-caption font-semibold shrink-0">
        {index}
      </span>
      <div className="flex flex-col gap-1">
        <p className={`text-ds-body-sm text-n-800 ${expanded ? "" : "line-clamp-2"}`}>{text}</p>
        <button
          onClick={() => setExpanded((e) => !e)}
          className="text-ds-caption text-brand self-start hover:underline"
        >
          {expanded ? "collapse" : "expand"}
        </button>
      </div>
    </div>
  );
}
