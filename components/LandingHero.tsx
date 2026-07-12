import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";

export function LandingHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(160deg,#F4F8FB_0%,#FFFFFF_60%)]"
    >
      <div className="absolute -right-30 -top-30 h-115 w-115 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(222,138,62,.16),transparent_70%)]" />
      <div className="absolute -bottom-40 -left-30 h-105 w-105 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,95,.08),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-295 grid-cols-[1.1fr_.9fr] items-center gap-14 px-8 pb-26 pt-24">
        <div>
          <Badge
            dotColor="#DE8A3E"
            className="mb-6.5 bg-[#EAF0F5] text-navy tracking-[.04em]"
          >
            Tecnologia que inclui
          </Badge>
          <h1 className="m-0 mb-5.5 text-[56px] font-semibold leading-[1.08] tracking-[-.02em] text-navy">
            Transformando o desafio em <span className="text-orange">solução</span>
          </h1>
          <p className="m-0 mb-9 max-w-130 text-[19px] font-normal leading-[1.65] text-muted">
            A Horizonte desenvolve inovação assistiva para ampliar a autonomia de
            pessoas com deficiência - em parceria com escolas, instituições e órgãos
            públicos.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Button href="#contato" variant="primary">
              Fale conosco
            </Button>
            <Button href="#solucoes" variant="secondary">
              Conheça as soluções
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative flex h-85 w-85 items-center justify-center rounded-[36px] bg-[linear-gradient(150deg,#1E3A5F,#2C5378)] shadow-[0_30px_70px_rgba(30,58,95,.28)]">
            <Logo variant="hero" size={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
