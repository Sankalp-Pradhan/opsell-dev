import { LQSGapReport } from "@/app/(lqs-score)/lib/api/lqs-api";

interface Props { gapReport: LQSGapReport }

export default function Section7GapToLeader({ gapReport }: Props) {
  const { best_competitor, gaps } = gapReport;
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-2">Gap to Leader</h2>
      <p className="text-ds-body-sm text-n-500 mb-4">Comparing against the best competitor</p>
      <div className="bg-n-50 rounded-xl p-4 mb-6 border border-n-border">
        <p className="text-ds-caption text-n-500 mb-1">Best Competitor</p>
        <p className="text-ds-body text-n-800 font-medium line-clamp-1">{best_competitor.title}</p>
      </div>
      <table className="w-full text-ds-body-sm">
        <thead>
          <tr className="border-b border-n-border">
            {["Metric", "You", "Leader", "Gap"].map((h) => (
              <th key={h} className={`text-n-500 font-medium pb-2 ${h === "Metric" ? "text-left" : "text-right"}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {gaps.map((g) => (
            <tr key={g.metric} className="border-b border-n-50">
              <td className="py-3 text-n-700 capitalize">{g.metric.replace(/_/g, " ")}</td>
              <td className="py-3 text-right font-mono text-n-900">{g.target}</td>
              <td className="py-3 text-right font-mono text-n-900">{g.best}</td>
              <td className={`py-3 text-right font-mono font-semibold ${g.gap < 0 ? "text-error" : g.gap > 0 ? "text-success" : "text-n-500"}`}>
                {g.gap > 0 ? `+${g.gap}` : g.gap}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
