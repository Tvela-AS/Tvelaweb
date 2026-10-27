import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Network,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { divisionList, type DivisionId } from "../lib/divisions";
import { pageSeo, setPageSeo } from "../lib/seo";

const icons: Record<DivisionId, LucideIcon> = {
  utvikling: Code2,
  sikkerhet: Shield,
  nettverk: Network,
  konsulent: Briefcase,
};

const ctaLabels: Record<DivisionId, string> = {
  utvikling: "Gå til utvikling",
  sikkerhet: "Gå til sikkerhet",
  nettverk: "Gå til nettverk",
  konsulent: "Gå til konsulent",
};

const Portal: React.FC = () => {
  useEffect(() => {
    setPageSeo(pageSeo.portal);
  }, []);

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.03] bg-[length:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between">
          <Link to="/" className="inline-block" aria-label="Tvela AS">
            <img
              src="/img/logo-nobackground-5000.png"
              alt="Tvela AS"
              width={200}
              height={67}
              className="h-auto w-44 sm:w-52"
            />
          </Link>
          <a
            href="mailto:hei@tvela.no"
            className="text-sm text-gray-300 transition-colors hover:text-emerald-400"
          >
            hei@tvela.no
          </a>
        </header>

        <main className="flex flex-1 flex-col justify-center py-12 sm:py-16">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400/90">
              Din IT-partner
            </p>
            <h1 className="mb-5 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Utvikling · Nettverk · Sikkerhet · Konsulent
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
              Tvela AS er et IT-selskap i Fagernes. Vi leverer systemutvikling,
              webutvikling, innhold, nettverk, IT-sikkerhet og konsulentbistand
              til bedrifter i hele Norge. Velg divisjon nedenfor.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {divisionList.map((division) => {
              const Icon = icons[division.id];
              return (
                <Link
                  key={division.id}
                  to={division.path}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-900/80 ${division.portalHoverBorder}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${division.portalGlow} via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div
                      className={`mb-6 inline-flex rounded-xl border p-3 ${division.portalIconBorder} ${division.portalIconBg}`}
                    >
                      <Icon size={28} aria-hidden="true" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                      {division.title}
                    </h2>
                    <p className="mb-8 max-w-md leading-relaxed text-gray-300">
                      {division.blurb}
                    </p>
                    <span
                      className={`inline-flex items-center font-medium ${division.portalCta}`}
                    >
                      {ctaLabels[division.id]}
                      <ArrowRight
                        size={18}
                        className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>

        <footer className="border-t border-white/10 pt-6 text-sm text-gray-400">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Tvela AS · Org.nr. 931 018 701</p>
            <p>Valdresvegen 6, 2900 Fagernes · +47 959 61 415</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portal;
