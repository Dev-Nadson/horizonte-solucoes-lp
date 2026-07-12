import { Container } from "./ui/Container";

export function PartnersSection() {
  return (
    <section id="parceiros" className="bg-surface py-[84px]">
      <Container className="text-center">
        <div className="mb-8 text-[12.5px] font-semibold uppercase tracking-[.16em] text-orange">
          Parceiros &amp; apoiadores
        </div>
        <div className="grid grid-cols-5 gap-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex h-[74px] items-center justify-center rounded-[14px] border border-line bg-white text-[13px] font-medium text-[#B4C0CE]"
            >
              Logo
            </div>
          ))}
        </div>
        <p className="mt-7 text-sm text-[#9FB0C2]">
          Quer construir esse horizonte com a gente?{" "}
          <a href="#contato" className="font-semibold">
            Seja um parceiro
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
