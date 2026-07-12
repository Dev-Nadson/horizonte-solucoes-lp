"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { IconMenu, IconClose } from "./ui/icons";

type WithChildren = { children: ReactNode; className?: string };

/** Cabeçalho fixo com blur. Recebe a marca (esquerda) e a navegação (direita). */
export function Header({ children }: WithChildren) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-[10px]">
      <nav className="relative mx-auto flex max-w-295 items-center justify-between px-5 py-4 md:px-8">
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

/**
 * Container da navegação à direita.
 * No desktop mostra os links em linha; no celular/tablet mostra um botão
 * hambúrguer que abre um painel com os mesmos links.
 */
export function HeaderNav({ children }: WithChildren) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Links em linha (desktop) */}
      <div className="hidden items-center gap-7.5 md:flex">{children}</div>

      {/* Botão hambúrguer (mobile/tablet) */}
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center rounded-lg p-1.5 text-navy md:hidden"
      >
        {open ? <IconClose size={26} /> : <IconMenu size={26} />}
      </button>

      {/* Painel de navegação (mobile/tablet) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-x-0 top-full border-b border-line bg-white/95 backdrop-blur-[10px] md:hidden"
        >
          <div className="mx-auto flex max-w-295 flex-col items-start gap-5 px-5 py-6">
            {children}
          </div>
        </div>
      )}
    </>
  );
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
      className="text-[15px] font-medium text-muted hover:text-muted md:text-[14.5px]"
    >
      {children}
    </a>
  );
}
