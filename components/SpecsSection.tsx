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
    <section id="specs" className="bg-surface py-16 md:py-26">
      <Container>
        <SectionHeader className="mb-10 max-w-165 md:mb-12">
          <SectionHeaderLabel>Especificações técnicas</SectionHeaderLabel>
          <SectionHeaderTitle>O que há dentro do PróVisão</SectionHeaderTitle>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map(({ label, value, note }) => (
            <Card key={label} className="rounded-[18px] p-6.5">
              <div className="mb-2.5 text-[13px] font-semibold uppercase tracking-[.1em] text-[#9FB0C2]">
                {label}
              </div>
              <div className="text-lg font-semibold text-navy">{value}</div>
              <div className="mt-1 text-sm text-muted">{note}</div>
            </Card>
          ))}
        </div>

        <p className="mt-5.5 text-[13.5px] text-[#9FB0C2]">
          Especificações preliminares - o projeto está em fase de testes e pode
          evoluir.
        </p>
      </Container>
    </section>
  );
}
