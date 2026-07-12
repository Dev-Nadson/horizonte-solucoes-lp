import type { ReactNode } from "react";
import Link from "next/link";

type WithChildren = { children: ReactNode; className?: string };

/** Cabeçalho fixo com blur. Recebe a marca (esquerda) e a navegação (direita). */
export function Header({ children }: WithChildren) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-[10px]">
      <nav className="mx-auto flex max-w-295 items-center justify-between px-8 py-4">
        {children}
      </nav>
    </header>
  );
}

/** Bloco da marca (logo + textos), clicável. */
export function HeaderBrand({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="flex items-center gap-3">
      {children}
    </Link>
  );
}

/** Nome da marca. */
export function HeaderTitle({ children }: WithChildren) {
  return (
    <span className="block text-[17px] font-semibold leading-none text-navy">
      {children}
    </span>
  );
}

/** Assinatura em caixa alta abaixo do nome. */
export function HeaderSubtitle({ children }: WithChildren) {
  return (
    <span className="mt-0.5 block text-[10px] font-medium uppercase leading-none tracking-[.14em] text-orange">
      {children}
    </span>
  );
}

/** Container da navegação à direita. */
export function HeaderNav({ children }: WithChildren) {
  return <div className="flex items-center gap-7.5">{children}</div>;
}

/** Link de navegação (âncora). */
export function HeaderNavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-[14.5px] font-medium text-muted hover:text-muted"
    >
      {children}
    </a>
  );
}
