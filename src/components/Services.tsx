import React from "react";
import {
  Edit,
  Globe,
  BarChart,
  Megaphone,
  Video,
  Layout,
  Target,
  Users,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 group'>
      <div className='w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300'>
        {icon}
      </div>
      <h3 className='text-xl font-bold mb-3 text-navy-900'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Systemutvikling",
      description:
        "Brukervennlige apper, webapper og sytemer, spesiallaget for din bedrift og dine behov.",
      icon: <Layout size={24} />,
    },
    {
      title: "Video Produksjon",
      description:
        "Høykvalitets video innhold, inkludert dronebilder, steadycams og lydspor.",
      icon: <Video size={24} />,
    },
    {
      title: "Webutvikling",
      description:
        "Engasjerende websider med innhold som konverterer besøk til inntekt og øker SEO-rankingen til bedriften din.",
      icon: <Globe size={24} />,
    },
    {
      title: "Innholdsstrategi",
      description:
        "Strategisk planlegging og utvikling av innhold, som samkjører med din bedrifts mål og målgruppe.",
      icon: <Target size={24} />,
    },
    {
      title: "Innholdsproduksjon",
      description:
        "Profesjonell innholdsproduksjon, innkludert artikler, Bilder og animasjoner.",
      icon: <Edit size={24} />,
    },
    {
      title: "Digital Markedsføring",
      description:
        "Gjennomført digital markedsføring som øker synligheten av ditt innhold og treffer din målgruppe.",
      icon: <Megaphone size={24} />,
    },
    {
      title: "Innholdsanalyse",
      description:
        "AI-dreven analyse av ditt innhold, statistikk og rapportering for å optimalisere opplevelsen dere får av innholdet deres.",
      icon: <BarChart size={24} />,
    },
    {
      title: "SoMe",
      description:
        "Strategisk innhold til sosiale medier. Utviklet og laget for å dyrke din merkevare.",
      icon: <Users size={24} />,
    },
  ];

  return (
    <section id='services' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-navy-900'>
            Våre Løsninger
          </h2>
          <div className='w-20 h-1 bg-emerald-500 mx-auto mb-6'></div>
          <p className='text-xl text-gray-600'>
            Gjennomtenkte løsninger for bedrifter i utvikling.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
