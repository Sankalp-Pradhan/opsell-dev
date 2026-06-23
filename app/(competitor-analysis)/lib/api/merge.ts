import { CompetitorProduct, LQSResultEntry } from "../../types/api";

/**
 * Section 3 needs Competitor API product data (image, price, rating) +
 * LQS API scores (A9 / Rufus / LQS) overlaid on the same card.
 *
 * LQS results are matched to competitor products by ASIN where available,
 * and fall back to label-based ordering (COMP-1..COMP-10) when an upstream
 * competitor record has no ASIN populated (seen in the sample payload).
 */
export interface MergedCompetitorCard {
  label: string; // "TARGET" | "COMP-1" ...
  asin: string;
  title: string;
  brand?: string;
  price?: string;
  rating?: number;
  review_count?: number;
  main_image?: string;
  product_url?: string;
  scores: {
    overall: number;
    a9_compliance: number;
    rufus_readiness: number;
    lqs_score: number;
  };
}

export function mergeCompetitorWithScores(
  competitors: CompetitorProduct[],
  lqsResults: LQSResultEntry[]
): MergedCompetitorCard[] {
  const compResults = lqsResults.filter((r) => r.label !== "TARGET");

  return compResults.map((lqsEntry, idx) => {
    const matchByAsin = lqsEntry.asin
      ? competitors.find((c) => c.asin === lqsEntry.asin)
      : undefined;
    const matchByIndex = competitors[idx];
    const product = matchByAsin ?? matchByIndex;

    return {
      label: lqsEntry.label,
      asin: lqsEntry.asin || product?.asin || "",
      title: lqsEntry.title,
      brand: product?.brand,
      price: product?.price,
      rating: product?.rating,
      review_count: product?.review_count,
      main_image: product?.main_image,
      product_url: product?.product_url,
      scores: {
        overall: lqsEntry.scores.overall,
        a9_compliance: lqsEntry.scores.a9_compliance,
        rufus_readiness: lqsEntry.scores.rufus_readiness,
        lqs_score: lqsEntry.scores.lqs_score,
      },
    };
  });
}

export function getTargetCard(lqsResults: LQSResultEntry[]): LQSResultEntry | undefined {
  return lqsResults.find((r) => r.label === "TARGET");
}
