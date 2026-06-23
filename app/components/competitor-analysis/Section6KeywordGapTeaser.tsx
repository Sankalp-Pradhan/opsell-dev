// import Link from "next/link";
// import { MissingKeyword } from "@/app/(competitor-analysis)/types/api";
// import { ProgressBar } from "./shared/Primitives";

// /**
//  * SECTION 6 — Missing keywords teaser (top 3)
//  * Source: Keyword Gap API (`missing_critical`)
//  */
// export default function KeywordGapTeaserSection({
//   missingCritical,
//   remainingCount,
// }: {
//   missingCritical: MissingKeyword[];
//   remainingCount?: number;
// }) {
//   const topThree = missingCritical.slice(0, 3);
//   const more = remainingCount ?? 0;
//   const totalKeywords = topThree.length + more;

//   return (
//     <div className="bg-white rounded-[24px] border border-n-border shadow-elev-1 p-6">
//       <div className="flex items-center justify-between mb-5">
//         <h2 className="text-ds-h3 font-display text-n-800">
//           Critical keywords you're missing
//         </h2>

//         <Link
//           href="/keyword-gap"
//           className="text-ds-caption text-brand font-medium hover:underline"
//         >
//           View full keyword gap →
//         </Link>
//       </div>

//       <div className="divide-y divide-n-border">
//         {topThree.map((kw) => (
//           <KeywordRow key={kw.keyword} keyword={kw} />
//         ))}
//       </div>

//       {/* NAVIGATION CARD */}
//       <Link
//         href="  href={`/keyword-gap?asin=${data.competitor.asin}`}"
//         className="
//     group
//     relative
//     mt-6
//     block
//     overflow-hidden
//     rounded-[24px]
//     border
//     border-indigo-200/50
//     bg-gradient-to-br
//     from-violet-50
//     via-white
//     to-violet-50
//     p-6
//     cursor-pointer
//     transition-all
//     duration-500
//     hover:-translate-y-1
//     hover:border-indigo-400/40
//     hover:shadow-[0_32px_64px_rgba(0,0,0,0.22),0_8px_24px_rgba(0,0,0,0.12)]
//   "
//       >
//         {/* Light bg (fades out on hover) */}
//         <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 transition-opacity duration-500 group-hover:opacity-0" />

//         {/* Dark bg (fades in on hover) */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#111118] to-[#16161f] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//         <div className="relative z-10 flex items-center justify-between gap-6">
//           {/* LEFT */}
//           <div className="flex-1">
//             <div className="flex items-center gap-2 flex-wrap">
//               <span className="
//           inline-flex items-center rounded-full
//           bg-emerald-100 group-hover:bg-emerald-500/20
//           px-2.5 py-1 text-[11px] font-semibold
//           text-emerald-700 group-hover:text-emerald-300
//           transition-colors duration-400
//         ">
//                 ✓ Competitor analysis complete
//               </span>

//               <span className="
//           rounded-full border border-indigo-200/70 group-hover:border-indigo-400/30
//           bg-white/80 group-hover:bg-white/[0.07]
//           px-3 py-1 text-[11px] font-medium
//           text-indigo-700 group-hover:text-indigo-300/90
//           transition-colors duration-400
//         ">
//                 NEXT STEP
//               </span>
//             </div>

//             <h3 className="
//         mt-4 text-[22px] font-semibold tracking-tight
//         text-slate-900 group-hover:text-slate-50
//         transition-colors duration-400
//       ">
//               Keyword gap analysis
//             </h3>

//             <p className="
//         mt-2 max-w-2xl text-sm leading-relaxed
//         text-slate-600 group-hover:text-slate-300/75
//         transition-colors duration-400
//       ">
//               Your competitors rank for keywords your listing is currently missing.
//               Explore keyword opportunities, placement suggestions, indexation gaps,
//               and AI-powered recommendations.
//             </p>

//             <div className="mt-5 flex items-center">
//               <span className="
//           inline-flex items-center rounded-xl
//           bg-indigo-600 group-hover:bg-indigo-500
//           px-4 py-2 text-sm font-medium text-white
//           transition-all duration-300
//           group-hover:shadow-[0_0_24px_rgba(99,102,241,0.45)]
//         ">
//                 Open keyword report
//               </span>

//               <span className="
//           ml-3 text-xs
//           text-slate-500 group-hover:text-slate-500/60
//           transition-colors duration-400
//         ">
//                 Click to continue analysis
//               </span>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-5 shrink-0">
//             <div className="text-right">
//               <div className="
//           text-4xl font-bold tracking-tight
//           text-slate-900 group-hover:text-slate-50
//           transition-colors duration-400
//         ">
//                 {totalKeywords}
//               </div>

//               <div className="
//           mt-1 text-xs font-medium uppercase tracking-wider
//           text-slate-500 group-hover:text-slate-500/60
//           transition-colors duration-400
//         ">
//                 Missing opportunities
//               </div>
//             </div>

//             <div className="
//         flex h-14 w-14 items-center justify-center
//         rounded-2xl border border-indigo-200/70 group-hover:border-indigo-400/40
//         bg-white group-hover:bg-indigo-500/12
//         text-2xl text-indigo-600 group-hover:text-indigo-300
//         shadow-sm group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]
//         transition-all duration-500
//         group-hover:translate-x-1.5 group-hover:scale-110
//       ">
//               →
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }

// function KeywordRow({ keyword }: { keyword: MissingKeyword }) {
//   const coverage = keyword.competitor_coverage;

//   const barColor =
//     coverage >= 5
//       ? "bg-error"
//       : coverage >= 3
//         ? "bg-warning"
//         : "bg-n-300";

//   return (
//     <div className="flex items-center gap-4 py-3">
//       <span className="font-mono text-ds-caption bg-brand-light text-brand px-2 py-1 rounded-md shrink-0">
//         {keyword.keyword}
//       </span>

//       <span className="text-ds-caption text-n-500 whitespace-nowrap">
//         Used by {coverage} competitors
//       </span>

//       <div className="flex-1 max-w-[160px]">
//         <ProgressBar
//           value={coverage}
//           max={10}
//           colorClassName={barColor}
//           heightClassName="h-1.5"
//         />
//       </div>

//       <span className="text-ds-caption font-medium text-n-700 bg-n-100 px-2 py-0.5 rounded-full whitespace-nowrap ml-auto">
//         {keyword.suggested_placement.replace(/_/g, " ")}
//       </span>
//     </div>
//   );
// }


import Link from "next/link";
import { MissingKeyword } from "@/app/(competitor-analysis)/types/api";
import { ProgressBar } from "./shared/Primitives";

export default function KeywordGapTeaserSection({
  missingCritical,
  remainingCount,
  asin,                        // ← add this
}: {
  missingCritical: MissingKeyword[];
  remainingCount?: number;
  asin: string;                // ← add this
}) {
  const topThree = missingCritical.slice(0, 3);
  const more = remainingCount ?? 0;
  const totalKeywords = topThree.length + more;
  const keywordGapHref = `/keyword-gap?asin=${asin}`;  // ← one source of truth

  return (
    <div className="bg-white rounded-[24px] border border-n-border shadow-elev-1 p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-ds-h3 font-display text-n-800">
          Critical keywords you're missing
        </h2>

        <Link
          href={keywordGapHref}                        // ← fixed
          className="text-ds-caption text-brand font-medium hover:underline"
        >
          View full keyword gap →
        </Link>
      </div>

      <div className="divide-y divide-n-border">
        {topThree.map((kw) => (
          <KeywordRow key={kw.keyword} keyword={kw} />
        ))}
      </div>

      {/* NAVIGATION CARD */}
      <Link
        href={keywordGapHref}                          // ← fixed
        className="
          group relative mt-6 block overflow-hidden rounded-[24px]
          border border-indigo-200/50
          bg-gradient-to-br from-violet-50 via-white to-violet-50
          p-6 cursor-pointer transition-all duration-500
          hover:-translate-y-1 hover:border-indigo-400/40
          hover:shadow-[0_32px_64px_rgba(0,0,0,0.22),0_8px_24px_rgba(0,0,0,0.12)]
        "
      >
        {/* Light bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 transition-opacity duration-500 group-hover:opacity-0" />
        {/* Dark bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#111118] to-[#16161f] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex items-center justify-between gap-6">
          {/* LEFT */}
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center rounded-full bg-emerald-100 group-hover:bg-emerald-500/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 group-hover:text-emerald-300 transition-colors duration-400">
                ✓ Competitor analysis complete
              </span>
              <span className="rounded-full border border-indigo-200/70 group-hover:border-indigo-400/30 bg-white/80 group-hover:bg-white/[0.07] px-3 py-1 text-[11px] font-medium text-indigo-700 group-hover:text-indigo-300/90 transition-colors duration-400">
                NEXT STEP
              </span>
            </div>

            <h3 className="mt-4 text-[22px] font-semibold tracking-tight text-slate-900 group-hover:text-slate-50 transition-colors duration-400">
              Keyword gap analysis
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 group-hover:text-slate-300/75 transition-colors duration-400">
              Your competitors rank for keywords your listing is currently missing.
              Explore keyword opportunities, placement suggestions, indexation gaps,
              and AI-powered recommendations.
            </p>

            <div className="mt-5 flex items-center">
              <span className="inline-flex items-center rounded-xl bg-indigo-600 group-hover:bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(99,102,241,0.45)]">
                Open keyword report
              </span>
              <span className="ml-3 text-xs text-slate-500 group-hover:text-slate-500/60 transition-colors duration-400">
                Click to continue analysis
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="text-right">
              <div className="text-4xl font-bold tracking-tight text-slate-900 group-hover:text-slate-50 transition-colors duration-400">
                {totalKeywords}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 group-hover:text-slate-500/60 transition-colors duration-400">
                Missing opportunities
              </div>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-200/70 group-hover:border-indigo-400/40 bg-white group-hover:bg-indigo-500/12 text-2xl text-indigo-600 group-hover:text-indigo-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500 group-hover:translate-x-1.5 group-hover:scale-110">
              →
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function KeywordRow({ keyword }: { keyword: MissingKeyword }) {
  const coverage = keyword.competitor_coverage;
  const barColor = coverage >= 5 ? "bg-error" : coverage >= 3 ? "bg-warning" : "bg-n-300";

  return (
    <div className="flex items-center gap-4 py-3">
      <span className="font-mono text-ds-caption bg-brand-light text-brand px-2 py-1 rounded-md shrink-0">
        {keyword.keyword}
      </span>
      <span className="text-ds-caption text-n-500 whitespace-nowrap">
        Used by {coverage} competitors
      </span>
      <div className="flex-1 max-w-[160px]">
        <ProgressBar value={coverage} max={10} colorClassName={barColor} heightClassName="h-1.5" />
      </div>
      <span className="text-ds-caption font-medium text-n-700 bg-n-100 px-2 py-0.5 rounded-full whitespace-nowrap ml-auto">
        {keyword.suggested_placement.replace(/_/g, " ")}
      </span>
    </div>
  );
}