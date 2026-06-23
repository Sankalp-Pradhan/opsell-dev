import { LQSScoreComparison } from "@/app/(lqs-score)/lib/api/lqs-api";

interface Props { scoreComparison: LQSScoreComparison[] }

export default function Section8CompetitorLeaderboard({ scoreComparison }: Props) {
  const sorted = [...scoreComparison].sort((a, b) => b.overall - a.overall);
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-6">Competitor Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-ds-body-sm">
          <thead>
            <tr className="border-b border-n-border">
              {["Rank", "Listing", "Overall", "A9", "Rufus", "LQS"].map((h) => (
                <th key={h} className={`text-n-500 font-medium pb-2 pr-4 ${h === "Rank" || h === "Listing" ? "text-left" : "text-right"}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => {
              const isTarget = row.label === "TARGET";
              return (
                <tr key={row.label} className={`border-b border-n-50 ${isTarget ? "bg-brand-light" : "hover:bg-n-50"}`}>
                  <td className="py-3 pr-4 font-mono text-n-500">{i + 1}</td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      {isTarget && <span className="text-[10px] font-bold bg-brand text-white px-1.5 py-0.5 rounded uppercase">You</span>}
                      <span className={`line-clamp-1 ${isTarget ? "text-brand font-semibold" : "text-n-700"}`}>{row.title}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-right font-mono text-n-900">{row.overall}</td>
                  <td className="py-3 pr-4 text-right font-mono text-n-900">{row.a9_compliance}</td>
                  <td className="py-3 pr-4 text-right font-mono text-n-900">{row.rufus_readiness}</td>
                  <td className="py-3 text-right font-mono text-n-900">{row.lqs_score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
