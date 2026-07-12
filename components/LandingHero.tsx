import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";

export function LandingHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(160deg,#F4F8FB_0%,#FFFFFF_60%)]"
    >
      <div className="absolute -right-[120px] -top-[120px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(222,138,62,.16),transparent_70%)]" />
      <div className="absolute -bottom-[160px] -left-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,95,.08),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-[1180px] grid-cols-[1.1fr_.9fr] items-center gap-14 px-8 pb-[104px] pt-24">
        <div>
          <Badge
            dotColor="#DE8A3E"
            className="mb-[26px] bg-[#EAF0F5] text-navy tracking-[.04em]"
          >
            Tecnologia que inclui
          </Badge>
          <h1 className="m-0 mb-[22px] text-[56px] font-semibold leading-[1.08] tracking-[-.02em] text-navy">
            Transformando o desafio em <span className="text-orange">solução</span>
          </h1>
          <p className="m-0 mb-9 max-w-[520px] text-[19px] font-normal leading-[1.65] text-muted">
            A Horizonte desenvolve inovação assistiva para ampliar a autonomia de
            pessoas com deficiência — em parceria com escolas, instituições e órgãos
            públicos.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Button href="#contato" variant="primary">
              Fale conosco
            </Button>
            <Button href="#solucoes" variant="secondary">
              Conheça as soluções
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-[36px] bg-[linear-gradient(150deg,#1E3A5F,#2C5378)] shadow-[0_30px_70px_rgba(30,58,95,.28)]">
            <Logo variant="hero" size={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
