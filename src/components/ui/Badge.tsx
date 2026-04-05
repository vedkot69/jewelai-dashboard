import { ReactNode } from "react";

type BadgeVariant = "confirmed" | "pending" | "warning" | "danger" | "info" | "success";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  confirmed: "badge-green",
  pending: "badge-purple",
  warning: "badge-gold",
  danger: "badge-red",
  info: "badge-purple",
  success: "badge-green",
};

export default function Badge({
  variant = "info",
  children,
  icon,
  className = "",
}: BadgeProps) {
  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
