import { Suspense } from "react";
import LQSReportPage from "@/app/components/lqs-report/LQSReportPage";
import { fetchLQSData } from "../../(competitor-analysis)/lib/api/competitor-analysis-api";
import AnalysisLoader from "./loading";
import type { LQSApiResponse } from "../../(competitor-analysis)/types/api";

async function LQSReportContent({ asin }: { asin: string }) {
  const data = await fetchLQSData(asin) as LQSApiResponse;
  return <LQSReportPage data={data} />;
}

export default async function LQSReportRoute({
  searchParams,
}: {
  searchParams: Promise<{ asin?: string }>;
}) {
  const { asin = "" } = await searchParams;

  if (!asin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-n-500 text-ds-body">
          Missing{" "}
          <code className="font-mono text-ds-caption bg-n-100 px-1.5 py-0.5 rounded">
            asin
          </code>{" "}
          query param.
        </p>
      </div>
    );
  }

  return (
    <Suspense fallback={<AnalysisLoader />}>
      <LQSReportContent asin={asin} />
    </Suspense>
  );
}