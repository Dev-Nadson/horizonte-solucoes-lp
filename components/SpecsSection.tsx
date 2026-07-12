import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import {
  SectionHeader,
  SectionHeaderLabel,
  SectionHeaderTitle,
} from "./ui/SectionHeader";

type Spec = { label: string; value: string; note: string };

const specs: Spec[] = [
  { label: "Controlador", value: "ESP32", note: "Wi-Fi/BLE integrado" },
  { label: "Sensores", value: "Ultrassônicos", note: "Frente, cima e laterais" },
  { label: "Alertas", value: "Vibração + som", note: "Intensidade proporcional" },
  { label: "Formato", value: "Módulo acoplável", note: "Integra-se aos óculos" },
];

export function SpecsSection() {
  return (
    <section id="specs" className="bg-surface py-[104px]">
      <Container>
        <SectionHeader className="mb-12 max-w-[660px]">
          <SectionHeaderLabel>Especificações técnicas</SectionHeaderLabel>
          <SectionHeaderTitle>O que há dentro do PróVisão</SectionHeaderTitle>
        </SectionHeader>

        <div className="grid grid-cols-4 gap-5">
          {specs.map(({ label, value, note }) => (
            <Card key={label} className="rounded-[18px] p-[26px]">
              <div className="mb-[10px] text-[13px] font-semibold uppercase tracking-[.1em] text-[#9FB0C2]">
                {label}
              </div>
              <div className="text-lg font-semibold text-navy">{value}</div>
              <div className="mt-1 text-sm text-muted">{note}</div>
            </Card>
          ))}
        </div>

        <p className="mt-[22px] text-[13.5px] text-[#9FB0C2]">
          Especificações preliminares — o projeto está em fase de testes e pode
          evoluir.
        </p>
      </Container>
    </section>
  );
}
