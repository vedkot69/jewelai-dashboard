import { ReactNode } from "react";

interface StatBoxProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  color?: "gold" | "green" | "red" | "purple" | "blue";
  layout?: "vertical" | "horizontal";
  className?: string;
}

const colorClasses = {
  gold: "text-color-accent-gold",
  green: "text-color-accent-green",
  red: "text-color-accent-red",
  purple: "text-color-accent-purple",
  blue: "text-color-accent-blue",
};

export default function StatBox({
  label,
  value,
  icon,
  color = "gold",
  layout = "vertical",
  className = "",
}: StatBoxProps) {
  return (
    <div
      className={`${
        layout === "horizontal"
          ? "flex items-center gap-4"
          : "flex flex-col gap-2"
      } ${className}`}
    >
      {icon && (
        <div className={`text-2xl ${colorClasses[color]}`}>{icon}</div>
      )}
      <div>
        <p className="text-xs text-color-text-secondary uppercase tracking-wider font-semibold">
          {label}
        </p>
        <p className="text-2xl font-bold text-color-text-primary mt-1">
          {value}
        </p>
      </div>
    </div>
  );
}
