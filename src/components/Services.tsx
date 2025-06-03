import React from "react";
import { Code, Server, Database, Globe, Smartphone, Cloud } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Fullstack Utvikling",
      description: "Komplette løsninger med moderne frontend og robust backend"
    },
    {
      icon: <Server size={24} />,
      title: "Systemutvikling",
      description: "Skalerbare systemer og applikasjoner for bedrifter"
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description: "Optimaliserte databaser og datahåndteringsløsninger"
    },
    {
      icon: <Globe size={24} />,
      title: "Webutvikling",
      description: "Moderne og responsive nettsteder med fokus på brukeropplevelse"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobilapplikasjoner",
      description: "Native og cross-platform mobilapplikasjoner"
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Løsninger",
      description: "Skytjenester og cloud-infrastruktur"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400">
            Våre Tjenester
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Vi leverer skreddersydde digitale løsninger som møter dine forretningsbehov
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-navy-800/50 p-6 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors"
            >
              <div className="p-3 bg-emerald-500/10 rounded-lg w-fit mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-emerald-400">
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
