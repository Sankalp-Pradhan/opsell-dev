
"use client";

import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function TextEnhancementError({ error, reset }: Props) {
  useEffect(() => {
    console.error("[TextEnhancement] Page error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-n-50 px-4">
      <div className="bg-white border border-n-border rounded-2xl shadow-sm p-8 max-w-md w-full text-center">
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
          <span className="text-red-500 text-xl">!</span>
        </div>
        <h2 className="text-ds-h3 font-display text-n-900 mb-2">
          Something went wrong
        </h2>
        <p className="text-ds-body text-n-500 mb-6">
          {error.message ?? "Failed to load the Text Enhancement report. Please try again."}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-n-900 text-white text-ds-body font-medium hover:bg-n-800 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}