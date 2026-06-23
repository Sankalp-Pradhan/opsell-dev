// import CompetitorAnalysisPage from "@/app/components/competitor-analysis/CompetitorAnalysisPage";
// import { fetchCompetitorAnalysisData } from "../lib/api/competitor-analysis-api";


// /**
//  * Route: /competitor-analysis?asin=B0CQWR7F3V
//  *
//  * This is a Server Component. It fetches all 3 upstream APIs
//  * (LQS, Competitor, Keyword Gap) in parallel and passes the combined
//  * payload down into <CompetitorAnalysisPage />.
//  *
//  * 👉 To go live: fill in the TODOs in
//  *    lib/api/competitor-analysis-api.ts (base URLs + endpoints).
//  *    Nothing in this file or the component tree needs to change.
//  */
// export default async function Page({
//   searchParams,
// }: {
//   searchParams: Promise<{ asin?: string }>;
// }) {
//   const resolvedSearchParams = await searchParams;
//   const asin = resolvedSearchParams.asin ?? "";

//   if (!asin) {
//     return (
//       <div className="min-h-screen bg-n-50 flex items-center justify-center">
//         <p className="text-n-500 text-ds-body">
//           Missing <code className="font-mono text-ds-caption bg-n-100 px-1.5 py-0.5 rounded">
//             asin
//           </code>{" "}
//           query param.
//         </p>
//       </div>
//     );
//   }

//   try {
//     const data = await fetchCompetitorAnalysisData(asin);
//     return <CompetitorAnalysisPage data={data} />;
//   } catch (err) {
//     // Until the API endpoints are wired up (see lib/api/competitor-analysis-api.ts),
//     // this will render the error state below instead of throwing a 500.
//     return (
//       <div className="min-h-screen bg-n-50 flex items-center justify-center px-6">
//         <div className="max-w-md text-center">
//           <p className="text-ds-h3 font-display text-n-800 mb-2">
//             Couldn't load competitor analysis
//           </p>
//           <p className="text-ds-body-sm text-n-500">
//             {err instanceof Error ? err.message : "Unknown error"}
//           </p>
//         </div>
//       </div>
//     );
//   }
// }



import { Suspense } from "react";
import CompetitorAnalysisPage from "@/app/components/competitor-analysis/CompetitorAnalysisPage";
import { fetchCompetitorAnalysisData } from "../lib/api/competitor-analysis-api";
import AnalysisLoader from "./analysisLoader";

/* --- Inner async component — Suspense catches its pending state ----------- */
async function AnalysisContent({ asin }: { asin: string }) {
  // Throws on failure → caught by error.tsx, never falls back to mock
  const data = await fetchCompetitorAnalysisData(asin);
  return <CompetitorAnalysisPage data={data} />;
}

/* --- Route ---------------------------------------------------------------- */
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ asin?: string }>;
}) {
  const { asin = "" } = await searchParams;

  if (!asin) {
    return (
      <div className="min-h-screen bg-n-50 flex items-center justify-center px-6">
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
      <AnalysisContent asin={asin} />
    </Suspense>
  );
}