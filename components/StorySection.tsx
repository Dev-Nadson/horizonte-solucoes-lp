import { Container } from "./ui/Container";

const paragraphs = [
  "Começou numa aula de microcontroladores. O desafio era simples: usar um ESP32 para resolver um problema real. Três estudantes escolheram olhar para algo que viam todos os dias e nunca tinham questionado — a bengala.",
  "Ela é genial, mas varre apenas o chão. Na área do rosto, quem tem deficiência visual segue exposto a galhos, placas e portas. Essa lacuna virou obsessão: e se uma pequena viseira cobrisse exatamente essa zona?",
  "O protótipo saiu do laboratório, ganhou sensores melhores e foi testado com pessoas reais, que apontaram o que funcionava e o que precisava mudar. Hoje, o PróVisão busca patrocínio para evoluir de protótipo a um produto acessível de verdade — barato, confiável e ao alcance de quem mais precisa.",
];

export function StorySection() {
  return (
    <section id="historia" className="py-[104px]">
      <Container>
        <div className="mx-auto max-w-[760px]">
          <div className="mb-[14px] text-center text-[12.5px] font-semibold uppercase tracking-[.16em] text-orange">
            A história
          </div>
          <h2 className="m-0 mb-[34px] text-center text-[38px] font-semibold leading-[1.14] tracking-[-.01em] text-navy">
            Como tudo começou
          </h2>
          <div className="flex flex-col gap-[22px] border-l-[3px] border-line pl-8">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="m-0 text-lg font-normal leading-[1.8] text-muted"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
