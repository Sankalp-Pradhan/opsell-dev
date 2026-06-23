// ============================================================================
// Shared UI Primitives — Keyword Gap page
// ============================================================================

'use client'

import { useState } from "react";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-ds-caption font-medium text-n-400 uppercase tracking-widest mb-1">
      {children}
    </p>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-[24px] border border-n-border shadow-elev-1 ${className}`}
    >
      {children}
    </div>
  );
}

export function ProgressBar({
  value,
  max,
  colorClassName = "bg-brand",
  heightClassName = "h-1.5",
}: {
  value: number;
  max: number;
  colorClassName?: string;
  heightClassName?: string;
}) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className={`rounded-full bg-n-100 overflow-hidden w-full ${heightClassName}`}>
      <div
        className={`h-full rounded-full transition-all duration-500 ${colorClassName}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="text-ds-caption font-medium text-brand bg-brand-light px-3 py-1.5 rounded-full hover:bg-brand hover:text-white transition-colors duration-150"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

export function GapTypeBadge({ type }: { type: string }) {
  const map: Record<string, { label: string; className: string }> = {
    frontend: {
      label: "Frontend gap",
      className: "bg-error-light text-error border-error/20",
    },
    backend: {
      label: "Backend gap",
      className: "bg-n-100 text-n-500 border-n-border",
    },
    both: {
      label: "Fully missing",
      className: "bg-warning-light text-warning border-warning/20",
    },
  };
  const cfg = map[type] ?? map.both;
  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md border ${cfg.className}`}
    >
      {cfg.label}
    </span>
  );
}

export function coverageBarColor(n: number) {
  if (n >= 6) return "bg-error";
  if (n >= 4) return "bg-warning";
  return "bg-brand";
}

export function placementLabel(p: string) {
  return p.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
