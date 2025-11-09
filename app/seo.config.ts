import { Metadata } from "next";

const siteUrl = "https://stranger-things-countdown.vercel.app";
const siteName = "Stranger Things 5 Countdown";
const siteDescription =
  "Cuenta regresiva para el estreno de Stranger Things Temporada 5. Disfruta de trailers exclusivos, trivia interactiva y contenido sobre la temporada final de la serie más esperada de Netflix.";

const seoKeywords = [
  "stranger things 5",
  "stranger things temporada 5",
  "stranger things countdown",
  "cuenta regresiva stranger things",
  "estreno stranger things 5",
  "temporada final stranger things",
  "netflix stranger things",
  "stranger things trivia",
  "stranger things trailer",
  "stranger things 2025",
  "stranger things season 5",
  "upside down",
  "hawkins",
  "eleven",
  "vecna",
];

export const seoConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: seoKeywords,
  authors: [
    {
      name: "Federico Arias",
      url: "https://github.com/FedeCodeLab",
    },
  ],
  creator: "Federico Arias",
  publisher: "FedeCodeLab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Stranger Things 5 Countdown - Temporada Final",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@FedeCodeLab",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-ES": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
  category: "entertainment",
  classification: "Entertainment, TV Series, Countdown",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteName,
  },
};

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  inLanguage: "es",
  publisher: {
    "@type": "Person",
    name: "Federico Arias",
    url: "https://github.com/FedeCodeLab",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  about: {
    "@type": "TVSeries",
    name: "Stranger Things",
    numberOfSeasons: 5,
    genre: ["Science Fiction", "Horror", "Drama"],
    creator: {
      "@type": "Organization",
      name: "Netflix",
    },
  },
};
