import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import "./sections.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magadha Vana — Farm-grown cacao & a forest stay",
  description:
    "A biodiversity food forest in the foothills of the Western Ghats. Shop 70+ farm-grown products, join the December 2026 farmstay waitlist and explore 150+ bird species.",
  keywords: [
    "Magadha Vana",
    "farm stay Karnataka",
    "Western Ghats farmstay",
    "cacao trail mix",
    "forest honey",
    "bird watching Udupi",
    "organic farm shop India",
  ],
  openGraph: {
    title: "Magadha Vana — A food forest, not a factory",
    description:
      "Farm-grown cacao, pantry staples and wild honey from Hebri, Udupi. A small nature stay opening December 2026.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071b12",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
