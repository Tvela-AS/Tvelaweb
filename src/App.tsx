import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';

function App() {
  useEffect(() => {
    document.title = "Tvela AS | systemutvikling, webutvikling, innholdsproduksjon og markedsføring. Foto, video, design og content management";
  }, []);

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
