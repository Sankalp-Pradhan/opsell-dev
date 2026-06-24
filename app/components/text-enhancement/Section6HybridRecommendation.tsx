"use client";

import { useState } from "react";
import { HybridVariant } from "@/app/(text-enhancement)/lib/types";
import { ChevronDown } from "lucide-react";

interface Props {
  hybrid: HybridVariant;
}

export default function Section6HybridRecommendation({ hybrid }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="rounded-2xl shadow-sm overflow-hidden border border-emerald-200">
      <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-white/70 block" />
          <div>
            <p className="text-ds-caption text-emerald-100 uppercase tracking-wide">
              Recommended
            </p>
            <h2 className="text-ds-h3 font-display text-white mt-0.5">
              Hybrid Copy
            </h2>
          </div>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md text-white bg-emerald-700 hover:bg-emerald-800 transition-colors"
          aria-expanded={isOpen}
        >
          <span>{isOpen ? "Collapse" : "Expand"}</span>
          <ChevronDown
            size={15}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Expandable content */}
      {isOpen && (
        <div className="bg-white p-6 space-y-6">
          <div className="space-y-1">
            <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
              Recommended Title
            </p>
            <p className="text-ds-body text-n-900 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 font-medium">
              {hybrid.title}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
              Recommended Bullets
            </p>
            <ul className="space-y-2">
              {hybrid.bullets.map((bullet: string, i: number) => (
                <li
                  key={i}
                  className="flex gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3"
                >
                  <span className="text-ds-caption text-emerald-400 font-mono mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-ds-body text-n-800">{bullet}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1">
            <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
              Recommended Description
            </p>
            <div
              className="text-ds-body text-n-700 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: hybrid.description }}
            />
          </div>

          <div className="space-y-2 bg-n-50 border border-n-border rounded-xl px-5 py-4">
            <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
              Rationale — Why Hybrid Won
            </p>
            <p className="text-ds-body text-n-700 leading-relaxed">
              {hybrid.rationale}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}