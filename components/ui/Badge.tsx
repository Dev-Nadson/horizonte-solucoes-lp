import type { ReactNode } from "react";

type BadgeSize = "sm" | "md";

type BadgeProps = {
  children: ReactNode;
  /** Cor do ponto circular à esquerda (ex.: "#DE8A3E"). Omitir para não exibir. */
  dotColor?: string;
  size?: BadgeSize;
  /** Classes de cor de fundo/texto/tracking (ex.: "bg-[#EAF0F5] text-navy"). */
  className?: string;
};

const sizes: Record<BadgeSize, string> = {
  sm: "text-[11.5px] px-3.25 py-1.5 rounded-[20px]",
  md: "text-[12.5px] px-4 py-2 rounded-[30px]",
};

export function Badge({
  children,
  dotColor,
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold ${sizes[size]} ${className}`}
    >
      {dotColor && (
        <span
          className="h-1.75 w-1.75 rounded-full"
          style={{ background: dotColor }}
        />
      )}
      {children}
    </span>
  );
}
