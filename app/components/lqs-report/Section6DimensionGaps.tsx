import { LQSDimensionGap } from "@/app/(lqs-score)/lib/api/lqs-api";

interface Props { dimensionGaps: LQSDimensionGap[] }

export default function Section6DimensionGaps({ dimensionGaps }: Props) {
  const sorted = [...dimensionGaps].sort((a, b) => b.gap - a.gap);
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-2">Dimension Gap Analysis</h2>
      <p className="text-ds-body-sm text-n-500 mb-6">Where you&apos;re behind or ahead of the competitor average</p>
      <div className="space-y-3">
        {sorted.map((d) => {
          const isBehind = d.gap > 0;
          const barWidth = Math.min(Math.abs(d.gap) * 2, 100);
          return (
            <div key={`${d.scorer}-${d.dimension}`} className="flex items-center gap-4">
              <div className="w-40 shrink-0">
                <p className="text-ds-body-sm text-n-700 capitalize">{d.dimension.replace(/_/g, " ")}</p>
                <p className="text-ds-caption text-n-400 uppercase">{d.scorer}</p>
              </div>
              <div className="flex-1 h-2.5 bg-n-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${isBehind ? "bg-error" : "bg-success"}`} style={{ width: `${barWidth}%` }} />
              </div>
              <span className={`text-ds-body-sm font-mono w-16 text-right ${isBehind ? "text-error" : "text-success"}`}>
                {isBehind ? `+${d.gap.toFixed(1)}` : d.gap.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>
      <p className="text-ds-caption text-n-400 mt-4">Positive = behind competitor average · Negative = ahead</p>
    </section>
  );
}
