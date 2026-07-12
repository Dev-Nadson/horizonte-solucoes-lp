import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

export function ProvisaoHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(160deg,#F4F8FB_0%,#FFFFFF_62%)]"
    >
      <div className="absolute -right-[120px] -top-[120px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(222,138,62,.16),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-[1180px] grid-cols-[1.05fr_.95fr] items-center gap-14 px-8 pb-[92px] pt-20">
        <div>
          <Badge
            dotColor="#EBAE5E"
            className="mb-6 bg-[#FBF1E4] tracking-[.03em] text-[#8A5A1A]"
          >
            Em fase de testes · Piloto
          </Badge>
          <h1 className="m-0 mb-[10px] text-[60px] font-semibold leading-[1.04] tracking-[-.02em] text-navy">
            PróVisão
          </h1>
          <div className="mb-[22px] text-[19px] font-semibold text-orange">
            Percepção acima da bengala
          </div>
          <p className="m-0 mb-[34px] max-w-[520px] text-[19px] font-normal leading-[1.65] text-muted">
            Um módulo que usa sensores ultrassônicos e um ESP32 para detectar
            obstáculos na altura do rosto — e avisar por vibração ou som discreto,
            antes do impacto.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Button href="#contato" variant="primary">
              Solicite uma demonstração
            </Button>
            <Button href="#tecnologia" variant="secondary">
              Como funciona
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative flex aspect-[4/3] w-full max-w-[420px] items-center justify-center rounded-[28px] bg-[linear-gradient(150deg,#EAF0F5,#DCE6EE)] shadow-[0_26px_60px_rgba(30,58,95,.14)]">
            <span className="text-sm font-medium text-[#9FB0C2]">
              [ foto da viseira PróVisão ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
