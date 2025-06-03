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
  Shield,
  Lock,
  Search,
  Bug,
  Network,
  Code,
  FileSearch,
  UserCheck,
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
      title: "Penetrasjonstesting",
      description:
        "Omfattende sikkerhetstesting av systemer og nettverk for å identifisere sårbarheter før angripere gjør det.",
      icon: <Bug size={24} />,
    },
    {
      title: "Sikkerhetsvurdering",
      description:
        "Detaljert analyse av din bedrifts sikkerhetstilstand og anbefalinger for forbedringer.",
      icon: <Search size={24} />,
    },
    {
      title: "Nettverkssikkerhet",
      description:
        "Beskyttelse av nettverksinfrastruktur mot uautorisert tilgang og cyberangrep.",
      icon: <Network size={24} />,
    },
    {
      title: "Kodeanalyse",
      description:
        "Sikkerhetsgjennomgang av kildekode for å identifisere potensielle sårbarheter og sikkerhetshull.",
      icon: <Code size={24} />,
    },
    {
      title: "Trusseljakt",
      description:
        "Proaktiv søking etter skjulte trusler og kompromitterte systemer i nettverket.",
      icon: <FileSearch size={24} />,
    },
    {
      title: "Sikkerhetsopplæring",
      description:
        "Tilpasset opplæring i cybersikkerhet for ansatte og ledelse.",
      icon: <UserCheck size={24} />,
    },
    {
      title: "Sikkerhetsstrategi",
      description:
        "Utvikling av omfattende sikkerhetsstrategier og implementeringsplaner.",
      icon: <Shield size={24} />,
    },
    {
      title: "Kryptering",
      description:
        "Implementering av robuste krypteringsløsninger for å beskytte sensitive data.",
      icon: <Lock size={24} />,
    },
  ];

  return (
    <section id='services' className='py-20 bg-navy-950 text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-emerald-400'>
            Våre Sikkerhetstjenester
          </h2>
          <div className='w-20 h-1 bg-emerald-500 mx-auto mb-6'></div>
          <p className='text-xl text-gray-300'>
            Omfattende cybersikkerhetstjenester for å beskytte din bedrift.
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
