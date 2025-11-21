import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HeroIntro from './components/HeroIntro';
import FeatureGrid from './components/FeatureGrid';
import ProductGallery from './components/ProductGallery';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import TrustSignals from './components/TrustSignals';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="">
        <Hero />

        <HeroIntro />
        <FeatureGrid />
        <ProductGallery />
        <Benefits />
        <CTA />
        <TrustSignals />
      </main>

      <Footer />
    </div>
  );
}
