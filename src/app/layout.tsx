import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "zyphora Technologies | AI Training & Placement Institute",
  description:
    "India's most advanced AI training and placement institute. 5000+ students trained, 1200+ placements, 300+ hiring partners. Join zyphora Technologies for career transformation in AI, ML, Deep Learning, and Full Stack Development.",
  keywords: [
    "AI Training Institute Chennai",
    "Placement Training",
    "Best Software Training Institute",
    "Computer Vision Course",
    "Generative AI Course",
    "Full Stack Development Training",
    "Machine Learning Training",
    "AI Placement",
    "Software Internship",
  ],
  openGraph: {
    title: "zyphora Technologies | AI Training & Placement",
    description: "Build Your Future With AI & Innovation",
    type: "website",
    locale: "en_IN",
    siteName: "zyphora Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "zyphora Technologies",
    description: "Build Your Future With AI & Innovation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
