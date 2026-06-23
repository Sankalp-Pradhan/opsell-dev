"use client";

import { useState } from "react";
import {
  LQSApiResponse,
  CompetitorApiResponse,
  KeywordGapApiResponse,
  LQSResultEntry,
  Feedback,
  ScoreComparisonRow,
  PriorityFix,
  LQSScores,
} from "@/app/(competitor-analysis)/types/api";

/* ---------------------------------------------
   PROPS
--------------------------------------------- */
interface HeroSectionProps {
  lqs: LQSApiResponse;
  competitor: CompetitorApiResponse;
  keywordGap: KeywordGapApiResponse;
}

/* ---------------------------------------------
   PURE HELPERS
--------------------------------------------- */
function getHealth(score: number) {
  if (score >= 85) return { label: "Market Leading", color: "text-[#16A34A]", bg: "bg-[#F0FDF4]", border: "border-[#16A34A]/15", dot: "bg-[#16A34A]" };
  if (score >= 70) return { label: "Competitive", color: "text-[#D97706]", bg: "bg-[#FFFBEB]", border: "border-[#F59E0B]/15", dot: "bg-[#F59E0B]" };
  if (score >= 50) return { label: "Needs Optimisation", color: "text-[#EA580C]", bg: "bg-[#FFF7ED]", border: "border-[#EA580C]/15", dot: "bg-[#EA580C]" };
  return { label: "High Risk", color: "text-[#DC2626]", bg: "bg-[#FEF2F2]", border: "border-[#DC2626]/15", dot: "bg-[#DC2626]" };
}

function scoreHex(s: number) { return s >= 85 ? "#16A34A" : s >= 70 ? "#F59E0B" : "#DC2626"; }
function scoreText(s: number) { return s >= 85 ? "text-[#16A34A]" : s >= 70 ? "text-[#D97706]" : "text-[#DC2626]"; }

function ring(score: number, size: number, sw: number) {
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  return { r, c, fill: (score / 100) * c, color: scoreHex(score), cx: size / 2, cy: size / 2 };
}

const TOOLTIPS: Record<string, string> = {
  "A9 Compliance": "Measures keyword relevance, title optimisation, bullet structure and Amazon ranking signals.",
  "Rufus Readiness": "Measures how effectively Amazon Rufus AI can understand and recommend the product.",
  "LQS": "Opsell Listing Quality Score combining discoverability, content quality and conversion readiness.",
  "Market Position": "Compares your listing against all analysed competitors by overall score.",
};

/* ---------------------------------------------
   SUB-RENDERS (inline, not exported components)
--------------------------------------------- */
function Tooltip({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const tip = TOOLTIPS[label];
  if (!tip) return null;
  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-3.5 h-3.5 rounded-full border border-[#D1D5DB] text-[#9CA3AF] flex items-center justify-center text-[9px] font-bold hover:border-[#9CA3AF] transition-colors"
        aria-label={`About ${label}`}
      >?</button>
      {open && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-[#111827] text-white text-[11px] leading-relaxed rounded-lg px-3 py-2.5 z-50 pointer-events-none"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        >
          {tip}
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
            style={{ borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "5px solid #111827" }} />
        </span>
      )}
    </span>
  );
}


type OpportunityCard = {
  key: string;
  value: string;
  label: string;
  sub: string;
  bg: string;
  border: string;
  valClass: string;
  labelClass: string;
  subClass: string;
  icon: React.ReactNode;
};

function RingLarge({ score }: { score: number }) {
  const { r, c, fill, color, cx, cy } = ring(score, 112, 7);
  return (
    <svg width={112} height={112} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F3F4F6" strokeWidth={7} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={7}
        strokeLinecap="round" strokeDasharray={`${fill} ${c}`}
        style={{ transition: "stroke-dasharray 0.9s ease" }} />
    </svg>
  );
}

function RingSmall({ score }: { score: number }) {
  const { r, c, fill, color, cx, cy } = ring(score, 40, 3);
  return (
    <svg width={40} height={40} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F3F4F6" strokeWidth={3} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={3}
        strokeLinecap="round" strokeDasharray={`${fill} ${c}`} />
    </svg>
  );
}

function PriorityDot({ impact }: { impact: number }) {
  const cls = impact >= 4 ? "bg-[#DC2626]" : impact >= 2.5 ? "bg-[#EA580C]" : "bg-[#D97706]";
  return <span className={`w-2 h-2 rounded-full shrink-0 ${cls}`} />;
}

/* ---------------------------------------------
   MAIN EXPORT
--------------------------------------------- */
export default function HeroSection({ lqs, competitor, keywordGap }: HeroSectionProps) {
  /* -- derived data -- */
  const target: LQSResultEntry = lqs.results.find((r) => r.label === "TARGET") ?? lqs.results[0];
  const feedback: Feedback = lqs.feedback;
  const scores: LQSScores = target.scores;
  const health = getHealth(scores.overall);

  const allScores: ScoreComparisonRow[] = lqs.score_comparison;
  const sorted = [...allScores].sort((a, b) => b.overall - a.overall);
  const targetRank = sorted.findIndex((s) => s.asin === target.asin) + 1;
  const totalCompetitors = allScores.length;
  const leaderScore = sorted[0]?.overall ?? 100;
  const gapToLeader = leaderScore - scores.overall;

  const missingCount =
    keywordGap.missing_critical.length + keywordGap.missing_secondary.length;

  const quickWins: PriorityFix[] = (target.fix_priority ?? []).slice(0, 4);
  const criticalFix: PriorityFix | undefined = quickWins[0];

  const productImage = competitor.competitors[0]?.main_image;

  const insightText = feedback.executive_summary.top_fix
    ? `Your listing ranks #${targetRank} of ${totalCompetitors} with an overall score of ${scores.overall}/100 — ${gapToLeader} points behind the category leader. ${feedback.executive_summary.top_fix}`
    : `Your listing scores ${scores.overall}/100, ranking #${targetRank} of ${totalCompetitors}. You are ${gapToLeader} points behind the category leader. Focus on keyword coverage and content depth to close this gap.`;

  /* -- metric cards for performance zone -- */
  const metricCards = [
    { label: "A9 Compliance", value: scores.a9_compliance },
    { label: "Rufus Readiness", value: scores.rufus_readiness },
    { label: "LQS", value: scores.lqs_score },
  ];

  /* -- opportunity cards — only API-backed -- */
  const oppCards: OpportunityCard[] = [target.gmv_impact_inr && {
    key: "gmv",
    value: target.gmv_impact_inr,
    label: "Revenue opportunity / month",
    sub: "Provided by LQS API",
    bg: "bg-[#F0FDF4]", border: "border-[#16A34A]/12",
    valClass: "text-[#16A34A]", labelClass: "text-[#15803D]", subClass: "text-[#16A34A]/50",
    icon: (
      <svg className="w-4 h-4 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  target.projected_ctr_range && {
    key: "ctr",
    value: target.projected_ctr_range,
    label: "Projected CTR range",
    sub: "Provided by LQS API",
    bg: "bg-[#EEF2FF]", border: "border-[#4F46E5]/12",
    valClass: "text-[#4F46E5]", labelClass: "text-[#4338CA]", subClass: "text-[#4F46E5]/50",
    icon: (
      <svg className="w-4 h-4 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
      </svg>
    ),
  },
  missingCount > 0 && {
    key: "keywords",
    value: String(missingCount),
    label: "Missing high-intent keywords",
    sub: `${keywordGap.missing_critical.length} critical · ${keywordGap.missing_secondary.length} secondary`,
    bg: "bg-[#FFFBEB]", border: "border-[#F59E0B]/12",
    valClass: "text-[#D97706]", labelClass: "text-[#B45309]", subClass: "text-[#D97706]/50",
    icon: (
      <svg className="w-4 h-4 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  ].filter(Boolean) as NonNullable<(typeof oppCards)[number]>[];

  /* ════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════ */
  return (
    <div className="w-full ">
      <div
        className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden"
        style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.05), 0 4px 20px 0 rgba(0,0,0,0.04)" }}
      >

        {/* ══════════════════════════════════════
            ZONE 1 — PRODUCT CONTEXT + AI INSIGHT
        ══════════════════════════════════════ */}
        <div className="px-8 pt-8 pb-6 border-b border-[#F3F4F6]">

          {/* Product header */}
          <div className="flex gap-5 min-w-0">
            <div className="shrink-0 w-[72px] h-[72px] rounded-[14px] bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center overflow-hidden">
              {productImage ? (
                <img src={productImage} alt="Product" className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              ) : (
                <svg className="w-7 h-7 text-[#D1D5DB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 19.5h16.5M4.5 4.5h15a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H4.5a.75.75 0 01-.75-.75V5.25A.75.75 0 014.5 4.5z" />
                </svg>
              )}
            </div>
            <div className="flex flex-col gap-2 min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-medium text-[#6B7280] bg-[#F9FAFB] border border-[#E5E7EB] px-2 py-0.5 rounded-md">Amazon India</span>
                <span className="text-[11px] font-medium text-[#6B7280] bg-[#F9FAFB] border border-[#E5E7EB] px-2 py-0.5 rounded-md">Fashion</span>
              </div>
              <h1 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#111827] line-clamp-2" title={target.title}>
                {target.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] font-medium text-[#9CA3AF] bg-[#F9FAFB] border border-[#E5E7EB] px-2 py-0.5 rounded-md">
                  {target.asin}
                </span>
                <span className={`text-[12px] font-medium px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${health.bg} ${health.color} ${health.border}`}>
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${health.dot}`} />
                  {health.label}
                </span>
                <span className="text-[12px] font-medium text-[#6B7280] bg-[#F9FAFB] border border-[#E5E7EB] px-2.5 py-0.5 rounded-full">
                  #{targetRank} of {totalCompetitors} competitors
                </span>
              </div>
            </div>
          </div>

          {/* AI insight panel */}
          <div className="mt-5 rounded-[14px] bg-[#FAFAFA] border border-[#F3F4F6] px-5 py-4">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-7 h-7 rounded-lg bg-[#EEF2FF] flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-[#4F46E5]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 016.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 10zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 10zm-7.828 4.828a.75.75 0 010 1.061L5.11 16.95a.75.75 0 01-1.06-1.06l1.06-1.062a.75.75 0 011.061 0zm5.656 0a.75.75 0 011.06 0l1.062 1.061a.75.75 0 01-1.061 1.06l-1.06-1.06a.75.75 0 010-1.061zM10 14a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 14zM6 10a4 4 0 118 0 4 4 0 01-8 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-[#6B7280]">AI Analysis</span>
                  {feedback.executive_summary.critical_flag_count > 0 && (
                    <span className="text-[11px] font-medium text-[#DC2626] bg-[#FEF2F2] px-2 py-0.5 rounded-full border border-[#DC2626]/10">
                      {feedback.executive_summary.critical_flag_count} critical issue{feedback.executive_summary.critical_flag_count > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
                <p className="text-[14px] font-medium text-[#374151] leading-[1.65]">{insightText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            ZONE 2 — PERFORMANCE OVERVIEW
        ══════════════════════════════════════ */}
        <div className="px-8 py-6 border-b border-[#F3F4F6]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF] mb-5">Performance Overview</p>

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-3">
            {/* Col 1 — Overall listing health */}
            <div className="bg-[#FAFAFA] border border-[#F3F4F6] rounded-[16px] px-5 py-4 flex items-center gap-4">
              <div className="relative flex items-center justify-center shrink-0">
                <RingLarge score={scores.overall} />
                <div className="absolute flex flex-col items-center">
                  <span className={`text-[30px] font-semibold tracking-[-0.04em] leading-none ${scoreText(scores.overall)}`}>
                    {scores.overall}
                  </span>
                  <span className="text-[10px] font-medium text-[#9CA3AF] mt-0.5 uppercase tracking-wide">/ 100</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className={`text-[16px] font-semibold leading-none ${health.color}`}>{health.label}</p>
                  <p className="text-[13px] text-[#9CA3AF] mt-1">Overall listing score</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[12px]">
                    <span className="text-[#9CA3AF]">Rank</span>
                    <span className="font-semibold text-[#374151]">#{targetRank} of {totalCompetitors}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px]">
                    <span className="text-[#9CA3AF]">Gap to leader</span>
                    <span className="font-semibold text-[#DC2626]">{gapToLeader > 0 ? `−${gapToLeader} pts` : "You lead"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px]">
                    <span className="text-[#9CA3AF]">Leader score</span>
                    <span className="font-semibold text-[#374151]">{leaderScore}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2 — Metric cards + market position */}
            <div className="flex flex-col gap-2">
              {/* Three metric cards */}
              <div className="grid grid-cols-3 gap-2">
                {metricCards.map(({ label, value }) => {
                  const h = getHealth(value);
                  return (
                    <div key={label} className="bg-[#FAFAFA] border border-[#F3F4F6] rounded-[14px] px-3.5 py-3 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="relative flex items-center justify-center shrink-0">
                          <RingSmall score={value} />
                          <span className={`absolute text-[10px] font-bold leading-none ${scoreText(value)}`}>{value}</span>
                        </div>
                        <div>
                          <p className={`text-[17px] font-semibold leading-none ${scoreText(value)}`}>{value}</p>
                          <p className={`text-[11px] font-medium mt-0.5 ${h.color}`}>{h.label}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-[12px] font-medium text-[#374151]">{label}</p>
                        <Tooltip label={label} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Market position bar */}
              <div className="bg-[#FAFAFA] border border-[#F3F4F6] rounded-[14px] px-4 py-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[12px] font-semibold text-[#374151]">Market Position</p>
                    <Tooltip label="Market Position" />
                  </div>
                  <span className="text-[12px] text-[#9CA3AF]">
                    #{targetRank} / {totalCompetitors} · {gapToLeader > 0 ? `${gapToLeader} pts behind leader` : "Leading"}
                  </span>
                </div>
                {/* Bar: show all competitor scores as dots + your marker */}
                <div className="relative h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#4F46E5] rounded-full"
                    style={{ width: `${scores.overall}%`, transition: "width 0.9s ease" }}
                  />
                  {leaderScore < 100 && (
                    <div
                      className="absolute top-0 w-0.5 h-full bg-[#16A34A]/60"
                      style={{ left: `${leaderScore}%` }}
                    />
                  )}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[11px] text-[#9CA3AF]">0</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-[#4F46E5] inline-block" />
                      <span className="font-medium text-[#374151]">You: {scores.overall}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A] inline-block" />
                      <span className="text-[#9CA3AF]">Leader: {leaderScore}</span>
                    </span>
                  </div>
                  <span className="text-[11px] text-[#9CA3AF]">100</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            ZONE 3 — OPPORTUNITY CENTER
        ══════════════════════════════════════ */}
        <div className="px-8 py-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF] mb-5">Opportunity Center</p>

          {/* Opportunity cards — only API-backed */}
          {oppCards.length > 0 && (
            <div className={`grid gap-3 mb-5 grid-cols-${oppCards.length} lg:grid-cols-${oppCards.length}`}
              style={{ gridTemplateColumns: `repeat(${oppCards.length}, minmax(0, 1fr))` }}>
              {oppCards.map((card) => (
                <div key={card.key} className={`${card.bg} border ${card.border} rounded-[14px] px-5 py-4`}>
                  <div className="w-7 h-7 rounded-lg bg-white/60 flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                  <p className={`text-[26px] font-semibold tracking-[-0.03em] leading-none ${card.valClass}`}>
                    {card.value}
                  </p>
                  <p className={`text-[12px] font-medium mt-1.5 ${card.labelClass}`}>{card.label}</p>
                  <p className={`text-[11px] mt-1 ${card.subClass}`}>{card.sub}</p>
                </div>
              ))}
            </div>
          )}

          {/* Bottom row: quick wins + critical alert + CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-4">

            {/* Quick wins */}
            {quickWins.length > 0 && (
              <div className="bg-[#FAFAFA] border border-[#F3F4F6] rounded-[14px] px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF] mb-3">Highest Impact Fixes</p>
                <div className="flex flex-col gap-2">
                  {quickWins.map((fix, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <PriorityDot impact={fix.impact_score} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium text-[#374151] leading-snug">{fix.issue}</p>
                        <p className="text-[11px] text-[#9CA3AF] mt-0.5">+{fix.impact_score} pts · {fix.dimension}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Critical alert */}
            {criticalFix && (
              <div className="bg-[#FEF2F2] border border-[#DC2626]/10 rounded-[14px] px-5 py-4 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.07em] text-[#DC2626]">Critical Opportunity</p>
                  </div>
                  <p className="text-[13px] font-medium text-[#991B1B] leading-relaxed">{criticalFix.fix_suggestion}</p>
                  <p className="text-[12px] text-[#DC2626]/60 mt-2">
                    Fixing this alone could add +{criticalFix.impact_score} pts to your listing score.
                  </p>
                </div>
                <button
                  type="button"
                  className="self-start text-[12px] font-semibold text-[#DC2626] bg-white border border-[#DC2626]/20 px-3 py-1.5 rounded-lg hover:bg-[#DC2626] hover:text-white transition-colors"
                >
                  Review Fix →
                </button>
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
}