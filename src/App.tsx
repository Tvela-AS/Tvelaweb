import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approach from "./components/Approach";
import WhenToContact from "./components/WhenToContact";
import About from "./components/About";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-24 bg-brass-500 px-4 py-2 font-medium text-ink-950 focus:translate-y-0"
      >
        Hopp til innhold
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Approach />
        <WhenToContact />
        <About />
        <Contact />
        <Privacy />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
