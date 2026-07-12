import type { ReactNode } from "react";

type Variant = "light" | "dark";

type BlockProps = {
  children: ReactNode;
  className?: string;
};

type VariantBlockProps = BlockProps & {
  variant?: Variant;
};

/** Wrapper do cabeçalho de seção (eyebrow + título + descrição). */
export function SectionHeader({ children, className = "" }: BlockProps) {
  return <div className={className}>{children}</div>;
}

/** Eyebrow em caixa alta. */
export function SectionHeaderLabel({
  children,
  variant = "light",
  className = "",
}: VariantBlockProps) {
  const color = variant === "dark" ? "text-amber" : "text-orange";
  return (
    <div
      className={`mb-3.5 text-[12.5px] font-semibold uppercase tracking-[.16em] ${color} ${className}`}
    >
      {children}
    </div>
  );
}

const titleSizes: Record<number, string> = {
  36: "text-[26px] md:text-[36px]",
  38: "text-[27px] md:text-[38px]",
  40: "text-[28px] md:text-[40px]",
};

/** Título principal da seção (h2). */
export function SectionHeaderTitle({
  children,
  variant = "light",
  size = 38,
  className = "",
}: VariantBlockProps & { size?: 36 | 38 | 40 }) {
  const color = variant === "dark" ? "text-white" : "text-navy";
  return (
    <h2
      className={`m-0 font-semibold leading-[1.15] tracking-[-.01em] ${titleSizes[size]} ${color} ${className}`}
    >
      {children}
    </h2>
  );
}

/** Parágrafo de apoio abaixo do título. */
export function SectionHeaderDescription({
  children,
  variant = "light",
  className = "",
}: VariantBlockProps) {
  const color = variant === "dark" ? "text-[#B7C6D8]" : "text-muted";
  return (
    <p
      className={`mt-3.5 text-base md:text-lg font-normal leading-[1.7] ${color} ${className}`}
    >
      {children}
    </p>
  );
}
