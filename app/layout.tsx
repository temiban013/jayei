import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "JAYEI - Junte de Artistas y Escritores Internacionales",
    template: "%s | JAYEI",
  },
  description:
    "Comunidad vibrante de poetas, escritores y artistas del Caribe. Únete a nosotros en Puerto Rico y República Dominicana.",
  metadataBase: new URL("https://jayei.org"),
  keywords: [
    "poesía",
    "escritores",
    "artistas",
    "Puerto Rico",
    "República Dominicana",
    "literatura",
    "arte",
    "Caribe",
    "comunidad literaria",
    "escritores caribeños",
    "poetas latinos",
    "cultura latina",
  ],
  authors: [{ name: "JAYEI", url: "https://jayei.org" }],
  creator: "JAYEI",
  publisher: "JAYEI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JAYEI - Junte de Artistas y Escritores Internacionales",
    description:
      "Comunidad vibrante de poetas, escritores y artistas del Caribe.",
    url: "https://jayei.org",
    siteName: "JAYEI",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/jayei-logo.jpg",
        width: 1200,
        height: 630,
        alt: "JAYEI - Junte de Artistas y Escritores Internacionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAYEI - Junte de Artistas y Escritores Internacionales",
    description:
      "Comunidad vibrante de poetas, escritores y artistas del Caribe.",
    images: ["/images/jayei-logo.jpg"],
    creator: "@jayei_org",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other search engine verifications as needed
  },
  category: "arts and literature",
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
      </body>
    </html>
  );
}
