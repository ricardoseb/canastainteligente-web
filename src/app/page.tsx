import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SupermarketRibbon } from "@/components/SupermarketRibbon";
import { AppShowcase } from "@/components/AppShowcase";
import { PriceComparator } from "@/components/PriceComparator";
import { SernacStats } from "@/components/SernacStats";
import { TwoStoreSection } from "@/components/TwoStoreSection";
import { ChefSection } from "@/components/ChefSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2EA] text-[#14221D]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SupermarketRibbon />
        <AppShowcase />
        <PriceComparator />
        <SernacStats />
        <TwoStoreSection />
        <ChefSection />
        <FeaturesGrid />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
