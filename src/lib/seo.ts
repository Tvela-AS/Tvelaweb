export type PageSeo = {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
};

const SITE_ORIGIN = "https://www.tvela.no";
const DEFAULT_IMAGE = `${SITE_ORIGIN}/img/logo-nobackground-5000.png`;

export const pageSeo = {
  portal: {
    title: "Tvela AS | Utvikling, nettverk, sikkerhet og konsulent",
    description:
      "Tvela AS er et IT-selskap i Fagernes som leverer systemutvikling, webutvikling, innhold, nettverk, IT-sikkerhet og konsulentbistand til bedrifter i hele Norge.",
    path: "/",
    imageAlt: "Tvela AS – utvikling, nettverk, sikkerhet og konsulent",
  },
  utvikling: {
    title: "Tvela Utvikling | Systemutvikling, web, innhold og apper",
    description:
      "Tvela Utvikling leverer systemutvikling, webutvikling, apputvikling, innholdsproduksjon (foto, video, design) og innholdshåndtering. Kontor i Fagernes, kunder i hele Norge.",
    path: "/utvikling",
    imageAlt: "Tvela Utvikling – systemutvikling, web og innhold",
  },
  nettverk: {
    title: "Tvela Nettverk | Bedriftsnett, Wi-Fi og infrastruktur",
    description:
      "Tvela Nettverk planlegger, leverer og drifter bedriftsnettverk, trådløst Wi-Fi, brannmur og infrastruktur for virksomheter i Valdres og hele Norge.",
    path: "/nettverk",
    imageAlt: "Tvela Nettverk – infrastruktur og trådløst",
  },
  sikkerhet: {
    title: "Tvela Sikkerhet | IT-sikkerhet, testing og gransking",
    description:
      "Tvela Sikkerhet bistår med IT-sikkerhet, autorisert inntrengingstesting, digital gransking og lovlig privatetterforskning. Diskret bistand fra Fagernes.",
    path: "/sikkerhet",
    imageAlt: "Tvela Sikkerhet – IT-sikkerhet og gransking",
  },
  konsulent: {
    title: "Tvela Konsulent | IT-rådgivning og prosjektbistand",
    description:
      "Tvela Konsulent leverer IT-rådgivning, prosjektbistand, digitalisering og interim kapasitet. Kompetanse inn i virksomheten når dere trenger retning eller ekstra hender.",
    path: "/konsulent",
    imageAlt: "Tvela Konsulent – IT-rådgivning og prosjektbistand",
  },
} as const satisfies Record<string, PageSeo>;

function upsertMeta(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function setPageSeo(seo: PageSeo) {
  const url = `${SITE_ORIGIN}${seo.path === "/" ? "/" : seo.path}`;
  const imageAlt = seo.imageAlt ?? "Tvela AS";

  document.title = seo.title;
  upsertMeta('meta[name="description"]', "name", "description", seo.description);
  upsertCanonical(url);

  upsertMeta('meta[property="og:title"]', "property", "og:title", seo.title);
  upsertMeta(
    'meta[property="og:description"]',
    "property",
    "og:description",
    seo.description
  );
  upsertMeta('meta[property="og:url"]', "property", "og:url", url);
  upsertMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);
  upsertMeta('meta[property="og:image:alt"]', "property", "og:image:alt", imageAlt);

  upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
  upsertMeta(
    'meta[name="twitter:description"]',
    "name",
    "twitter:description",
    seo.description
  );
  upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", DEFAULT_IMAGE);

  window.scrollTo(0, 0);
}
