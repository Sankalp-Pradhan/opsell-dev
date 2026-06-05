"use client";

import { useState, useEffect } from "react";

// ── Skeleton shimmer ──────────────────────────────────────────────────────────
function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`rounded-md bg-n-200 overflow-hidden relative ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "aiShimmer 1.6s ease infinite",
        }}
      />
    </div>
  );
}

function GaugeSkeleton() {
  return (
    <div className="flex-1 flex flex-col items-center gap-2 px-6 py-4 bg-white rounded-lg border border-n-border shadow-elev-1">
      <Skeleton className="w-[72px] h-[40px]" />
      <Skeleton className="w-16 h-4 mt-1" />
      <Skeleton className="w-20 h-3" />
    </div>
  );
}

function FindingSkeleton() {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-n-border bg-white px-5 py-4 shadow-elev-1">
      <div className="flex items-start gap-3 flex-1">
        <Skeleton className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" />
        <div className="flex-1 flex flex-col gap-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      </div>
      <Skeleton className="h-6 w-24 rounded-full" />
    </div>
  );
}
function FixRowSkeleton() {
  return (
    <div className="w-full rounded-lg border border-n-border bg-white px-5 py-4 shadow-elev-1 overflow-hidden">
      <div className="flex items-center justify-between mb-3 gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Skeleton className="w-5 h-3 shrink-0" />
          <Skeleton className="h-4 flex-1 max-w-[250px]" />
        </div>

        <Skeleton className="w-20 h-3 shrink-0" />
      </div>

      <Skeleton className="h-1.5 w-full" />
    </div>
  );
}

// ── Radial arc gauge ──────────────────────────────────────────────────────────
function ArcGauge({ value, label, sub }: { value: number; label: string; sub: string }) {
  const circumference = Math.PI * 28;
  const clamped = Math.min(100, Math.max(0, value));
  const offset = circumference * (1 - clamped / 100);
  const color = clamped >= 70 ? "#16A34A" : clamped >= 40 ? "#F59E0B" : "#EF4444";

  return (
    <div className="flex-1 flex flex-col items-center gap-1 px-6 py-4 bg-white rounded-lg border border-n-border shadow-elev-1">
      <div className="relative w-[72px] h-[40px] overflow-visible">
        <svg width="72" height="44" viewBox="0 0 72 44" fill="none" className="overflow-visible">
          <path d="M 8 36 A 28 28 0 0 1 64 36" stroke="#E2E4E8" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path
            d="M 8 36 A 28 28 0 0 1 64 36"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={`${circumference}`}
            strokeDashoffset={`${offset}`}
            fill="none"
            style={{ transition: "stroke-dashoffset 0.8s ease" }}
          />
        </svg>
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display font-bold text-[15px] leading-none"
          style={{ color }}
        >
          {clamped}
        </span>
      </div>
      <p className="font-display font-semibold text-ds-h3 text-n-900 mt-1">{label}</p>
      <p className="font-body text-ds-caption text-n-400">{sub}</p>
    </div>
  );
}

// ── Impact badge ─────────────────────────────────────────────────────────────
function ImpactBadge({ level }: { level: "high" | "medium" | "strength" }) {
  const map = {
    high: { label: "High Impact", bg: "bg-error-light", text: "text-error" },
    medium: { label: "Medium Impact", bg: "bg-warning-light", text: "text-warning" },
    strength: { label: "Strength", bg: "bg-success-light", text: "text-success" },
  } as const;
  const { label, bg, text } = map[level];
  return (
    <span className={`text-ds-caption font-body font-semibold px-2.5 py-0.5 rounded-full ${bg} ${text}`}>
      {label}
    </span>
  );
}

// ── Finding card ─────────────────────────────────────────────────────────────
function FindingCard({
  dot,
  title,
  body,
  impact,
}: {
  dot: string;
  title: string;
  body: string;
  impact: "high" | "medium" | "strength";
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-n-border bg-white px-5 py-4 shadow-elev-1">
      <div className="flex items-start gap-3">
        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: dot }} />
        <div>
          <p className="font-display font-semibold text-ds-h3 text-n-900">{title}</p>
          <p className="mt-1 font-body text-ds-body-sm text-n-500 max-w-[480px]">{body}</p>
        </div>
      </div>
      <ImpactBadge level={impact} />
    </div>
  );
}

// ── Fix row ───────────────────────────────────────────────────────────────────
function FixRow({
  num,
  title,
  barW,
  lift,
}: {
  num: string;
  title: string;
  barW: string;
  lift?: number;
}) {
  return (
    <div className="rounded-lg border border-n-border bg-white px-5 py-4 shadow-elev-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-body text-ds-caption text-n-400 w-5 shrink-0">{num}</span>
          <p className="font-display font-semibold text-ds-h3 text-n-900">{title}</p>
        </div>
        <span className="font-body text-ds-caption text-brand font-semibold">
          +{lift ?? 0}% RPI
        </span>
      </div>
      <div className="mt-3 h-1.5 w-full rounded-full bg-n-100">
        <div className="h-full rounded-full bg-brand" style={{ width: barW }} />
      </div>
    </div>
  );
}

// ── Competitor table ──────────────────────────────────────────────────────────
function CompetitorTable({ scores }: { scores: Record<string, any> }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-n-border bg-white shadow-elev-1">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-n-border bg-n-50">
            <th className="text-left px-4 py-3 font-display font-semibold text-ds-caption text-n-500 uppercase tracking-wide">Product</th>
            <th className="text-center px-4 py-3 font-display font-semibold text-ds-caption text-n-500 uppercase tracking-wide">LQS</th>
            <th className="text-center px-4 py-3 font-display font-semibold text-ds-caption text-n-500 uppercase tracking-wide">CTR</th>
            <th className="text-center px-4 py-3 font-display font-semibold text-ds-caption text-n-500 uppercase tracking-wide">CVR</th>
            <th className="text-center px-4 py-3 font-display font-semibold text-ds-caption text-n-500 uppercase tracking-wide">Rating</th>
            <th className="text-right px-4 py-3 font-display font-semibold text-ds-caption text-n-500 uppercase tracking-wide">RPI</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(scores).map(([key, value]: [string, any]) => {
            const isTarget = key === "TARGET";
            return (
              <tr
                key={key}
                className={`border-b border-n-border last:border-0 ${isTarget ? "bg-brand-light" : "hover:bg-n-50"}`}
              >
                <td className="px-4 py-3 max-w-[240px]">
                  <div className="flex items-center gap-2">
                    {isTarget && (
                      <span className="shrink-0 rounded-full bg-brand px-2 py-0.5 font-body text-[10px] font-bold text-white uppercase">
                        You
                      </span>
                    )}
                    <span className={`font-body text-ds-body-sm truncate ${isTarget ? "font-semibold text-n-900" : "text-n-600"}`}>
                      {value.title}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className="font-display font-semibold text-ds-body-sm"
                    style={{ color: value.lqs >= 70 ? "#16A34A" : value.lqs >= 40 ? "#F59E0B" : "#EF4444" }}
                  >
                    {value.lqs}
                  </span>
                  <span className="ml-1 font-body text-ds-caption text-n-400">({value.grade})</span>
                </td>
                <td className="px-4 py-3 text-center font-body text-ds-body-sm text-n-700">
                  {Math.round((value.ctr ?? 0) * 100)}%
                </td>
                <td className="px-4 py-3 text-center font-body text-ds-body-sm text-n-700">
                  {Math.round((value.cvr ?? 0) * 100)}%
                </td>
                <td className="px-4 py-3 text-center font-body text-ds-body-sm text-n-700">
                  {value.rating > 0 ? `${value.rating} ★` : "—"}
                  <span className="ml-1 text-n-400">({value.reviews})</span>
                </td>
                <td className="px-4 py-3 text-right font-display font-semibold text-ds-body-sm text-n-900">
                  ₹{value.rpi}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function FreeScorePage() {
  const [data, setData] = useState<any>(null);
  const [showFixModal, setShowFixModal] = useState(false);

  // useEffect(() => {
  //   const result = localStorage.getItem("opsellResult");
  //   if (result) {
  //     setData(JSON.parse(result));
  //   }
  // }, []);


  useEffect(() => {
    const loadData = async () => {
      // Already analyzed
      const existingResult = localStorage.getItem("opsellResult");

      if (existingResult) {
        setData(JSON.parse(existingResult));
        return;
      }

      // URL saved before signup
      const pendingUrl = localStorage.getItem("pendingAmazonUrl");

      if (!pendingUrl) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analyze`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              mode: "url",
              url: pendingUrl,
            }),
          });

        if (!response.ok) {
          throw new Error("Failed to analyze listing");
        }

        const result = await response.json();

        localStorage.setItem("opsellResult", JSON.stringify(result));
        localStorage.removeItem("pendingAmazonUrl");

        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);




  // ── Derived values ──────────────────────────────────────────────────────────
  const target = data?.scores?.TARGET;
  const feedback = data?.feedback;
  const gapReport = data?.gap_report;

  const leakPercent = Math.abs(
    Math.round(
      ((feedback?.executive_summary?.gap_to_leader ?? 0) /
        (feedback?.executive_summary?.best_competitor ?? 1)) *
      100
    )
  );

  const isLoading = !data;

  return (
    <div className="min-h-screen p-10 bg-n-50 font-body">

      {/* ── Live pill ── */}
      <div className="flex justify-center pt-8">
        <div className="flex items-center gap-2 rounded-full bg-success-light border border-success/20 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="font-body text-ds-caption text-success font-medium">
            23 sellers scored their listings in the last hour
          </span>
        </div>
      </div>

      {/* ── Score another listing link ── */}
      <div className="mx-auto mt-6 max-w-4xl px-6">
        <a href="#" className="font-body text-ds-body text-brand hover:underline">
          Score another listing
        </a>

        {/* ── Listing meta ── */}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-ds-body-sm font-body">
          <span className="rounded-full bg-n-200 px-2.5 py-0.5 text-ds-caption font-semibold text-n-700">
            Electronics
          </span>
          <span className="text-n-400">
            {target?.asin ? `amazon.in/dp/${target.asin}` : "amazon.in/dp/…"}
          </span>
          {isLoading ? (
            <Skeleton className="h-4 w-40" />
          ) : (
            <>
              <span className="font-semibold text-n-900">₹{target?.price}</span>
              {target?.discount > 0 && (
                <span className="text-success font-semibold">({target.discount}% off)</span>
              )}
              <span className="text-n-300">|</span>
              <span className="text-warning font-semibold">
                {target?.rating > 0 ? `${target.rating} ★` : "No rating yet"}
              </span>
              <span className="text-n-400">({target?.reviews} reviews)</span>
            </>
          )}
        </div>

        {/* ── Product title ── */}
        {isLoading ? (
          <Skeleton className="mt-3 h-8 w-3/4" />
        ) : (
          <h1 className="mt-3 font-display text-[28px] font-extrabold leading-tight text-n-900">
            {target?.title}
          </h1>
        )}
      </div>

      {/* ── Score cards ── */}
      <div className="mx-auto mt-6 max-w-4xl px-6">
        <div className="flex flex-wrap gap-3">
          {isLoading ? (
            <>
              <GaugeSkeleton />
              <GaugeSkeleton />
              <GaugeSkeleton />
            </>
          ) : (
            <>
              <ArcGauge
                value={target?.lqs ?? 0}
                label="LQS"
                sub={`Grade ${target?.grade}`}
              />
              <ArcGauge
                value={Math.round((target?.ctr ?? 0) * 100)}
                label="Est. CTR"
                sub="Estimated CTR"
              />
              <ArcGauge
                value={Math.round((target?.cvr ?? 0) * 100)}
                label="Est. CVR"
                sub="Estimated CVR"
              />
            </>
          )}
        </div>
      </div>

      {/* ── Revenue leak banner ── */}
      <div className="mx-auto mt-5 max-w-4xl px-6">
        <div className="rounded-xl bg-n-900 px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-body text-ds-caption text-n-400">
              Estimated revenue being left behind
            </p>
            {isLoading ? (
              <Skeleton className="mt-1 h-9 w-32" />
            ) : (
              <p className="mt-1 font-display text-[32px] font-extrabold text-warning leading-none">
                ~{leakPercent}%
              </p>
            )}
            <p className="mt-2 font-body text-ds-body-sm text-n-400 max-w-xs">
              At category-average AOV and traffic, this listing is leaking revenue every month.
            </p>
          </div>
          <button
            onClick={() => setShowFixModal(true)}
            className="shrink-0 rounded-lg border border-n-600 bg-transparent px-4 py-2.5 font-display font-semibold text-ds-body text-white hover:bg-n-800 transition-colors"
          >
            See how to fix this →
          </button>
        </div>
      </div>

      {/* ── RPI ── */}
      <div className="mx-auto mt-5 max-w-4xl px-6">
        <div className="flex items-center justify-between rounded-lg border border-n-border bg-white px-5 py-3 shadow-elev-1">
          <span className="font-body text-ds-body text-n-600">
            Revenue Potential Index (RPI)
          </span>
          {isLoading ? (
            <Skeleton className="h-5 w-24" />
          ) : (
            <span className="font-display font-bold text-ds-h3 text-n-900">
              ₹{target?.rpi}
            </span>
          )}
        </div>
      </div>

      {/* ── Competitor table ── */}
      <div className="mx-auto mt-5 max-w-4xl px-6">
        <h2 className="font-display font-bold text-ds-h2 text-n-900 mb-3">
          Competitor Comparison
        </h2>
        {isLoading ? (
          <Skeleton className="h-48 w-full" />
        ) : (
          <CompetitorTable scores={data?.scores ?? {}} />
        )}
      </div>

      {/* ── What we found ── */}
      <div className="mx-auto mt-8 max-w-4xl px-6">
        <h2 className="font-display font-bold text-ds-h2 text-n-900 mb-4">What we found</h2>
        <div className="flex flex-col gap-3 w-full">
          {isLoading ? (
            <>
              <FindingSkeleton />
              <FindingSkeleton />
              <FindingSkeleton />
            </>
          ) : (
            feedback?.health?.map((item: any, index: number) => (
              <FindingCard
                key={index}
                dot="#EF4444"
                title={item.level}
                body={item.msg}
                impact="high"
              />
            ))
          )}
        </div>
      </div>

      {/* ── Top priority card ── */}
      <div className="mx-auto mt-5 max-w-4xl px-6">
        <div className="rounded-xl border border-brand/30 bg-brand-light px-5 py-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand font-display font-bold text-ds-caption text-white">
              1
            </span>
            <span className="font-body text-ds-caption font-semibold text-brand uppercase tracking-wide">
              Top priority
            </span>
          </div>
          {isLoading ? (
            <>
              <Skeleton className="h-5 w-64 mb-2" />
              <Skeleton className="h-4 w-full" />
            </>
          ) : (
            <>
              <p className="font-display font-bold text-ds-h3 text-n-900">
                {feedback?.executive_summary?.top_action}
              </p>
              <p className="mt-1 font-body text-ds-body-sm text-n-500 max-w-md">
                Potential RPI Lift:{" "}
                <span className="font-semibold text-brand">
                  {feedback?.executive_summary?.top_action_lift}%
                </span>
              </p>
            </>
          )}
        </div>
      </div>

      {/* ── More fixes ── */}
      <div className="mx-auto mt-8 max-w-4xl px-6 pb-16">
        <h2 className="font-display font-bold text-ds-h2 text-n-900">
          More fixes for this listing
        </h2>
        <p className="font-body text-ds-body-sm text-n-400 mb-4 mt-0.5">
          Ranked by estimated revenue impact
        </p>
        <div className="flex flex-col gap-3">
          {isLoading ? (
            <>
              <FixRowSkeleton />
              <FixRowSkeleton />
              <FixRowSkeleton />
            </>
          ) : (
            feedback?.priority_actions
              ?.slice(0, 5)
              ?.map((item: any, index: number) => (
                <FixRow
                  key={index}
                  num={`0${index + 1}`}
                  title={item.action}
                  barW={`${Math.min(item.priority, 100)}%`}
                  lift={item.rpi_lift}
                />
              ))
          )}
        </div>
      </div>
      {showFixModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowFixModal(false)}
        >
          <div
            className="w-full max-w-[720px] rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-brand" />
                <span className="font-display text-2xl font-bold">opsell</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-center text-4xl font-bold text-n-900">
              Connect Amazon to unlock everything
            </h2>

            {/* Features */}
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3">
                <span>📈</span>
                <p>Full listing diagnosis across all your products</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✨</span>
                <p>AI-generated fixes, ready to copy-paste</p>
              </div>

              <div className="flex items-center gap-3">
                <span>👁️</span>
                <p>Competitive intelligence, updated weekly</p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                setShowFixModal(false);
                window.location.href = "/dashboard";
              }}
              className="mt-10 w-full rounded-xl bg-brand py-4 text-lg font-semibold text-white transition hover:opacity-90"
            >
              Connect my Amazon account
            </button>


            {/* Footer */}
            <div className="mt-8 border-t pt-5">
              <div className="flex justify-center gap-8 text-sm text-n-400">
                <span>🔒 No credit card</span>
                <span>🛡️ Data encrypted</span>
                <span>✓ Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}