import Image from "next/image";
import { Container } from "./ui/Container";
import {
  SectionHeader,
  SectionHeaderLabel,
  SectionHeaderTitle,
  SectionHeaderDescription,
} from "./ui/SectionHeader";

const items = [
  { src: "/provisao/projeto04.webp", alt: "O hardware do PróVisão" },
  { src: "/provisao/projeto02.webp", alt: "O módulo PróVisão de perto" },
  { src: "/provisao/projeto03.webp", alt: "Testes de campo com o PróVisão" },
];

export function GallerySection() {
  return (
    <section id="galeria" className="bg-surface py-25">
      <Container>
        <SectionHeader className="mb-11 max-w-165">
          <SectionHeaderLabel>Galeria</SectionHeaderLabel>
          <SectionHeaderTitle>Veja de perto</SectionHeaderTitle>
          <SectionHeaderDescription>
            O módulo, os testes de campo e o hardware que faz tudo acontecer.
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="grid grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.src}
              className="relative aspect-4/3 overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#EAF0F5,#DCE6EE)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
