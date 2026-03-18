import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ServiceWorkerRegistration from "@/components/PWAInstaller";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://divinengrh.com"),
  title: {
    default: "Divine Group of Institutions | Best College in Nayagarh, Odisha",
    template: "%s | Divine Group of Institutions",
  },
  description:
    "Divine Group of Institutions, Nayagarh, Odisha - Premier educational institution offering +2 Science, Arts, Commerce and Degree programs. CHSE affiliated Divine Higher Secondary School and UGC recognized Divine Degree College. Admissions open 2025-26.",
  keywords: [
    "Divine Group of Institutions",
    "Divine Degree College",
    "Divine Higher Secondary School",
    "DHSS Nayagarh",
    "DDC Lenkudipada",
    "Best College Nayagarh",
    "Best +2 School Nayagarh",
    "College in Odisha",
    "Higher Secondary School Odisha",
    "Science College Nayagarh",
    "Arts College Nayagarh",
    "Commerce College Nayagarh",
    "CHSE Affiliated School",
    "UGC Recognized College",
    "Admission 2025",
    "Nayagarh Education",
    "Lenkudipada College",
    "Odisha Education",
  ],
  authors: [{ name: "Divine Group of Institutions" }],
  creator: "Divine Group of Institutions",
  publisher: "Divine Group of Institutions",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://divineinstitutions.edu.in",
    siteName: "Divine Group of Institutions",
    title: "Divine Group of Institutions | Best College in Nayagarh, Odisha",
    description:
      "Premier educational institution in Nayagarh, Odisha offering quality education through Divine Higher Secondary School (+2) and Divine Degree College (UG). SAMS Odisha affiliated.",
    images: [
      {
        url: "/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Divine Group of Institutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Group of Institutions | Best College in Nayagarh, Odisha",
    description:
      "Premier educational institution in Nayagarh, Odisha offering quality education through Divine Higher Secondary School and Divine Degree College.",
    images: ["/icons/icon-512x512.png"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Divine Institutions",
  },
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "https://divineinstitutions.edu.in",
  },
  category: "Education",
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#003366",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function MainRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon for all devices */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="canonical" href="https://divineinstitutions.edu.in" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Divine Institutions" />
        <meta name="msapplication-TileColor" content="#003366" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Nayagarh, Odisha" />
        <meta name="geo.position" content="20.1167;85.1000" />
        <meta name="ICBM" content="20.1167, 85.1000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Divine Group of Institutions",
              alternateName: ["DHSS", "DDC", "Divine Institutions"],
              url: "https://divineinstitutions.edu.in",
              logo: "https://divineinstitutions.edu.in/icons/icon-512x512.png",
              description:
                "Divine Group of Institutions is a premier educational institution in Nayagarh, Odisha, comprising Divine Higher Secondary School and Divine Degree College.",
              foundingDate: "2013",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lenkudipada",
                addressLocality: "Nayagarh",
                addressRegion: "Odisha",
                postalCode: "752069",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "admissions",
                availableLanguage: ["English", "Hindi", "Odia"],
              },
              sameAs: [],
              member: [
                {
                  "@type": "EducationalOrganization",
                  name: "Divine Higher Secondary School",
                  description:
                    "CHSE affiliated +2 school offering Science, Arts, and Commerce streams",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Divine Degree College",
                  description:
                    "UGC recognized degree college offering undergraduate programs in Arts, Science, and Commerce",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ServiceWorkerRegistration />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}