
// "use client";

// import { useState, useEffect } from "react";

// // ── Loader steps ──────────────────────────────────────────────────────────────
// const LOADER_STEPS = [
//   { label: "Fetching listing data from Amazon", duration: 1800 },
//   { label: "Analysing title & bullet points", duration: 1600 },
//   { label: "Scoring CTR & CVR signals", duration: 1400 },
//   { label: "Benchmarking against competitors", duration: 1500 },
//   { label: "Calculating Revenue Potential Index", duration: 1200 },
//   { label: "Generating priority action plan", duration: 1000 },
// ];

// function FullPageLoader() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [completedSteps, setCompletedSteps] = useState<number[]>([]);

//   useEffect(() => {
//     let step = 0;
//     const tick = () => {
//       if (step >= LOADER_STEPS.length - 1) return;
//       setCompletedSteps((prev) => [...prev, step]);
//       step += 1;
//       setCurrentStep(step);
//       setTimeout(tick, LOADER_STEPS[step].duration);
//     };
//     const timer = setTimeout(tick, LOADER_STEPS[0].duration);
//     return () => clearTimeout(timer);
//   }, []);

//   const progress = Math.round(((completedSteps.length) / LOADER_STEPS.length) * 100);

//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-n-50 font-body">
//       {/* Background subtle grid */}
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(#5046E5 1px, transparent 1px), linear-gradient(90deg, #5046E5 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div className="relative z-10 flex flex-col items-center w-full max-w-md px-4 sm:px-6">
//         {/* Animated logo mark */}
//         <div className="mb-6 sm:mb-8 flex items-center gap-1">
//           <div className="relative flex h-10 w-10 items-center justify-center">
//             <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-20 animate-ping" />
//             <span className="relative flex h-8 w-8 rounded-full bg-brand items-center justify-center">
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M22 7l-9.5 9.5-4-4L2 19M22 7h-6M22 7v6" />
//               </svg>
//             </span>
//           </div>
//           <span className="font-display text-2xl font-extrabold text-n-900 tracking-[-0.03em] ml-1">
//             opsell<span className="text-brand">.</span>
//           </span>
//         </div>

//         {/* Headline */}
//         <h2 className="font-display text-xl sm:text-[22px] font-bold text-n-900 text-center mb-1">
//           Scoring your listing
//         </h2>
//         <p className="font-body text-ds-body-sm text-n-400 text-center mb-6 sm:mb-8">
//           This takes about 10–15 seconds
//         </p>

//         {/* Progress bar */}
//         <div className="w-full h-1.5 rounded-full bg-n-200 mb-5 sm:mb-6 overflow-hidden">
//           <div
//             className="h-full rounded-full bg-brand transition-all duration-700 ease-out"
//             style={{ width: `${progress}%` }}
//           />
//         </div>

//         {/* Steps */}
//         <div className="w-full flex flex-col gap-2 sm:gap-2.5">
//           {LOADER_STEPS.map((step, i) => {
//             const isDone = completedSteps.includes(i);
//             const isActive = i === currentStep;
//             return (
//               <div
//                 key={i}
//                 className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-300 ${isDone
//                   ? "border-success/20 bg-success-light"
//                   : isActive
//                     ? "border-brand/30 bg-brand-light"
//                     : "border-transparent bg-transparent opacity-40"
//                   }`}
//               >
//                 {/* Icon */}
//                 <span className="shrink-0 flex h-5 w-5 items-center justify-center">
//                   {isDone ? (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round">
//                       <path d="M20 6L9 17l-5-5" />
//                     </svg>
//                   ) : isActive ? (
//                     <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
//                   ) : (
//                     <span className="h-1.5 w-1.5 rounded-full bg-n-300" />
//                   )}
//                 </span>

//                 {/* Label */}
//                 <span
//                   className={`font-body text-ds-body-sm ${isDone
//                     ? "text-success font-medium"
//                     : isActive
//                       ? "text-brand font-semibold"
//                       : "text-n-400"
//                     }`}
//                 >
//                   {step.label}
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         {/* Footer note */}
//         <p className="mt-6 sm:mt-8 font-body text-ds-caption text-n-300 text-center">
//           Powered by Opsell AI · No data stored without consent
//         </p>
//       </div>
//     </div>
//   );
// }

// // ── Skeleton shimmer ──────────────────────────────────────────────────────────
// function Skeleton({ className }: { className?: string }) {
//   return (
//     <div className={`rounded-md bg-n-200 overflow-hidden relative ${className}`}>
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
//           backgroundSize: "200% 100%",
//           animation: "aiShimmer 1.6s ease infinite",
//         }}
//       />
//     </div>
//   );
// }

// function GaugeSkeleton() {
//   return (
//     <div className="flex-1 flex flex-col items-center gap-2 px-4 sm:px-6 py-4 bg-white rounded-lg border border-n-border shadow-elev-1">
//       <Skeleton className="w-[72px] h-[40px]" />
//       <Skeleton className="w-16 h-4 mt-1" />
//       <Skeleton className="w-20 h-3" />
//     </div>
//   );
// }

// function FindingSkeleton() {
//   return (
//     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 rounded-lg border border-n-border bg-white px-4 sm:px-5 py-4 shadow-elev-1">
//       <div className="flex items-start gap-3 flex-1">
//         <Skeleton className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" />
//         <div className="flex-1 flex flex-col gap-2">
//           <Skeleton className="h-4 w-48" />
//           <Skeleton className="h-3 w-full" />
//           <Skeleton className="h-3 w-3/4" />
//         </div>
//       </div>
//       <Skeleton className="h-6 w-24 rounded-full self-start" />
//     </div>
//   );
// }

// function FixRowSkeleton() {
//   return (
//     <div className="w-full rounded-lg border border-n-border bg-white px-4 sm:px-5 py-4 shadow-elev-1 overflow-hidden">
//       <div className="flex items-center justify-between mb-3 gap-4">
//         <div className="flex items-center gap-3 flex-1 min-w-0">
//           <Skeleton className="w-5 h-3 shrink-0" />
//           <Skeleton className="h-4 flex-1 max-w-[250px]" />
//         </div>
//         <Skeleton className="w-16 sm:w-20 h-3 shrink-0" />
//       </div>
//       <Skeleton className="h-1.5 w-full" />
//     </div>
//   );
// }

// // ── Radial arc gauge ──────────────────────────────────────────────────────────
// function ArcGauge({ value, label, sub }: { value: number; label: string; sub: string }) {
//   const circumference = Math.PI * 28;
//   const clamped = Math.min(100, Math.max(0, value));
//   const offset = circumference * (1 - clamped / 100);
//   const color = clamped >= 70 ? "#16A34A" : clamped >= 40 ? "#F59E0B" : "#EF4444";

//   return (
//     <div className="flex-1 flex flex-col items-center gap-1 px-3 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-n-border shadow-elev-1 min-w-0">
//       <div className="relative w-[72px] h-[40px] overflow-visible">
//         <svg width="72" height="44" viewBox="0 0 72 44" fill="none" className="overflow-visible">
//           <path d="M 8 36 A 28 28 0 0 1 64 36" stroke="#E2E4E8" strokeWidth="5" strokeLinecap="round" fill="none" />
//           <path
//             d="M 8 36 A 28 28 0 0 1 64 36"
//             stroke={color}
//             strokeWidth="5"
//             strokeLinecap="round"
//             strokeDasharray={`${circumference}`}
//             strokeDashoffset={`${offset}`}
//             fill="none"
//             style={{ transition: "stroke-dashoffset 0.8s ease" }}
//           />
//         </svg>
//         <span
//           className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display font-bold text-[15px] leading-none"
//           style={{ color }}
//         >
//           {clamped}
//         </span>
//       </div>
//       <p className="font-display font-semibold text-ds-h3 text-n-900 mt-1">{label}</p>
//       <p className="font-body text-ds-caption text-n-400 text-center">{sub}</p>
//     </div>
//   );
// }

// // ── Impact badge ─────────────────────────────────────────────────────────────
// function ImpactBadge({ level }: { level: "high" | "medium" | "strength" }) {
//   const map = {
//     high: { label: "High Impact", bg: "bg-error-light", text: "text-error" },
//     medium: { label: "Medium Impact", bg: "bg-warning-light", text: "text-warning" },
//     strength: { label: "Strength", bg: "bg-success-light", text: "text-success" },
//   } as const;
//   const { label, bg, text } = map[level];
//   return (
//     <span className={`shrink-0 text-ds-caption font-body font-semibold px-2.5 py-0.5 rounded-full ${bg} ${text} whitespace-nowrap`}>
//       {label}
//     </span>
//   );
// }

// // ── Finding card ─────────────────────────────────────────────────────────────
// function FindingCard({
//   dot, title, body, impact,
// }: {
//   dot: string; title: string; body: string; impact: "high" | "medium" | "strength";
// }) {
//   return (
//     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 rounded-lg border border-n-border bg-white px-4 sm:px-5 py-4 shadow-elev-1">
//       <div className="flex items-start gap-3 flex-1">
//         <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: dot }} />
//         <div>
//           <p className="font-display font-semibold text-ds-h3 text-n-900">{title}</p>
//           <p className="mt-1 font-body text-ds-body-sm text-n-500 max-w-[480px]">{body}</p>
//         </div>
//       </div>
//       <div className="pl-5 sm:pl-0">
//         <ImpactBadge level={impact} />
//       </div>
//     </div>
//   );
// }

// // ── Fix row ───────────────────────────────────────────────────────────────────
// function FixRow({ num, title, barW, lift }: { num: string; title: string; barW: string; lift?: number }) {
//   return (
//     <div className="rounded-lg border border-n-border bg-white px-4 sm:px-5 py-4 shadow-elev-1">
//       <div className="flex items-center justify-between gap-3">
//         <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
//           <span className="font-body text-ds-caption text-n-400 w-5 shrink-0">{num}</span>
//           <p className="font-display font-semibold text-ds-h3 text-n-900 truncate">{title}</p>
//         </div>
//         <span className="font-body text-ds-caption text-brand font-semibold shrink-0">+{lift ?? 0}% RPI</span>
//       </div>
//       <div className="mt-3 h-1.5 w-full rounded-full bg-n-100">
//         <div className="h-full rounded-full bg-brand" style={{ width: barW }} />
//       </div>
//     </div>
//   );
// }

// // ── Competitor table ──────────────────────────────────────────────────────────
// function CompetitorTable({ scores }: { scores: Record<string, any> }) {
//   return (
//     <div className="overflow-x-auto rounded-lg border border-n-border bg-white shadow-elev-1 -mx-4 sm:mx-0">
//       <table className="w-full text-sm min-w-[560px]">
//         <thead>
//           <tr className="border-b border-n-border bg-n-50">
//             {["Product", "LQS", "CTR", "CVR", "Rating", "RPI"].map((h, i) => (
//               <th
//                 key={h}
//                 className={`px-3 sm:px-4 py-3 font-display font-semibold text-ds-caption text-n-500 uppercase tracking-wide ${i === 0 ? "text-left" : i === 5 ? "text-right" : "text-center"}`}
//               >
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(scores).map(([key, value]: [string, any]) => {
//             const isTarget = key === "TARGET";
//             return (
//               <tr key={key} className={`border-b border-n-border last:border-0 ${isTarget ? "bg-brand-light" : "hover:bg-n-50"}`}>
//                 <td className="px-3 sm:px-4 py-3 max-w-[160px] sm:max-w-[240px]">
//                   <div className="flex items-center gap-2">
//                     {isTarget && (
//                       <span className="shrink-0 rounded-full bg-brand px-2 py-0.5 font-body text-[10px] font-bold text-white uppercase">You</span>
//                     )}
//                     <span className={`font-body text-ds-body-sm truncate ${isTarget ? "font-semibold text-n-900" : "text-n-600"}`}>
//                       {value.title}
//                     </span>
//                   </div>
//                 </td>
//                 <td className="px-3 sm:px-4 py-3 text-center">
//                   <span className="font-display font-semibold text-ds-body-sm" style={{ color: value.lqs >= 70 ? "#16A34A" : value.lqs >= 40 ? "#F59E0B" : "#EF4444" }}>
//                     {value.lqs}
//                   </span>
//                   <span className="ml-1 font-body text-ds-caption text-n-400">({value.grade})</span>
//                 </td>
//                 <td className="px-3 sm:px-4 py-3 text-center font-body text-ds-body-sm text-n-700">{Math.round((value.ctr ?? 0) * 100)}%</td>
//                 <td className="px-3 sm:px-4 py-3 text-center font-body text-ds-body-sm text-n-700">{Math.round((value.cvr ?? 0) * 100)}%</td>
//                 <td className="px-3 sm:px-4 py-3 text-center font-body text-ds-body-sm text-n-700">
//                   {value.rating > 0 ? `${value.rating} ★` : "—"}
//                   <span className="ml-1 text-n-400">({value.reviews})</span>
//                 </td>
//                 <td className="px-3 sm:px-4 py-3 text-right font-display font-semibold text-ds-body-sm text-n-900">₹{value.rpi}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // ── Error screen ──────────────────────────────────────────────────────────────
// function ErrorScreen({ message, onRetry }: { message: string; onRetry: () => void }) {
//   let friendlyMessage = message;
//   try {
//     const parsed = JSON.parse(message);
//     if (parsed?.detail) friendlyMessage = parsed.detail;
//   } catch {
//     // use raw message
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-n-50 font-body px-4 sm:px-6">
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(#EF4444 1px, transparent 1px), linear-gradient(90deg, #EF4444 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />
//       <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full">
//         {/* Icon */}
//         <div className="flex h-14 w-14 items-center justify-center rounded-full bg-error-light mb-5">
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round">
//             <circle cx="12" cy="12" r="10" />
//             <line x1="12" y1="8" x2="12" y2="12" />
//             <line x1="12" y1="16" x2="12.01" y2="16" />
//           </svg>
//         </div>

//         <h2 className="font-display text-xl sm:text-[22px] font-bold text-n-900 mb-2">
//           Couldn't score this listing
//         </h2>

//         <p className="font-body text-ds-body-sm text-n-500 mb-6 leading-relaxed">
//           {friendlyMessage}
//         </p>

//         <div className="flex flex-col gap-3 w-full">
//           <button
//             onClick={onRetry}
//             className="w-full rounded-lg bg-brand py-3 font-display font-semibold text-ds-body text-white hover:bg-brand-dark transition-colors"
//           >
//             Try a different listing
//           </button>
//           <button
//             onClick={() => window.location.reload()}
//             className="w-full rounded-lg border border-n-border bg-white py-3 font-body text-ds-body text-n-600 hover:bg-n-50 transition-colors"
//           >
//             Retry
//           </button>
//         </div>

//         <p className="mt-6 font-body text-ds-caption text-n-300">
//           If this keeps happening, the ASIN may not be available on amazon.in
//         </p>
//       </div>
//     </div>
//   );
// }

// // ── Main page ─────────────────────────────────────────────────────────────────
// export default function FreeScorePage() {
//   const [data, setData] = useState<any>(null);
//   const [isFetching, setIsFetching] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [showFixModal, setShowFixModal] = useState(false);

//   const loadData = async () => {
//     setError(null);
//     setIsFetching(true);

//     const existingResult = localStorage.getItem("opsellResult");
//     if (existingResult) {
//       setData(JSON.parse(existingResult));
//       setIsFetching(false);
//       return;
//     }

//     const pendingUrl = localStorage.getItem("pendingAmazonUrl");
//     if (!pendingUrl) {
//       setIsFetching(false);
//       return;
//     }

//     try {
//       const response = await fetch("/api/analyze", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mode: "url",
//           url: pendingUrl,
//         }),
//       });

//       if (!response.ok) {
//         const err = await response.text();
//         console.error("Backend Error:", err);
//         setError(err);
//         return;
//       }

//       const result = await response.json();

//       localStorage.setItem("opsellResult", JSON.stringify(result));
//       localStorage.removeItem("pendingAmazonUrl");
//       setData(result);
//     } catch (err: any) {
//       console.error(err);
//       setError(err?.message ?? "Something went wrong. Please try again.");
//     }finally{
//       setIsFetching(false);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   // ── Derived values ──────────────────────────────────────────────────────────
//   // const target = data?.scores?.TARGET;
//   const target = data?.scores?.find((s: any) => s.label === "TARGET");

  
//   const feedback = data?.feedback;

//   const leakPercent = Math.abs(
//     Math.round(
//       ((feedback?.executive_summary?.gap_to_leader ?? 0) /
//         (feedback?.executive_summary?.best_competitor ?? 1)) *
//       100
//     )
//   );

//   if (isFetching) return <FullPageLoader />;

//   if (error) return (
//     <ErrorScreen
//       message={error}
//       onRetry={() => {
//         localStorage.removeItem("opsellResult");
//         localStorage.removeItem("pendingAmazonUrl");
//         window.location.href = "/";
//       }}
//     />
//   );

//   const isLoading = !data;

//   return (
//     <div className="min-h-screen bg-n-50 font-body pb-16">

//       {/* ── Live pill ── */}
//       <div className="flex justify-center pt-6 sm:pt-8 px-4">
//         <div className="flex items-center gap-2 rounded-full bg-success-light border border-success/20 px-3 sm:px-4 py-1.5">
//           <span className="h-2 w-2 rounded-full bg-success animate-pulse shrink-0" />
//           <span className="font-body text-ds-caption text-success font-medium text-center">
//             23 sellers scored their listings in the last hour
//           </span>
//         </div>
//       </div>

//       {/* ── Score another listing link ── */}
//       <div className="mx-auto mt-5 sm:mt-6 max-w-4xl px-4 sm:px-6">
//         <a href="#" className="font-body text-ds-body text-brand hover:underline">
//           Score another listing
//         </a>

//         {/* ── Listing meta ── */}
//         <div className="mt-2 flex flex-wrap items-center gap-2 text-ds-body-sm font-body">
//           <span className="rounded-full bg-n-200 px-2.5 py-0.5 text-ds-caption font-semibold text-n-700">
//             Electronics
//           </span>
//           <span className="text-n-400 break-all">
//             {target?.asin ? `amazon.in/dp/${target.asin}` : "amazon.in/dp/…"}
//           </span>
//           {isLoading ? (
//             <Skeleton className="h-4 w-40" />
//           ) : (
//             <>
//               <span className="font-semibold text-n-900">₹{target?.price}</span>
//               {target?.discount > 0 && (
//                 <span className="text-success font-semibold">({target.discount}% off)</span>
//               )}
//               <span className="text-n-300">|</span>
//               <span className="text-warning font-semibold">
//                 {target?.rating > 0 ? `${target.rating} ★` : "No rating yet"}
//               </span>
//               <span className="text-n-400">({target?.reviews} reviews)</span>
//             </>
//           )}
//         </div>

//         {/* ── Product title ── */}
//         {isLoading ? (
//           <Skeleton className="mt-3 h-8 w-3/4" />
//         ) : (
//           <h1 className="mt-3 font-display text-2xl sm:text-[28px] font-extrabold leading-tight text-n-900">
//             {target?.title}
//           </h1>
//         )}
//       </div>

//       {/* ── Score cards ── */}
//       <div className="mx-auto mt-5 sm:mt-6 max-w-4xl px-4 sm:px-6">
//         <div className="flex gap-2 sm:gap-3">
//           {isLoading ? (
//             <><GaugeSkeleton /><GaugeSkeleton /><GaugeSkeleton /></>
//           ) : (
//             <>
//               <ArcGauge value={target?.lqs ?? 0} label="LQS" sub={`Grade ${target?.grade}`} />
//               <ArcGauge value={Math.round((target?.ctr ?? 0) * 100)} label="Est. CTR" sub="Estimated CTR" />
//               <ArcGauge value={Math.round((target?.cvr ?? 0) * 100)} label="Est. CVR" sub="Estimated CVR" />
//             </>
//           )}
//         </div>
//       </div>

//       {/* ── Revenue leak banner ── */}
//       <div className="mx-auto mt-4 sm:mt-5 max-w-4xl px-4 sm:px-6">
//         <div className="rounded-xl bg-n-900 px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div>
//             <p className="font-body text-ds-caption text-n-400">Estimated revenue being left behind</p>
//             {isLoading ? (
//               <Skeleton className="mt-1 h-9 w-32" />
//             ) : (
//               <p className="mt-1 font-display text-[28px] sm:text-[32px] font-extrabold text-warning leading-none">~{leakPercent}%</p>
//             )}
//             <p className="mt-2 font-body text-ds-body-sm text-n-400 max-w-xs">
//               At category-average AOV and traffic, this listing is leaking revenue every month.
//             </p>
//           </div>
//           <button
//             onClick={() => setShowFixModal(true)}
//             className="w-full sm:w-auto shrink-0 rounded-lg border border-n-600 bg-transparent px-4 py-2.5 font-display font-semibold text-ds-body text-white hover:bg-n-800 transition-colors text-center"
//           >
//             See how to fix this →
//           </button>
//         </div>
//       </div>

//       {/* ── RPI ── */}
//       <div className="mx-auto mt-4 sm:mt-5 max-w-4xl px-4 sm:px-6">
//         <div className="flex items-center justify-between rounded-lg border border-n-border bg-white px-4 sm:px-5 py-3 shadow-elev-1">
//           <span className="font-body text-ds-body text-n-600">Revenue Potential Index (RPI)</span>
//           {isLoading ? (
//             <Skeleton className="h-5 w-24" />
//           ) : (
//             <span className="font-display font-bold text-ds-h3 text-n-900">₹{target?.rpi}</span>
//           )}
//         </div>
//       </div>

//       {/* ── Competitor table ── */}
//       <div className="mx-auto mt-4 sm:mt-5 max-w-4xl px-4 sm:px-6">
//         <h2 className="font-display font-bold text-ds-h2 text-n-900 mb-3">Competitor Comparison</h2>
//         {isLoading ? <Skeleton className="h-48 w-full" /> : <CompetitorTable scores={data?.scores ?? {}} />}
//       </div>

//       {/* ── What we found ── */}
//       <div className="mx-auto mt-7 sm:mt-8 max-w-4xl px-4 sm:px-6">
//         <h2 className="font-display font-bold text-ds-h2 text-n-900 mb-3 sm:mb-4">What we found</h2>
//         <div className="flex flex-col gap-3 w-full">
//           {isLoading ? (
//             <><FindingSkeleton /><FindingSkeleton /><FindingSkeleton /></>
//           ) : (
//             feedback?.health?.map((item: any, index: number) => (
//               <FindingCard key={index} dot="#EF4444" title={item.level} body={item.msg} impact="high" />
//             ))
//           )}
//         </div>
//       </div>

//       {/* ── Top priority card ── */}
//       <div className="mx-auto mt-4 sm:mt-5 max-w-4xl px-4 sm:px-6">
//         <div className="rounded-xl border border-brand/30 bg-brand-light px-4 sm:px-5 py-5">
//           <div className="flex items-center gap-2 mb-2">
//             <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand font-display font-bold text-ds-caption text-white shrink-0">1</span>
//             <span className="font-body text-ds-caption font-semibold text-brand uppercase tracking-wide">Top priority</span>
//           </div>
//           {isLoading ? (
//             <><Skeleton className="h-5 w-64 mb-2" /><Skeleton className="h-4 w-full" /></>
//           ) : (
//             <>
//               <p className="font-display font-bold text-ds-h3 text-n-900">{feedback?.executive_summary?.top_action}</p>
//               <p className="mt-1 font-body text-ds-body-sm text-n-500 max-w-md">
//                 Potential RPI Lift:{" "}
//                 <span className="font-semibold text-brand">{feedback?.executive_summary?.top_action_lift}%</span>
//               </p>
//             </>
//           )}
//         </div>
//       </div>

//       {/* ── More fixes ── */}
//       <div className="mx-auto mt-7 sm:mt-8 max-w-4xl px-4 sm:px-6">
//         <h2 className="font-display font-bold text-ds-h2 text-n-900">More fixes for this listing</h2>
//         <p className="font-body text-ds-body-sm text-n-400 mb-4 mt-0.5">Ranked by estimated revenue impact</p>
//         <div className="flex flex-col gap-3">
//           {isLoading ? (
//             <><FixRowSkeleton /><FixRowSkeleton /><FixRowSkeleton /></>
//           ) : (
//             feedback?.priority_actions?.slice(0, 5)?.map((item: any, index: number) => (
//               <FixRow
//                 key={index}
//                 num={`0${index + 1}`}
//                 title={item.action}
//                 barW={`${Math.min(item.priority, 100)}%`}
//                 lift={item.rpi_lift}
//               />
//             ))
//           )}
//         </div>
//       </div>

//       {/* ── Upsell card ── */}
//       <div className="mx-auto mt-7 sm:mt-8 max-w-4xl px-4 sm:px-6">
//         <div className="rounded-2xl bg-brand-light border border-brand/10 px-6 sm:px-10 py-10 sm:py-12 text-center">
//           <p className="font-display text-lg sm:text-[20px] font-bold text-n-900 leading-snug mb-6 sm:mb-7">
//             {feedback?.priority_actions?.length > 5
//               ? `${feedback.priority_actions.length - 5} more fixes are waiting.`
//               : "More fixes are waiting."}{" "}
//             Connect your<br />Amazon account to unlock them all.
//           </p>
//           <button
//             onClick={() => window.location.href = "/dashboard"}
//             className="w-full sm:w-auto bg-brand text-white border-none rounded-xl px-8 sm:px-9 py-4 font-display font-semibold text-ds-body cursor-pointer shadow-[0_4px_16px_rgba(80,70,229,0.35)] hover:bg-brand-dark transition-colors"
//           >
//             Connect my account
//           </button>
//           <p className="mt-4 font-body text-ds-caption text-n-400">
//             Setup takes under 4 minutes
//           </p>
//         </div>
//       </div>

//       {/* ── Fix modal ── */}
//       {showFixModal && (
//         <div
//           className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm"
//           onClick={() => setShowFixModal(false)}
//         >
//           <div
//             className="w-full sm:max-w-[720px] rounded-t-3xl sm:rounded-3xl bg-white px-6 sm:px-8 pt-6 sm:pt-8 pb-8 shadow-2xl max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Mobile drag handle */}
//             <div className="flex justify-center mb-5 sm:hidden">
//               <div className="w-10 h-1 rounded-full bg-n-200" />
//             </div>

//             <h2 className="text-center text-2xl sm:text-4xl font-bold text-n-900">Connect Amazon to unlock everything</h2>
//             <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
//               {[
//                 { icon: "📈", text: "Full listing diagnosis across all your products" },
//                 { icon: "✨", text: "AI-generated fixes, ready to copy-paste" },
//                 { icon: "👁️", text: "Competitive intelligence, updated weekly" },
//               ].map(({ icon, text }) => (
//                 <div key={text} className="flex items-center gap-3">
//                   <span className="text-xl">{icon}</span>
//                   <p className="font-body text-ds-body text-n-700">{text}</p>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => { setShowFixModal(false); window.location.href = "/dashboard"; }}
//               className="mt-8 sm:mt-10 w-full rounded-xl bg-brand py-4 text-base sm:text-lg font-semibold text-white transition hover:opacity-90"
//             >
//               Connect my Amazon account
//             </button>
//             <div className="mt-6 sm:mt-8 border-t pt-4 sm:pt-5">
//               <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-n-400">
//                 <span>🔒 No credit card</span>
//                 <span>🛡️ Data encrypted</span>
//                 <span>✓ Cancel anytime</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface ScoreItem {
  label: string;
  title: string;
  asin: string;
  price: number;
  discount: number;
  rating: number;
  reviews: number;
  lqs: number;
  grade: string;
  ctr: number;
  cvr: number;
  rpi: number;
  qc_flags: string[];
}

interface HealthItem {
  level: string;
  msg: string;
}

interface PriorityAction {
  action: string;
  rpi_lift: number;
  ease: number;
  priority: number;
}

interface ExecutiveSummary {
  gap_to_leader: number;
  best_competitor: number;
  top_action: string;
  top_action_lift: number;
  top3_combined: number;
}

interface Feedback {
  asin: string;
  health: HealthItem[];
  strengths: string[];
  quick_wins: string[];
  medium_term: string[];
  long_term: string[];
  priority_actions: PriorityAction[];
  executive_summary: ExecutiveSummary;
}

interface ApiResult {
  ok: boolean;
  scores: ScoreItem[];
  feedback: Feedback;
}

// ── Loader steps ──────────────────────────────────────────────────────────────
const LOADER_STEPS = [
  { label: "Fetching listing data from Amazon", duration: 1800 },
  { label: "Analysing title & bullet points", duration: 1600 },
  { label: "Scoring CTR & CVR signals", duration: 1400 },
  { label: "Benchmarking against competitors", duration: 1500 },
  { label: "Calculating Revenue Potential Index", duration: 1200 },
  { label: "Generating priority action plan", duration: 1000 },
];

function FullPageLoader() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= LOADER_STEPS.length - 1) return;
    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, LOADER_STEPS[currentStep].duration);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const progress = Math.round((currentStep / (LOADER_STEPS.length - 1)) * 100);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-n-50 font-body">
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#5046E5 1px, transparent 1px), linear-gradient(90deg, #5046E5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-4 sm:px-6">
        {/* Animated logo mark */}
        <div className="mb-6 sm:mb-8 flex items-center gap-1">
          <div className="relative flex h-10 w-10 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-20 animate-ping" />
            <span className="relative flex h-8 w-8 rounded-full bg-brand items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 7l-9.5 9.5-4-4L2 19M22 7h-6M22 7v6" />
              </svg>
            </span>
          </div>
          <span className="font-display text-2xl font-extrabold text-n-900 tracking-[-0.03em] ml-1">
            opsell<span className="text-brand">.</span>
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-xl sm:text-[22px] font-bold text-n-900 text-center mb-1">
          Scoring your listing
        </h2>
        <p className="font-body text-ds-body-sm text-n-400 text-center mb-6 sm:mb-8">
          This takes about 10–15 seconds
        </p>

        {/* Progress bar */}
        <div className="w-full h-1.5 rounded-full bg-n-200 mb-5 sm:mb-6 overflow-hidden">
          <div
            className="h-full rounded-full bg-brand transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Steps */}
        <div className="w-full flex flex-col gap-2 sm:gap-2.5">
          {LOADER_STEPS.map((step, i) => {
            const isDone = i < currentStep;
            const isActive = i === currentStep;
            return (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-300 ${
                  isDone
                    ? "border-success/20 bg-success-light"
                    : isActive
                    ? "border-brand/30 bg-brand-light"
                    : "border-transparent bg-transparent opacity-40"
                }`}
              >
                {/* Icon */}
                <span className="shrink-0 flex h-5 w-5 items-center justify-center">
                  {isDone ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16A34A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : isActive ? (
                    <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-n-300" />
                  )}
                </span>

                {/* Label */}
                <span
                  className={`font-body text-ds-body-sm ${
                    isDone
                      ? "text-success font-medium"
                      : isActive
                      ? "text-brand font-semibold"
                      : "text-n-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-6 sm:mt-8 font-body text-ds-caption text-n-300 text-center">
          Powered by Opsell AI · No data stored without consent
        </p>
      </div>
    </div>
  );
}

function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`rounded-md bg-n-200 overflow-hidden relative ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "aiShimmer 1.6s ease infinite",
        }}
      />
    </div>
  );
}

function GaugeSkeleton() {
  return (
    <div className="flex-1 flex flex-col items-center gap-2 px-4 sm:px-6 py-4 bg-white rounded-lg border border-n-border shadow-elev-1">
      <Skeleton className="w-[72px] h-[40px]" />
      <Skeleton className="w-16 h-4 mt-1" />
      <Skeleton className="w-20 h-3" />
    </div>
  );
}

function FindingSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 rounded-lg border border-n-border bg-white px-4 sm:px-5 py-4 shadow-elev-1">
      <div className="flex items-start gap-3 flex-1">
        <Skeleton className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" />
        <div className="flex-1 flex flex-col gap-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      </div>
      <Skeleton className="h-6 w-24 rounded-full self-start" />
    </div>
  );
}

function FixRowSkeleton() {
  return (
    <div className="w-full rounded-lg border border-n-border bg-white px-4 sm:px-5 py-4 shadow-elev-1 overflow-hidden">
      <div className="flex items-center justify-between mb-3 gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Skeleton className="w-5 h-3 shrink-0" />
          <Skeleton className="h-4 flex-1 max-w-[250px]" />
        </div>
        <Skeleton className="w-16 sm:w-20 h-3 shrink-0" />
      </div>
      <Skeleton className="h-1.5 w-full" />
    </div>
  );
}

function lqsColor(v: number) {
  return v >= 70 ? "#16A34A" : v >= 40 ? "#F59E0B" : "#EF4444";
}

function ArcGauge({ value, label, sub }: { value: number; label: string; sub: string }) {
  const circumference = Math.PI * 28;
  const clamped = Math.min(100, Math.max(0, value));
  const offset = circumference * (1 - clamped / 100);
  const color = lqsColor(clamped);

  return (
    <div className="flex-1 flex flex-col items-center gap-1 px-3 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-n-border shadow-elev-1 min-w-0">
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
      <p className="font-body text-ds-caption text-n-400 text-center">{sub}</p>
    </div>
  );
}

function ImpactBadge({ level }: { level: "high" | "medium" | "strength" }) {
  const map = {
    high: { label: "High Impact", bg: "bg-error-light", text: "text-error" },
    medium: { label: "Medium Impact", bg: "bg-warning-light", text: "text-warning" },
    strength: { label: "Strength", bg: "bg-success-light", text: "text-success" },
  } as const;
  const { label, bg, text } = map[level];
  return (
    <span className={`shrink-0 text-ds-caption font-body font-semibold px-2.5 py-0.5 rounded-full ${bg} ${text} whitespace-nowrap`}>
      {label}
    </span>
  );
}

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
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 rounded-lg border border-n-border bg-white px-4 sm:px-5 py-4 shadow-elev-1">
      <div className="flex items-start gap-3 flex-1">
        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: dot }} />
        <div>
          <p className="font-display font-semibold text-ds-h3 text-n-900">{title}</p>
          <p className="mt-1 font-body text-ds-body-sm text-n-500 max-w-[480px]">{body}</p>
        </div>
      </div>
      <div className="pl-5 sm:pl-0">
        <ImpactBadge level={impact} />
      </div>
    </div>
  );
}

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
    <div className="rounded-lg border border-n-border bg-white px-4 sm:px-5 py-4 shadow-elev-1">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <span className="font-body text-ds-caption text-n-400 w-5 shrink-0">{num}</span>
          <p className="font-display font-semibold text-ds-h3 text-n-900 truncate">{title}</p>
        </div>
        <span className="font-body text-ds-caption text-brand font-semibold shrink-0">
          +{lift ?? 0}% RPI
        </span>
      </div>
      <div className="mt-3 h-1.5 w-full rounded-full bg-n-100">
        <div className="h-full rounded-full bg-brand" style={{ width: barW }} />
      </div>
    </div>
  );
}

// ── Competitor table — accepts ScoreItem[] ────────────────────────────────────
function CompetitorTable({ scores }: { scores: ScoreItem[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-n-border bg-white shadow-elev-1 -mx-4 sm:mx-0">
      <table className="w-full text-sm min-w-[560px]">
        <thead>
          <tr className="border-b border-n-border bg-n-50">
            {["Product", "LQS", "CTR", "CVR", "Rating", "RPI"].map((h, i) => (
              <th
                key={h}
                className={`px-3 sm:px-4 py-3 font-display font-semibold text-ds-caption text-n-500 uppercase tracking-wide ${
                  i === 0 ? "text-left" : i === 5 ? "text-right" : "text-center"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scores.map((item) => {
            const isTarget = item.label === "TARGET";
            return (
              <tr
                key={item.label}
                className={`border-b border-n-border last:border-0 ${
                  isTarget ? "bg-brand-light" : "hover:bg-n-50"
                }`}
              >
                <td className="px-3 sm:px-4 py-3 max-w-[160px] sm:max-w-[240px]">
                  <div className="flex items-center gap-2">
                    {isTarget && (
                      <span className="shrink-0 rounded-full bg-brand px-2 py-0.5 font-body text-[10px] font-bold text-white uppercase">
                        You
                      </span>
                    )}
                    <span
                      className={`font-body text-ds-body-sm truncate ${
                        isTarget ? "font-semibold text-n-900" : "text-n-600"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                </td>
                <td className="px-3 sm:px-4 py-3 text-center">
                  <span
                    className="font-display font-semibold text-ds-body-sm"
                    style={{ color: lqsColor(item.lqs) }}
                  >
                    {item.lqs}
                  </span>
                  <span className="ml-1 font-body text-ds-caption text-n-400">({item.grade})</span>
                </td>
                <td className="px-3 sm:px-4 py-3 text-center font-body text-ds-body-sm text-n-700">
                  {Math.round((item.ctr ?? 0) * 100)}%
                </td>
                <td className="px-3 sm:px-4 py-3 text-center font-body text-ds-body-sm text-n-700">
                  {Math.round((item.cvr ?? 0) * 100)}%
                </td>
                <td className="px-3 sm:px-4 py-3 text-center font-body text-ds-body-sm text-n-700">
                  {item.rating > 0 ? `${item.rating} ★` : "—"}
                  <span className="ml-1 text-n-400">({item.reviews})</span>
                </td>
                <td className="px-3 sm:px-4 py-3 text-right font-display font-semibold text-ds-body-sm text-n-900">
                  ₹{item.rpi}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function ErrorScreen({ message, onRetry }: { message: string; onRetry: () => void }) {
  let friendlyMessage = message;
  try {
    const parsed = JSON.parse(message);
    if (parsed?.detail) friendlyMessage = parsed.detail;
  } catch {
    // use raw message
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-n-50 font-body px-4 sm:px-6">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#EF4444 1px, transparent 1px), linear-gradient(90deg, #EF4444 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-error-light mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2 className="font-display text-xl sm:text-[22px] font-bold text-n-900 mb-2">
          Couldn't score this listing
        </h2>
        <p className="font-body text-ds-body-sm text-n-500 mb-6 leading-relaxed">{friendlyMessage}</p>
        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={onRetry}
            className="w-full rounded-lg bg-brand py-3 font-display font-semibold text-ds-body text-white hover:bg-brand-dark transition-colors"
          >
            Try a different listing
          </button>
          <button
            onClick={() => window.location.reload()}
            className="w-full rounded-lg border border-n-border bg-white py-3 font-body text-ds-body text-n-600 hover:bg-n-50 transition-colors"
          >
            Retry
          </button>
        </div>
        <p className="mt-6 font-body text-ds-caption text-n-300">
          If this keeps happening, the ASIN may not be available on amazon.in
        </p>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function FreeScorePage() {
  const [data, setData] = useState<ApiResult | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFixModal, setShowFixModal] = useState(false);

  const loadData = async () => {
    setError(null);
    setIsFetching(true);

    const existingResult = localStorage.getItem("opsellResult");
    if (existingResult) {
      setData(JSON.parse(existingResult));
      setIsFetching(false);
      return;
    }

    const pendingUrl = localStorage.getItem("pendingAmazonUrl");
    if (!pendingUrl) {
      setIsFetching(false);
      return;
    }

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "url", url: pendingUrl }),
      });

      if (!response.ok) {
        const err = await response.text();
        setError(err);
        return;
      }

      const result: ApiResult = await response.json();
      localStorage.setItem("opsellResult", JSON.stringify(result));
      localStorage.removeItem("pendingAmazonUrl");
      setData(result);
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong. Please try again.");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ── Derived values ──────────────────────────────────────────────────────────
  // scores is an array — find TARGET by label
  const target = data?.scores?.find((s) => s.label === "TARGET");
  const feedback = data?.feedback;

  const leakPercent = Math.abs(
    Math.round(
      ((feedback?.executive_summary?.gap_to_leader ?? 0) /
        (feedback?.executive_summary?.best_competitor ?? 1)) *
        100
    )
  );

  if (isFetching) return <FullPageLoader />;

  if (error)
    return (
      <ErrorScreen
        message={error}
        onRetry={() => {
          localStorage.removeItem("opsellResult");
          localStorage.removeItem("pendingAmazonUrl");
          window.location.href = "/";
        }}
      />
    );

  const isLoading = !data;

  return (
    <div className="min-h-screen bg-n-50 font-body pb-16">

      {/* ── Live pill ── */}
      <div className="flex justify-center pt-6 sm:pt-8 px-4">
        <div className="flex items-center gap-2 rounded-full bg-success-light border border-success/20 px-3 sm:px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse shrink-0" />
          <span className="font-body text-ds-caption text-success font-medium text-center">
            23 sellers scored their listings in the last hour
          </span>
        </div>
      </div>

      {/* ── Score another listing ── */}
      <div className="mx-auto mt-5 sm:mt-6 max-w-4xl px-4 sm:px-6">
        <a href="#" className="font-body text-ds-body text-brand hover:underline">
          Score another listing
        </a>

        {/* ── Listing meta ── */}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-ds-body-sm font-body">
          <span className="rounded-full bg-n-200 px-2.5 py-0.5 text-ds-caption font-semibold text-n-700">
            Electronics
          </span>
          <span className="text-n-400 break-all">
            {target?.asin ? `amazon.in/dp/${target.asin}` : "amazon.in/dp/…"}
          </span>
          {isLoading ? (
            <Skeleton className="h-4 w-40" />
          ) : (
            <>
              <span className="font-semibold text-n-900">₹{target?.price}</span>
              {(target?.discount ?? 0) > 0 && (
                <span className="text-success font-semibold">({target!.discount}% off)</span>
              )}
              <span className="text-n-300">|</span>
              <span className="text-warning font-semibold">
                {(target?.rating ?? 0) > 0 ? `${target!.rating} ★` : "No rating yet"}
              </span>
              <span className="text-n-400">({target?.reviews} reviews)</span>
            </>
          )}
        </div>

        {/* ── Product title ── */}
        {isLoading ? (
          <Skeleton className="mt-3 h-8 w-3/4" />
        ) : (
          <h1 className="mt-3 font-display text-2xl sm:text-[28px] font-extrabold leading-tight text-n-900">
            {target?.title}
          </h1>
        )}
      </div>

      {/* ── Score gauges ── */}
      <div className="mx-auto mt-5 sm:mt-6 max-w-4xl px-4 sm:px-6">
        <div className="flex gap-2 sm:gap-3">
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
      <div className="mx-auto mt-4 sm:mt-5 max-w-4xl px-4 sm:px-6">
        <div className="rounded-xl bg-n-900 px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-body text-ds-caption text-n-400">Estimated revenue being left behind</p>
            {isLoading ? (
              <Skeleton className="mt-1 h-9 w-32" />
            ) : (
              <p className="mt-1 font-display text-[28px] sm:text-[32px] font-extrabold text-warning leading-none">
                ~{leakPercent}%
              </p>
            )}
            <p className="mt-2 font-body text-ds-body-sm text-n-400 max-w-xs">
              At category-average AOV and traffic, this listing is leaking revenue every month.
            </p>
          </div>
          <button
            onClick={() => setShowFixModal(true)}
            className="w-full sm:w-auto shrink-0 rounded-lg border border-n-600 bg-transparent px-4 py-2.5 font-display font-semibold text-ds-body text-white hover:bg-n-800 transition-colors text-center"
          >
            See how to fix this →
          </button>
        </div>
      </div>

      {/* ── RPI ── */}
      <div className="mx-auto mt-4 sm:mt-5 max-w-4xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-lg border border-n-border bg-white px-4 sm:px-5 py-3 shadow-elev-1">
          <span className="font-body text-ds-body text-n-600">Revenue Potential Index (RPI)</span>
          {isLoading ? (
            <Skeleton className="h-5 w-24" />
          ) : (
            <span className="font-display font-bold text-ds-h3 text-n-900">₹{target?.rpi}</span>
          )}
        </div>
      </div>

      {/* ── Competitor table ── */}
      <div className="mx-auto mt-4 sm:mt-5 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display font-bold text-ds-h2 text-n-900 mb-3">Competitor Comparison</h2>
        {isLoading ? (
          <Skeleton className="h-48 w-full" />
        ) : (
          <CompetitorTable scores={data?.scores ?? []} />
        )}
      </div>

      {/* ── What we found ── */}
      <div className="mx-auto mt-7 sm:mt-8 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display font-bold text-ds-h2 text-n-900 mb-3 sm:mb-4">What we found</h2>
        <div className="flex flex-col gap-3 w-full">
          {isLoading ? (
            <>
              <FindingSkeleton />
              <FindingSkeleton />
              <FindingSkeleton />
            </>
          ) : (
            feedback?.health?.map((item, index) => (
              <FindingCard
                key={index}
                dot={item.level === "CRITICAL" ? "#EF4444" : "#F59E0B"}
                title={item.level}
                body={item.msg}
                impact={item.level === "CRITICAL" ? "high" : "medium"}
              />
            ))
          )}
        </div>
      </div>

      {/* ── Top priority card ── */}
      <div className="mx-auto mt-4 sm:mt-5 max-w-4xl px-4 sm:px-6">
        <div className="rounded-xl border border-brand/30 bg-brand-light px-4 sm:px-5 py-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand font-display font-bold text-ds-caption text-white shrink-0">
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
      <div className="mx-auto mt-7 sm:mt-8 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display font-bold text-ds-h2 text-n-900">More fixes for this listing</h2>
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
            feedback?.priority_actions?.slice(0, 5)?.map((item, index) => (
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

      {/* ── Upsell card ── */}
      <div className="mx-auto mt-7 sm:mt-8 max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl bg-brand-light border border-brand/10 px-6 sm:px-10 py-10 sm:py-12 text-center">
          <p className="font-display text-lg sm:text-[20px] font-bold text-n-900 leading-snug mb-6 sm:mb-7">
            {(feedback?.priority_actions?.length ?? 0) > 5
              ? `${feedback!.priority_actions.length - 5} more fixes are waiting.`
              : "More fixes are waiting."}{" "}
            Connect your
            <br />
            Amazon account to unlock them all.
          </p>
          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full sm:w-auto bg-brand text-white border-none rounded-xl px-8 sm:px-9 py-4 font-display font-semibold text-ds-body cursor-pointer shadow-[0_4px_16px_rgba(80,70,229,0.35)] hover:bg-brand-dark transition-colors"
          >
            Connect my account
          </button>
          <p className="mt-4 font-body text-ds-caption text-n-400">Setup takes under 4 minutes</p>
        </div>
      </div>

      {/* ── Fix modal ── */}
      {showFixModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowFixModal(false)}
        >
          <div
            className="w-full sm:max-w-[720px] rounded-t-3xl sm:rounded-3xl bg-white px-6 sm:px-8 pt-6 sm:pt-8 pb-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-5 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-n-200" />
            </div>
            <h2 className="text-center text-2xl sm:text-4xl font-bold text-n-900">
              Connect Amazon to unlock everything
            </h2>
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
              {[
                { icon: "📈", text: "Full listing diagnosis across all your products" },
                { icon: "✨", text: "AI-generated fixes, ready to copy-paste" },
                { icon: "👁️", text: "Competitive intelligence, updated weekly" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <p className="font-body text-ds-body text-n-700">{text}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                setShowFixModal(false);
                window.location.href = "/dashboard";
              }}
              className="mt-8 sm:mt-10 w-full rounded-xl bg-brand py-4 text-base sm:text-lg font-semibold text-white transition hover:opacity-90"
            >
              Connect my Amazon account
            </button>
            <div className="mt-6 sm:mt-8 border-t pt-4 sm:pt-5">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-n-400">
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