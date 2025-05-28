import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import ShopifyProductGrid from "@/components/ShopifyProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductGrid />
      <ShopifyProductGrid
        title="Featured from Our Store"
        maxProducts={12}
        showTitle={true}
      />
      <Footer />
    </div>
  );
}
