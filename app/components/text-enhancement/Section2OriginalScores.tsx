import { OriginalScores } from "@/app/(text-enhancement)/lib/types";

interface Props {
  originalScores: OriginalScores;
}

function ScoreCard({
  label,
  value,
  max = 100,
  description,
}: {
  label: string;
  value: number;
  max?: number;
  description: string;
}) {
  const pct = Math.round((value / max) * 100);
  const color =
    pct >= 70
      ? "bg-emerald-500"
      : pct >= 45
      ? "bg-amber-400"
      : "bg-red-400";

  return (
    <div className="bg-white border border-n-border rounded-2xl shadow-sm p-5 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-ds-body font-semibold text-n-900">{label}</p>
        <span className="text-2xl font-bold font-display text-n-900">
          {value}
          <span className="text-ds-caption text-n-400 font-normal">/{max}</span>
        </span>
      </div>
      <div className="w-full h-2 bg-n-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-ds-caption text-n-500">{description}</p>
    </div>
  );
}

export default function Section2OriginalScores({ originalScores }: Props) {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-ds-caption text-n-400 uppercase tracking-wide">
          Baseline
        </p>
        <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
          Original Scores
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ScoreCard
          label="A9 Compliance"
          value={originalScores.a9_compliance}
          description="How well the listing satisfies Amazon's A9 indexing algorithm requirements."
        />
        <ScoreCard
          label="Rufus Readiness"
          value={originalScores.rufus_readiness}
          description="Alignment with Amazon's Rufus AI conversational query matching."
        />
        <ScoreCard
          label="Keywords Found"
          value={originalScores.keywords_found}
          description="Percentage of target keywords present in the current listing."
        />
      </div>
    </section>
  );
}