import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { TrackedPageView } from "@/components/TrackedPageView";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://forgevine.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Forgevine - A Web3 dev shop that works in the shadow",
  description:
    "Forgevine is a quiet Web3 development shop. We build smart contracts, dApps, and infrastructure for small teams under NDA, and keep our clients' work private.",
  keywords: [
    "Web3",
    "blockchain",
    "dev shop",
    "smart contracts",
    "dApp development",
    "infrastructure",
    "Forgevine",
  ],
  authors: [{ name: "Forgevine" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Forgevine - A Web3 dev shop that works in the shadow",
    description:
      "We build smart contracts, dApps, and infrastructure under NDA. No public portfolio, by design.",
    url: siteUrl,
    siteName: "Forgevine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forgevine - A Web3 dev shop that works in the shadow",
    description:
      "We build smart contracts, dApps, and infrastructure under NDA. No public portfolio, by design.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Forgevine",
  url: siteUrl,
  logo: `${siteUrl}/apple-icon.png`,
  image: `${siteUrl}/opengraph-image.png`,
  description:
    "Forgevine is a quiet Web3 development shop. We build smart contracts, dApps, and blockchain infrastructure for small teams under NDA, and keep our clients' work private.",
  areaServed: "Worldwide",
  knowsAbout: [
    "Smart contract development",
    "Decentralized application development",
    "Web3 consulting",
    "Blockchain infrastructure",
  ],
  sameAs: [
    "https://github.com/Forgevine",
    "https://twitter.com/forgevine",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
            <TrackedPageView />
          </>
        )}
      </body>
    </html>
  );
}
