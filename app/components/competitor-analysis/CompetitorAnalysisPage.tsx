
// import { CompetitorAnalysisData } from "@/app/(competitor-analysis)/types/api";
// import HeroSection from "./Section1Hero";
// import ScoreComparisonTable from "./Section2ScoreComparison";
// import CompetitorGridSection from "./Section3CompetitorGrid";
// import GapSummarySection from "./Section4GapSummary";
// import TopFixPrioritiesSection from "./Section5TopFixPriorities";
// import KeywordGapTeaserSection from "./Section6KeywordGapTeaser";
// import StrengthsQuickWinsSection from "./Section7StrengthsQuickWins";
// import { getTargetCard } from "@/app/(competitor-analysis)/lib/api/merge";

// /**
//  * ============================================================================
//  * <CompetitorAnalysisPage />
//  * ============================================================================
//  * Composes all 7 sections of the Competitor Analysis page.
//  *
//  * Data sources (3 upstream APIs — see lib/api/competitor-analysis-api.ts):
//  *   - lqs          -> Sections 1, 2, 4, 5, 7
//  *   - competitor   -> Section 3 (+ LQS scores overlaid)
//  *   - keywordGap   -> Section 6 (teaser, top 3 only)
//  *
//  * Page reads top to bottom as a story:
//  *   1. Hero            — orient with own scores
//  *   2. Score table      — competitive landscape
//  *   3. Competitor grid  — competitive landscape (visual)
//  *   4. Gap summary      — quantify the gap to the leader
//  *   5. Top fix teaser    — pulls user toward Page 3 (LQS report)
//  *   6. Keyword teaser    — pulls user toward Page 2 (Keyword Gap)
//  *   7. Strengths/wins    — closes with motivation
//  * ============================================================================
//  */
// export default function CompetitorAnalysisPage({
//   data,
//   onNavigateToLQSReport, // wire up navigation to Page 3
//   onNavigateToKeywordGap, // wire up navigation to Page 2
// }: {
//   data: CompetitorAnalysisData;
//   onNavigateToLQSReport?: () => void;
//   onNavigateToKeywordGap?: () => void;
// }) {
//   const { lqs, competitor, keywordGap } = data;
//   const target = getTargetCard(lqs.results);

//   if (!target) {
//     // Defensive guard — TARGET entry should always exist in lqs.results
//     return (
//       <div className="p-8 text-center text-n-500 text-ds-body">
//         No target listing data available.
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-n-50">
//       <div className="w-full max-w-[1200px] mx-auto px-12 xl:px-16 py-8">

//         {/* Section 1 — Hero */}
//         <HeroSection lqs={data.lqs} competitor={data.competitor} keywordGap={data.keywordGap} />

//         <div className="mt-6 flex flex-col gap-6">
//           {/* Section 2 — Score comparison table */}
//           <ScoreComparisonTable rows={lqs.score_comparison} />

//           {/* Section 3 — Competitor product cards grid */}
//           <CompetitorGridSection competitors={competitor.competitors} lqsResults={lqs.results} />

//           {/* Section 4 — Gap summary */}
//           <GapSummarySection gapReport={lqs.gap_report} />

//           {/* Section 5 — Top fix priorities teaser */}
//           <TopFixPrioritiesSection
//             priorityFixes={lqs.feedback.priority_fixes}
//             onViewFullReport={onNavigateToLQSReport}
//           />


//           {/* Section 6 — Strengths & quick wins */}
//           <StrengthsQuickWinsSection feedback={lqs.feedback} />

//           {/* Section 7 — Missing keywords teaser */}
//           {/* <KeywordGapTeaserSection
//             missingCritical={keywordGap.missing_critical}
//             remainingCount={keywordGap.missing_secondary?.length}
//           /> */}

//           <KeywordGapTeaserSection
//             missingCritical={keywordGap.missing_critical}
//             remainingCount={keywordGap.missing_secondary?.length}
//             asin={lqs.target_asin}    // ← add this
//           />

//         </div>

//       </div>
//     </div>
//   );
// }


import { CompetitorAnalysisData } from "@/app/(competitor-analysis)/types/api";
import HeroSection from "./Section1Hero";
import ScoreComparisonTable from "./Section2ScoreComparison";
import CompetitorGridSection from "./Section3CompetitorGrid";
import GapSummarySection from "./Section4GapSummary";
import TopFixPrioritiesSection from "./Section5TopFixPriorities";
import KeywordGapTeaserSection from "./Section6KeywordGapTeaser";
import StrengthsQuickWinsSection from "./Section7StrengthsQuickWins";
import { getTargetCard } from "@/app/(competitor-analysis)/lib/api/merge";

/**
 * ============================================================================
 * <CompetitorAnalysisPage />
 * ============================================================================
 * Composes all 7 sections of the Competitor Analysis page.
 *
 * Data sources (3 upstream APIs — see lib/api/competitor-analysis-api.ts):
 *   - lqs          -> Sections 1, 2, 4, 5, 7
 *   - competitor   -> Section 3 (+ LQS scores overlaid)
 *   - keywordGap   -> Section 6 (teaser, top 3 only)
 *
 * Navigation chain:
 *   Homepage → /competitor-analysis?asin=XXX
 *            → /keyword-gap?asin=XXX        (Section 6 CTA)
 *            → /lqs-score?asin=XXX          (Section 5 CTA)
 * ============================================================================
 */
export default function CompetitorAnalysisPage({
  data,
  onNavigateToLQSReport,
  onNavigateToKeywordGap,
}: {
  data: CompetitorAnalysisData;
  onNavigateToLQSReport?: () => void;
  onNavigateToKeywordGap?: () => void;
}) {
  const { lqs, competitor, keywordGap } = data;
  const target = getTargetCard(lqs.results);

  if (!target) {
    return (
      <div className="p-8 text-center text-n-500 text-ds-body">
        No target listing data available.
      </div>
    );
  }

  const asin = lqs.target_asin;

  return (
    <div className="min-h-screen bg-n-50">
      <div className="w-full max-w-[1200px] mx-auto px-12 xl:px-16 py-8">

        {/* Section 1 — Hero */}
        <HeroSection lqs={data.lqs} competitor={data.competitor} keywordGap={data.keywordGap} />

        <div className="mt-6 flex flex-col gap-6">
          {/* Section 2 — Score comparison table */}
          <ScoreComparisonTable rows={lqs.score_comparison} />

          {/* Section 3 — Competitor product cards grid */}
          <CompetitorGridSection competitors={competitor.competitors} lqsResults={lqs.results} />

          {/* Section 4 — Gap summary */}
          <GapSummarySection gapReport={lqs.gap_report} />

          {/* Section 5 — Top fix priorities → links to LQS report */}
          <TopFixPrioritiesSection
            priorityFixes={lqs.feedback.priority_fixes}
            asin={asin}
            onViewFullReport={onNavigateToLQSReport}
          />

          {/* Section 6 — Strengths & quick wins */}
          <StrengthsQuickWinsSection feedback={lqs.feedback} />

          {/* Section 7 — Missing keywords teaser → links to Keyword Gap */}
          <KeywordGapTeaserSection
            missingCritical={keywordGap.missing_critical}
            remainingCount={keywordGap.missing_secondary?.length}
            asin={asin}
          />
        </div>

      </div>
    </div>
  );
}