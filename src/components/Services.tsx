import React from "react";
import { Shield, Lock, Eye, Search, Network, AlertTriangle } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Shield size={24} />,
      title: "Penetration Testing",
      description: "Omfattende sikkerhetstester som simulerer ekte cyberangrep for å identifisere sårbarheter"
    },
    {
      icon: <Lock size={24} />,
      title: "Infrastruktur Sikkerhet",
      description: "Sikkerhetsvurdering av nettverk, servere og IT-infrastruktur"
    },
    {
      icon: <Eye size={24} />,
      title: "Sårbarhetsanalyser",
      description: "Systematisk gjennomgang av sikkerhetshull i applikasjoner og systemer"
    },
    {
      icon: <Search size={24} />,
      title: "Sikkerhetsaudit",
      description: "Komplett gjennomgang av sikkerhetspolicyer og implementeringer"
    },
    {
      icon: <Network size={24} />,
      title: "Nettverkssikkerhet",
      description: "Analyse og sikring av bedriftsnettverk mot trusler"
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Incident Response",
      description: "Rask respons og håndtering av sikkerhetshendelser"
    }
  ];

  return (
    <section id="services" className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
            Våre Sikkerhetstjenester
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Vi beskytter din bedrift mot cybertrusler med avanserte sikkerhetstjenester og ekspertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-navy-800/50 p-6 rounded-xl border border-white/10 hover:border-red-500/50 transition-colors"
            >
              <div className="p-3 bg-red-500/10 rounded-lg w-fit mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-400">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;