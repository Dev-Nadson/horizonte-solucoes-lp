import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "darkGhost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-[30px] font-semibold transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-orange text-white hover:bg-orange-hover hover:text-white",
  secondary:
    "bg-white text-navy border-[1.5px] border-[#D5DEE7] hover:text-navy",
  darkGhost:
    "bg-white/10 text-white border-[1.5px] border-white/30 hover:text-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-sm px-5.5 py-2.75",
  md: "text-[15px] px-7.5 py-3.75",
  lg: "text-[15px] px-8 py-3.75",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
