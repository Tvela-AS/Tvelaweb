import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Webside med CMS og Trafikkmonitor",
    category: "System Development",
    image:
      "https://images.unsplash.com/photo-1745935817542-b2c55033a6af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    description:
      "En gjennomført webside med Sanity CMS i bakgrunn kjørende på våre interne servere med full overvåkning, FW og Spam-filter",
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
    category: "Mobile Development",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "En engen by-app for Fagernes i Valdres. Appen er laget for å spre budskapet om arrangementer, bedrifter og forretninger til turister og fastboende.",
    tags: ["Next.js", "TypeScript", "Expo", "PostgreSQL", "React"],
    url: "",
  },
  {
    id: 3,
    title: "Webside - UAS Valdres",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1745938606854-bd00587cc042?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Custom webside bygget i React med Typscript for dronefirmaet UAS-valdres. Kjører på våre interne servere og holdes oppgradert av automatiserte prosesser.",
    tags: ["React", "Typescript", "NodeJS", "Vercel", "MsSQL", "EmailJS"],
    url: "https://www.uas-valdres.no",
  },
  {
    id: 4,
    title: "VSAR - Viken Search And Rescue",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1745939313315-cdfe7a7fc028?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
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
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1745941313272-5b2c7cd52f78?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
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
    id: 6,
    title: "Grøv Seter Hytteutleie",
    category: "Web Development",
    image: "/img/grovseter.png",
    description:
      "Grøv Seter og Hytteutleie er en hytteutleiebedrift i Valdres. Vi har utviklet en webside for dem med en CMS-løsning for å kunne administrere innleie, utleie og reservasjoner. Siden er foreløpig ikke publisert, men vi har levert en prototype for å vise hvordan websiden kan se ut.",
    tags: [
      "React",
      "Google API",
      "Firebase",
      "TypeScript",
      "Vercel",
      "EmailJS",
      "NodeJS",
    ],
    url: "https://grovseter.vercel.app/",
  },
  {
    id: 7,
    title: "JL Fotografi",
    category: "Web Development",
    image: "/img/jornlarsen.png",
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
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "System Development",
    "Web Development",
    "Mobile Development",
    "CMS",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id='portfolio' className='py-20 bg-navy-950 text-white relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-emerald-400'>
            Vår Portfolio
          </h2>
          <div className='w-20 h-1 bg-emerald-500 mx-auto mb-6'></div>
          <p className='text-gray-300 max-w-2xl mx-auto'>
            Et utvalg av noen av våre jobber i senere tid.
          </p>
        </div>

        <div className='flex flex-wrap justify-center mb-12 gap-2'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
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
            <div
              key={project.id}
              className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group'>
              <div className='relative overflow-hidden h-60'>
                <img
                  src={project.image}
                  alt={project.title}
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
                <a
                  href={project.url}
                  className='inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors'>
                  Se Prosjekt <ExternalLink size={16} className='ml-1' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
