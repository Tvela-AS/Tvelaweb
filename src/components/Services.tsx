import React from "react";
import {
  Server,
  Cloud,
  Headphones,
  Layout,
  Shield,
  FileSearch,
} from "lucide-react";

const Services: React.FC = () => {
  const areas = [
    {
      id: "it-drift",
      title: "IT-drift og konsulenttjenester",
      icon: <Server size={24} />,
      items: [
        { label: "Stabil drift", icon: <Server size={18} /> },
        { label: "Rådgivning", icon: <Layout size={18} /> },
        { label: "Infrastruktur", icon: <Layout size={18} /> },
        { label: "Sky", icon: <Cloud size={18} /> },
        { label: "Support", icon: <Headphones size={18} /> },
      ],
    },
    {
      id: "sikkerhet",
      title: "Sikkerhet og nettverk",
      icon: <Shield size={24} />,
      items: [
        { label: "Nettverksarkitektur" },
        { label: "Segmentering" },
        { label: "Brannmur og overvåkning" },
        { label: "Risikovurdering" },
        { label: "Sikkerhetsrevisjon" },
      ],
    },
    {
      id: "gransking",
      title: "Digital gransking og cyberetterforskning",
      icon: <FileSearch size={24} />,
      items: [
        { label: "Intern digital gransking" },
        { label: "Hendelseshåndtering" },
        { label: "Sikring av digitale bevis" },
        { label: "Analyse av mistenkelig aktivitet" },
        { label: "Rapportering og dokumentasjon" },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-navy-900 text-white relative overflow-hidden"
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
            Våre tjenesteområder
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Vi tilbyr strukturert og nøktern leveranse innen IT-drift,
            sikkerhet og digital gransking – uten overdrevne løfter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <article
              key={area.id}
              className="bg-navy-800/50 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-colors overflow-hidden"
            >
              <div className="p-6 border-b border-white/10">
                <div className="p-3 bg-emerald-500/10 rounded-lg w-fit mb-4 text-emerald-400">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{area.title}</h3>
              </div>
              <ul className="p-6 space-y-3" role="list">
                {area.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 flex-shrink-0" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
