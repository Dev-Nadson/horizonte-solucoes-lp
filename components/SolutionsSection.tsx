import { Container } from "./ui/Container";
import { Badge } from "./ui/Badge";
import { Card, CardBody, CardMedia, CardText, CardTitle } from "./ui/Card";
import {
  SectionHeader,
  SectionHeaderLabel,
  SectionHeaderTitle,
  SectionHeaderDescription,
} from "./ui/SectionHeader";
import Link from "next/link";

const cardShadow = "shadow-[0_14px_40px_rgba(30,58,95,.06)]";

export function SolutionsSection() {
  return (
    <section id="solucoes" className="bg-surface py-[104px]">
      <Container>
        <SectionHeader className="mb-[52px] max-w-[640px]">
          <SectionHeaderLabel>Nossas soluções</SectionHeaderLabel>
          <SectionHeaderTitle>Projetos que abrem caminhos</SectionHeaderTitle>
          <SectionHeaderDescription>
            Cada solução parte de uma necessidade concreta de acessibilidade.
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="grid grid-cols-2 gap-7">
          {/* Viseira Assistiva */}
          <Card className={`flex flex-col overflow-hidden ${cardShadow}`}>
            <CardMedia className="h-[230px] bg-[linear-gradient(150deg,#EAF0F5,#DCE6EE)]">
              <span className="text-sm font-medium text-[#9FB0C2]">
                [ imagem do produto ]
              </span>
              <Badge
                size="sm"
                className="absolute left-4 top-4 bg-[#2E7D5B] tracking-[.04em] text-white"
              >
                ● Disponível
              </Badge>
            </CardMedia>
            <CardBody className="px-[30px] pb-8 pt-[30px]">
              <CardTitle className="mb-[10px] text-2xl">
                Viseira Assistiva
              </CardTitle>
              <CardText className="mb-5 text-base leading-[1.65]">
                Dispositivo vestível que amplia a autonomia no dia a dia, projetado
                com foco em conforto, acessibilidade e uso intuitivo.
              </CardText>
              <Link href="/provisao" className="text-[15px] font-semibold text-orange">
                Saber mais →
              </Link>
            </CardBody>
          </Card>

          {/* Contador Assistivo */}
          <Card className={`flex flex-col overflow-hidden ${cardShadow}`}>
            <CardMedia className="h-[230px] bg-[linear-gradient(150deg,#F3EEE6,#EBE2D5)]">
              <span className="text-sm font-medium text-[#BBAD97]">
                [ imagem do produto ]
              </span>
              <Badge
                size="sm"
                className="absolute left-4 top-4 bg-amber tracking-[.04em] text-[#5A3E12]"
              >
                ◐ Em andamento
              </Badge>
            </CardMedia>
            <CardBody className="px-[30px] pb-8 pt-[30px]">
              <CardTitle className="mb-[10px] text-2xl">
                Contador Assistivo
              </CardTitle>
              <CardText className="mb-5 text-base leading-[1.65]">
                Solução em desenvolvimento para apoiar tarefas do cotidiano com mais
                independência. Em breve, mais novidades.
              </CardText>
              <span className="text-[15px] font-semibold text-[#9FB0C2]">
                Em desenvolvimento
              </span>
            </CardBody>
          </Card>
        </div>
      </Container>
    </section>
  );
}
