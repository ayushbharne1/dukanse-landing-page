import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import BuyTrustedGroceries from "./components/BuyTrustedGroceries";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/Faq";
import CTA from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-800 scroll-smooth">
    <main className="space-y-0">
  <section id="hero" className="m-0 p-0">
    <Hero />
  </section>

  <section id="why-us" className="m-0 p-0">
    <Stats />
  </section>

  <section id="available-groceries" className="m-0 p-0">
    <BuyTrustedGroceries />
  </section>

  <section id="how-it-works" className="m-0 p-0">
    <HowItWorks />
  </section>

  <section id="testimonials" className="m-0 p-0">
    {/* <Testimonials /> */}
  </section>

  <section id="faqs" className="m-0 p-0">
    <FAQ />
  </section>

  <section id="cta" className="m-0 p-0">
    <CTA />
  </section>
</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
