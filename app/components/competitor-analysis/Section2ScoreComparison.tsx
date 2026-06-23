"use client";

import { useMemo, useState } from "react";
import { SectionCard, ScorePill } from "./shared/Primitives";
import { ScoreComparisonRow } from "@/app/(competitor-analysis)/types/api";

type SortKey =
  | "overall"
  | "a9_compliance"
  | "rufus_readiness"
  | "lqs_score";

type SortDir = "asc" | "desc";

const COLUMNS: {
  key: SortKey;
  label: string;
}[] = [
  { key: "overall", label: "Overall" },
  { key: "a9_compliance", label: "A9" },
  { key: "rufus_readiness", label: "Rufus" },
  { key: "lqs_score", label: "LQS" },
];

export default function ScoreComparisonTable({
  rows,
}: {
  rows: ScoreComparisonRow[];
}) {
  const [sortKey, setSortKey] =
    useState<SortKey>("overall");

  const [sortDir, setSortDir] =
    useState<SortDir>("desc");

  const target = rows.find(
    (r) => r.label === "TARGET"
  );

  const rankedRows = useMemo(() => {
    return [...rows]
      .sort((a, b) => b.overall - a.overall)
      .map((row, index) => ({
        ...row,
        rank: index + 1,
      }));
  }, [rows]);

  const sortedRows = useMemo(() => {
    return [...rankedRows].sort((a, b) => {
      const diff =
        a[sortKey] - b[sortKey];

      return sortDir === "asc"
        ? diff
        : -diff;
    });
  }, [
    rankedRows,
    sortKey,
    sortDir,
  ]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) =>
        d === "asc" ? "desc" : "asc"
      );
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  return (
    <SectionCard
      title="Score Comparison"
      action={
        <span className="text-ds-caption text-n-500">
          {rows.length} listings analysed
        </span>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full table-fixed text-ds-body-sm">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b border-n-border">
              <th className="w-16 px-4 py-3 text-left text-n-500 font-medium">
                #
              </th>

              <th className="sticky left-0 bg-white text-left px-4 py-3 text-n-500 font-medium w-36">
                Listing
              </th>

              <th className="text-left px-4 py-3 text-n-500 font-medium min-w-[320px]">
                Title
              </th>

              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  onClick={() =>
                    toggleSort(col.key)
                  }
                  className={`
                    px-4
                    py-3
                    text-left
                    font-medium
                    cursor-pointer
                    select-none
                    w-28
                    ${
                      sortKey === col.key
                        ? "text-brand font-semibold"
                        : "text-n-500"
                    }
                  `}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}

                    <span className="text-ds-caption">
                      {sortKey === col.key
                        ? sortDir === "asc"
                          ? "▲"
                          : "▼"
                        : "⇕"}
                    </span>
                  </span>
                </th>
              ))}

              <th className="w-24 px-4 py-3 text-left text-n-500 font-medium">
                CTR
              </th>

              <th className="w-32 px-4 py-3 text-left text-n-500 font-medium">
                Revenue
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedRows.map(
              (row, idx) => {
                const isTarget =
                  row.label === "TARGET";

                return (
                  <tr
                    key={`${row.label}-${idx}`}
                    className={`
                      transition-colors
                      hover:bg-n-50/70
                      ${
                        isTarget
                          ? "bg-brand/5 border-l-4 border-brand"
                          : ""
                      }
                    `}
                  >
                    <td className="px-4 py-3.5 text-n-500 font-medium">
                      #{row.rank}
                    </td>

                    <td className="sticky left-0 px-4 py-3.5 text-n-800 bg-inherit">
                      {isTarget ? (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">
                            TARGET
                          </span>

                          <span className="px-2 py-0.5 rounded-full bg-brand text-white text-[10px]">
                            You
                          </span>
                        </div>
                      ) : (
                        row.label
                      )}
                    </td>

                    <td
                      className="px-4 py-3.5 text-n-700 truncate"
                      title={row.title}
                    >
                      {row.title}
                    </td>

                    {COLUMNS.map((col) => {
                      const value =
                        row[col.key];

                      const targetVal =
                        target
                          ? target[col.key]
                          : value;

                      return (
                        <td
                          key={col.key}
                          className="px-4 py-3.5"
                        >
                          {isTarget ? (
                            <span className="font-semibold text-n-800">
                              {value}
                            </span>
                          ) : (
                            <ScorePill
                              score={value}
                              delta={
                                value -
                                targetVal
                              }
                            />
                          )}
                        </td>
                      );
                    })}

                    <td className="px-4 py-3.5 text-n-700">
                      {row.projected_ctr ||
                        "—"}
                    </td>

                    <td className="px-4 py-3.5 font-medium text-n-800">
                      {row.gmv_estimate ||
                        "—"}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}