import Image from "next/image";
import { Container } from "./ui/Container";

const partners = [
  {
    src: "/logos/acace-logo.webp",
    alt: "ACACE - Associação Caruaruense de Cegos",
    imgClassName: "object-contain p-4",
  },
  {
    src: "/logos/unifavip-logo.webp",
    alt: "UNIFAVIP Wyden",
    imgClassName: "object-contain scale-130",
  },
];

export function PartnersSection() {
  return (
    <section id="parceiros" className="bg-surface py-21">
      <Container className="text-center">
        <div className="mb-8 text-[12.5px] font-semibold uppercase tracking-[.16em] text-orange">
          Parceiros &amp; apoiadores
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {partners.map((p) => (
            <div
              key={p.src}
              className="relative h-18.5 w-56 overflow-hidden rounded-[14px] border border-line bg-white"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="224px"
                className={p.imgClassName}
              />
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
