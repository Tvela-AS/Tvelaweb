import React from "react";

const Insights: React.FC = () => {
  const articles = [
    {
      title:
        "Når kunstig intelligens finner sårbarhetene før angriperne gjør det",
      category: "Artikler",
      date: "21. november 2025",
      author: "Tvela Cyber",
    },
    {
      title:
        "Hvordan vekstselskaper bygger tillit hos neste investor gjennom god sikkerhet",
      category: "Artikler",
      date: "21. november 2025",
      author: "Tvela Cyber",
    },
    {
      title:
        "Slik bygger du sikkerhet fra dag én i startups og scaleups",
      category: "Artikler",
      date: "20. november 2025",
      author: "Tvela Cyber",
    },
    {
      title:
        "Hvorfor privilegerte kontoer er en av dine største skjulte risikoer",
      category: "Artikler",
      date: "20. november 2025",
      author: "Tvela Cyber",
    },
  ];

  return (
    <section
      id="insights"
      className="py-section lg:py-section-lg bg-navy-950 text-white relative overflow-hidden"
      aria-labelledby="insights-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-section-label font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
            Artikler
          </p>
          <h2
            id="insights-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Siste fra Tvela
          </h2>
          <p className="text-gray-300/90 text-lg leading-relaxed">
            Innsikt, refleksjoner og praktiske råd om moderne cybersikkerhet,
            risiko og teknologi i virksomheten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white/[0.04] rounded-2xl border border-white/10 hover:border-emerald-500/20 hover:bg-white/[0.06] transition-all duration-300 p-8 flex flex-col"
            >
              <p className="text-section-label font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
                {article.category}
              </p>
              <h3 className="text-lg font-semibold text-white mb-4 leading-snug tracking-tight">
                {article.title}
              </h3>
              <p className="text-sm text-gray-400 mt-auto leading-relaxed">
                {article.date} · {article.author}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 lg:mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/15 text-sm font-medium text-gray-100 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors">
            Les flere artikler
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;

