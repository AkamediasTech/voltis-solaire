import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductSection } from "./components/ProductSection";
import { StepsSection } from "./components/StepsSection";
import { SmartMonitoringSection } from "./components/SmartMonitoringSection";
import { KeyFiguresSection } from "./components/KeyFiguresSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CallToActionSection } from "./components/CallToActionSection";
import { LegalDisclaimerSection } from "./components/LegalDisclaimerSection";
import { Features } from "./components/Features";
import { Process } from "./components/Process";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    // Basic fix for mobile vh issues
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductSection />
        <StepsSection />
        <SmartMonitoringSection />
        <KeyFiguresSection />
        <TestimonialsSection />
        <CallToActionSection />
        <LegalDisclaimerSection />
        <Features />
        <Process />

        {/* Banner CTA */}
        <section className="bg-edf-blue py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à passer au solaire ?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les 50 000 foyers qui font confiance à Groupe France
              Solaire pour leur transition énergétique.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-edf-orange text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-edf-orange transition-all duration-300 transform hover:scale-105"
            >
              Demander mon étude gratuite
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
