"use client"

import CompetitorAnalysisPage from "@/app/components/competitor-analysis/CompetitorAnalysisPage";
import { mockCompetitorAnalysisData } from "../lib/api/mock-data";


/**
 * Route: /competitor-analysis-preview
 *
 * Renders the page with the bundled mock payload — NO network calls,
 * NO real API wiring required. Use this to see/iterate on the UI before
 * lib/api/competitor-analysis-api.ts is hooked up to real endpoints.
 *
 * Once your real APIs are ready, just use /competitor-analysis?asin=...
 * (app/competitor-analysis/page.tsx) instead — same component underneath.
 */
export default function PreviewPage() {
  return <CompetitorAnalysisPage data={mockCompetitorAnalysisData} />;
}
