import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "./ui/Link";

const Hero: React.FC = () => {
  return (
    <section className='relative min-h-screen pt-32 pb-24 overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800'>
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]' />
        <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent' />
      </div>

      {/* Floating elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/30 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <div className='lg:w-1/2'>
            <div className='relative'>
              <div className='mb-8 inline-block'>
                <div className='flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10'>
                  <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                  <span className='text-emerald-400 text-sm font-medium'>
                    Redefinerer digitale opplevelser
                  </span>
                </div>
              </div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70'>
                Vi skaper en
                <span className='block text-emerald-400'>digital fremtid</span>
              </h1>

              <p className='text-xl text-gray-300/90 mb-10 leading-relaxed'>
                Forandrer ideer til digitale opplevelser, gjennom innovativ
                utvikling og strategisk innholdsskapning.
              </p>

              <div className='flex flex-col sm:flex-row gap-6'>
                <Link
                  href='#contact'
                  className='group bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center transform hover:scale-105'>
                  Start ditt prosjekt
                  <ArrowRight
                    size={18}
                    className='ml-2 group-hover:translate-x-1 transition-transform duration-200'
                  />
                </Link>
                <Link
                  href='#services'
                  className='group bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-white/20'>
                  Se våre løsninger
                </Link>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2'>
            <div className='relative'>
              {/* Code window mockup */}
              <div className='bg-navy-800/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden'>
                <div className='flex items-center gap-2 px-6 py-4 border-b border-white/10'>
                  <div className='w-3 h-3 rounded-full bg-red-400' />
                  <div className='w-3 h-3 rounded-full bg-amber-400' />
                  <div className='w-3 h-3 rounded-full bg-emerald-400' />
                </div>
                <div className='p-6 space-y-4 font-mono text-sm'>
                  <div className='flex items-center text-emerald-400'>
                    <span className='text-white/50 mr-2'>$</span>
                    npm create digital-future
                  </div>
                  <div className='h-4 bg-emerald-500/20 w-3/4 rounded animate-pulse' />
                  <div className='h-4 bg-white/10 w-1/2 rounded' />
                  <div className='h-4 bg-white/10 w-5/6 rounded' />
                  <div className='h-4 bg-emerald-500/20 w-2/3 rounded animate-pulse' />
                </div>
              </div>

              {/* Stats overlay */}
              <div className='absolute -right-4 bottom-4 bg-navy-800/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl'>
                <div className='grid grid-cols-2 gap-6'>
                  <div>
                    <div className='text-3xl font-bold text-emerald-400 mb-1'>
                      1M+
                    </div>
                    <div className='text-sm text-gray-400'>Linjer med kode</div>
                  </div>
                  <div>
                    <div className='text-3xl font-bold text-emerald-400 mb-1'>
                      98%
                    </div>
                    <div className='text-sm text-gray-400'>Fornøyde kunder</div>
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

export default Hero;
