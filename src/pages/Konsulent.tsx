import React, { useEffect } from "react";
import {
  ArrowRight,
  Briefcase,
  Compass,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Privacy from "../components/Privacy";
import { pageSeo, setPageSeo } from "../lib/seo";

const services = [
  {
    icon: <Compass size={22} />,
    title: "IT-rådgivning",
    points: [
      "Uavhengig råd om systemvalg, arkitektur og prioritering",
      "Sparring med ledelse og IT-ansvarlige",
      "Kartlegging av gap mellom dagens løsning og behov",
      "Anbefalinger dere faktisk kan gjennomføre",
    ],
  },
  {
    icon: <Briefcase size={22} />,
    title: "Prosjektbistand",
    points: [
      "Prosjektledelse og teknisk ledelse i digitale leveranser",
      "Koordinering mellom leverandører, utviklere og drift",
      "Kvalitetssikring av krav, leveranser og milepæler",
      "Bistand fra oppstart til overlevering",
    ],
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Digitalisering",
    points: [
      "Hjelp til å digitalisere manuelle prosesser",
      "Integrasjoner mellom systemer dere allerede bruker",
      "Råd om sky, data og arbeidsflyt",
      "Kobling mot Tvela Utvikling når noe skal bygges",
    ],
  },
  {
    icon: <Users size={22} />,
    title: "Interim og kapasitet",
    points: [
      "Ekstra kompetanse når teamet mangler kapasitet",
      "Midlertidig IT-/teknisk ressurs i perioder",
      "Opplæring og overføring til egne ansatte",
      "Fleksibel bistand – timer, sprint eller avtale",
    ],
  },
];

const Konsulent: React.FC = () => {
  useEffect(() => {
    setPageSeo(pageSeo.konsulent);
  }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <a
        href="#main"
        className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-md bg-violet-500 px-4 py-2 font-medium text-white focus:translate-y-0"
      >
        Hopp til innhold
      </a>
      <Navbar variant="konsulent" />
      <main id="main">
        <section
          id="top"
          className="relative flex min-h-[100svh] items-center overflow-hidden"
          aria-labelledby="konsulent-heading"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(167,139,250,0.14),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          <div className="container relative z-10 mx-auto px-4 py-28 sm:px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-300">
                  <span className="h-2 w-2 rounded-full bg-violet-400" />
                  Rådgivning · Prosjekt · Kompetanse
                </p>
                <h1
                  id="konsulent-heading"
                  className="mb-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                >
                  Konsulentbistand
                  <span className="mt-2 block text-violet-300">
                    når dere trenger retning.
                  </span>
                </h1>
                <p className="mb-10 max-w-prose text-lg leading-relaxed text-gray-300">
                  Tvela Konsulent gir IT-rådgivning, prosjektbistand og ekstra
                  kapasitet. Vi hjelper dere å velge riktig, styre leveranser og
                  komme videre – uten at dere må ansette for hvert behov.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-violet-500 px-8 py-4 font-medium text-white transition-colors hover:bg-violet-400"
                  >
                    Book en prat
                    <ArrowRight size={18} className="ml-2" aria-hidden="true" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-medium text-white transition-colors hover:border-violet-400/40"
                  >
                    Se tjenestene
                  </a>
                </div>
                <p className="mt-8 text-sm text-gray-400">
                  Trenger dere leveranse i tillegg?{" "}
                  <Link
                    to="/utvikling"
                    className="text-violet-300 hover:underline"
                  >
                    Utvikling
                  </Link>
                  {" · "}
                  <Link
                    to="/nettverk"
                    className="text-violet-300 hover:underline"
                  >
                    Nettverk
                  </Link>
                  {" · "}
                  <Link
                    to="/sikkerhet"
                    className="text-violet-300 hover:underline"
                  >
                    Sikkerhet
                  </Link>
                </p>
              </div>

              <aside
                className="rounded-2xl border border-white/10 bg-navy-900/70 p-8 backdrop-blur-sm"
                aria-label="Slik konsulentbistand fungerer"
              >
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
                  Slik vi jobber
                </p>
                <ol className="space-y-5">
                  {[
                    {
                      n: "01",
                      t: "Forstå situasjonen",
                      d: "Kort avklaring av mål, begrensninger og hva som faktisk haster.",
                    },
                    {
                      n: "02",
                      t: "Konkret plan",
                      d: "Anbefalinger, prioritering og eventuelt prosjektoppsett.",
                    },
                    {
                      n: "03",
                      t: "Bistand i praksis",
                      d: "Råd, ledelse eller kapasitet – tilpasset det dere trenger nå.",
                    },
                  ].map((step) => (
                    <li key={step.n} className="flex gap-4">
                      <span className="font-mono text-sm text-violet-400/80">
                        {step.n}
                      </span>
                      <div>
                        <h3 className="mb-1 font-semibold text-white">
                          {step.t}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                          {step.d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="relative overflow-hidden py-20"
          aria-labelledby="konsulent-services-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2
                id="konsulent-services-heading"
                className="mb-4 text-3xl font-bold text-violet-300 md:text-4xl"
              >
                Konsulenttjenester
              </h2>
              <p className="leading-relaxed text-gray-300">
                Kompetanse inn i virksomheten – når dere trenger retning eller
                kapasitet.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-xl border border-white/10 bg-navy-900/50 p-8 transition-colors hover:border-violet-400/30"
                >
                  <div
                    className="mb-5 inline-flex rounded-lg border border-violet-400/20 bg-violet-500/10 p-2.5 text-violet-300"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3 className="mb-5 text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <ul className="space-y-2.5 text-[15px] leading-relaxed text-gray-300">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-violet-400/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="relative overflow-hidden py-20"
          aria-labelledby="konsulent-about-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
          <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2
              id="konsulent-about-heading"
              className="mb-4 text-3xl font-bold text-violet-300 md:text-4xl"
            >
              Om Tvela Konsulent
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Tvela er et IT-selskap med utvikling, drift, nettverk og
              sikkerhet under samme tak. Konsulentbistanden bygger på den samme
              praksisen – råd som henger sammen med det som faktisk skal leveres.
            </p>
            <p className="leading-relaxed text-gray-400">
              Kontor i Fagernes. Oppdrag i hele Norge. Kontakt{" "}
              <a
                href="mailto:hei@tvela.no"
                className="text-violet-300 hover:underline"
              >
                hei@tvela.no
              </a>{" "}
              eller{" "}
              <a
                href="tel:+4795961415"
                className="text-violet-300 hover:underline"
              >
                +47 959 61 415
              </a>
              .
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <Mail size={16} className="text-violet-400" aria-hidden="true" />
                hei@tvela.no
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone size={16} className="text-violet-400" aria-hidden="true" />
                +47 959 61 415
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-violet-400"
                  aria-hidden="true"
                />
                Valdresvegen 6, Fagernes
              </span>
            </div>
          </div>
        </section>

        <Contact variant="konsulent" />
        <Privacy variant="konsulent" />
      </main>
      <Footer variant="konsulent" />
    </div>
  );
};

export default Konsulent;
