
import { CompetitorProduct, LQSResultEntry } from "@/app/(competitor-analysis)/types/api";
import { ProgressBar } from "./shared/Primitives";
import { getTargetCard, mergeCompetitorWithScores } from "@/app/(competitor-analysis)/lib/api/merge";

/**
 * SECTION 3 — Competitor product cards grid
 * Source: Competitor API (product details) + LQS API (scores overlaid)
 */
export default function CompetitorGridSection({
  competitors,
  lqsResults,
}: {
  competitors: CompetitorProduct[];
  lqsResults: LQSResultEntry[];
}) {
  const target = getTargetCard(lqsResults);
  const merged = mergeCompetitorWithScores(competitors, lqsResults);

  return (
    <div className="bg-white rounded-xl border border-n-border shadow-elev-1 p-5">
      <h2 className="text-ds-h3 font-display text-n-800 mb-4">Competitor Listings</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* TARGET card always first */}
        {target && <TargetCard target={target} />}

        {merged.map((card) => (
          <CompetitorCard key={card.label} card={card} />
        ))}
      </div>
    </div>
  );
}

function TargetCard({ target }: { target: LQSResultEntry }) {
  return (
    <div className="relative h-[260px] rounded-xl border-2 border-brand shadow-elev-2 bg-white overflow-hidden flex flex-col group transition-all duration-150 hover:shadow-elev-3 hover:scale-[1.01]">
      <div className="relative h-[100px] bg-brand-light flex items-center justify-center">
        <span className="absolute top-2 left-2 text-ds-caption font-medium bg-brand text-white px-2 py-0.5 rounded-full">
          Your Listing
        </span>
        <span className="absolute top-2 right-2 text-ds-caption font-display font-bold bg-white text-n-800 px-2 py-0.5 rounded-full shadow-elev-1">
          {target.scores.overall}
        </span>
      </div>
      <div className="px-3 py-2 flex-1 flex flex-col gap-1">
        <span className="text-ds-caption text-n-500">TARGET</span>
        <p className="text-ds-body-sm font-medium text-n-800 line-clamp-2">{target.title}</p>
      </div>
      <ScoreFooter
        a9={target.scores.a9_compliance}
        rufus={target.scores.rufus_readiness}
        lqs={target.scores.lqs_score}
      />
    </div>
  );
}

function CompetitorCard({
  card,
}: {
  card: ReturnType<typeof mergeCompetitorWithScores>[number];
}) {
  return (
    <div className="relative h-[260px] rounded-xl border border-n-border bg-white overflow-hidden flex flex-col group transition-all duration-150 hover:shadow-elev-3 hover:scale-[1.01] shadow-elev-1">
      <div className="relative h-[100px] bg-n-100 flex items-center justify-center overflow-hidden">
        {card.main_image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={card.main_image}
            alt={card.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-n-300 text-ds-caption">No image</span>
        )}
        <span className="absolute top-2 left-2 text-ds-caption font-medium bg-white/90 text-n-700 px-2 py-0.5 rounded-full shadow-elev-1">
          {card.label}
        </span>
        <span className="absolute top-2 right-2 text-ds-caption font-display font-bold bg-white text-n-800 px-2 py-0.5 rounded-full shadow-elev-1">
          {card.scores.overall}
        </span>
      </div>

      <div className="px-3 py-2 flex-1 flex flex-col gap-1">
        {card.brand && <span className="text-ds-caption text-n-500">{card.brand}</span>}
        <p className="text-ds-body-sm font-medium text-n-800 line-clamp-2">{card.title}</p>
        <div className="flex items-center gap-2 text-ds-caption text-n-500">
          {card.price && <span>₹{card.price}</span>}
          {card.rating !== undefined && <span>★ {card.rating}</span>}
          {card.review_count !== undefined && <span>({card.review_count})</span>}
        </div>
      </div>

      <ScoreFooter
        a9={card.scores.a9_compliance}
        rufus={card.scores.rufus_readiness}
        lqs={card.scores.lqs_score}
      />

      {card.product_url && (
        <a
          href={card.product_url}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-2 right-3 text-ds-caption text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        >
          View details →
        </a>
      )}
    </div>
  );
}

function ScoreFooter({ a9, rufus, lqs }: { a9: number; rufus: number; lqs: number }) {
  return (
    <div className="border-t border-n-border px-3 py-2 flex flex-col gap-[5px]">
      {[
        { label: "A9", value: a9, color: "bg-brand" },
        { label: "Rufus", value: rufus, color: "bg-success" },
        { label: "LQS", value: lqs, color: "bg-warning" },
      ].map(({ label, value, color }) => (
        <div key={label} className="flex items-center gap-1.5">
          <span className="text-[10px] text-n-400 w-8 flex-shrink-0">{label}</span>
          <div className="flex-1 h-1 bg-n-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
          </div>
          <span className="text-[10px] text-n-500 w-5 text-right tabular-nums">{value}</span>
        </div>
      ))}
    </div>
  );
}
