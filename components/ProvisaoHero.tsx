import Image from "next/image";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

export function ProvisaoHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(160deg,#F4F8FB_0%,#FFFFFF_62%)]"
    >
      <div className="absolute -right-30 -top-30 h-115 w-115 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(222,138,62,.16),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-295 grid-cols-[1.05fr_.95fr] items-center gap-14 px-8 pb-23 pt-20">
        <div>
          <Badge
            dotColor="#EBAE5E"
            className="mb-6 bg-[#FBF1E4] tracking-[.03em] text-[#8A5A1A]"
          >
            Em fase de testes · Piloto
          </Badge>
          <h1 className="m-0 mb-2.5 text-[60px] font-semibold leading-[1.04] tracking-[-.02em] text-navy">
            PróVisão
          </h1>
          <div className="mb-5.5 text-[19px] font-semibold text-orange">
            Percepção acima da bengala
          </div>
          <p className="m-0 mb-8.5 max-w-130 text-[19px] font-normal leading-[1.65] text-muted">
            Um módulo que usa sensores ultrassônicos e um ESP32 para detectar
            obstáculos na altura do rosto - e avisar por vibração ou som discreto,
            antes do impacto.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Button href="#contato" variant="primary">
              Solicite uma demonstração
            </Button>
            <Button href="#tecnologia" variant="secondary">
              Como funciona
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative aspect-4/3 w-full max-w-105 overflow-hidden rounded-[28px] bg-[linear-gradient(150deg,#EAF0F5,#DCE6EE)] shadow-[0_26px_60px_rgba(30,58,95,.14)]">
            <Image
              src="/provisao/projeto01.webp"
              alt="Usuário testando a viseira PróVisão"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
