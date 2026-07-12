import { Container } from "./ui/Container";
import {
  SectionHeader,
  SectionHeaderLabel,
  SectionHeaderTitle,
  SectionHeaderDescription,
} from "./ui/SectionHeader";

const items = ["[ o módulo ]", "[ testes de campo ]", "[ o hardware ]"];

export function GallerySection() {
  return (
    <section id="galeria" className="bg-surface py-[100px]">
      <Container>
        <SectionHeader className="mb-11 max-w-[660px]">
          <SectionHeaderLabel>Galeria</SectionHeaderLabel>
          <SectionHeaderTitle>Veja de perto</SectionHeaderTitle>
          <SectionHeaderDescription>
            O módulo, os testes de campo e o hardware que faz tudo acontecer.
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="grid grid-cols-3 gap-6">
          {items.map((label) => (
            <div
              key={label}
              className="flex aspect-[4/3] items-center justify-center rounded-[20px] bg-[linear-gradient(150deg,#EAF0F5,#DCE6EE)] text-sm font-medium text-[#9FB0C2]"
            >
              {label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
