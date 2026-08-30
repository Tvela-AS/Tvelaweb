import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  url: string;
}

const projects: Project[] = [
  {
    id: 8,
    title: "Folkejury – Norsk Rakfiskfestival",
    category: "Systemutvikling",
    image: "/img/rakfisk-logo.png",
    alt: "Logo for Norsk Rakfiskfestival",
    description:
      "Digital avstemningsløsning for Folkejuryen under Norsk Rakfiskfestival på Fagernes. Publikum stemmer på årets beste rakfisk via en skreddersydd webapp.",
    tags: ["Next.js", "TypeScript", "React", "Vercel"],
    url: "https://rakfiskvote.vercel.app/",
  },
  {
    id: 1,
    title: "Webside med CMS og Trafikkmonitor",
    category: "Systemutvikling",
    image: "/img/satch.png",
    alt: "Nettsiden til Satch Hundesalong og butikk i Valdres",
    description:
      "Leveranse av webside med Sanity CMS og Trafikkmonitor samt produktbilder og profileringsbilder for Hundesalongen i Valdres.",
    tags: [
      "React",
      "Node.js",
      "Sanity",
      "Docker",
      "Vercel",
      "Typescript",
      "Google API",
    ],
    url: "https://www.valdreshundesalong.no",
  },
  {
    id: 2,
    title: "FagernesAppen - Fagernes Handelsstand",
    category: "Mobilutvikling",
    image: "/img/fagernes-appen.jpg",
    alt: "FagernesAppen for Fagernes Handelsstand",
    description:
      "En egen by-app for Fagernes i Valdres. Appen er laget for å spre budskapet om arrangementer, bedrifter og forretninger til turister og fastboende.",
    tags: ["Next.js", "TypeScript", "Expo", "PostgreSQL", "React"],
    url: "",
  },
  {
    id: 3,
    title: "Webside - UAS Valdres",
    category: "Webutvikling",
    image: "/img/uas-valdres.jpg",
    alt: "Drone i luften for UAS Valdres",
    description:
      "Egendefinert nettside bygget i React med TypeScript for dronefirmaet UAS Valdres. Kjører på våre interne servere og holdes oppdatert av automatiserte prosesser.",
    tags: ["React", "Typescript", "NodeJS", "Vercel", "MsSQL", "EmailJS"],
    url: "https://www.uas-valdres.no",
  },
  {
    id: 4,
    title: "VSAR - Viken Search And Rescue",
    category: "Webutvikling",
    image: "/img/vsar.jpg",
    alt: "Fjellandskap som illustrerer Viken Search and Rescue",
    description:
      "VSAR fikk utviklet sin nye webløsning hos oss med tilhørende database for savnede personer og medlemsinnlogging.",
    tags: [
      "React",
      "Google API",
      "Firebase",
      "TypeScript",
      "Vercel",
      "EmailJS",
      "NodeJS",
    ],
    url: "https://www.vsar.no",
  },
  {
    id: 5,
    title: "Øie Trafikkskole",
    category: "Webutvikling",
    image: "/img/oie-trafikkskole.jpg",
    alt: "Øie Trafikkskole – bilde brukt på kundens nettside",
    description:
      "Øie Trafikkskole var vår første fulle kunde innen webdesign. Websiden deres er levert i Wordpress CMS med spesialtilpasset design, bookingløsning for trafikkskoler og kontaktskjema.",
    tags: [
      "Wordpress",
      "Google API",
      "CSS",
      "TypeScript",
      "Tabs",
      "Custom Plugins",
    ],
    url: "https://www.oietrafikkskole.no",
  },
  
  {
    id: 7,
    title: "JL Fotografi",
    category: "Webutvikling",
    image: "/img/jornlarsen.png",
    alt: "Nettsiden til fotograf JL Fotografi",
    description:
      "Fotograf og innholdsprodusent Jørn Larsen. Vi har utviklet en webside for innholdsprodusenten med bildegalleri, kontaktskjema og innebygget fakturasystem.",
    tags: [
      "React",
      "Google API",
      "Firebase",
      "TypeScript",
      "Vercel",
      "EmailJS",
      "NodeJS",
    ],
    url: "https://jornlarsen.no/",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("Alle");

  const categories = [
    "Alle",
    "Systemutvikling",
    "Webutvikling",
    "Mobilutvikling",
  ];

  const filteredProjects =
    filter === "Alle"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id='portfolio'
      className='py-20 bg-navy-950 text-white relative overflow-hidden'
      aria-labelledby='portfolio-heading'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2
            id='portfolio-heading'
            className='text-3xl md:text-4xl font-bold mb-4 text-emerald-400'
          >
            Vår Portfolio
          </h2>
          <div className='w-20 h-1 bg-emerald-500 mx-auto mb-6'></div>
          <p className='text-gray-300 max-w-2xl mx-auto'>
            Et utvalg av webutvikling, systemutvikling og apper vi har levert.
          </p>
        </div>

        <div className='flex flex-wrap justify-center mb-12 gap-2'>
          {categories.map((category) => (
            <button
              type='button'
              key={category}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group'>
              <div className='relative overflow-hidden h-60'>
                <img
                  src={project.image}
                  alt={project.alt}
                  loading='lazy'
                  decoding='async'
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent flex items-end p-6'>
                  <div>
                    <span className='text-emerald-400 text-sm font-medium mb-1 inline-block'>
                      {project.category}
                    </span>
                    <h3 className='text-white text-xl font-bold'>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <p className='text-gray-600 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full'>
                      {tag}
                    </span>
                  ))}
                </div>
                {project.url ? (
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors'>
                    Se prosjekt <ExternalLink size={16} className='ml-1' aria-hidden='true' />
                  </a>
                ) : (
                  <span className='inline-flex items-center text-gray-400 font-medium'>
                    Prosjekt uten offentlig lenke
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
