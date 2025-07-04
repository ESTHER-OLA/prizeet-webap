import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProductShowcase } from "@/components/product-showcase";
import { BuyerJourney } from "@/components/buyer-journey";
import { VendorSection } from "@/components/vendor-section";
import { TrustSection } from "@/components/trust-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <BuyerJourney />
        <VendorSection />
        <TrustSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
