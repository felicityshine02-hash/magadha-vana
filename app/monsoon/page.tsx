import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Magadha Vana — Monsoon Fern palette",
  description:
    "The Monsoon Fern palette: monsoon teal, mist and coral. Shop farm-grown cacao and explore 150+ bird species at Magadha Vana.",
};

export default function MonsoonPage() {
  return <LandingPage theme="monsoon" />;
}
