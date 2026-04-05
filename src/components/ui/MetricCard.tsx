"use client";

import { useEffect, useState } from "react";
import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import Card from "./Card";

interface MetricCardProps {
  icon?: ReactNode;
  value: number | string;
  label: string;
  sublabel?: string;
  change?: number;
  animated?: boolean;
  trend?: "up" | "down" | "neutral";
  unit?: string;
}

export default function MetricCard({
  icon,
  value,
  label,
  sublabel,
  change,
  animated = true,
  trend = "neutral",
  unit = "",
}: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animated && typeof value === "number") {
      let current = 0;
      const target = value;
      const increment = target / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayValue(target);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [value, animated]);

  const displayVal =
    animated && typeof value === "number" ? displayValue : value;

  const trendColor =
    trend === "up"
      ? "text-color-accent-green"
      : trend === "down"
        ? "text-color-accent-red"
        : "";

  const trendIcon =
    trend === "up" ? (
      <TrendingUp className="w-4 h-4" />
    ) : trend === "down" ? (
      <TrendingDown className="w-4 h-4" />
    ) : null;

  return (
    <Card variant="default">
      <div className="p-6 flex flex-col gap-4">
        {icon && (
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-color-card-dark flex items-center justify-center text-lg">
              {icon}
            </div>
            {change !== undefined && (
              <div className={`flex items-center gap-1 text-xs font-semibold ${trendColor}`}>
                {trendIcon}
                <span>{Math.abs(change)}%</span>
              </div>
            )}
          </div>
        )}

        <div>
          <p className="text-color-text-secondary text-sm">{label}</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-bold text-color-text-primary">
              {displayVal}
              {unit && <span className="text-lg ml-1">{unit}</span>}
            </span>
          </div>
          {sublabel && (
            <p className="text-xs text-color-text-secondary mt-2">{sublabel}</p>
          )}
        </div>
      </div>
    </Card>
  );
}
