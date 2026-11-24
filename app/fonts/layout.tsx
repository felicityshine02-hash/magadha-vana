import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import {
  Cinzel,
  Cinzel_Decorative,
  Comfortaa,
  Cormorant_Garamond,
  Forum,
  Jost,
  League_Spartan,
  Marcellus,
  MuseoModerno,
  Poiret_One,
  Prata,
  Quicksand,
  Space_Grotesk,
} from "next/font/google";
import "./fonts.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  variable: "--font-museo-moderno",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
});

const prata = Prata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prata",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-forum",
  display: "swap",
});

const poiretOne = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiret-one",
  display: "swap",
});

const glacialIndifference = localFont({
  src: [
    {
      path: "../../public/fonts/glacial-indifference/GlacialIndifference-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/glacial-indifference/GlacialIndifference-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/glacial-indifference/GlacialIndifference-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/glacial-indifference/GlacialIndifference-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-glacial-indifference",
  display: "swap",
});

const fontVariables = [
  quicksand.variable,
  museoModerno.variable,
  cinzel.variable,
  cinzelDecorative.variable,
  cormorantGaramond.variable,
  leagueSpartan.variable,
  jost.variable,
  marcellus.variable,
  comfortaa.variable,
  prata.variable,
  spaceGrotesk.variable,
  forum.variable,
  poiretOne.variable,
  glacialIndifference.variable,
].join(" ");

export const metadata: Metadata = {
  title: {
    default: "Type Studies — Magadha Vana",
    template: "%s · Type Studies — Magadha Vana",
  },
  description:
    "A client preview of fourteen typefaces set on the Magadha Vana landing page — seven web-ready, seven shown in the closest open match.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FontLabLayout({ children }: { children: ReactNode }) {
  return <div className={`font-lab ${fontVariables}`}>{children}</div>;
}
