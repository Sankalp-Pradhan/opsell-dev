// Section9QuickWins.tsx
export default function Section9QuickWins({ quickWins }: { quickWins: string[] }) {
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-6">Quick Wins</h2>
      <div className="space-y-3">
        {quickWins.map((win, i) => (
          <div key={i} className="flex items-start gap-3 bg-success-light rounded-xl px-4 py-3">
            <span className="text-success mt-0.5 shrink-0">✓</span>
            <p className="text-ds-body text-n-800">{win}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
