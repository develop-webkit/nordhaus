import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "NORDHAUS — Interior Design Studio",
    template: "%s — NORDHAUS",
  },
  description:
    "NORDHAUS is an interior design studio crafting warm, considered spaces across the Nordics — residential, renovation, and commercial interiors.",
  keywords: ["interior design", "studio", "Scandinavian", "residential", "renovation", "architecture"],
  openGraph: {
    title: "NORDHAUS — Interior Design Studio",
    description: "Warm, considered interiors across the Nordics.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
