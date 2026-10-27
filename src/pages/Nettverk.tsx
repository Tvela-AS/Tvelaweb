import React, { useEffect } from "react";
import {
  ArrowRight,
  Cable,
  Mail,
  MapPin,
  Network,
  Phone,
  Router,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Privacy from "../components/Privacy";
import { pageSeo, setPageSeo } from "../lib/seo";

const services = [
  {
    icon: <Network size={22} />,
    title: "Bedriftsnettverk",
    points: [
      "Planlegging og oppsett av kablet nett for kontor og produksjon",
      "Switches, segmentering og strukturert kabling",
      "Løsninger som skalerer når virksomheten vokser",
      "Dokumentasjon slik at dere eier oversikten",
    ],
  },
  {
    icon: <Wifi size={22} />,
    title: "Trådløst Wi-Fi",
    points: [
      "Stabilt trådløst nett for ansatte, gjester og IoT",
      "Dekningsmåling og plassering av aksesspunkter",
      "Separat gjestenett og sikre soner",
      "Oppfølging når ytelse eller dekning svikter",
    ],
  },
  {
    icon: <Router size={22} />,
    title: "Brannmur og tilgang",
    points: [
      "Brannmur, VPN og trygg tilkobling utenfra",
      "Regler og tilgangsstyring tilpasset driften",
      "Sikring mot uønsket trafikk inn og ut",
      "Samarbeid med Tvela Sikkerhet når det trengs",
    ],
  },
  {
    icon: <Cable size={22} />,
    title: "Drift og overvåking",
    points: [
      "Løpende drift, oppdateringer og feilsøking",
      "Overvåking slik at feil oppdages tidlig",
      "Bytte og oppgradering av utstyr uten unødig nedetid",
      "Én partner for nettverk, utvikling og sikkerhet",
    ],
  },
];

const Nettverk: React.FC = () => {
  useEffect(() => {
    setPageSeo(pageSeo.nettverk);
  }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <a
        href="#main"
        className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-md bg-sky-500 px-4 py-2 font-medium text-navy-950 focus:translate-y-0"
      >
        Hopp til innhold
      </a>
      <Navbar variant="nettverk" />
      <main id="main">
        <section
          id="top"
          className="relative flex min-h-[100svh] items-center overflow-hidden"
          aria-labelledby="nettverk-heading"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

          <div className="container relative z-10 mx-auto px-4 py-28 sm:px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-300">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  Nettverk · Wi-Fi · Infrastruktur
                </p>
                <h1
                  id="nettverk-heading"
                  className="mb-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                >
                  Nettverket som
                  <span className="mt-2 block text-sky-300">
                    holder driften oppe.
                  </span>
                </h1>
                <p className="mb-10 max-w-prose text-lg leading-relaxed text-gray-300">
                  Tvela Nettverk leverer og drifter bedriftsnett, trådløst,
                  brannmur og tilkobling. Fra kartlegging til ferdig løsning –
                  slik at ansatte, systemer og gjester er på nett uten støy.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 font-medium text-navy-950 transition-colors hover:bg-sky-400"
                  >
                    Ta kontakt
                    <ArrowRight size={18} className="ml-2" aria-hidden="true" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-medium text-white transition-colors hover:border-sky-400/40"
                  >
                    Se tjenestene
                  </a>
                </div>
                <p className="mt-8 text-sm text-gray-400">
                  Trenger dere utvikling eller sikkerhet?{" "}
                  <Link
                    to="/utvikling"
                    className="text-sky-300 hover:underline"
                  >
                    Utvikling
                  </Link>
                  {" · "}
                  <Link
                    to="/sikkerhet"
                    className="text-sky-300 hover:underline"
                  >
                    Sikkerhet
                  </Link>
                </p>
              </div>

              <aside
                className="rounded-2xl border border-white/10 bg-navy-900/70 p-8 backdrop-blur-sm"
                aria-label="Slik vi jobber med nettverk"
              >
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                  Leveranse
                </p>
                <ol className="space-y-5">
                  {[
                    {
                      n: "01",
                      t: "Kartlegging",
                      d: "Vi ser på lokaler, brukere, eksisterende utstyr og krav til ytelse og sikkerhet.",
                    },
                    {
                      n: "02",
                      t: "Design og installasjon",
                      d: "Nettverk, Wi-Fi og brannmur settes opp med tydelig dokumentasjon.",
                    },
                    {
                      n: "03",
                      t: "Drift videre",
                      d: "Overvåking, oppdateringer og feilsøking – én partner å ringe.",
                    },
                  ].map((step) => (
                    <li key={step.n} className="flex gap-4">
                      <span className="font-mono text-sm text-sky-400/80">
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
          aria-labelledby="nettverk-services-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2
                id="nettverk-services-heading"
                className="mb-4 text-3xl font-bold text-sky-300 md:text-4xl"
              >
                Nettverkstjenester
              </h2>
              <p className="leading-relaxed text-gray-300">
                Infrastruktur som fungerer i praksis – ikke bare på papiret.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-xl border border-white/10 bg-navy-900/50 p-8 transition-colors hover:border-sky-400/30"
                >
                  <div
                    className="mb-5 inline-flex rounded-lg border border-sky-400/20 bg-sky-500/10 p-2.5 text-sky-300"
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
                        <span className="mt-2 h-px w-3 shrink-0 bg-sky-400/70" />
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
          aria-labelledby="nettverk-about-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
          <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2
              id="nettverk-about-heading"
              className="mb-4 text-3xl font-bold text-sky-300 md:text-4xl"
            >
              Om Tvela Nettverk
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              God IT starter ofte med et stabilt nett. Tvela Nettverk sørger
              for at infrastrukturen understøtter utvikling, drift og sikkerhet
              – uten at dere må ha flere leverandører for det samme.
            </p>
            <p className="leading-relaxed text-gray-400">
              Kontor i Fagernes. Oppdrag i hele Norge. Kontakt{" "}
              <a
                href="mailto:hei@tvela.no"
                className="text-sky-300 hover:underline"
              >
                hei@tvela.no
              </a>{" "}
              eller{" "}
              <a
                href="tel:+4795961415"
                className="text-sky-300 hover:underline"
              >
                +47 959 61 415
              </a>
              .
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <Mail size={16} className="text-sky-400" aria-hidden="true" />
                hei@tvela.no
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone size={16} className="text-sky-400" aria-hidden="true" />
                +47 959 61 415
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-sky-400" aria-hidden="true" />
                Valdresvegen 6, Fagernes
              </span>
            </div>
          </div>
        </section>

        <Contact variant="nettverk" />
        <Privacy variant="nettverk" />
      </main>
      <Footer variant="nettverk" />
    </div>
  );
};

export default Nettverk;
