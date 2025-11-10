import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  title: "Forgevine - Forging the future of Web3",
  description: "At Forgevine, we forge the critical infrastructure for the decentralized future. Like a vine, our projects are interconnected, sharing strength and resources to grow in new directions.",
  keywords: ["Web3", "blockchain", "decentralized", "infrastructure", "Forgevine"],
  authors: [{ name: "Forgevine" }],
  openGraph: {
    title: "Forgevine - Forging the future of Web3",
    description: "At Forgevine, we forge the critical infrastructure for the decentralized future.",
    url: "https://forgevine.com",
    siteName: "Forgevine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forgevine - Forging the future of Web3",
    description: "At Forgevine, we forge the critical infrastructure for the decentralized future.",
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
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
