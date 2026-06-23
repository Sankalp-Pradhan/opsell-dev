import Section1Hero from "./Section1Hero";
import Section2ScoreBreakdown from "./Section2ScoreBreakdown";
import Section3A9RufusRadar from "./Section3A9RufusRadar";
import Section4HealthFlags from "./Section4HealthFlags";
import Section5PriorityFixes from "./Section5PriorityFixes";
import Section6DimensionGaps from "./Section6DimensionGaps";
import Section7GapToLeader from "./Section7GapToLeader";
import Section8CompetitorLeaderboard from "./Section8CompetitorLeaderboard";
import Section9QuickWins from "./Section9QuickWins";
import Section10Strengths from "./Section10Strengths";
import Section11MediumLongTerm from "./Section11MediumLongTerm";
import Section12DimensionExplorer from "./Section12DimensionExplorer";
import Section13ListingAudit from "./Section13ListingAudit";
import TextEnhancementCTASection from "./TextEnhancementCTASection";
import { LQSApiResponse, LQSResultEntry } from "@/app/(lqs-score)/types/api";
import OpportunitySummarySection from "./section14";

interface Props {
  data: LQSApiResponse;
  asin: string;
}

export default function LQSReportPage({ data, asin }: Props) {
  const target: LQSResultEntry = data.results.find((r) => r.label === "TARGET")!;

  return (
    <main className="min-h-screen bg-n-50">
      <div className="bg-white border-b border-n-border px-6 py-4">
        <p className="text-ds-caption text-n-500 font-mono">{data.target_asin}</p>
        <h1 className="text-ds-h2 font-display text-n-900 mt-0.5">Listing Quality Score Report</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <Section1Hero data={data} target={target} />
        <Section2ScoreBreakdown scores={target.scores} />
        {target.dimension_breakdown && (
          <Section3A9RufusRadar breakdown={target.dimension_breakdown} />
        )}
        <Section4HealthFlags health={data.feedback.health} flags={target.flags ?? []} />
        <Section5PriorityFixes priorityFixes={data.feedback.priority_fixes} asin={data.target_asin} />
        <Section6DimensionGaps dimensionGaps={data.dimension_gaps} />
        <Section7GapToLeader gapReport={data.gap_report} />
        <Section8CompetitorLeaderboard scoreComparison={data.score_comparison} />
        <Section9QuickWins quickWins={data.feedback.quick_wins} />
        <Section10Strengths strengths={data.feedback.strengths} />
        <Section11MediumLongTerm mediumTerm={data.feedback.medium_term} longTerm={data.feedback.long_term} />
        {target.dimension_breakdown && (
          <Section12DimensionExplorer breakdown={target.dimension_breakdown} />
        )}
        <Section13ListingAudit title={target.title} flags={target.flags ?? []} />
        <OpportunitySummarySection data={data} asin={asin} />
        
        
              </div>
    </main>
  );
}