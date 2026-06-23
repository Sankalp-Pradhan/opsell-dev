export default function TextEnhancementLoader() {
  return (
    <div className="min-h-screen bg-n-50 animate-pulse">
      {/* Header skeleton */}
      <div className="bg-white border-b border-n-border px-6 py-4">
        <div className="h-3 w-32 bg-n-200 rounded mb-2" />
        <div className="h-6 w-64 bg-n-200 rounded mb-1" />
        <div className="h-4 w-40 bg-n-100 rounded" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Hero skeleton */}
        <div className="bg-white border border-n-border rounded-2xl shadow-sm p-6">
          <div className="h-5 w-48 bg-n-200 rounded mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-20 bg-n-100 rounded-xl" />
            ))}
          </div>
        </div>

        {/* Card skeletons */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-white border border-n-border rounded-2xl shadow-sm p-6"
          >
            <div className="h-5 w-40 bg-n-200 rounded mb-4" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-n-100 rounded" />
              <div className="h-4 w-5/6 bg-n-100 rounded" />
              <div className="h-4 w-4/6 bg-n-100 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}