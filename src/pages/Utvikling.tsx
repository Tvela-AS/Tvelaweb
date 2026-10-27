import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";
import { pageSeo, setPageSeo } from "../lib/seo";

const Utvikling: React.FC = () => {
  useEffect(() => {
    setPageSeo(pageSeo.utvikling);
  }, []);

  return (
    <div className="min-h-screen bg-navy-950">
      <a
        href="#main"
        className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-md bg-emerald-500 px-4 py-2 font-medium text-white focus:translate-y-0"
      >
        Hopp til innhold
      </a>
      <Navbar variant="utvikling" />
      <main id="main">
        <Hero />
        <Services />
        <Products />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact variant="utvikling" />
        <Faq variant="utvikling" />
        <Privacy variant="utvikling" />
      </main>
      <Footer variant="utvikling" />
    </div>
  );
};

export default Utvikling;
