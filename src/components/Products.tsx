import React from "react";
import {
  ArrowRight,
  BarChart3,
  Download,
  Gift,
  Lock,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
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

const Products: React.FC = () => {
  return (
    <section
      id="products"
      className="py-20 bg-navy-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400">
            Våre Produkter
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Egenutviklede løsninger dere kan ta i bruk – ikke bare
            skreddersøm fra bunnen av.
          </p>
        </div>

        <article className="bg-navy-800/50 rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:items-stretch">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6 inline-flex">
                <span className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
                  Produkt
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                Folkejury
              </h3>
              <p className="text-emerald-400 text-lg font-medium mb-6">
                Avstemning som tåler folkemengden.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Et ferdig avstemningssystem for festivaler, foreninger og
                arrangementer. Publikum stemmer på favoritten sin på sekunder.
                Dere styrer avstemninger, ser resultatene live og eksporterer
                når kåringen er over.
              </p>

              <p className="text-sm text-gray-400 mb-8">
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
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://vote-app-self.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center"
                >
                  Se live demo
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </a>
                <a
                  href="#contact"
                  className="group bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center border border-white/10 hover:border-white/20"
                >
                  Bestill til arrangementet
                </a>
              </div>
            </div>

            <div className="relative bg-navy-900/60 p-8 md:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-900">
                <div className="px-5 pt-6 pb-4 text-center border-b border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                    Folkejury
                  </p>
                  <p className="text-lg font-bold">Beste kaffe</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Én stemme per avstemning
                  </p>
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
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {features.map((feature) => (
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
      </div>
    </section>
  );
};

export default Products;
