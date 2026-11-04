import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SupermarketRibbon } from "@/components/SupermarketRibbon";
import { PriceComparator } from "@/components/PriceComparator";
import { SernacStats } from "@/components/SernacStats";
import { TwoStoreSection } from "@/components/TwoStoreSection";
import { ChefSection } from "@/components/ChefSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SupermarketRibbon />
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
