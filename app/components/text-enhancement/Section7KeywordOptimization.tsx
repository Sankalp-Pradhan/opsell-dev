interface Props {
  keywordsAdded: string[];
}

export default function Section7KeywordOptimization({ keywordsAdded }: Props) {
  return (
    <section className="bg-white border border-n-border rounded-2xl shadow-sm p-6 space-y-5">
      <div>
        <p className="text-ds-caption text-n-400 uppercase tracking-wide">
          Coverage Analysis
        </p>
        <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
          Keyword Optimization
        </h2>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-ds-body font-semibold text-n-700">
            Keywords Added to Listing
          </p>
          <span className="bg-blue-100 text-blue-700 text-ds-caption font-semibold px-3 py-1 rounded-full">
            +{keywordsAdded.length} terms
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {keywordsAdded.map((kw) => (
            <span
              key={kw}
              className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 text-ds-caption font-medium px-3 py-1.5 rounded-full"
            >
              <span className="text-blue-400 text-xs">+</span>
              {kw}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="bg-n-50 border border-n-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold font-display text-n-900">
            {keywordsAdded.length}
          </p>
          <p className="text-ds-caption text-n-500 mt-1">New Keywords</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold font-display text-blue-700">
            Title
          </p>
          <p className="text-ds-caption text-blue-500 mt-1">Primary Placement</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold font-display text-blue-700">
            Bullets
          </p>
          <p className="text-ds-caption text-blue-500 mt-1">Secondary Placement</p>
        </div>
      </div>
    </section>
  );
}