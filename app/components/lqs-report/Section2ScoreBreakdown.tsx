import { LQSApiResponse, LQSResultEntry, LQSScores } from "@/app/(competitor-analysis)/types/api";

interface Props { scores: LQSScores }

function ScoreRing({ value, label }: { value: number; label: string }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  const color = value >= 60 ? "#16A34A" : value >= 40 ? "#F59E0B" : "#EF4444";
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="96" height="96" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r={r} fill="none" stroke="#F0F1F3" strokeWidth="8" />
        <circle cx="48" cy="48" r={r} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform="rotate(-90 48 48)" />
        <text x="48" y="53" textAnchor="middle" fontSize="18" fontWeight="700" fill={color}>{value}</text>
      </svg>
      <p className="text-ds-body-sm text-n-600 font-medium text-center">{label}</p>
    </div>
  );
}

export default function Section2ScoreBreakdown({ scores }: Props) {
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-6">Score Breakdown</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        <ScoreRing value={scores.overall}         label="Overall"         />
        <ScoreRing value={scores.a9_compliance}   label="A9 Compliance"   />
        <ScoreRing value={scores.rufus_readiness} label="Rufus Readiness" />
        <ScoreRing value={scores.lqs_score}       label="LQS Score"       />
      </div>
    </section>
  );
}
