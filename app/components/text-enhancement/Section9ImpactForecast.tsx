import { Impact } from "@/app/(text-enhancement)/lib/types";

interface Props {
  impact: Impact;
}

export default function Section9ImpactForecast({ impact }: Props) {
  return (
    <section className="bg-white border border-n-border rounded-2xl shadow-sm p-6 space-y-5">
      <div>
        <p className="text-ds-caption text-n-400 uppercase tracking-wide">
          Projections
        </p>
        <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
          Impact Forecast
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
          <p className="text-ds-caption text-blue-700 font-medium uppercase tracking-wide mb-2">
            Expected CTR Improvement
          </p>
          <p className="text-3xl font-bold text-blue-900">+15-25%</p>
          <p className="text-ds-caption text-blue-600 mt-2">
            Based on keyword optimization and intent alignment
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
          <p className="text-ds-caption text-emerald-700 font-medium uppercase tracking-wide mb-2">
            Estimated Sales Impact
          </p>
          <p className="text-3xl font-bold text-emerald-900">+10-20%</p>
          <p className="text-ds-caption text-emerald-600 mt-2">
            Assuming proportional conversion rate increase
          </p>
        </div>
      </div>
    </section>
  );
}
