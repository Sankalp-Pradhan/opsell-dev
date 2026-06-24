import { HybridVariant, VariantA, VariantB, OriginalScores } from "@/app/(text-enhancement)/lib/types";

interface Props {
  hybrid: HybridVariant;
  variantA: VariantA;
  variantB: VariantB;
  originalScores: OriginalScores;
}

export default function Section12ImplementationChecklist({
  hybrid,
  variantA,
  variantB,
  originalScores,
}: Props) {
  const items = [
    {
      title: "Update Product Title",
      description: "Replace current title with the optimized hybrid version",
      priority: "HIGH",
    },
    {
      title: "Update Bullet Points",
      description: "Replace current bullets with the optimized variants",
      priority: "HIGH",
    },
    {
      title: "Update Product Description",
      description: "Replace current description with the optimized version",
      priority: "HIGH",
    },
    {
      title: "Monitor Performance Metrics",
      description: "Track CTR and conversion rate changes post-launch",
      priority: "MEDIUM",
    },
    {
      title: "Review Backend Keywords",
      description: "Consider updating backend search terms with new keywords",
      priority: "MEDIUM",
    },
  ];

  const priorityColor = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return "bg-red-100 text-red-700";
      case "MEDIUM":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <section className="bg-white border border-n-border rounded-2xl shadow-sm p-6 space-y-5">
      <div>
        <p className="text-ds-caption text-n-400 uppercase tracking-wide">
          Action Items
        </p>
        <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
          Implementation Checklist
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-n-border rounded-xl p-4 flex gap-4">
              {/* <div className="flex-shrink-0 flex items-start pt-0.5">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-n-border text-emerald-600 cursor-pointer"
                  disabled
                />
              </div> */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-ds-body font-semibold text-n-900">
                  {item.title}
                </h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${priorityColor(item.priority)}`}>
                  {item.priority}
                </span>
              </div>
              <p className="text-ds-caption text-n-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-n-50 border border-n-border rounded-xl p-4">
        <p className="text-ds-caption text-n-600 font-medium uppercase tracking-wide mb-2">
          Before Publishing
        </p>
        <ul className="space-y-1.5 text-ds-caption text-n-700">
          <li className="flex gap-2">
            <span className="text-n-400">✓</span>
            <span>Verify all content changes are accurate and complete</span>
          </li>
          <li className="flex gap-2">
            <span className="text-n-400">✓</span>
            <span>Test keyword placement and readability</span>
          </li>
          <li className="flex gap-2">
            <span className="text-n-400">✓</span>
            <span>Schedule post during low-traffic window if possible</span>
          </li>
          <li className="flex gap-2">
            <span className="text-n-400">✓</span>
            <span>Document changes for future reference</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
