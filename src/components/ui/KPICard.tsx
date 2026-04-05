import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  icon?: ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
  change?: number;
  changeType?: "positive" | "negative" | "neutral";
  compact?: boolean;
  className?: string;
}

export function KPICard({
  icon,
  label,
  value,
  subtitle,
  change,
  changeType = "neutral",
  compact = false,
  className = "",
}: KPICardProps) {
  const changeColor = {
    positive: "text-color-accent-green",
    negative: "text-color-accent-red",
    neutral: "text-color-text-secondary",
  };

  const changeIcon =
    changeType === "positive" ? (
      <TrendingUp className="w-4 h-4" />
    ) : changeType === "negative" ? (
      <TrendingDown className="w-4 h-4" />
    ) : null;

  return (
    <div
      className={`card-dark p-${compact ? "4" : "6"} hover:shadow-xl transition-all ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-color-text-secondary text-sm font-semibold uppercase tracking-wider mb-2">
            {label}
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className={`font-bold text-color-text-primary tracking-tight ${
              compact ? "text-2xl" : "text-3xl"
            }`}>
              {value}
            </h3>
            {change !== undefined && (
              <div className={`flex items-center gap-1 text-sm font-semibold ${changeColor[changeType]}`}>
                {changeIcon}
                <span>{Math.abs(change)}%</span>
              </div>
            )}
          </div>
          {subtitle && (
            <p className="text-color-text-secondary text-xs mt-2">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="ml-4 text-3xl opacity-70">{icon}</div>
        )}
      </div>
    </div>
  );
}
