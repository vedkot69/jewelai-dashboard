import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "highlighted" | "alert";
  hoverable?: boolean;
}

export default function Card({
  children,
  className = "",
  variant = "default",
  hoverable = false,
}: CardProps) {
  const variantClasses = {
    default: "card-dark",
    highlighted: "card-dark-alt border border-color-accent-gold/20",
    alert: "card-dark-alt border border-color-accent-red/20",
  };

  return (
    <div
      className={`${variantClasses[variant]} ${hoverable ? "card-interactive" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

export function CardHeader({
  title,
  subtitle,
  className = "",
}: CardHeaderProps) {
  return (
    <div className={`px-6 pt-6 pb-4 border-b border-color-border-dark ${className}`}>
      {title && (
        <h3 className="text-lg font-bold text-color-text-primary tracking-tight">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-sm text-color-text-secondary mt-1">{subtitle}</p>
      )}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`px-6 py-4 border-t border-color-border-dark ${className}`}>
      {children}
    </div>
  );
}
