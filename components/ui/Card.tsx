import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

/** Base do card: fundo branco, borda e cantos arredondados. */
export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-3xl border border-line bg-white ${className}`}>
      {children}
    </div>
  );
}

/** Área superior de mídia/imagem (placeholder com gradiente). */
export function CardMedia({ children, className = "" }: CardProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}

/** Corpo com padding do card. */
export function CardBody({ children, className = "" }: CardProps) {
  return <div className={className}>{children}</div>;
}

/** Título do card (h3). */
export function CardTitle({ children, className = "" }: CardProps) {
  return (
    <h3 className={`m-0 font-semibold text-navy ${className}`}>{children}</h3>
  );
}

/** Texto de apoio do card. */
export function CardText({ children, className = "" }: CardProps) {
  return (
    <p className={`m-0 font-normal text-muted ${className}`}>{children}</p>
  );
}
