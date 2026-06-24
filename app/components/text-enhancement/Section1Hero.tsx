import { OriginalScores, Impact } from "@/app/(text-enhancement)/lib/types";

interface Props {
  originalScores: OriginalScores;
  impact: Impact;
  recommendedVariant: string;
}

export default function Section1Hero({ originalScores, impact, recommendedVariant }: Props) {
  return (
    <section className="bg-white border border-n-border rounded-2xl shadow-elev-1 p-6 space-y-6">
      <div>
        <p className="text-ds-caption text-n-500 uppercase tracking-wide font-medium">
          Overview
        </p>
        <h2 className="text-ds-h2 font-display text-n-900 mt-1">
          Text Enhancement Summary
        </h2>
      </div>

      {/* Impact Summary */}
      <div className="bg-n-50 border border-n-border rounded-xl p-4 space-y-3">
        <p className="text-ds-caption text-n-500 uppercase tracking-wide font-medium">
          Key Changes Across Listing
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {impact.breakdown.map((item) => (
            <div key={item.component} className="bg-white border border-n-border rounded-lg p-3 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-ds-caption font-semibold text-brand bg-ai-bg px-2.5 py-1 rounded-md">
                  {item.component}
                </span>
              </div>
              <p className="text-ds-caption text-n-600 leading-relaxed">{item.what_changed}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}