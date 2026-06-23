import { HybridVariant } from "@/app/(text-enhancement)/lib/types";

interface Props {
  hybrid: HybridVariant;
}

export default function Section11FinalOptimizedCopy({ hybrid }: Props) {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-100 rounded-2xl shadow-sm p-6 space-y-6">
      <div>
        <p className="text-ds-caption text-emerald-700 uppercase tracking-wide font-medium">
          Ready to Deploy
        </p>
        <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
          Final Optimized Copy
        </h2>
      </div>

      <div className="bg-white rounded-xl p-5 border border-emerald-100 space-y-4">
        <div>
          <p className="text-ds-caption text-n-500 font-medium uppercase tracking-wide mb-2">
            Title
          </p>
          <p className="text-ds-h3 font-display text-n-900">
            {hybrid.title}
          </p>
        </div>

        <div>
          <p className="text-ds-caption text-n-500 font-medium uppercase tracking-wide mb-3">
            Bullet Points
          </p>
          <ul className="space-y-2">
            {hybrid.bullets.map((bullet: string, i: number) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-600 font-bold shrink-0">•</span>
                <span className="text-ds-body text-n-700">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-ds-caption text-n-500 font-medium uppercase tracking-wide mb-2">
            Description
          </p>
          <div
            className="text-ds-body text-n-700 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: hybrid.description }}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border border-blue-100">
        <p className="text-ds-caption text-blue-700 font-medium uppercase tracking-wide mb-2">
          Implementation Notes
        </p>
        <p className="text-ds-body text-blue-900">{hybrid.rationale}</p>
      </div>
    </section>
  );
}
