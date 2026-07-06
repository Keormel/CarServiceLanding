import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-signal bg-signal text-white shadow-red-glow hover:border-red-500 hover:bg-red-600",
  secondary:
    "border-white/[0.15] bg-white/10 text-white hover:border-white/30 hover:bg-white/[0.15]",
  ghost:
    "border-transparent bg-transparent text-white/[0.78] hover:bg-white/10 hover:text-white",
  outline:
    "border-white/20 bg-carbon/40 text-white hover:border-signal/70 hover:bg-signal/10"
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base"
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-55",
    variants[variant],
    sizes[size],
    className
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  href,
  icon,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={buttonClasses({ variant, size, className })}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  icon,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ variant, size, className })}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
