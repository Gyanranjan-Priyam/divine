import { Metadata } from "next";
import NavbarDHSS from "./_components/NavbarDHSS";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: {
    default: "Divine Higher Secondary School | Best +2 School in Nayagarh, Odisha",
    template: "%s | Divine Higher Secondary School, Nayagarh",
  },
  description:
    "Divine Higher Secondary School (DHSS), Nayagarh - Leading +2 Science, Arts & Commerce school in Odisha. Affiliated to CHSE. SAMS Code: 24075102. Quality education with experienced faculty, modern facilities, and excellent results. Admissions Open 2025-26.",
  keywords: [
    "Divine Higher Secondary School",
    "DHSS Nayagarh",
    "Best +2 School Nayagarh",
    "Top Higher Secondary School Odisha",
    "+2 Science Nayagarh",
    "+2 Arts Nayagarh", 
    "+2 Commerce Nayagarh",
    "CHSE Odisha School",
    "SAMS Code 24075102",
    "Higher Secondary Education Nayagarh",
    "Best School Nayagarh",
    "Divine Group of Institutions",
    "HSS Nayagarh",
    "Junior College Nayagarh",
  ],
  authors: [{ name: "Divine Higher Secondary School" }],
  creator: "Divine Group of Institutions",
  publisher: "Divine Higher Secondary School",
  openGraph: {
    title: "Divine Higher Secondary School | Best +2 School in Nayagarh",
    description:
      "Premier +2 Higher Secondary School offering Science, Arts & Commerce streams in Nayagarh, Odisha. Affiliated to CHSE. Admissions Open 2025-26.",
    url: "https://divineinstitutions.edu.in/dhss",
    siteName: "Divine Higher Secondary School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image-1200.png",
        width: 1200,
        height: 1200,
        alt: "Divine Higher Secondary School - Nayagarh, Odisha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Higher Secondary School | Best +2 School in Nayagarh",
    description:
      "Premier +2 Higher Secondary School in Nayagarh, Odisha. Science, Arts & Commerce streams. CHSE affiliated.",
    images: ["/og-image-1200.png"],
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
    canonical: "https://divineinstitutions.edu.in/dhss",
  },
};

export default function DHSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarDHSS />
      <main>{children}</main>
      <Footer />
    </>
  );
}