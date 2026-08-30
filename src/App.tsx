import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <a
        href="#main"
        className="absolute left-4 top-4 z-[60] -translate-y-24 focus:translate-y-0 bg-emerald-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Hopp til innhold
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Products />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
        <Privacy />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
