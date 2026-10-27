import React from "react";
import { Code, Server, Database, Globe, Smartphone, Cloud, Camera, Megaphone } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      id: "webutvikling",
      icon: <Globe size={24} />,
      title: "Webutvikling",
      description:
        "Nettsider og webapplikasjoner som er raske, responsive og enkle å vedlikeholde. Vi utvikler bedriftsnettsider, portaler og skreddersydde webløsninger for kunder i hele Norge.",
    },
    {
      id: "systemutvikling",
      icon: <Server size={24} />,
      title: "Systemutvikling",
      description:
        "Skreddersydde systemer som støtter drift, salg og intern arbeidsflyt. Integrasjoner, databaser og applikasjoner bygd for å skalere – ikke ferdigpakker som tvinger dere inn i andres rammer.",
    },
    {
      id: "fullstack",
      icon: <Code size={24} />,
      title: "Fullstack utvikling",
      description:
        "Frontend, backend og infrastruktur hos ett team. Vi tar ansvar for hele løsningen, fra brukergrensesnitt til API, database og drift.",
    },
    {
      id: "apputvikling",
      icon: <Smartphone size={24} />,
      title: "Apputvikling",
      description:
        "Mobilapplikasjoner for iOS og Android, native eller cross-platform. Egnet når nettsiden ikke strekker til, eller når dere trenger en egen app mot kunder eller ansatte.",
    },
    {
      id: "innhold",
      icon: <Camera size={24} />,
      title: "Innholdsproduksjon",
      description:
        "Foto, video og design som støtter merkevaren og nettsiden. Innholdet produseres slik at det kan brukes i webutvikling, sosiale medier og markedsmateriell.",
    },
    {
      id: "innholdshandtering",
      icon: <Megaphone size={24} />,
      title: "Innholdshåndtering",
      description:
        "Markedsføring, annonsering og innhold i praksis – slik at nettsiden og systemene faktisk blir brukt og funnet.",
    },
    {
      id: "database",
      icon: <Database size={24} />,
      title: "Database og data",
      description:
        "Datamodell, lagring og tilgang tilpasset systemet dere skal eie. Trygg struktur er grunnlaget for både webutvikling og systemutvikling.",
    },
    {
      id: "sky",
      icon: <Cloud size={24} />,
      title: "Sky og drift",
      description:
        "Skyinfrastruktur og hosting som tåler vekst. Vi setter opp, overvåker og videreutvikler løsninger som skal være oppe når kundene deres trenger dem.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-navy-950 text-white relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400"
          >
            Webutvikling og systemutvikling
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vi er et utviklingsbyrå som leverer webutvikling, systemutvikling,
            apputvikling og fullstack-løsninger til bedrifter i hele Norge.
            Kontoret ligger i Fagernes. Oppdragene kjører vi nasjonalt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 bg-navy-800/50 p-6 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors"
            >
              <div className="p-3 bg-emerald-500/10 rounded-lg w-fit mb-4" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-emerald-400">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
