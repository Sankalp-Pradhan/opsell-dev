// import { ImpactBreakdown } from "@/app/(text-enhancement)/lib/types";

// interface Props {
//   breakdown: ImpactBreakdown[];
// }

// const componentColors: Record<string, string> = {
//   Title: "bg-violet-50 border-violet-100 text-violet-800",
//   Bullets: "bg-blue-50 border-blue-100 text-blue-800",
//   Description: "bg-teal-50 border-teal-100 text-teal-800",
// };

// const labelColors: Record<string, string> = {
//   Title: "bg-violet-100 text-violet-700",
//   Bullets: "bg-blue-100 text-blue-700",
//   Description: "bg-teal-100 text-teal-700",
// };

// export default function Section8ContentEnhancements({ breakdown }: Props) {
//   return (
//     <section className="bg-white border border-n-border rounded-2xl shadow-sm p-6 space-y-5">
//       <div>
//         <p className="text-ds-caption text-n-400 uppercase tracking-wide">
//           What Changed
//         </p>
//         <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
//           Content Enhancements
//         </h2>
//       </div>

//       <div className="space-y-4">
//         {breakdown.map((item) => {
//           const cardClass =
//             componentColors[item.component] ??
//             "bg-n-50 border-n-border text-n-800";
//           const labelClass =
//             labelColors[item.component] ?? "bg-n-100 text-n-700";

//           return (
//             <div
//               key={item.component}
//               className={`border rounded-xl p-5 space-y-3 ${cardClass}`}
//             >
//               <div className="flex items-center gap-2 flex-wrap">
//                 <span
//                   className={`text-ds-caption font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide ${labelClass}`}
//                 >
//                   {item.component} Improvements
//                 </span>
//               </div>

//               <div className="space-y-1">
//                 <p className="text-ds-caption font-medium opacity-70 uppercase tracking-wide">
//                   What Changed
//                 </p>
//                 <p className="text-ds-body leading-relaxed opacity-90">
//                   {item.what_changed}
//                 </p>
//               </div>

//               <div className="space-y-1">
//                 <p className="text-ds-caption font-medium opacity-70 uppercase tracking-wide">
//                   Reasoning
//                 </p>
//                 <p className="text-ds-body leading-relaxed opacity-80">
//                   {item.reasoning}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
import { ImpactBreakdown } from "@/app/(text-enhancement)/lib/types";

interface Props {
  breakdown: ImpactBreakdown[];
}

interface ComponentConfig {
  accent: string;
  badge: string;
  dot: string;
}

const componentConfig: Record<string, ComponentConfig> = {
  Title: {
    accent: "border-l-violet-400",
    badge: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    dot: "bg-violet-400",
  },
  Bullets: {
    accent: "border-l-blue-400",
    badge: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    dot: "bg-blue-400",
  },
  Description: {
    accent: "border-l-teal-400",
    badge: "bg-teal-50 text-teal-700 ring-1 ring-teal-200",
    dot: "bg-teal-400",
  },
};

const fallbackConfig: ComponentConfig = {
  accent: "border-l-n-300",
  badge: "bg-n-50 text-n-600 ring-1 ring-n-200",
  dot: "bg-n-400",
};

export default function Section8ContentEnhancements({ breakdown }: Props) {
  return (
    <section className="bg-white border border-n-border rounded-2xl shadow-sm p-6 space-y-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-ds-caption text-n-400 uppercase tracking-widest">
            Impact Breakdown
          </p>
          <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
            Content Enhancements
          </h2>
        </div>
        <span className="text-ds-caption text-n-400 mt-1">
          {breakdown.length} section{breakdown.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="space-y-3">
        {breakdown.map((item) => {
          const cfg = componentConfig[item.component] ?? fallbackConfig;

          return (
            <div
              key={item.component}
              className={`border-l-[3px] border border-n-border rounded-xl bg-n-50/50 p-5 space-y-4 ${cfg.accent}`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
                <span className={`text-ds-caption font-semibold px-2.5 py-0.5 rounded-full tracking-wide ${cfg.badge}`}>
                  {item.component}
                </span>
              </div>

              <div className="space-y-1 pl-4">
                <p className="text-[10px] font-semibold text-n-400 uppercase tracking-widest">
                  What changed
                </p>
                <p className="text-ds-body text-n-800 leading-relaxed">
                  {item.what_changed}
                </p>
              </div>

              <div className="pl-4">
                <hr className="border-n-border" />
              </div>

              <div className="space-y-1 pl-4">
                <p className="text-[10px] font-semibold text-n-400 uppercase tracking-widest">
                  Reasoning
                </p>
                <p className="text-ds-body text-n-600 leading-relaxed">
                  {item.reasoning}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}