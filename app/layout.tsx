import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aleks-Blitz — service auto premium în Chișinău",
    template: "%s | Aleks-Blitz"
  },
  description: siteConfig.description,
  keywords: [
    "service auto Chișinău",
    "reparații auto Moldova",
    "diagnosticare auto",
    "schimb ulei",
    "reparații motor",
    "autoservice premium"
  ],
  authors: [{ name: "Aleks-Blitz" }],
  creator: "Aleks-Blitz",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "ro_MD",
    url: "/",
    siteName: siteConfig.name,
    title: "Aleks-Blitz — service auto premium în Chișinău",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Aleks-Blitz — service auto premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleks-Blitz — service auto premium în Chișinău",
    description: siteConfig.description,
    images: ["/opengraph-image"]
  },
  icons: {
    icon: "/favicon.svg"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro-MD" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
