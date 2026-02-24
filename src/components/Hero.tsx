import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-navy-950"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">
                  IT-drift · Sikkerhet · Digital gransking
                </span>
              </div>
            </div>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white"
          >
            IT, sikkerhet og digital gransking – samlet under én{" "}
            <span className="text-emerald-400">pålitelig partner.</span>
          </h1>

          <p className="text-xl text-gray-300/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Vi hjelper små og mellomstore bedrifter med stabil IT-drift,
            beskyttelse av systemer og nettverk, og profesjonell håndtering av
            kritiske digitale hendelser. Strukturert, diskret og pålitelig.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="group bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
            >
              Våre tjenester
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href="#contact"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-white/20"
            >
              Kontakt oss
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
