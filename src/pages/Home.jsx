import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTASection from "@/components/home/CTASection";

const HERO_IMG = "/__generating__/img_dd8fb8a4a1a8.png";
const SERVICES_BG = "/__generating__/img_b0431d724164.png";

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={HERO_IMG} />
      <ClientsMarquee />
      <ServicesPreview />
      <CTASection bgImage={SERVICES_BG} />
    </div>
  );
}