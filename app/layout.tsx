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
    default: "Apex Motors — премиальный автосервис в Москве",
    template: "%s | Apex Motors"
  },
  description: siteConfig.description,
  keywords: [
    "автосервис Москва",
    "ремонт автомобиля",
    "диагностика авто",
    "замена масла",
    "ремонт двигателя",
    "премиальная автомастерская"
  ],
  authors: [{ name: "Apex Motors" }],
  creator: "Apex Motors",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: siteConfig.name,
    title: "Apex Motors — премиальный автосервис в Москве",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Apex Motors — премиальный автосервис"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Motors — премиальный автосервис в Москве",
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
    <html lang="ru" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
