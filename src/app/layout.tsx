import {Providers} from "@/components";
import {Toaster} from "@/components/ui/sonner";
import "@/styles/globals.css";
import {aeonik, cn, inter} from "@/utils";
import type {Metadata} from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://montanahd.com";
const siteName = "Montana - Tüm Platformlar, Tek Abonelik";
const siteDescription = "Montana ile üst düzey yayın deneyimini, kesintisiz performansı ve gerçek premium kaliteyi keşfedin. Tek üyelikle her ekranda sorunsuz erişim. Tüm platformlar tek abonelikte.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "IPTV",
    "ucuz iptv",
    "canlı TV",
    "film",
    "dizi",
    "Montana",
    "montana iptv",
    "montana müşteri paneli",
    "montana destek",
    "premium yayın",
    "HD kalite",
    "4K",
    "spor kanalları",
    "Netflix",
    "Disney+",
    "Prime Video",
    "Exxen",
    "bein sports",
  ],
  authors: [{name: "Montana"}],
  creator: "Montana",
  publisher: "Montana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/favicon-dark.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-light.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon-light.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/assets/home/hero-2.png`,
        width: 1330,
        height: 480,
        alt: "Montana - Tüm Platformlar, Tek Abonelik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/assets/home/hero-2.png`],
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
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scrollbar scroll-smooth" style={{scrollBehavior: 'smooth'}}>
    <head>
    </head>
    <body
      className={cn(
        "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
        aeonik.variable,
        inter.variable,
      )}
      style={{paddingTop: 0, marginTop: 0, scrollPaddingTop: 0}}
    >
    <Providers>
      <Toaster richColors theme="dark" position="top-right"/>
      {children}
    </Providers>
    </body>
    </html>
  );
};
