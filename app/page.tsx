import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Magadha Vana — Farm-grown cacao & a forest stay",
  description:
    "Shop small-batch cacao trail mixes, farm pantry staples and wild honey from a biodiversity food forest in Hebri, Udupi. Farmstay opening December 2026.",
};

export default function HomePage() {
  return <LandingPage theme="canopy" />;
}
