import { ImpactBreakdown } from "@/app/(text-enhancement)/lib/types";

interface Props {
  breakdown: ImpactBreakdown[];
}

export default function Section10ImpactBreakdown({ breakdown }: Props) {
  return (
    <section className="bg-white border border-n-border rounded-2xl shadow-sm p-6 space-y-5">
      <div>
        <p className="text-ds-caption text-n-400 uppercase tracking-wide">
          Detailed Analysis
        </p>
        <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
          Impact Breakdown by Component
        </h2>
      </div>

      <div className="space-y-3">
        {breakdown.map((item: ImpactBreakdown) => (
          <div key={item.component} className="border border-n-border rounded-xl p-4 space-y-2">
            <h3 className="text-ds-body font-semibold text-n-900">{item.component}</h3>
            <div>
              <p className="text-ds-caption text-n-500 font-medium mb-1">Changes:</p>
              <p className="text-ds-body text-n-700">{item.what_changed}</p>
            </div>
            <div>
              <p className="text-ds-caption text-n-500 font-medium mb-1">Why:</p>
              <p className="text-ds-body text-n-700">{item.reasoning}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
