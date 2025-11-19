import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="">
        <Hero />

        <ProductShowcase />

        <Testimonials />

        <FAQ />

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
