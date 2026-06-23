"use client";

export default function AnalysisError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-n-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center bg-white border border-n-border rounded-2xl shadow-elev-2 p-8 flex flex-col items-center gap-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-error" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7v5M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div>
          <p className="text-ds-h3 font-display font-semibold text-n-800 mb-1">
            Analysis failed
          </p>
          <p className="text-ds-body-sm text-n-500">
            {error.message ?? "Something went wrong. Please try again."}
          </p>
        </div>

        <button
          onClick={reset}
          className="mt-2 bg-brand hover:bg-brand/90 text-white text-ds-body-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
        >
          Try again
        </button>

        <p className="text-[12px] text-n-400">
          If this keeps happening, check that your Amazon URL is valid.
        </p>
      </div>
    </div>
  );
}