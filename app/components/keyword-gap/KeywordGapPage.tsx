// ============================================================================
// <KeywordGapPage />
// ============================================================================
// Composes all 11 sections of the Keyword Gap Analysis page.
//
// Data source: keywordGap API (KeywordGapData)
//
// Page reads top to bottom as an intelligence report:
//   1.  Hero                    — orient with gap score and counts
//   2.  Coverage Comparison     — seller vs competitor keyword breadth
//   3.  Critical Keywords       — immediate opportunities (most important)
//   4.  Secondary Opportunities — lower-priority backend terms (grouped)
//   5.  Content Gap Findings    — AI audit timeline
//   6.  Placement Guide         — where to add each keyword
//   7.  Competitor Intelligence — ranked frequency list
//   8.  Optimized Title Preview — tangible rewritten output
//   9.  Backend Audit           — byte plan + generated string
//   10. Opportunity Summary     — footer stats + CTA
//   11. Keyword Explorer        — expandable raw data accordion
// ============================================================================
'use client'

import { KeywordGapData } from "./api";
import OpportunitySummarySection from "./Section10OpportunitySummary";
import KeywordExplorerSection from "./Section11KeywordExplorer";
import KeywordGapHero from "./Section1Hero";
import CoverageComparisonSection from "./Section2CoverageComparison";
import CriticalKeywordsSection from "./Section3CriticalKeywords";
import SecondaryOpportunitiesSection from "./Section4SecondaryOpportunities";
import ContentGapsSection from "./Section5ContentGaps";
import PlacementGuideSection from "./Section6PlacementGuide";
import CompetitorIntelligenceSection from "./Section7CompetitorIntelligence";
import TitlePreviewSection from "./Section8TitlePreview";
import BackendAuditSection from "./Section9BackendAudit";


export default function KeywordGapPage({
  data,
  asin,
}: {
  data: KeywordGapData;
  asin: string;
}) {
  return (
    <div className="min-h-screen bg-n-50">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-16 py-8">

        {/* Section 1 — Hero / Executive Summary */}
        <KeywordGapHero data={data} />

        <div className="mt-6 flex flex-col gap-6">

          {/* Section 2 — Coverage Comparison */}
          <CoverageComparisonSection data={data} />

          {/* Section 3 — Critical Missing Keywords ← most important */}
          <CriticalKeywordsSection data={data} />

          {/* Section 4 — Secondary Opportunities */}
          <SecondaryOpportunitiesSection data={data} />

          {/* Section 5 — Content Gap Findings */}
          <ContentGapsSection data={data} />

          {/* Section 6 — Placement Guide */}
          <PlacementGuideSection data={data} />

          {/* Section 7 — Competitor Intelligence */}
          <CompetitorIntelligenceSection data={data} />

          {/* Section 8 — Optimized Title Preview */}
          <TitlePreviewSection data={data} />

          {/* Section 9 — Backend Search Terms Audit */}
          <BackendAuditSection data={data} />

          {/* Section 10 — Opportunity Summary + CTA */}
          <OpportunitySummarySection asin={asin} data={data} />
          c
          {/* Section 11 — Raw Keyword Explorer (accordion) */}
          <KeywordExplorerSection data={data} />

        </div>
      </div>
    </div>
  );
}
