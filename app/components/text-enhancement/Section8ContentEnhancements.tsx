import { ImpactBreakdown } from "@/app/(text-enhancement)/lib/types";

interface Props {
  breakdown: ImpactBreakdown[];
}

const componentColors: Record<string, string> = {
  Title: "bg-violet-50 border-violet-100 text-violet-800",
  Bullets: "bg-blue-50 border-blue-100 text-blue-800",
  Description: "bg-teal-50 border-teal-100 text-teal-800",
};

const labelColors: Record<string, string> = {
  Title: "bg-violet-100 text-violet-700",
  Bullets: "bg-blue-100 text-blue-700",
  Description: "bg-teal-100 text-teal-700",
};

export default function Section8ContentEnhancements({ breakdown }: Props) {
  return (
    <section className="bg-white border border-n-border rounded-2xl shadow-sm p-6 space-y-5">
      <div>
        <p className="text-ds-caption text-n-400 uppercase tracking-wide">
          What Changed
        </p>
        <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
          Content Enhancements
        </h2>
      </div>

      <div className="space-y-4">
        {breakdown.map((item) => {
          const cardClass =
            componentColors[item.component] ??
            "bg-n-50 border-n-border text-n-800";
          const labelClass =
            labelColors[item.component] ?? "bg-n-100 text-n-700";

          return (
            <div
              key={item.component}
              className={`border rounded-xl p-5 space-y-3 ${cardClass}`}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`text-ds-caption font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide ${labelClass}`}
                >
                  {item.component} Improvements
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-ds-caption font-medium opacity-70 uppercase tracking-wide">
                  What Changed
                </p>
                <p className="text-ds-body leading-relaxed opacity-90">
                  {item.what_changed}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-ds-caption font-medium opacity-70 uppercase tracking-wide">
                  Reasoning
                </p>
                <p className="text-ds-body leading-relaxed opacity-80">
                  {item.reasoning}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}