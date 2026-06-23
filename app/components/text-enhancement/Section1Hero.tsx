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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Original A9 Compliance */}
        <div className="group">
          <div className="bg-white border border-n-border rounded-xl p-5 space-y-3 hover:border-n-300 hover:shadow-elev-2 transition-all duration-300">
            <p className="text-ds-caption text-n-500 uppercase tracking-wide font-medium">
              A9 Compliance
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-ds-display font-display text-brand">
                {originalScores.a9_compliance}
              </p>
              <p className="text-ds-caption text-n-400">/100</p>
            </div>
            <div className="w-full h-2 bg-n-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand transition-all duration-500"
                style={{ width: `${originalScores.a9_compliance}%` }}
              />
            </div>
            <p className="text-ds-caption text-n-500 pt-1">How well your listing matches A9 requirements</p>
          </div>
        </div>

        {/* Original Rufus Readiness */}
        <div className="group">
          <div className="bg-white border border-n-border rounded-xl p-5 space-y-3 hover:border-n-300 hover:shadow-elev-2 transition-all duration-300">
            <p className="text-ds-caption text-n-500 uppercase tracking-wide font-medium">
              Rufus Readiness
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-ds-display font-display text-ai-pulse">
                {originalScores.rufus_readiness}
              </p>
              <p className="text-ds-caption text-n-400">/100</p>
            </div>
            <div className="w-full h-2 bg-n-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-mid transition-all duration-500"
                style={{ width: `${originalScores.rufus_readiness}%` }}
              />
            </div>
            <p className="text-ds-caption text-n-500 pt-1">Alignment with Rufus AI conversational queries</p>
          </div>
        </div>

        {/* Recommended Variant */}
        <div className="group">
          <div className="bg-white border-2 border-success rounded-xl p-5 space-y-3 hover:border-success hover:shadow-elev-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-success-light rounded-full">
                <span className="text-success text-xs font-bold">✓</span>
              </span>
              <p className="text-ds-caption text-success uppercase tracking-wide font-semibold">
                Recommended
              </p>
            </div>
            <p className="text-ds-h1 font-display text-success capitalize">
              {recommendedVariant.replace("_", " ")}
            </p>
            <p className="text-ds-caption text-n-600 pt-1">
              Highest overall performance and conversion potential
            </p>
          </div>
        </div>
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