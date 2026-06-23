import { LQSApiResponse, LQSResultEntry } from "@/app/(competitor-analysis)/types/api";

interface Props { data: LQSApiResponse; target: LQSResultEntry }

function statusBadge(overall: number) {
  if (overall >= 70) return { label: "Good", color: "bg-success-light text-success" };
  if (overall >= 50) return { label: "Needs Optimization", color: "bg-warning-light text-warning" };
  return { label: "Critical", color: "bg-error-light text-error" };
}

export default function Section1Hero({ data, target }: Props) {
  const badge = statusBadge(target.scores.overall);
  const exec = data.feedback.executive_summary;

  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-ds-caption font-medium ${badge.color}`}>
            ⚠ {badge.label}
          </span>
          <h2 className="text-ds-display font-display text-n-900 mt-3">
            Overall Score <span className="text-brand">{target.scores.overall}</span>
            <span className="text-n-300 text-ds-h1">/100</span>
          </h2>
          <p className="text-ds-body-sm text-n-500 mt-1 max-w-xl line-clamp-2">{target.title}</p>
        </div>
        {target.gmv_impact_inr && (
          <div className="bg-brand-light rounded-xl px-5 py-3 text-center">
            <p className="text-ds-caption text-brand font-medium">Est. GMV Impact</p>
            <p className="text-ds-h3 font-display text-brand-dark mt-0.5">{target.gmv_impact_inr}</p>
            {target.projected_ctr_range && (
              <p className="text-ds-caption text-brand mt-0.5">CTR {target.projected_ctr_range}</p>
            )}
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "A9 Compliance",   value: target.scores.a9_compliance   },
          { label: "Rufus Readiness", value: target.scores.rufus_readiness },
          { label: "LQS Score",       value: target.scores.lqs_score       },
        ].map(({ label, value }) => (
          <div key={label} className="bg-n-50 rounded-xl p-4">
            <p className="text-ds-caption text-n-500">{label}</p>
            <p className="text-ds-h1 font-display text-n-900 mt-1">{value}</p>
            <div className="mt-2 h-1.5 bg-n-200 rounded-full overflow-hidden">
              <div className="h-full bg-brand rounded-full" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-ai-bg border border-ai-border rounded-xl p-4">
        <p className="text-ds-caption text-brand font-medium mb-1">🎯 Top Fix</p>
        <p className="text-ds-body text-n-700">{exec.top_fix}</p>
      </div>
    </section>
  );
}
