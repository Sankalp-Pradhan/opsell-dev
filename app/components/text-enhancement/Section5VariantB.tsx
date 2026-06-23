import { VariantB } from "@/app/(text-enhancement)/lib/types";

interface Props {
  variantB: VariantB;
}

function ScorePill({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-ds-caption text-n-500">{label}</span>
      <span className="bg-n-100 text-n-700 text-ds-caption font-semibold px-2.5 py-0.5 rounded-full">
        {value}
      </span>
    </div>
  );
}

export default function Section5VariantB({ variantB }: Props) {
  return (
    <section className="bg-white border border-n-border rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <p className="text-ds-caption text-n-400 uppercase tracking-wide">
            Intent-First
          </p>
          <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
            Variant B
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <ScorePill label="Keyword Density" value={variantB.scores.keyword_density} />
          <ScorePill label="Intent Alignment" value={variantB.scores.intent_alignment} />
          <ScorePill label="Conversion Signals" value={variantB.scores.conversion_signals} />
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
          Optimized Title
        </p>
        <p className="text-ds-body text-n-900 bg-n-50 rounded-xl px-4 py-3 border border-n-border">
          {variantB.title}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
          Optimized Bullets
        </p>
        <ul className="space-y-2">
          {variantB.bullets.map((bullet: string, i: number) => (
            <li
              key={i}
              className="flex gap-3 bg-n-50 rounded-xl px-4 py-3 border border-n-border"
            >
              <span className="text-ds-caption text-n-400 font-mono mt-0.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-ds-body text-n-700">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-1">
        <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
          Optimized Description
        </p>
        <div
          className="text-ds-body text-n-700 bg-n-50 rounded-xl px-4 py-3 border border-n-border leading-relaxed"
          dangerouslySetInnerHTML={{ __html: variantB.description }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
            Personas Addressed
          </p>
          <ul className="space-y-2">
            {variantB.personas_addressed.map((persona: string, i: number) => (
              <li
                key={i}
                className="flex gap-2.5 bg-purple-50 border border-purple-100 rounded-xl px-4 py-3"
              >
                <span className="text-purple-400 shrink-0 mt-0.5">◎</span>
                <p className="text-ds-caption text-purple-800">{persona}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
            Objections Handled
          </p>
          <ul className="space-y-2">
            {variantB.objections_handled.map((obj: string, i: number) => (
              <li
                key={i}
                className="flex gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3"
              >
                <span className="text-amber-400 shrink-0 mt-0.5">✓</span>
                <p className="text-ds-caption text-amber-800">{obj}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}