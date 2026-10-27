export type DivisionId =
  | "utvikling"
  | "sikkerhet"
  | "nettverk"
  | "konsulent";

export type DivisionTheme = {
  id: DivisionId;
  label: string;
  path: string;
  title: string;
  blurb: string;
  accentText: string;
  accentIcon: string;
  accentHover: string;
  accentLink: string;
  accentBorder: string;
  accentVia: string;
  accentFocus: string;
  accentOpen: string;
  badgeBorder: string;
  ctaClass: string;
  skipClass: string;
  portalHoverBorder: string;
  portalGlow: string;
  portalIconBorder: string;
  portalIconBg: string;
  portalCta: string;
};

export const divisions: Record<DivisionId, DivisionTheme> = {
  utvikling: {
    id: "utvikling",
    label: "Utvikling",
    path: "/utvikling",
    title: "Tvela Utvikling",
    blurb:
      "Systemutvikling, webutvikling, apper, innhold (foto, video, design) og innholdshåndtering – fra idé til drift.",
    accentText: "text-emerald-400",
    accentIcon: "text-emerald-400",
    accentHover: "hover:text-emerald-400",
    accentLink: "text-emerald-400 hover:text-emerald-300",
    accentBorder: "border-emerald-500/30",
    accentVia: "via-emerald-500/50",
    accentFocus: "focus:ring-emerald-500",
    accentOpen: "open:border-emerald-500/40",
    badgeBorder: "border-emerald-500/30 text-emerald-400",
    ctaClass: "bg-emerald-500 hover:bg-emerald-600 text-white",
    skipClass: "bg-emerald-500 text-white",
    portalHoverBorder: "hover:border-emerald-500/50",
    portalGlow: "from-emerald-500/10",
    portalIconBorder: "border-emerald-500/20",
    portalIconBg: "bg-emerald-500/10 text-emerald-400",
    portalCta: "text-emerald-400",
  },
  sikkerhet: {
    id: "sikkerhet",
    label: "Sikkerhet",
    path: "/sikkerhet",
    title: "Tvela Sikkerhet",
    blurb:
      "IT-sikkerhet, digital gransking og privatetterforskning – diskret og innenfor loven.",
    accentText: "text-amber-300",
    accentIcon: "text-amber-400",
    accentHover: "hover:text-amber-300",
    accentLink: "text-amber-300 hover:text-amber-200",
    accentBorder: "border-amber-400/30",
    accentVia: "via-amber-400/50",
    accentFocus: "focus:ring-amber-500",
    accentOpen: "open:border-amber-400/40",
    badgeBorder: "border-amber-400/30 text-amber-300",
    ctaClass: "bg-amber-500 hover:bg-amber-400 text-navy-950",
    skipClass: "bg-amber-500 text-navy-950",
    portalHoverBorder: "hover:border-amber-400/40",
    portalGlow: "from-amber-500/10",
    portalIconBorder: "border-amber-400/20",
    portalIconBg: "bg-amber-500/10 text-amber-300",
    portalCta: "text-amber-300",
  },
  nettverk: {
    id: "nettverk",
    label: "Nettverk",
    path: "/nettverk",
    title: "Tvela Nettverk",
    blurb:
      "Nettverk, trådløst, brannmur og infrastruktur som holder bedriften oppe – planlagt, levert og driftet.",
    accentText: "text-sky-300",
    accentIcon: "text-sky-400",
    accentHover: "hover:text-sky-300",
    accentLink: "text-sky-300 hover:text-sky-200",
    accentBorder: "border-sky-400/30",
    accentVia: "via-sky-400/50",
    accentFocus: "focus:ring-sky-500",
    accentOpen: "open:border-sky-400/40",
    badgeBorder: "border-sky-400/30 text-sky-300",
    ctaClass: "bg-sky-500 hover:bg-sky-400 text-navy-950",
    skipClass: "bg-sky-500 text-navy-950",
    portalHoverBorder: "hover:border-sky-400/40",
    portalGlow: "from-sky-500/10",
    portalIconBorder: "border-sky-400/20",
    portalIconBg: "bg-sky-500/10 text-sky-300",
    portalCta: "text-sky-300",
  },
  konsulent: {
    id: "konsulent",
    label: "Konsulent",
    path: "/konsulent",
    title: "Tvela Konsulent",
    blurb:
      "IT-rådgivning, prosjektbistand og kompetanse inn i virksomheten – når dere trenger sparring eller ekstra kapasitet.",
    accentText: "text-violet-300",
    accentIcon: "text-violet-400",
    accentHover: "hover:text-violet-300",
    accentLink: "text-violet-300 hover:text-violet-200",
    accentBorder: "border-violet-400/30",
    accentVia: "via-violet-400/50",
    accentFocus: "focus:ring-violet-500",
    accentOpen: "open:border-violet-400/40",
    badgeBorder: "border-violet-400/30 text-violet-300",
    ctaClass: "bg-violet-500 hover:bg-violet-400 text-white",
    skipClass: "bg-violet-500 text-white",
    portalHoverBorder: "hover:border-violet-400/40",
    portalGlow: "from-violet-500/10",
    portalIconBorder: "border-violet-400/20",
    portalIconBg: "bg-violet-500/10 text-violet-300",
    portalCta: "text-violet-300",
  },
};

export const divisionList = Object.values(divisions);

export const serviceLinksByDivision: Record<
  DivisionId,
  { href: string; label: string }[]
> = {
  utvikling: [
    { href: "#webutvikling", label: "Webutvikling" },
    { href: "#systemutvikling", label: "Systemutvikling" },
    { href: "#fullstack", label: "Fullstack utvikling" },
    { href: "#apputvikling", label: "Apputvikling" },
    { href: "#innhold", label: "Innholdsproduksjon" },
    { href: "#innholdshandtering", label: "Innholdshåndtering" },
    { href: "#products", label: "Produkter" },
  ],
  sikkerhet: [
    { href: "#services", label: "IT-sikkerhet" },
    { href: "#services", label: "Ethical hacking" },
    { href: "#services", label: "Digital gransking" },
    { href: "#services", label: "Privatetterforskning" },
  ],
  nettverk: [
    { href: "#services", label: "Bedriftsnettverk" },
    { href: "#services", label: "Trådløst Wi-Fi" },
    { href: "#services", label: "Brannmur og sikkerhet" },
    { href: "#services", label: "Drift og overvåking" },
  ],
  konsulent: [
    { href: "#services", label: "IT-rådgivning" },
    { href: "#services", label: "Prosjektbistand" },
    { href: "#services", label: "Digitalisering" },
    { href: "#services", label: "Interim og kapasitet" },
  ],
};
