import {
  Header,
  HeaderBrand,
  HeaderTitle,
  HeaderSubtitle,
  HeaderNav,
  HeaderNavLink,
} from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { LandingHero } from "@/components/LandingHero";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { AudienceSection } from "@/components/AudienceSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header>
        <HeaderBrand href="#top">
          <Logo variant="nav" />
          <span className="block leading-none">
            <HeaderTitle>Horizonte</HeaderTitle>
            <HeaderSubtitle>Inovação Assistiva</HeaderSubtitle>
          </span>
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavLink href="#sobre">Sobre</HeaderNavLink>
          <HeaderNavLink href="#solucoes">Soluções</HeaderNavLink>
          <HeaderNavLink href="#publicos">Para quem</HeaderNavLink>
          <HeaderNavLink href="#parceiros">Parceiros</HeaderNavLink>
          <Button href="#contato" size="sm">
            Fale conosco
          </Button>
        </HeaderNav>
      </Header>

      <LandingHero />
      <AboutSection />
      <SolutionsSection />
      <AudienceSection />
      <PartnersSection />

      <CTASection
        title="Vamos transformar desafios em soluções?"
        description="Fale com a Horizonte para conhecer nossos projetos ou propor uma parceria. Retornamos o mais breve possível."
        primaryLabel="Fale conosco"
        titleSize={40}
      />

      <Footer />
    </div>
  );
}
