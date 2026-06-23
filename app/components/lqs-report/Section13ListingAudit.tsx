interface Props { title: string; flags: string[] }

export default function Section13ListingAudit({ title, flags }: Props) {
  return (
    <section className="bg-white rounded-2xl shadow-elev-2 p-8">
      <h2 className="text-ds-h2 font-display text-n-900 mb-6">Raw Listing Audit</h2>
      <div className="mb-6">
        <p className="text-ds-caption text-n-500 mb-2 uppercase tracking-wide">Current Title</p>
        <div className="bg-n-50 border border-n-border rounded-xl px-4 py-3 font-mono text-ds-body-sm text-n-800">{title}</div>
      </div>
      <div>
        <p className="text-ds-caption text-n-500 mb-3 uppercase tracking-wide">Detected Issues ({flags.length})</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {flags.map((f) => (
            <div key={f} className="flex items-center gap-2 bg-error-light border border-error rounded-lg px-3 py-2">
              <span className="text-error text-xs">✕</span>
              <span className="text-ds-caption font-mono text-n-800">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
