import React from "react";
import {
  ArrowRight,
  BarChart3,
  Download,
  Gift,
  Lock,
  Palette,
  QrCode,
  ShieldCheck,
  Smartphone,
  Trophy,
  Users,
} from "lucide-react";

type ProductFeature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Product = {
  name: string;
  tagline: string;
  description: string;
  proof?: React.ReactNode;
  demoUrl: string;
  demoLabel: string;
  ctaLabel: string;
  features: ProductFeature[];
  mockup: React.ReactNode;
};

const folkejuryFeatures: ProductFeature[] = [
  {
    icon: <Smartphone size={20} />,
    title: "Mobil og web",
    description:
      "Ingen app å laste ned. Deltakerne stemmer i nettleseren, på telefon eller PC.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Én stemme per enhet",
    description:
      "Bygget for å tåle folkemengden. Dobbeltstemmer stoppes uten unødvendig persondata.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Live resultater",
    description:
      "Arrangøren følger opptellingen i adminpanelet mens avstemningen pågår.",
  },
  {
    icon: <Download size={20} />,
    title: "Eksport og rapporter",
    description:
      "Last ned CSV og PDF når kåringen er ferdig – klart til storskjerm og arkiv.",
  },
  {
    icon: <Gift size={20} />,
    title: "Valgfri trekning",
    description:
      "Koble på loddtrekning og påmelding når dere vil premiere publikum.",
  },
  {
    icon: <Lock size={20} />,
    title: "Personvern først",
    description:
      "Data lagres kun for å telle stemmer og hindre juks i den aktuelle avstemningen.",
  },
];

const contestFeatures: ProductFeature[] = [
  {
    icon: <QrCode size={20} />,
    title: "QR-koder",
    description:
      "Heng koden i butikk, på stand eller i annonser. Spor skanninger per lokasjon.",
  },
  {
    icon: <Users size={20} />,
    title: "Lead-generering",
    description:
      "Samle kontaktinformasjon med eksplisitt samtykke, og eksporter listen når du trenger den.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Statistikk",
    description:
      "Se deltakere per dag, skanninger, konvertering og svarfordeling på hvert spørsmål.",
  },
  {
    icon: <Trophy size={20} />,
    title: "Vinneruttrekning",
    description:
      "Trekk vinnere på en dokumenterbar måte. Historikken lagres, og du kan trekke på nytt.",
  },
  {
    icon: <Palette size={20} />,
    title: "Skreddersydd design",
    description:
      "Farger, logo og bilde matcher kundens profil – med live forhåndsvisning før publisering.",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Én plattform",
    description:
      "Opprett, del, samle inn og trekk vinner fra samme sted – uten egen app for publikum.",
  },
];

const FolkejuryMockup = () => (
  <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-900">
    <div className="px-5 pt-6 pb-4 text-center border-b border-slate-100">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
        Folkejury
      </p>
      <p className="text-lg font-bold">Beste kaffe</p>
      <p className="text-xs text-slate-500 mt-1">Én stemme per avstemning</p>
    </div>
    <div className="p-5 space-y-2">
      <p className="text-sm font-medium text-slate-600 mb-3">
        Velg din favoritt:
      </p>
      {["Svart Kaffe", "Melkerøst", "Fjellbønne", "Bryggehuset"].map(
        (name, index) => (
          <div
            key={name}
            className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm ${
              index === 0
                ? "border-emerald-500 bg-emerald-50"
                : "border-slate-200 bg-white"
            }`}
          >
            <span
              className={`h-3.5 w-3.5 rounded-full border ${
                index === 0
                  ? "border-emerald-500 bg-emerald-500"
                  : "border-slate-300"
              }`}
            />
            {name}
          </div>
        )
      )}
      <div className="mt-4 w-full rounded-lg bg-emerald-600 text-white text-sm font-medium py-2.5 text-center">
        Send inn stemme
      </div>
    </div>
  </div>
);

const ContestMockup = () => (
  <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-900">
    <div className="bg-emerald-600 px-5 py-3 text-white text-xs font-semibold tracking-wide">
      Gavekort 5 000 kr
    </div>
    <div className="px-5 pt-5 pb-4 border-b border-slate-100">
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-1">
        Tvela Contest
      </p>
      <p className="text-lg font-bold leading-snug">Høstkampanje 2026</p>
      <p className="text-sm text-slate-600 mt-2">
        Hva er din favorittkategori hos Fjell & Fritid?
      </p>
    </div>
    <div className="p-5 grid grid-cols-2 gap-2">
      {["Friluft", "Jakt", "Fiske", "Klær"].map((name, index) => (
        <div
          key={name}
          className={`rounded-lg border px-3 py-3 text-sm font-medium text-center ${
            index === 0
              ? "border-emerald-500 bg-emerald-50 text-emerald-800"
              : "border-slate-200 bg-white text-slate-700"
          }`}
        >
          {name}
        </div>
      ))}
      <div className="col-span-2 mt-2 w-full rounded-lg bg-emerald-600 text-white text-sm font-medium py-2.5 text-center">
        Delta
      </div>
    </div>
  </div>
);

const products: Product[] = [
  {
    name: "Tvela Contest",
    tagline: "Gjør konkurranser til kundeengasjement.",
    description:
      "Arranger digitale konkurranser, samle leads og engasjer publikum fra én plattform. Opprett konkurransen, del QR-koden, se statistikken og trekk vinneren – uten egen app.",
    demoUrl: "https://tvela-contest.vercel.app",
    demoLabel: "Se live demo",
    ctaLabel: "Opprett konkurranse",
    features: contestFeatures,
    mockup: <ContestMockup />,
  },
  {
    name: "Folkejury",
    tagline: "Avstemning som tåler folkemengden.",
    description:
      "Et ferdig avstemningssystem for festivaler, foreninger og arrangementer. Publikum stemmer på favoritten sin på sekunder. Dere styrer avstemninger, ser resultatene live og eksporterer når kåringen er over.",
    proof: (
      <>
        Allerede i bruk under{" "}
        <a
          href="https://rakfiskvote.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300"
        >
          Norsk Rakfiskfestival
        </a>
        .
      </>
    ),
    demoUrl: "https://vote-app-self.vercel.app",
    demoLabel: "Se live demo",
    ctaLabel: "Bestill til arrangementet",
    features: folkejuryFeatures,
    mockup: <FolkejuryMockup />,
  },
];

const Products: React.FC = () => {
  return (
    <section
      id="products"
      className="py-20 bg-navy-950 text-white relative overflow-hidden"
      aria-labelledby="products-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            id="products-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400"
          >
            Våre Produkter
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Egenutviklede løsninger dere kan ta i bruk – ikke bare
            skreddersøm fra bunnen av.
          </p>
        </div>

        <div className="space-y-10">
          {products.map((product) => (
            <article
              key={product.name}
              className="bg-navy-800/50 rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:items-stretch">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6 inline-flex">
                    <span className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
                      Produkt
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                    {product.name}
                  </h3>
                  <p className="text-emerald-400 text-lg font-medium mb-6">
                    {product.tagline}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {product.proof && (
                    <p className="text-sm text-gray-400 mb-8">{product.proof}</p>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center"
                    >
                      {product.demoLabel}
                      <ArrowRight
                        size={18}
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </a>
                    <a
                      href="#contact"
                      className="group bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center border border-white/10 hover:border-white/20"
                    >
                      {product.ctaLabel}
                    </a>
                  </div>
                </div>

                <div
                  className="relative bg-navy-900/60 p-8 md:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10"
                  aria-hidden="true"
                >
                  {product.mockup}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
                {product.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-navy-950/80 p-6 hover:bg-navy-900/80 transition-colors"
                  >
                    <div className="p-2 bg-emerald-500/10 rounded-lg w-fit mb-3 text-emerald-400">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
