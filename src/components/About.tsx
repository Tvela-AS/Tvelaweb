import React from "react";
import { CheckCircle, Shield, Lock, Eye, Search, Network } from "lucide-react";

const About: React.FC = () => {
  const whyChooseUs = [
    "Sertifiserte sikkerhetseksperter",
    "Avanserte penetrasjonstester",
    "Omfattende sikkerhetsrapporter",
    "Dedikerte sikkerhetsteam",
    "ISO 27001 sertifisering",
    "24/7 sikkerhetsovervåkning",
  ];

  const techFeatures = [
    {
      icon: <Shield size={24} />,
      title: "Penetration Testing",
      description: "Omfattende sikkerhetstester som simulerer ekte cyberangrep"
    },
    {
      icon: <Lock size={24} />,
      title: "Infrastruktur Sikkerhet",
      description: "Sikkerhetsvurdering av nettverk og IT-infrastruktur"
    },
    {
      icon: <Eye size={24} />,
      title: "Sårbarhetsanalyser",
      description: "Systematisk gjennomgang av sikkerhetshull i systemer"
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
    }
  ];

  return (
    <section id='about' className='py-20 bg-navy-950 text-white relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]' />
        <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-red-400'>Om Tvela AS</h2>
            <div className='w-20 h-1 bg-red-500 mb-8'></div>

            <p className='text-gray-300 mb-6 text-lg'>
              Tvela AS er en ledende leverandør av cybersikkerhet og penetrasjonstester, dedikert til å beskytte 
              bedrifter mot cybertrusler og sårbarheter.
            </p>

            <p className='text-gray-300 mb-10'>
              Grunnlagt i 2021, har vi raskt etablert oss som en pålitelig partner innen cybersikkerhet. 
              Vårt team av sertifiserte sikkerhetseksperter jobber tett med kunder for å identifisere og 
              sikre sårbarheter i deres IT-infrastruktur. Vi kombinerer avanserte penetrasjonstester med 
              moderne sikkerhetsteknologi for å levere omfattende sikkerhetsløsninger.
            </p>

            <div className='mb-8'>
              <h3 className='text-xl font-bold mb-4 text-red-400'>
                Hvorfor velge oss?
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {whyChooseUs.map((item, index) => (
                  <div key={index} className='flex items-start'>
                    <CheckCircle
                      className='text-red-500 mt-1 mr-2 flex-shrink-0'
                      size={18}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='absolute -top-10 -left-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl'></div>
            <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl'></div>

            <div className='relative z-10 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl border border-white/10 p-8 shadow-xl'>
              <div className='grid grid-cols-1 gap-6'>
                {techFeatures.map((feature, index) => (
                  <div key={index} className='bg-navy-700/50 p-5 rounded-lg border border-white/5 hover:border-red-500/50 transition-colors'>
                    <div className='flex items-start gap-4'>
                      <div className='p-2 bg-red-500/10 rounded-lg text-red-400'>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className='font-bold text-red-400 mb-2'>
                          {feature.title}
                        </h4>
                        <p className='text-gray-300'>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
