import { Suspense } from "react";
import TextEnhancementLoader from "./loading";
import TextEnhancementReportPage from "@/app/components/text-enhancement/TextEnhancemntreportPage";
import { fetchTextEnhancementData } from "@/app/(text-enhancement)/lib/text-enhancement-api";
async function TextEnhancementReportContent({ asin }: { asin: string }) {
  const data = await fetchTextEnhancementData(asin);
  return <TextEnhancementReportPage data={data} asin={asin} />;
}

export default async function TextEnhancementReportRoute({
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
    <Suspense fallback={<TextEnhancementLoader />}>
      <TextEnhancementReportContent asin={asin} />
    </Suspense>
  );
}