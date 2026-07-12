import { Button } from "./ui/Button";

const EMAIL = "contato.horizonteinovacao@gmail.com";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  email?: string;
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
    <section id="contato" className="px-5 py-16 md:px-8 md:py-26">
      <div className="relative mx-auto max-w-250 overflow-hidden rounded-4xl bg-[linear-gradient(150deg,#1E3A5F,#2C5378)] px-6 py-12 text-center md:px-15 md:py-18">
        <div className="absolute -right-15 -top-20 h-70 w-70 rounded-full bg-[radial-gradient(circle,rgba(222,138,62,.28),transparent_70%)]" />
        <div className="relative">
          <h2
            className="m-0 mb-4.5 font-semibold leading-[1.15] tracking-[-.01em] text-white"
            style={{ fontSize: `clamp(24px, 6vw, ${titleSize}px)` }}
          >
            {title}
          </h2>
          <p className="mx-auto mb-9 max-w-140 text-base font-normal leading-[1.65] text-[#C4D2E0] md:text-lg">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
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
