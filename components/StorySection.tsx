import { Container } from "./ui/Container";

const paragraphs = [
  "Começou numa aula de microcontroladores. O desafio era simples: usar um ESP32 para resolver um problema real. Três estudantes escolheram olhar para algo que viam todos os dias e nunca tinham questionado - a bengala.",
  "Ela é genial, mas varre apenas o chão. Na área do rosto, quem tem deficiência visual segue exposto a galhos, placas e portas. Essa lacuna virou obsessão: e se uma pequena viseira cobrisse exatamente essa zona?",
  "O protótipo saiu do laboratório, ganhou sensores melhores e foi testado com pessoas reais, que apontaram o que funcionava e o que precisava mudar. Hoje, o PróVisão busca patrocínio para evoluir de protótipo a um produto acessível de verdade - barato, confiável e ao alcance de quem mais precisa.",
];

export function StorySection() {
  return (
    <section id="historia" className="py-16 md:py-26">
      <Container>
        <div className="mx-auto max-w-190">
          <div className="mb-3.5 text-center text-[12.5px] font-semibold uppercase tracking-[.16em] text-orange">
            A história
          </div>
          <h2 className="m-0 mb-8.5 text-center text-[27px] font-semibold leading-[1.14] tracking-[-.01em] text-navy md:text-[38px]">
            Como tudo começou
          </h2>
          <div className="flex flex-col gap-5.5 border-l-[3px] border-line pl-5 md:pl-8">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="m-0 text-base font-normal leading-[1.8] text-muted md:text-lg"
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
