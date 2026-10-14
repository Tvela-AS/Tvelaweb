import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] scroll-mt-24 items-center overflow-hidden bg-ink-950"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-white bg-[length:36px_36px] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-900" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass-400/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 py-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="max-w-xl">
            <p className="mb-8 inline-flex max-w-full flex-wrap items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2 text-sm tracking-wide text-brass-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
              IT-sikkerhet og privatetterforskning · Fagernes
            </p>

            <h1
              id="hero-heading"
              className="mb-8 text-4xl font-semibold leading-[1.12] text-parchment-50 sm:text-5xl lg:text-6xl"
            >
              Sikkerhet og avklaring.
              <span className="mt-2 block text-brass-300">
                Utført med diskresjon.
              </span>
            </h1>

            <p className="mb-10 max-w-prose text-lg leading-relaxed text-parchment-200/90">
              Tvela AS i Fagernes bistår styre, ledelse, HR og advokater med
              IT-sikkerhet, autorisert inntrengingstesting, digital gransking og
              lovlig privatetterforskning.
              <br />
              Vi arbeider fortrolig. Vi leverer fakta du kan handle på.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-brass-500 px-7 py-3.5 font-medium text-ink-950 hover:bg-brass-400"
              >
                Fortrolig samtale
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-white/15 px-7 py-3.5 font-medium text-parchment-100 hover:border-brass-400/40 hover:text-brass-200"
              >
                Se tjenestene
              </a>
            </div>
          </div>

          <aside
            className="border border-white/10 bg-ink-900/70 p-8 shadow-2xl backdrop-blur-sm"
            aria-label="Slik et oppdrag rammes inn"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-brass-400">
              Fortrolig notat
            </p>
            <ol className="space-y-5">
              {[
                {
                  n: "01",
                  t: "Fullmakt først",
                  d: "Ingen testing eller gransking uten avtalt ramme og skriftlig fullmakt.",
                },
                {
                  n: "02",
                  t: "Diskret gjennomføring",
                  d: "Få ledd. Tydelige roller. Ingen unødig støy internt eller eksternt.",
                },
                {
                  n: "03",
                  t: "Fakta til beslutning",
                  d: "Du får en rapport med prioriterte funn og konkrete anbefalinger.",
                },
              ].map((item) => (
                <li key={item.n} className="flex gap-4">
                  <span className="font-serif text-xl text-brass-400">
                    {item.n}
                  </span>
                  <div>
                    <p className="font-medium text-parchment-50">{item.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-parchment-400">
                      {item.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
