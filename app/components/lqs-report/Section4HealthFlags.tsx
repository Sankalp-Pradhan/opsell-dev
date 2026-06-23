import type { LQSHealthFlag } from "@/app/(lqs-score)/lib/api/lqs-api";

interface Props { health: LQSHealthFlag[]; flags: string[] }

const levelStyle: Record<string, string> = {
  CRITICAL: "bg-error-light border-error text-error",
  WARNING:  "bg-warning-light border-warning text-warning",
  INFO:     "bg-brand-light border-brand text-brand",
};
const levelIcon: Record<string, string> = { CRITICAL: "🔴", WARNING: "⚠️", INFO: "ℹ️" };

export default function Section4HealthFlags({ health, flags }: Props) {
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-2">Health Flags</h2>
      <p className="text-ds-body-sm text-n-500 mb-6">{flags.length} issue{flags.length !== 1 ? "s" : ""} detected</p>
      <div className="space-y-3 mb-6">
        {health.map((h, i) => (
          <div key={i} className={`flex items-start gap-3 border rounded-xl px-4 py-3 ${levelStyle[h.level] ?? levelStyle.INFO}`}>
            <span>{levelIcon[h.level] ?? "ℹ️"}</span>
            <p className="text-ds-body-sm font-medium">{h.msg}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {flags.map((f) => (
          <div key={f} className="bg-n-50 border border-n-border rounded-lg px-3 py-2 text-ds-caption font-mono text-n-700">{f}</div>
        ))}
      </div>
    </section>
  );
}
