"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function LQSReportError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[LQS Report Error]", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
      <div className="text-center max-w-md">
        <div className="w-12 h-12 rounded-xl bg-error-light flex items-center justify-center mx-auto mb-4">
          <span className="text-error text-xl">⚠</span>
        </div>
        <h2 className="text-ds-h2 font-display text-n-900 mb-2">Failed to load LQS Report</h2>
        <p className="text-ds-body text-n-500 mb-6">
          {error.message ?? "Something went wrong while fetching the report. Please try again."}
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-brand text-white rounded-lg text-ds-body font-medium hover:bg-brand-dark transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
