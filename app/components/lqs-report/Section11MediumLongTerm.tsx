interface Props { mediumTerm: string[]; longTerm: string[] }

function Phase({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <h3 className="text-ds-h3 font-display text-n-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-ds-body-sm text-n-700">
            <span className="mt-0.5 shrink-0 text-n-400">→</span>{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Section11MediumLongTerm({ mediumTerm, longTerm }: Props) {
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-6">Roadmap</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <Phase title="Phase 2 — Medium Term" items={mediumTerm} color="bg-warning-light border-warning" />
        <Phase title="Phase 3 — Long Term"   items={longTerm}   color="bg-brand-light border-ai-border" />
      </div>
    </section>
  );
}
