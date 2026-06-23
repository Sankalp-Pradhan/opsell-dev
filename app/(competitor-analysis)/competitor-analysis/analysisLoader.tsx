"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { label: "Fetching listing data",        ms: 1400 },
  { label: "Pulling competitor scores",    ms: 2000 },
  { label: "Analysing keyword gaps",       ms: 1800 },
  { label: "Building your gap report",     ms: 1400 },
  { label: "Almost there…",               ms: 800  },
];

const TOTAL_MS = STEPS.reduce((s, st) => s + st.ms, 0);

export default function AnalysisLoader() {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    let raf: number;
    let startTs: number | null = null;

    function tick(ts: number) {
      if (!startTs) startTs = ts;
      const elapsed = ts - startTs;

      // progress never reaches 100 — page unmounts when server resolves
      const pct = Math.min(92, (elapsed / TOTAL_MS) * 100);
      setProgress(pct);

      let acc = 0;
      for (let i = 0; i < STEPS.length; i++) {
        acc += STEPS[i].ms;
        if (elapsed < acc) { setStepIndex(i); break; }
      }

      if (pct < 92) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-n-50 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md bg-white border border-n-border rounded-2xl shadow-elev-2 p-8 flex flex-col items-center gap-6">

        {/* Spinner */}
        <div className="relative w-14 h-14">
          <svg
            className="animate-spin w-14 h-14"
            viewBox="0 0 56 56"
            fill="none"
          >
            <circle
              cx="28" cy="28" r="22"
              stroke="#5046E5"
              strokeWidth="4"
              strokeOpacity="0.15"
            />
            <path
              d="M28 6 a22 22 0 0 1 22 22"
              stroke="#5046E5"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <div className="text-center">
          <p className="text-ds-h3 font-display font-semibold text-n-800">
            Analysing your listing
          </p>
          <p className="text-ds-body-sm text-n-500 mt-1">
            Comparing against top competitors on Amazon
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span
              key={stepIndex}
              className="text-ds-caption text-n-500 animate-[fadeIn_0.3s_ease_both]"
            >
              {STEPS[stepIndex].label}
            </span>
            <span className="text-ds-caption font-semibold text-n-700 tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="w-full h-2 bg-n-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-[width] duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #5046E5 0%, #7B73FF 100%)",
              }}
            />
          </div>
        </div>

        {/* Step dots */}
        <div className="flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div
              key={s.label}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i < stepIndex
                  ? "w-4 bg-brand"
                  : i === stepIndex
                  ? "w-6 bg-brand"
                  : "w-1.5 bg-n-200"
              }`}
            />
          ))}
        </div>

        <p className="text-[12px] text-n-400 text-center leading-relaxed">
          Usually takes 50-60 seconds · We never store your listing data
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}