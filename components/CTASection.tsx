import { Button } from "./ui/Button";

const EMAIL = "contato@horizonteassistiva.com.br";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  email?: string;
  /** Tamanho do título (px). LP usa 40, PróVisão 38. */
  titleSize?: number;
};

export function CTASection({
  title,
  description,
  primaryLabel,
  email = EMAIL,
  titleSize = 40,
}: CTASectionProps) {
  return (
    <section id="contato" className="px-8 py-[104px]">
      <div className="relative mx-auto max-w-[1000px] overflow-hidden rounded-[32px] bg-[linear-gradient(150deg,#1E3A5F,#2C5378)] px-[60px] py-[72px] text-center">
        <div className="absolute -right-[60px] -top-20 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(222,138,62,.28),transparent_70%)]" />
        <div className="relative">
          <h2
            className="m-0 mb-[18px] font-semibold leading-[1.15] tracking-[-.01em] text-white"
            style={{ fontSize: `${titleSize}px` }}
          >
            {title}
          </h2>
          <p className="mx-auto mb-9 max-w-[560px] text-lg font-normal leading-[1.65] text-[#C4D2E0]">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-[14px]">
            <Button href={`mailto:${email}`} variant="primary" size="lg">
              {primaryLabel}
            </Button>
            <Button href={`mailto:${email}`} variant="darkGhost" size="lg">
              {email}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
