import type { Metadata } from "next";
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
import { ProvisaoHero } from "@/components/ProvisaoHero";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ForWhomSection } from "@/components/ForWhomSection";
import { SpecsSection } from "@/components/SpecsSection";
import { StorySection } from "@/components/StorySection";
import { GallerySection } from "@/components/GallerySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "PróVisão - Horizonte Inovação Assistiva",
  description:
    "PróVisão: um módulo com sensores ultrassônicos e ESP32 que detecta obstáculos na altura do rosto e avisa por vibração ou som discreto.",
};

export default function ProvisaoPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header>
        <HeaderBrand href="/">
          <Logo variant="nav" />
          <span className="block leading-none">
            <HeaderTitle>Horizonte</HeaderTitle>
            <HeaderSubtitle>Inovação Assistiva</HeaderSubtitle>
          </span>
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavLink href="#problema">O problema</HeaderNavLink>
          <HeaderNavLink href="#tecnologia">Como funciona</HeaderNavLink>
          <HeaderNavLink href="#specs">Especificações</HeaderNavLink>
          <HeaderNavLink href="#historia">História</HeaderNavLink>
          <Button href="#contato" size="sm">
            Solicite uma demonstração
          </Button>
        </HeaderNav>
      </Header>

      <ProvisaoHero />
      <ProblemSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ForWhomSection />
      <SpecsSection />
      <StorySection />
      <GallerySection />

      <CTASection
        title="Quer conhecer o PróVisão de perto?"
        description="Estamos em fase de testes e buscamos parceiros e patrocinadores para levar o projeto adiante. Agende uma demonstração com a nossa equipe."
        primaryLabel="Solicite uma demonstração"
        titleSize={38}
      />

      <Footer />
    </div>
  );
}
