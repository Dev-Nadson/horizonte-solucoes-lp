import Image from "next/image";
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
import { CalendarClock } from "lucide-react";

const cardShadow = "shadow-[0_14px_40px_rgba(30,58,95,.06)]";

export function SolutionsSection() {
  return (
    <section id="solucoes" className="bg-surface py-26">
      <Container>
        <SectionHeader className="mb-13 max-w-160">
          <SectionHeaderLabel>Nossas soluções</SectionHeaderLabel>
          <SectionHeaderTitle>Projetos que abrem caminhos</SectionHeaderTitle>
          <SectionHeaderDescription>
            Cada solução parte de uma necessidade concreta de acessibilidade.
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="grid grid-cols-2 gap-7">
          {/* Viseira Assistiva */}
          <Card className={`flex flex-col overflow-hidden ${cardShadow}`}>
            <CardMedia className="h-57.5 overflow-hidden bg-[linear-gradient(150deg,#EAF0F5,#DCE6EE)]">
              <Image
                src="/provisao/projeto02.webp"
                alt="Viseira Assistiva PróVisão em uso"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover object-[center_30%]"
              />
              <Badge
                size="sm"
                className="absolute left-4 top-4 z-10 bg-[#2E7D5B] tracking-[.04em] text-white"
              >
                ● Disponível
              </Badge>
            </CardMedia>
            <CardBody className="px-7.5 pb-8 pt-7.5">
              <CardTitle className="mb-2.5 text-2xl">
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
            <CardMedia className="h-57.5 bg-[linear-gradient(150deg,#F3EEE6,#EBE2D5)]">
              <span className="text-sm font-medium text-[#BBAD97]">
                <CalendarClock className="size-20" />
              </span>
              <Badge
                size="sm"
                className="absolute left-4 top-4 bg-amber tracking-[.04em] text-[#5A3E12]"
              >
                ◐ Em Produção
              </Badge>
            </CardMedia>
            <CardBody className="px-7.5 pb-8 pt-7.5">
              <CardTitle className="mb-2.5 text-2xl">
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
