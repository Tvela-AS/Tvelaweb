import React from "react";
import { Eye, Fingerprint, Scale, Shield } from "lucide-react";
import SectionFrame from "./ui/SectionFrame";

const services = [
  {
    icon: <Shield size={22} />,
    title: "IT-sikkerhet",
    points: [
      "Uavhengig vurdering av sikkerhetsnivå og risiko",
      "Råd til styre og ledelse, på et språk som gir beslutning",
      "Sikkerhet i systemer, nettverk, identitet og sky",
      "Beredskap og rolig håndtering når noe har skjedd",
      "Bevissthet og internkontroll i organisasjonen",
      "Støtte til etterlevelse, leverandørkrav og dokumentasjon",
    ],
  },
  {
    icon: <Scale size={22} />,
    title: "Ethical hacking",
    points: [
      "Autorisert inntrengingstesting etter skriftlig fullmakt",
      "Kontrollerte tester av systemer, nettverk og tilgangsstyring",
      "Avtalt omfang. Ingen arbeid utenfor rammen",
      "Tydelig rapport til ledelse, med prioriterte funn",
      "Konkrete anbefalinger og oppfølging av tiltak",
      "Kontrollerte beredskapstester etter avtalt scenario",
    ],
  },
  {
    icon: <Fingerprint size={22} />,
    title: "Digital gransking",
    points: [
      "Sikring og analyse av digitale spor",
      "Gransking ved mistanke om misbruk, lekkasje eller uredelighet",
      "Faglig støtte til internundersøkelser",
      "Dokumentasjon som tåler etterprøving",
      "Samarbeid med advokat, HR og internrevisjon",
      "Bistand etter datainnbrudd eller tap av data",
    ],
  },
  {
    icon: <Eye size={22} />,
    title: "Privatetterforskning",
    points: [
      "Lovlige og diskrete oppdrag for virksomheter",
      "Faktaopplysning til styre, HR og advokat",
      "Undersøkelser ved intern uro, mistanke eller integritetsspørsmål",
      "Innhenting fra åpne og lovlige kilder",
      "Bakgrunn og relasjoner, der det er saklig grunn",
      "Rapport som gir grunnlag for neste steg",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <SectionFrame id="services" labelledBy="services-heading" className="bg-ink-950">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brass-400">
          Fagområder
        </p>
        <h2
          id="services-heading"
          className="mb-4 text-3xl font-semibold text-parchment-50 md:text-4xl"
        >
          Tjenester
        </h2>
        <p className="text-lg leading-relaxed text-parchment-200/85">
          Fire fagområder. Ett kontaktpunkt. Alltid innenfor loven.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="border border-white/10 bg-ink-900/50 p-8 hover:border-brass-400/30"
          >
            <div className="mb-5 inline-flex border border-brass-400/20 bg-brass-500/10 p-2.5 text-brass-300" aria-hidden="true">
              {service.icon}
            </div>
            <h3 className="mb-5 font-serif text-2xl font-semibold text-parchment-50">
              {service.title}
            </h3>
            <ul className="space-y-2.5 text-[15px] leading-relaxed text-parchment-200/80">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-px w-3 shrink-0 bg-brass-400/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
};

export default Services;
