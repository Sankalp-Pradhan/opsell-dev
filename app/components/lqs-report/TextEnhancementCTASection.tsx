import Link from "next/link";

export default function TextEnhancementCTASection({ asin }: { asin: string }) {
  const textEnhancementHref = `/text-enhancement?asin=${asin}`;

  return (
    <Link
      href={textEnhancementHref}
      className="
        group relative block overflow-hidden rounded-2xl
        border border-brand/20
        bg-gradient-to-br from-ai-bg via-white to-ai-bg
        p-6 cursor-pointer transition-all duration-500
        hover:-translate-y-1 hover:border-brand/40
        hover:shadow-elev-3
      "
    >
      {/* Light bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-ai-bg transition-opacity duration-500 group-hover:opacity-0" />
      {/* Dark bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex items-center justify-between gap-6">
        {/* LEFT */}
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center rounded-full bg-ai-bg group-hover:bg-brand/20 px-2.5 py-1 text-[11px] font-semibold text-brand group-hover:text-brand/80 transition-colors duration-400">
              ✓ Listing health analyzed
            </span>
            <span className="rounded-full border border-brand/30 group-hover:border-brand/20 bg-white/80 group-hover:bg-white/[0.07] px-3 py-1 text-[11px] font-medium text-brand group-hover:text-slate-200 transition-colors duration-400">
              NEXT STEP
            </span>
          </div>

          <h3 className="mt-4 text-[22px] font-semibold tracking-tight text-slate-900 group-hover:text-slate-50 transition-colors duration-400">
            Optimize your listing copy
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 group-hover:text-slate-300/75 transition-colors duration-400">
            Get AI-powered title, bullet, and description variants optimized for A9 compliance and Rufus readiness. See exactly what changed and why, with a complete implementation checklist.
          </p>

          <div className="mt-5 flex items-center">
            <span className="inline-flex items-center rounded-lg bg-brand group-hover:bg-brand-dark px-4 py-2 text-sm font-medium text-white transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(80,70,229,0.45)]">
              Open text enhancement
            </span>
            <span className="ml-3 text-xs text-slate-500 group-hover:text-slate-500/60 transition-colors duration-400">
              Click to generate variants
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 shrink-0">
          <div className="text-right">
            <div className="text-4xl font-bold tracking-tight text-slate-900 group-hover:text-slate-50 transition-colors duration-400">
              3
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 group-hover:text-slate-500/60 transition-colors duration-400">
              Content variants
            </div>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-brand/20 group-hover:border-brand/40 bg-white group-hover:bg-brand/12 text-2xl text-brand group-hover:text-brand/80 shadow-sm group-hover:shadow-[0_0_20px_rgba(80,70,229,0.3)] transition-all duration-500 group-hover:translate-x-1.5 group-hover:scale-110">
            →
          </div>
        </div>
      </div>
    </Link>
  );
}
