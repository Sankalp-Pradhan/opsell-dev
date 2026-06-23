export default function Section10Strengths({ strengths }: { strengths: string[] }) {
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-6">Strengths</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {strengths.map((s, i) => (
          <div key={i} className="bg-brand-light border border-ai-border rounded-xl px-5 py-4">
            <p className="text-brand text-xl mb-2">⭐</p>
            <p className="text-ds-body text-n-800">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
