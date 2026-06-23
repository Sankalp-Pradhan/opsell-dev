import type { ReactNode } from "react";
import ScoreRing from "./ScoreRing";
import { tailwindColorClassForScore } from "./ScoreRing";

/* ---------------------------------------------------------------------------
 * SectionCard — common white card wrapper used by sections 2, 4, 5, 7
 * ------------------------------------------------------------------------- */
export function SectionCard({
  title,
  action,
  children,
  className = "",
}: {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-xl border border-n-border shadow-elev-1 ${className}`}>
      {title && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-n-border">
          <h2 className="text-ds-h3 font-display text-n-800">{title}</h2>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * StatCard — used in Section 1 (hero metric pills)
 * ------------------------------------------------------------------------- */
export function StatCard({
  label,
  value,
  showRing = true,
}: {
  label: string;
  value: number | string;
  showRing?: boolean;
}) {
  const numeric = typeof value === "number" ? value : parseFloat(value);
  const colorClass =
    showRing && !Number.isNaN(numeric) ? tailwindColorClassForScore(numeric) : "text-n-800";

  return (
    <div className="bg-white border border-n-border rounded-lg shadow-elev-1 px-4 py-3 flex items-center gap-3">
      {showRing && !Number.isNaN(numeric) && (
        <div className="relative flex items-center justify-center" style={{ width: 40, height: 40 }}>
          <ScoreRing score={numeric} size={40} />
          <span className={`absolute text-ds-caption font-display font-bold ${colorClass}`}>
            {numeric}
          </span>
        </div>
      )}
      <div className="flex flex-col">
        <span className={`font-display ${showRing ? "text-ds-body font-semibold" : "text-2xl font-bold"} ${!showRing ? colorClass : "text-n-800"}`}>
          {!showRing && value}
        </span>
        <span className="font-body text-ds-caption text-n-500">{label}</span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * ProgressBar — thin bar used in section 3 (score mini-rows) & section 6
 * ------------------------------------------------------------------------- */
export function ProgressBar({
  value,
  max = 100,
  colorClassName = "bg-brand",
  heightClassName = "h-1",
}: {
  value: number;
  max?: number;
  colorClassName?: string;
  heightClassName?: string;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={`w-full ${heightClassName} bg-n-100 rounded-full overflow-hidden`}>
      <div
        className={`${heightClassName} ${colorClassName} rounded-full transition-all duration-300`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * ScorePill — inline pill with direction arrow, used in Section 2 table
 * ------------------------------------------------------------------------- */
export function ScorePill({
  score,
  delta,
}: {
  score: number;
  delta: number;
}) {
  const positive = delta > 0;
  const neutral = delta === 0;

  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold text-n-800">
        {score}
      </span>

      {!neutral && (
        <span
          className={`text-[11px] font-medium ${
            positive
              ? "text-success"
              : "text-error"
          }`}
        >
          {positive ? "+" : ""}
          {delta}
        </span>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * DeltaChip — "+9 ahead" / "−1 behind" used in Section 4
 * ------------------------------------------------------------------------- */
export function DeltaChip({ gap }: { gap: number }) {
  const ahead = gap > 0;
  const flat = gap === 0;
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-ds-caption font-medium ${
        flat
          ? "bg-n-100 text-n-500"
          : ahead
          ? "bg-success-light text-success"
          : "bg-error-light text-error"
      }`}
    >
      {flat ? "even" : `${ahead ? "+" : ""}${gap} ${ahead ? "ahead" : "behind"}`}
    </span>
  );
}
