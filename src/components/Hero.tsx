import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="mb-8 inline-block">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-red-400 text-sm font-medium">
                    Sertifisert Penetration Testing
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                Cybersikkerhet
                <span className="block text-red-400">og Infrastruktur</span>
              </h1>

              <p className="text-xl text-gray-300/90 mb-10 leading-relaxed">
                Vi beskytter din bedrift mot cybertrusler gjennom penetrasjonstester, sårbarhetsanalyser og infrastruktur-sikkerhet.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Få Sikkerhetsvurdering
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </a>
                <a
                  href="#services"
                  className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-white/20"
                >
                  Våre Sikkerhetstjenester
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              {/* Code window mockup */}
              <div className="bg-navy-800/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="p-6 space-y-4 font-mono text-sm">
                  <div className="flex items-center text-red-400">
                    <span className="text-white/50 mr-2">$</span>
                    nmap -sS target.com
                  </div>
                  <div className="h-4 bg-red-500/20 w-3/4 rounded animate-pulse" />
                  <div className="text-gray-400">// Scanning for open ports...</div>
                  <div className="text-gray-400">// Analyzing vulnerabilities...</div>
                  <div className="h-4 bg-red-500/20 w-2/3 rounded animate-pulse" />
                  <div className="text-red-400">⚠ Critical vulnerability found</div>
                  <div className="text-red-400">⚠ SSL/TLS misconfiguration</div>
                  <div className="text-emerald-400">✓ Security assessment complete</div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -right-4 bottom-4 bg-navy-800/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-red-400 mb-1">
                      500+
                    </div>
                    <div className="text-sm text-gray-400">Sikkerhetstester</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-400 mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">Sertifisert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;