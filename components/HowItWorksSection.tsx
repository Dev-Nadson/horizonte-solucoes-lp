import type { ComponentType } from "react";
import { Container } from "./ui/Container";
import { Card, CardBody, CardText, CardTitle } from "./ui/Card";
import {
  SectionHeader,
  SectionHeaderLabel,
  SectionHeaderTitle,
  SectionHeaderDescription,
} from "./ui/SectionHeader";
import { IconChip, IconMic, IconSpeaker } from "./ui/icons";
import { Radar } from "lucide-react";

type IconProps = { size?: number; color?: string };

type Step = {
  number: string;
  title: string;
  text: string;
  Icon: ComponentType<IconProps>;
  iconBg: string;
  iconColor: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Detecção",
    text: "Sensores ultrassônicos emitem pulsos e medem o tempo de retorno para calcular a distância dos obstáculos em tempo real — à frente, acima e nas laterais superiores.",
    Icon: Radar,
    iconBg: "bg-[#EAF0F5]",
    iconColor: "#1E3A5F",
  },
  {
    number: "02",
    title: "Processamento",
    text: "O microcontrolador ESP32 analisa as leituras, filtra ruído e decide — pela proximidade e direção — se o obstáculo representa risco e qual alerta acionar.",
    Icon: IconChip,
    iconBg: "bg-[#F8EFE2]",
    iconColor: "#DE8A3E",
  },
  {
    number: "03",
    title: "Alerta",
    text: "Vibração e/ou som discreto guiam a pessoa de forma intuitiva, sem cobrir os ouvidos nem interromper a rotina. Quanto mais perto o obstáculo, mais intenso o aviso.",
    Icon: IconSpeaker,
    iconBg: "bg-[#EAF0F5]",
    iconColor: "#1E3A5F",
  },
];

export function HowItWorksSection() {
  return (
    <section id="tecnologia" className="py-[104px]">
      <Container>
        <SectionHeader className="mb-14 max-w-[660px]">
          <SectionHeaderLabel>A tecnologia por trás</SectionHeaderLabel>
          <SectionHeaderTitle>Três etapas, em fração de segundo</SectionHeaderTitle>
          <SectionHeaderDescription>
            Repetidas continuamente enquanto você caminha.
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="grid grid-cols-3 gap-7">
          {steps.map(({ number, title, text, Icon, iconBg, iconColor }) => (
            <Card
              key={number}
              className="px-8 py-[38px] shadow-[0_10px_30px_rgba(30,58,95,.05)]"
            >
              <div className="mb-5 text-[15px] font-bold text-orange">{number}</div>
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
              >
                <Icon size={28} color={iconColor} />
              </div>
              <CardBody>
                <CardTitle className="mb-[10px] text-[21px]">{title}</CardTitle>
                <CardText className="text-[15.5px] leading-[1.65]">{text}</CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
