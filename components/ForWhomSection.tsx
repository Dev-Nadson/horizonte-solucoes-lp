import { Container } from "./ui/Container";
import {
  SectionHeader,
  SectionHeaderLabel,
  SectionHeaderTitle,
} from "./ui/SectionHeader";
import { IconCheck } from "./ui/icons";

const items = [
  "Pessoas com deficiência visual que já usam bengala",
  "Centros de reabilitação e instituições de apoio",
  "Escolas e programas de inclusão",
  "Órgãos públicos com políticas de acessibilidade",
];

export function ForWhomSection() {
  return (
    <section id="paraquem" className="py-[104px]">
      <Container>
        <div className="grid grid-cols-[.9fr_1.1fr] items-center gap-14">
          <SectionHeader>
            <SectionHeaderLabel>Para quem é indicada</SectionHeaderLabel>
            <SectionHeaderTitle size={36}>
              Pensada para quem usa a bengala todos os dias
            </SectionHeaderTitle>
          </SectionHeader>
          <div className="flex flex-col gap-[14px]">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-[14px] text-[17px] text-[#33445B]"
              >
                <span className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-[#EAF0F5]">
                  <IconCheck size={15} color="#1E3A5F" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
