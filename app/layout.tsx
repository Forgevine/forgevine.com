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

export const metadata: Metadata = {
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
  openGraph: {
    title: "Forgevine - A Web3 dev shop that works in the shadow",
    description:
      "We build smart contracts, dApps, and infrastructure under NDA. No public portfolio, by design.",
    url: "https://forgevine.com",
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
