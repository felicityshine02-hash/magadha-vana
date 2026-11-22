import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Magadha Vana — Cacao Grove palette",
  description:
    "The Cacao Grove palette: roasted cacao, terracotta and date-sugar cream. Shop farm-grown cacao and plan a Western Ghats farmstay.",
};

export default function CacaoPage() {
  return <LandingPage theme="cacao" />;
}
