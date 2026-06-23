import { HybridVariant, VariantA, VariantB } from "@/app/(text-enhancement)/lib/types";

interface Props {
  variantA: VariantA;
  variantB: VariantB;
  hybrid: HybridVariant;
}

type MetricRow = {
  label: string;
  a: number | string;
  b: number | string;
  hybrid: number | string;
  higherIsBetter?: boolean;
};

function best(vals: (number | string)[], higherIsBetter = true): number {
  const nums = vals.map(Number);
  return higherIsBetter
    ? nums.indexOf(Math.max(...nums))
    : nums.indexOf(Math.min(...nums));
}

export default function Section3VariantComparison({ variantA, variantB, hybrid }: Props) {
  // Hybrid scores: average of A and B as proxy (no direct hybrid scores in API)
  const hybridKD = Math.round((variantA.scores.keyword_density + variantB.scores.keyword_density) / 2);
  const hybridIA = Math.round((variantA.scores.intent_alignment + variantB.scores.intent_alignment) / 2);
  const hybridCS = Math.round((variantA.scores.conversion_signals + variantB.scores.conversion_signals) / 2);

  const rows: MetricRow[] = [
    {
      label: "Keyword Density",
      a: variantA.scores.keyword_density,
      b: variantB.scores.keyword_density,
      hybrid: hybridKD,
    },
    {
      label: "Intent Alignment",
      a: variantA.scores.intent_alignment,
      b: variantB.scores.intent_alignment,
      hybrid: hybridIA,
    },
    {
      label: "Conversion Signals",
      a: variantA.scores.conversion_signals,
      b: variantB.scores.conversion_signals,
      hybrid: hybridCS,
    },
    {
      label: "Title Char Count",
      a: variantA.char_count,
      b: variantB.title.length,
      hybrid: hybrid.title.length,
      higherIsBetter: false,
    },
  ];

  const cols = ["Variant A", "Variant B", "Hybrid"] as const;

  return (
    <section className="bg-white border border-n-border rounded-2xl shadow-sm p-6 space-y-5">
      <div>
        <p className="text-ds-caption text-n-400 uppercase tracking-wide">
          Side-by-Side
        </p>
        <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
          Variant Comparison
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-n-border">
              <th className="text-ds-caption text-n-400 font-medium py-2 pr-4 w-40">
                Metric
              </th>
              {cols.map((col) => (
                <th
                  key={col}
                  className={`text-ds-caption font-semibold py-2 px-4 text-center ${
                    col === "Hybrid" ? "text-n-900" : "text-n-500"
                  }`}
                >
                  {col}
                  {col === "Hybrid" && (
                    <span className="ml-1.5 inline-block bg-emerald-100 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
                      Rec
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const vals = [row.a, row.b, row.hybrid];
              const bestIdx = best(vals, row.higherIsBetter !== false);
              return (
                <tr
                  key={row.label}
                  className={`border-b border-n-border last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-n-50/50"
                  }`}
                >
                  <td className="text-ds-body text-n-700 py-3 pr-4 font-medium">
                    {row.label}
                  </td>
                  {vals.map((val, vi) => (
                    <td
                      key={vi}
                      className={`text-ds-body text-center py-3 px-4 font-semibold ${
                        bestIdx === vi
                          ? "text-emerald-600"
                          : "text-n-600"
                      }`}
                    >
                      {val}
                      {bestIdx === vi && (
                        <span className="ml-1 text-emerald-500">↑</span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}