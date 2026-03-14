import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTASection from "@/components/home/CTASection";

const HERO_IMG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b50fc6b8611f01f5f27bf1/87e552c07_generated_db2a4175.png";
const SERVICES_BG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b50fc6b8611f01f5f27bf1/9170d75bd_generated_f202bfe1.png";

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