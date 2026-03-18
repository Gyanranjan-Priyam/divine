import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
    "Divine College Nayagarh",
    "Divine School Nayagarh",
    "Divine Nayagarh",
    "Divine Institutions",
    "Padhi Tutorial",
    "Nayagarh College",
    "Nayagarh Best Science College",
    "Nayagarh Top College",
    "Nayagarh +2 School",
    "Nayagarh Higher Secondary School",
    "Nayagarh Degree College",
    "Nayagarh Educational Institutions",
    "SAMS Odisha Colleges",
    "CHSE Odisha Schools",
    "UGC Recognized Colleges Odisha",
    "Best College in Nayagarh",
    "Best +2 School in Nayagarh",
    "Best Degree College in Nayagarh",
    "Science College in Nayagarh",
    "Arts College in Nayagarh",
    "DHSS Nayagarh",
    "DDC Lenkudipada",
    "Best College Nayagarh",
    "Best +2 School Nayagarh",
    "College in Odisha",
    "Higher Secondary School Odisha",
    "Science College Nayagarh",
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
    url: "https://divinengrh.com",
    siteName: "Divine Group of Institutions",
    title: "Divine Group of Institutions | Best College in Nayagarh, Odisha",
    description:
      "Premier educational institution in Nayagarh, Odisha offering quality education through Divine Higher Secondary School (+2) and Divine Degree College (UG). SAMS Odisha affiliated.",
    images: [
      {
        url: "/og-image-1200.png",
        width: 1200,
        height: 1200,
        alt: "Divine Group of Institutions - Nayagarh, Odisha - Established 2013",
        type: "image/png",
      },
      {
        url: "/og-image-social.png",
        width: 1200,
        height: 630,
        alt: "Divine Group of Institutions Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Group of Institutions | Best College in Nayagarh, Odisha",
    description:
      "Premier educational institution in Nayagarh, Odisha offering quality education through Divine Higher Secondary School and Divine Degree College.",
    images: ["/og-image-1200.png"],
    creator: "@divineNayagarh",
    site: "@divineNayagarh",
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
    canonical: "https://divinengrh.com",
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
        <link rel="canonical" href="https://divinengrh.com" />
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
              url: "https://divinengrh.com",
              logo: {
                "@type": "ImageObject",
                url: "https://divinengrh.com/og-image-1200.png",
                width: 1200,
                height: 1200,
              },
              image: "https://divinengrh.com/og-image-1200.png",
              description:
                "Divine Group of Institutions is a premier educational institution in Nayagarh, Odisha, comprising Divine Higher Secondary School and Divine Degree College.",
              foundingDate: "2013",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Maa Bhuyani Road, Gotisahi",
                addressLocality: "Nayagarh",
                addressRegion: "Odisha",
                postalCode: "752070",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9090172721",
                contactType: "admissions",
                email: "divine.ngrh@gmail.com",
                availableLanguage: ["English", "Hindi", "Odia"],
              },
              sameAs: [
                "https://facebook.com/divine.ngrh",
                "https://instagram.com/divine.ngrh",
                "https://youtube.com/@divinenayagarh",
              ],
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
        {children}
      </body>
    </html>
  );
}