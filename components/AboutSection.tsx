import { Container } from "./ui/Container";
import {
  SectionHeader,
  SectionHeaderLabel,
  SectionHeaderTitle,
} from "./ui/SectionHeader";

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-26">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[.85fr_1.15fr] md:gap-16">
          <SectionHeader>
            <SectionHeaderLabel>Quem somos</SectionHeaderLabel>
            <SectionHeaderTitle>Inovação com propósito humano</SectionHeaderTitle>
          </SectionHeader>
          <div>
            <p className="m-0 mb-5.5 text-lg font-normal leading-[1.75] text-muted">
              A Horizonte Inovação Assistiva nasce para aproximar tecnologia e
              pessoas. Acreditamos que a inovação só faz sentido quando amplia a
              autonomia, a dignidade e a participação de quem enfrenta barreiras no
              dia a dia.
            </p>
            <p className="m-0 text-lg font-normal leading-[1.75] text-muted">
              Trabalhamos lado a lado com usuários, famílias, escolas e instituições
              para transformar desafios reais em soluções acessíveis, confiáveis e
              simples de usar.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
