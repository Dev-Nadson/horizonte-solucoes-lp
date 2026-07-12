import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-295 flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <Logo variant="footer" size={38} />
          <div className="leading-none">
            <div className="text-base font-semibold text-white">
              Horizonte Inovação Assistiva
            </div>
            <div className="mt-0.75 text-xs font-normal text-[#8399B2]">
              Transformando o desafio em solução
            </div>
          </div>
        </div>
        <div className="text-[13px] text-[#8399B2]">
          © 2026 Horizonte Inovação Assistiva. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
