import React, { useEffect } from "react";
import {
  ArrowRight,
  Eye,
  Fingerprint,
  Mail,
  MapPin,
  Phone,
  Scale,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Privacy from "../components/Privacy";
import { pageSeo, setPageSeo } from "../lib/seo";

const services = [
  {
    icon: <Shield size={22} />,
    title: "IT-sikkerhet",
    points: [
      "Uavhengig vurdering av sikkerhetsnivå og risiko",
      "Råd til styre og ledelse på et språk som gir beslutning",
      "Sikkerhet i systemer, nettverk, identitet og sky",
      "Beredskap og rolig håndtering når noe har skjedd",
    ],
  },
  {
    icon: <Scale size={22} />,
    title: "Ethical hacking",
    points: [
      "Autorisert inntrengingstesting etter skriftlig fullmakt",
      "Kontrollerte tester av systemer, nettverk og tilgang",
      "Avtalt omfang – ingen arbeid utenfor rammen",
      "Rapport med prioriterte funn og konkrete tiltak",
    ],
  },
  {
    icon: <Fingerprint size={22} />,
    title: "Digital gransking",
    points: [
      "Sikring og analyse av digitale spor",
      "Gransking ved mistanke om misbruk, lekkasje eller uredelighet",
      "Dokumentasjon som tåler etterprøving",
      "Samarbeid med advokat, HR og internrevisjon",
    ],
  },
  {
    icon: <Eye size={22} />,
    title: "Privatetterforskning",
    points: [
      "Lovlige og diskrete oppdrag for virksomheter",
      "Faktaopplysning til styre, HR og advokat",
      "Undersøkelser ved intern uro, mistanke eller integritetsspørsmål",
      "Rapport som gir grunnlag for neste steg",
    ],
  },
];

const Sikkerhet: React.FC = () => {
  useEffect(() => {
    setPageSeo(pageSeo.sikkerhet);
  }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <a
        href="#main"
        className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-md bg-amber-500 px-4 py-2 font-medium text-navy-950 focus:translate-y-0"
      >
        Hopp til innhold
      </a>
      <Navbar variant="sikkerhet" />
      <main id="main">
        <section
          id="top"
          className="relative flex min-h-[100svh] items-center overflow-hidden"
          aria-labelledby="sikkerhet-heading"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.12),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

          <div className="container relative z-10 mx-auto px-4 py-28 sm:px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-amber-300">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  IT-sikkerhet · Gransking · Fagernes
                </p>
                <h1
                  id="sikkerhet-heading"
                  className="mb-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                >
                  Sikkerhet og avklaring.
                  <span className="mt-2 block text-amber-300">
                    Utført med diskresjon.
                  </span>
                </h1>
                <p className="mb-10 max-w-prose text-lg leading-relaxed text-gray-300">
                  Tvela Sikkerhet bistår styre, ledelse, HR og advokater med
                  IT-sikkerhet, autorisert testing, digital gransking og lovlig
                  privatetterforskning. Vi arbeider fortrolig og leverer fakta
                  du kan handle på.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 font-medium text-navy-950 transition-colors hover:bg-amber-400"
                  >
                    Fortrolig samtale
                    <ArrowRight size={18} className="ml-2" aria-hidden="true" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-medium text-white transition-colors hover:border-amber-400/40"
                  >
                    Se tjenestene
                  </a>
                </div>
                <p className="mt-8 text-sm text-gray-400">
                  Ser du etter utvikling, innhold eller drift?{" "}
                  <Link
                    to="/utvikling"
                    className="text-amber-300 hover:underline"
                  >
                    Gå til Tvela Utvikling
                  </Link>
                </p>
              </div>

              <aside
                className="rounded-2xl border border-white/10 bg-navy-900/70 p-8 backdrop-blur-sm"
                aria-label="Slik et oppdrag rammes inn"
              >
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
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
                  ].map((step) => (
                    <li key={step.n} className="flex gap-4">
                      <span className="font-mono text-sm text-amber-400/80">
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
          aria-labelledby="sikkerhet-services-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2
                id="sikkerhet-services-heading"
                className="mb-4 text-3xl font-bold text-amber-300 md:text-4xl"
              >
                Fagområder
              </h2>
              <p className="leading-relaxed text-gray-300">
                Fire fagområder. Ett kontaktpunkt. Alltid innenfor loven.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-xl border border-white/10 bg-navy-900/50 p-8 transition-colors hover:border-amber-400/30"
                >
                  <div
                    className="mb-5 inline-flex rounded-lg border border-amber-400/20 bg-amber-500/10 p-2.5 text-amber-300"
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
                        <span className="mt-2 h-px w-3 shrink-0 bg-amber-400/70" />
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
          aria-labelledby="sikkerhet-about-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
          <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2
              id="sikkerhet-about-heading"
              className="mb-4 text-3xl font-bold text-amber-300 md:text-4xl"
            >
              Om Tvela Sikkerhet
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Tvela AS driver med systemutvikling, drift og sikkerhet. Under
              Tvela Sikkerhet samler vi oppdrag som krever diskresjon,
              metodikk og dokumentasjon som tåler etterprøving.
            </p>
            <p className="leading-relaxed text-gray-400">
              Kontor i Fagernes. Oppdrag i hele Norge. Kontakt{" "}
              <a
                href="mailto:hei@tvela.no"
                className="text-amber-300 hover:underline"
              >
                hei@tvela.no
              </a>{" "}
              eller{" "}
              <a
                href="tel:+4795961415"
                className="text-amber-300 hover:underline"
              >
                +47 959 61 415
              </a>
              .
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <Mail size={16} className="text-amber-400" aria-hidden="true" />
                hei@tvela.no
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone size={16} className="text-amber-400" aria-hidden="true" />
                +47 959 61 415
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-amber-400" aria-hidden="true" />
                Valdresvegen 6, Fagernes
              </span>
            </div>
          </div>
        </section>

        <Contact variant="sikkerhet" />
        <Privacy variant="sikkerhet" />
      </main>
      <Footer variant="sikkerhet" />
    </div>
  );
};

export default Sikkerhet;
