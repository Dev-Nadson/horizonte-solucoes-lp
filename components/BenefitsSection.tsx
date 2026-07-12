import type { ComponentType } from "react";
import { Container } from "./ui/Container";
import {
  SectionHeader,
  SectionHeaderLabel,
  SectionHeaderTitle,
} from "./ui/SectionHeader";
import { IconClock, IconFlag, IconShield, IconShuffle } from "./ui/icons";

type IconProps = { size?: number; color?: string };

type Benefit = {
  title: string;
  text: string;
  Icon: ComponentType<IconProps>;
  iconBg: string;
  iconColor: string;
};

const benefits: Benefit[] = [
  {
    title: "Protege a zona do rosto",
    text: "Complementa a bengala cobrindo o que fica acima da cintura.",
    Icon: IconShield,
    iconBg: "bg-[#EAF0F5]",
    iconColor: "#1E3A5F",
  },
  {
    title: "Alerta discreto",
    text: "Vibração ou som suave - sem cobrir os ouvidos nem chamar atenção.",
    Icon: IconFlag,
    iconBg: "bg-[#F8EFE2]",
    iconColor: "#DE8A3E",
  },
  {
    title: "Resposta em tempo real",
    text: "Leitura contínua enquanto você caminha, com aviso proporcional à distância.",
    Icon: IconClock,
    iconBg: "bg-[#EAF0F5]",
    iconColor: "#1E3A5F",
  },
  {
    title: "Leve e acoplável",
    text: "Um pequeno módulo que se integra aos óculos, sem atrapalhar o uso.",
    Icon: IconShuffle,
    iconBg: "bg-[#F8EFE2]",
    iconColor: "#DE8A3E",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-surface py-16 md:py-26">
      <Container>
        <SectionHeader className="mb-10 max-w-165 md:mb-13">
          <SectionHeaderLabel>No dia a dia</SectionHeaderLabel>
          <SectionHeaderTitle>
            Mais segurança, sem abrir mão da rotina
          </SectionHeaderTitle>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map(({ title, text, Icon, iconBg, iconColor }) => (
            <div
              key={title}
              className="flex gap-4.5 rounded-[20px] border border-line bg-white px-7.5 py-7"
            >
              <div
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${iconBg}`}
              >
                <Icon size={22} color={iconColor} />
              </div>
              <div>
                <h3 className="m-0 mb-1.5 text-lg font-semibold text-navy">
                  {title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.6] text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
