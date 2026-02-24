import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhenToContact from "./components/WhenToContact";
import HowWeWork from "./components/HowWeWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const META_TITLE =
  "Tvela AS – IT-drift, sikkerhet og digital gransking for bedrifter";
const META_DESCRIPTION =
  "Vi hjelper SMB med IT-drift, sikkerhet og digital gransking. Strukturert partner for drift, beskyttelse og håndtering av kritiske digitale hendelser. Diskret og profesjonelt.";

function App() {
  useEffect(() => {
    document.title = META_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", META_DESCRIPTION);
  }, []);

  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhenToContact />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
