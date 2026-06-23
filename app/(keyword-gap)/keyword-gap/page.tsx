import { fetchKeywordGapData } from "@/app/(competitor-analysis)/lib/api/competitor-analysis-api";
import { fetchKeywordGapReport } from "../lib/api/keyword-gap-api";
import { mockKeywordGapData } from "../lib/mockdata";
import KeywordGapPage from "@/app/components/keyword-gap/KeywordGapPage";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ asin?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const asin = resolvedSearchParams.asin ?? "";

  if (!asin) {
    return <KeywordGapPage data={mockKeywordGapData} asin="" />;
  }

  try {
    const data = await fetchKeywordGapReport(asin);

    return <KeywordGapPage data={data} asin={asin} />;
  } catch (error) {
    console.error("Keyword Gap API failed:", error);

    if (!asin) {
      return <KeywordGapPage data={mockKeywordGapData} asin="" />;
    }
  }
}