"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  width?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
}

export default function DataTable<T extends Record<string, any>>({
  columns,
  data,
  keyField,
  striped = true,
  hoverable = true,
  compact = false,
}: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: keyof T) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;

    const aVal = a[sortColumn];
    const bVal = b[sortColumn];

    if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="overflow-x-auto rounded-lg card-dark">
      <table className="w-full">
        <thead>
          <tr className="border-b border-color-border-dark bg-color-card-dark-alt/50">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={`px-6 py-4 text-left text-xs font-semibold text-color-text-secondary uppercase tracking-wider ${
                  column.width || ""
                } ${column.sortable ? "cursor-pointer hover:text-color-accent-gold" : ""}`}
                onClick={() =>
                  column.sortable && handleSort(column.key)
                }
              >
                <div className="flex items-center gap-2">
                  {column.label}
                  {column.sortable && (
                    <div className="text-xs">
                      {sortColumn === column.key ? (
                        sortDirection === "asc" ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )
                      ) : (
                        <div className="w-4 h-4" />
                      )}
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr
              key={String(row[keyField])}
              className={`border-b border-color-border-dark transition-colors ${
                striped && idx % 2 === 1 ? "bg-color-card-dark-alt/20" : ""
              } ${hoverable ? "hover:bg-color-card-dark-alt/40" : ""}`}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={`px-6 ${compact ? "py-2" : "py-4"} text-sm text-color-text-secondary`}
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {sortedData.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-color-text-secondary">No data available</p>
        </div>
      )}
    </div>
  );
}
