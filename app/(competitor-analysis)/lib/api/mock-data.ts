import { CompetitorAnalysisData } from "../../types/api";

/**
 * Sample/mock payload — shaped exactly like the 3 real API responses.
 * Useful for local development before the endpoints in
 * lib/api/competitor-analysis-api.ts are wired up.
 *
 * Usage (e.g. in a Storybook story or a temporary page):
 *
 *   import { mockCompetitorAnalysisData } from "@/lib/api/mock-data";
 *   <CompetitorAnalysisPage data={mockCompetitorAnalysisData} />
 *
 * NOTE: trimmed to the fields the UI actually renders — extend freely.
 */
export const mockCompetitorAnalysisData: CompetitorAnalysisData = {
  lqs: {
    source: "direct (ASIN B0CQWR7F3V)",
    target_asin: "B0CQWR7F3V",
    results: [
      {
        label: "TARGET",
        asin: "B0CQWR7F3V",
        title:
          "Women Cotton Western Midi Dress || Women's Summer Casual Midi Dress Puff Sleeves Round Neck Printed Flared WRAP Dress",
        scores: { a9_compliance: 45, rufus_readiness: 21, lqs_score: 75, overall: 44 },
        projected_ctr_range: "0.8–1.8%",
        gmv_impact_inr: "₹13,875–₹15,297/month",
      },
      {
        label: "COMP-9",
        asin: "",
        title:
          "GRECIILOOKS Women's One Piece Dress – Stylish Midi Party Dress for Women | Summer Casual Wear for Events, Date & Evening",
        scores: { a9_compliance: 46, rufus_readiness: 18, lqs_score: 43, overall: 35 },
      },
      {
        label: "COMP-1",
        asin: "",
        title:
          "PIDAVLIYA'S Women Cotton Printed Midi Dress with V Neck & Puff Sleeves | Flared A-Line Casual Summer Dress",
        scores: { a9_compliance: 51, rufus_readiness: 0, lqs_score: 55, overall: 34 },
      },
    ],
    gap_report: {
      target_summary: {
        title:
          "Women Cotton Western Midi Dress || Women's Summer Casual Midi Dress Puff Sleeves Round Neck Printed Flared WRAP Dress",
        asin: "B0CQWR7F3V",
        overall: 44,
        a9: 45,
        rufus: 21,
        flags: ["NO_FAQ_COVERAGE"],
      },
      best_competitor: {
        title:
          "GRECIILOOKS Women's One Piece Dress – Stylish Midi Party Dress for Women | Summer Casual Wear for Events, Date & Evening",
        asin: "",
        overall: 35,
        a9: 46,
        rufus: 18,
      },
      gaps: [
        { metric: "overall", target: 44, best: 35, gap: -9 },
        { metric: "a9_compliance", target: 45, best: 46, gap: 1 },
        { metric: "rufus_readiness", target: 21, best: 18, gap: -3 },
        { metric: "lqs_score", target: 75, best: 43, gap: -32 },
      ],
    },
    score_comparison: [
      {
        label: "TARGET",
        asin: "B0CQWR7F3V",
        title: "Women Cotton Western Midi Dress || Women's Summer Casual Midi Dress Puff Sleeves",
        overall: 44,
        a9_compliance: 45,
        rufus_readiness: 21,
        lqs_score: 75,
        projected_ctr: "0.8–1.8%",
        gmv_estimate: "₹13,875–₹15,297/month",
        critical_flags: [],
      },
      {
        label: "COMP-9",
        asin: "",
        title: "GRECIILOOKS Women's One Piece Dress – Stylish Midi Party Dress for Women | Summe",
        overall: 35,
        a9_compliance: 46,
        rufus_readiness: 18,
        lqs_score: 43,
        projected_ctr: "0.8–1.8%",
        gmv_estimate: "₹13,875–₹15,297/month",
        critical_flags: [],
      },
      {
        label: "COMP-1",
        asin: "",
        title: "PIDAVLIYA'S Women Cotton Printed Midi Dress with V Neck & Puff Sleeves | Flared ",
        overall: 34,
        a9_compliance: 51,
        rufus_readiness: 0,
        lqs_score: 55,
        projected_ctr: "0.8–1.8%",
        gmv_estimate: "₹13,875–₹15,297/month",
        critical_flags: [],
      },
    ],
    dimension_gaps: [],
    feedback: {
      asin: "B0CQWR7F3V",
      health: [
        {
          level: "WARNING",
          msg: "1 high-priority issue(s) need fixing before publish: NO_FAQ_COVERAGE",
        },
      ],
      strengths: ["Rufus readiness beats the best competitor."],
      quick_wins: [
        "Replace the generic occasion list in Bullet 4 with 2–3 specific scenarios and anchor Bullet 1 to a concrete moment like 'breathes without sticking in 35°C outdoor heat'.",
        "Rewrite each bullet to answer 'When would I actually wear this?' instead of listing features or occasions.",
        "Add 4 Q&A entries phrased like real buyer questions to close FAQ coverage gaps.",
      ],
      medium_term: [],
      long_term: [],
      priority_fixes: [
        {
          issue:
            "Zero concrete use cases; listing is a feature-and-occasion dump with no grounded buyer situations",
          dimension: "intent_coverage",
          impact_score: 92,
          fix_suggestion:
            "Replace the generic occasion list in Bullet 4 with 2–3 specific scenarios and anchor Bullet 1 to a concrete moment.",
        },
        {
          issue:
            "All 5 bullets describe features or demographics, not concrete situations",
          dimension: "use_case_specificity",
          impact_score: 88,
          fix_suggestion: "Rewrite each bullet to answer 'When would I actually wear this?'",
        },
        {
          issue: "No FAQ pairs provided; no conversational Q&A to resolve buyer hesitations",
          dimension: "faq_readiness",
          impact_score: 85,
          fix_suggestion: "Add 4 Q&A entries phrased like real buyer questions.",
        },
      ],
      executive_summary: {
        overall_gap_to_leader: -9,
        a9_gap_to_leader: 1,
        rufus_gap_to_leader: -3,
        top_fix: "Replace the generic occasion list in Bullet 4 with specific scenarios.",
        critical_flag_count: 0,
        high_flag_count: 1,
      },
    },
  },
  competitor: {
    asin: "B0CQWR7F3V",
    competitors: [
      {
        asin: "B0GPWXH2RF",
        title:
          "PIDAVLIYA'S Women Cotton Printed Midi Dress with V Neck & Puff Sleeves | Flared A-Line Casual Summer Dress",
        brand: "PIDAVLIYA'S",
        price: "664.0",
        rating: 3.8,
        review_count: 40,
        product_url: "https://www.amazon.in/dp/B0GPWXH2RF",
        main_image: "https://m.media-amazon.com/images/I/61NS6hXElLL._SX679_.jpg",
      },
      {
        asin: "",
        title:
          "GRECIILOOKS Women's One Piece Dress – Stylish Midi Party Dress for Women | Summer Casual Wear for Events, Date & Evening",
        brand: "GRECIILOOKS",
        price: "799.0",
        rating: 4.0,
        review_count: 120,
        product_url: "https://www.amazon.in/dp/example",
        main_image: "",
      },
    ],
  },
  keywordGap: {
    seller_keywords: ["women", "cotton", "western", "midi", "dress"],
    competitor_keywords: ["dress", "women", "midi", "one piece", "a line"],
    missing_critical: [
      {
        keyword: "one piece",
        competitor_coverage: 5,
        gap_type: "both",
        suggested_placement: "title",
        intent_type: "discovery",
      },
      {
        keyword: "a line",
        competitor_coverage: 4,
        gap_type: "both",
        suggested_placement: "bullet_2",
        intent_type: "discovery",
      },
      {
        keyword: "v neck",
        competitor_coverage: 4,
        gap_type: "both",
        suggested_placement: "title",
        intent_type: "discovery",
      },
    ],
    missing_secondary: [
      {
        keyword: "anarkali",
        competitor_coverage: 1,
        gap_type: "backend",
        suggested_placement: "backend",
        intent_type: "discovery",
      },
      {
        keyword: "frock",
        competitor_coverage: 1,
        gap_type: "backend",
        suggested_placement: "backend",
        intent_type: "discovery",
      },
    ],
    content_gaps: [],
    rewritten_title_snippet: "",
    backend_audit: {
      current_bytes_used: 0,
      bytes_available: 249,
      current_duplicates: [],
      current_internal_dupes: [],
      compliance_issues: [],
    },
    generated_backend_string: "",
    backend_keyword_sets: {},
    backend_byte_plan: {
      total_available: 249,
      allocated: 207,
      remaining: 42,
      slot_breakdown: [],
    },
    indexation_gap_score: 25,
  },
};
