import type { ComponentType } from "react";
import { Container } from "./ui/Container";
import { Card, CardBody, CardText, CardTitle } from "./ui/Card";
import {
  SectionHeader,
  SectionHeaderLabel,
  SectionHeaderTitle,
} from "./ui/SectionHeader";
import { IconBuilding, IconGraduation, IconPerson } from "./ui/icons";

type IconProps = { size?: number; color?: string };

type Audience = {
  title: string;
  text: string;
  Icon: ComponentType<IconProps>;
  iconBg: string;
  iconColor: string;
};

const audiences: Audience[] = [
  {
    title: "Pessoas",
    text: "Usuários e famílias que buscam mais autonomia e qualidade de vida no dia a dia.",
    Icon: IconPerson,
    iconBg: "bg-[#EAF0F5]",
    iconColor: "#1E3A5F",
  },
  {
    title: "Escolas",
    text: "Instituições de ensino que promovem inclusão e acessibilidade na aprendizagem.",
    Icon: IconGraduation,
    iconBg: "bg-[#F8EFE2]",
    iconColor: "#DE8A3E",
  },
  {
    title: "Órgãos públicos",
    text: "Instituições e órgãos que ampliam políticas de acessibilidade e inclusão.",
    Icon: IconBuilding,
    iconBg: "bg-[#EAF0F5]",
    iconColor: "#1E3A5F",
  },
];

export function AudienceSection() {
  return (
    <section id="publicos" className="py-[104px]">
      <Container>
        <SectionHeader className="mb-[52px] max-w-[640px]">
          <SectionHeaderLabel>Para quem</SectionHeaderLabel>
          <SectionHeaderTitle>Quem caminha com a gente</SectionHeaderTitle>
        </SectionHeader>

        <div className="grid grid-cols-3 gap-7">
          {audiences.map(({ title, text, Icon, iconBg, iconColor }) => (
            <Card
              key={title}
              className="px-8 py-9 shadow-[0_10px_30px_rgba(30,58,95,.05)]"
            >
              <div
                className={`mb-[22px] flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
              >
                <Icon size={28} color={iconColor} />
              </div>
              <CardBody>
                <CardTitle className="mb-[10px] text-xl">{title}</CardTitle>
                <CardText className="text-[15.5px] leading-[1.65]">{text}</CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
