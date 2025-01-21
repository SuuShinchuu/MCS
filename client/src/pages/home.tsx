import EmailForm from "@/components/email-form";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
