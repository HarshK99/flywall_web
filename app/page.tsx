import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HeroIntro from './components/AboutUs';
import FeatureGrid from './components/FeatureGrid';
import ProductGallery from './components/ProductGallery';
import WindowGallery from './components/WindowGallery';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import TrustSignals from './components/TrustSignals';
import ContactUs from './components/ContactUs';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="">
        <Hero />

        <HeroIntro />
        <FeatureGrid />
        <ProductGallery />
        <WindowGallery />
        <Benefits />
        <CTA />
        {/* <TrustSignals /> */}
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}
