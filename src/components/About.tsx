import React from "react";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
  const whyChooseUs = [
    "Industriledende ekspertise på innholdsproduksjon",
    "Leverer innhold til alle kanaler",
    "Utviklere med innhold i fokus",
    "Dedikerte spesialister",
    "Kontinuerlig optimalisering av innhold",
    "Foto, video, utvikling og innhold på et sted",
  ];

  return (
    <section id='about' className='py-20 bg-navy-950 text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Om Tvela AS</h2>
            <div className='w-20 h-1 bg-emerald-500 mb-8'></div>

            <p className='text-gray-300 mb-6 text-lg'>
              Tvela AS er ledende innen innovative digitale innholdstjenester og
              hjelper bedrifter med innhold med nedslagsfelt over alle kanaler.
            </p>

            <p className='text-gray-300 mb-10'>
              Grunnlagt i 2021, og vokste straks ut av hjemmekontoret der
              driften var det første året. Vi inngikk partnerskap med bedrifter
              på kryss av industrier for å transformere deres strategi på
              innholdsproduksjon, øke engasjementet hos seere, og skape målbare
              resultater. Vårt teamt med innholdsskapere, creatører og utviklere
              jobber i team for å levere innhold som bidrar til å øke ditt
              publikum.
            </p>

            <div className='mb-8'>
              <h3 className='text-xl font-bold mb-4 text-emerald-400'>
                Hvorfor velge oss?
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {whyChooseUs.map((item, index) => (
                  <div key={index} className='flex items-start'>
                    <CheckCircle
                      className='text-emerald-500 mt-1 mr-2 flex-shrink-0'
                      size={18}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl'></div>
            <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl'></div>

            <div className='relative z-10 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl border border-white/10 p-8 shadow-xl'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='space-y-6'>
                  <div className='bg-navy-700/50 p-5 rounded-lg'>
                    <h4 className='font-bold text-emerald-400 mb-2'>
                      Vårt Mål
                    </h4>
                    <p className='text-gray-300'>
                      Å styrke bedrifter gjennom innovative innholdsløsninger
                      som driver engasjement og styrkelse.
                    </p>
                  </div>

                  <div className='bg-navy-700/50 p-5 rounded-lg'>
                    <h4 className='font-bold text-emerald-400 mb-2'>
                      Vår Løsning
                    </h4>
                    <p className='text-gray-300'>
                      Data-dreven innholdsstrategi med fokus på
                      publikumsengasjement og målbare resultater.
                    </p>
                  </div>
                </div>

                <div className='space-y-6'>
                  <div className='bg-navy-700/50 p-5 rounded-lg'>
                    <h4 className='font-bold text-emerald-400 mb-2'>
                      Vår Visjon
                    </h4>
                    <p className='text-gray-300'>
                      Å være den ledende partneren for bedrifter som søker
                      slående digitale innholdsløsninger.
                    </p>
                  </div>

                  <div className='bg-navy-700/50 p-5 rounded-lg'>
                    <h4 className='font-bold text-emerald-400 mb-2'>
                      Våre Verdier
                    </h4>
                    <p className='text-gray-300'>
                      Innovasjon, Kvalitet, data-drevne løsninger, og
                      kundesuksess leder ann i alt vi gjør.
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-8 pt-6 border-t border-white/10'>
                <h4 className='font-bold text-center mb-4'>Partnere</h4>
                <div className='flex justify-between items-center'>
                  <div className='h-10 w-20 bg-white/10 rounded'>
                    <img src='/img/satchlogo.png' alt='' />
                  </div>
                  <div className='h-10 w-16 bg-white/10 rounded'>
                    <img src='/img/Motorshow_Logo.png' alt='' />
                  </div>
                  <div className='h-10 w-16 bg-white/10 rounded'>
                    <img src='/img/FagernesHandel.jpeg' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
