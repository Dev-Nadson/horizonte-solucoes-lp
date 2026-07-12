type ProblemCard = {
  title: string;
  text: string;
  cardClass: string;
  titleClass: string;
  textClass: string;
};

const cards: ProblemCard[] = [
  {
    title: "A bengala varre o chão",
    text: "Protege os pés e detecta desníveis - mas só na zona baixa.",
    cardClass: "bg-white/[.06] border-white/10",
    titleClass: "text-white",
    textClass: "text-[#93A6BD]",
  },
  {
    title: "A zona do rosto fica exposta",
    text: "Obstáculos acima da cintura são a causa de boa parte dos impactos.",
    cardClass: "bg-[rgba(235,174,94,.12)] border-[rgba(235,174,94,.3)]",
    titleClass: "text-[#F3C983]",
    textClass: "text-[#D8C3A0]",
  },
  {
    title: "O PróVisão cobre essa lacuna",
    text: "Um módulo discreto nos óculos que vigia exatamente essa área.",
    cardClass: "bg-white/[.06] border-white/10",
    titleClass: "text-white",
    textClass: "text-[#93A6BD]",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="bg-navy-deep px-8 py-25">
      <div className="mx-auto grid max-w-295 grid-cols-2 items-center gap-16">
        <div>
          <div className="mb-4 text-[12.5px] font-semibold uppercase tracking-[.16em] text-amber">
            O problema
          </div>
          <h2 className="m-0 mb-5.5 text-[40px] font-semibold leading-[1.12] tracking-[-.01em] text-white">
            Metade do corpo fica desprotegida
          </h2>
          <p className="m-0 text-lg font-normal leading-[1.75] text-[#B7C6D8]">
            A bengala é uma ferramenta essencial - mas ela varre o chão. Galhos,
            placas, espelhos de caminhão, prateleiras e portas entreabertas: tudo o
            que está acima da cintura passa despercebido.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-[18px] border px-6.5 py-6 ${c.cardClass}`}
            >
              <div className={`mb-1.5 text-[17px] font-semibold ${c.titleClass}`}>
                {c.title}
              </div>
              <div className={`text-[15px] leading-[1.6] ${c.textClass}`}>
                {c.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
