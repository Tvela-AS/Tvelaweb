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
    title: "Finanssektor Penetration Test",
    category: "Penetration Testing",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Omfattende penetrasjonstest av en større finansinstitusjon som avdekket kritiske sårbarheter i nettverksinfrastrukturen og webapplikasjoner",
    tags: [
      "OWASP",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Nessus",
      "Social Engineering",
      "Network Security",
    ],
    url: "#",
  },
  {
    id: 2,
    title: "E-handel Sikkerhetsaudit",
    category: "Security Audit",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Komplett sikkerhetsaudit av en stor e-handelsplattform som identifiserte sårbarheter i betalingssystemer og brukerdatahåndtering.",
    tags: ["PCI DSS", "OWASP Top 10", "SSL/TLS", "Data Encryption", "Compliance"],
    url: "#",
  },
  {
    id: 3,
    title: "Nettverkssikkerhet Assessment",
    category: "Network Security",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Omfattende nettverkssikkerhetsvurdering for en teknologibedrift som avdekket konfigurasjonsfeil og potensielle innbruddsveier.",
    tags: ["Network Scanning", "Firewall Analysis", "Intrusion Detection", "VPN Security", "Wireless Security"],
    url: "#",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Security",
    category: "Cloud Security",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sikkerhetsvurdering av cloud-infrastruktur for en SaaS-bedrift, inkludert konfigurasjonsanalyse og tilgangskontroll.",
    tags: [
      "AWS Security",
      "Azure Security",
      "Container Security",
      "Identity Management",
      "Data Encryption",
      "Compliance",
      "Cloud Monitoring",
    ],
    url: "#",
  },
  {
    id: 5,
    title: "Social Engineering Assessment",
    category: "Social Engineering",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Kontrollert social engineering-test for en offentlig etat som viste sårbarheter i ansattes sikkerhetsbevissthet og prosedyrer.",
    tags: [
      "Phishing Simulation",
      "Physical Security",
      "Security Awareness",
      "Policy Review",
      "Training Programs",
      "Incident Response",
    ],
    url: "#",
  },
  {
    id: 6,
    title: "IoT Device Security Assessment",
    category: "IoT Security",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sikkerhetsvurdering av IoT-enheter for en smart by-prosjekt, inkludert firmware-analyse og kommunikasjonssikkerhet.",
    tags: [
      "Firmware Analysis",
      "Protocol Security",
      "Device Hardening",
      "Encryption",
      "Access Control",
      "Vulnerability Scanning",
      "Compliance",
    ],
    url: "#",
  },
  {
    id: 7,
    title: "Red Team Exercise",
    category: "Red Team",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Omfattende red team-øvelse for en teknologibedrift som simulerte avanserte persisterende trusler (APT) og multi-vektor angrep.",
    tags: [
      "Advanced Persistent Threat",
      "Multi-Vector Attacks",
      "Lateral Movement",
      "Privilege Escalation",
      "Data Exfiltration",
      "Incident Response",
      "Threat Hunting",
    ],
    url: "#",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Penetration Testing",
    "Security Audit",
    "Network Security",
    "Cloud Security",
    "Social Engineering",
    "IoT Security",
    "Red Team",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id='portfolio' className='py-20 bg-navy-950 text-white relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-red-400'>
            Sikkerhetsprosjekter
          </h2>
          <div className='w-20 h-1 bg-red-500 mx-auto mb-6'></div>
          <p className='text-gray-300 max-w-2xl mx-auto'>
            Et utvalg av sikkerhetsassessments og penetrasjonstester vi har utført.
          </p>
        </div>

        <div className='flex flex-wrap justify-center mb-12 gap-2'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category
                  ? "bg-red-600 text-white"
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
                    <span className='text-red-400 text-sm font-medium mb-1 inline-block'>
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
                  className='inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors'>
                  Se Sikkerhetsrapport <ExternalLink size={16} className='ml-1' />
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
