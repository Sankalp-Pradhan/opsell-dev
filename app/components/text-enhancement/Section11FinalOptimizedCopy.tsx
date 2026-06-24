"use client"

import { HybridVariant } from "@/app/(text-enhancement)/lib/types";

interface Props {
  hybrid: HybridVariant;
}

export default function Section11FinalOptimizedCopy({ hybrid }: Props) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const bulletsText = hybrid.bullets.join("\n");

  const stripHtml = (html: string) =>
    html.replace(/<[^>]*>/g, "").replace(/&[a-z]+;/gi, " ").trim();

  return (
    <section className="py-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h2 className="text-[22px] font-medium text-n-900">
          Final optimized copy
        </h2>
        <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-md">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          Ready to deploy
        </span>
      </div>

      {/* Main card */}
      <div className="bg-white border border-n-100 rounded-xl overflow-hidden">
        {/* Title section */}
        <div className="px-6 py-5 border-b border-n-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-medium tracking-[0.09em] uppercase text-n-400">
              Title
            </p>
            <button
              onClick={() => copyToClipboard(hybrid.title)}
              className="flex items-center gap-1.5 text-[12px] text-n-400 border border-n-200 rounded-md px-2.5 py-1 hover:bg-n-50 transition-colors"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </button>
          </div>
          <p className="font-serif text-[20px] leading-snug text-n-900 font-normal">
            {hybrid.title}
          </p>
        </div>

        {/* Bullets section */}
        <div className="px-6 py-5 border-b border-n-100">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-medium tracking-[0.09em] uppercase text-n-400">
              Bullet points
            </p>
            <button
              onClick={() => copyToClipboard(bulletsText)}
              className="flex items-center gap-1.5 text-[12px] text-n-400 border border-n-200 rounded-md px-2.5 py-1 hover:bg-n-50 transition-colors"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </button>
          </div>
          <ul className="space-y-2.5">
            {hybrid.bullets.map((bullet: string, i: number) => (
              <li key={i} className="flex gap-3 items-start">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-[7px] shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[14px] leading-relaxed text-n-600">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Description section */}
        <div className="px-6 py-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-medium tracking-[0.09em] uppercase text-n-400">
              Description
            </p>
            <button
              onClick={() => copyToClipboard(stripHtml(hybrid.description))}
              className="flex items-center gap-1.5 text-[12px] text-n-400 border border-n-200 rounded-md px-2.5 py-1 hover:bg-n-50 transition-colors"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </button>
          </div>
          <div
            className="text-[14px] leading-[1.7] text-n-600 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: hybrid.description }}
          />
        </div>
      </div>

      {/* Rationale / Implementation notes */}
      <div className="bg-n-50 border border-n-100 rounded-xl px-5 py-4 flex gap-3 items-start">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-n-400 shrink-0 mt-0.5"
          aria-hidden="true"
        >
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
        </svg>
        <div>
          <p className="text-[11px] font-medium tracking-[0.09em] uppercase text-n-400 mb-1">
            Implementation notes
          </p>
          <p className="text-[13px] leading-[1.65] text-n-500">
            {hybrid.rationale}
          </p>
        </div>
      </div>
    </section>
  );
}