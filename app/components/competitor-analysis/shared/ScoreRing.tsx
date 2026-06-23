"use client";

interface ScoreRingProps {
  score: number; // 0-100
  size?: number; // px
  strokeWidth?: number;
}

function colorForScore(score: number): string {
  if (score >= 60) return "var(--color-ai-confidence-high, #16A34A)";
  if (score >= 40) return "#F59E0B";
  return "#EF4444";
}

function tailwindColorClassForScore(score: number): string {
  if (score >= 60) return "text-success";
  if (score >= 40) return "text-warning";
  return "text-error";
}

/**
 * Thin circular progress ring used behind score numbers.
 * green >= 60, amber 40-59, red < 40 (per design spec).
 */
export default function ScoreRing({ score, size = 40, strokeWidth = 3 }: ScoreRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, score));
  const dashOffset = circumference - (clamped / 100) * circumference;
  const colorClass = tailwindColorClassForScore(score);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        className="text-n-100"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        className={colorClass}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export { colorForScore, tailwindColorClassForScore };
