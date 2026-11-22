import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Magadha Vana — Wild Honey palette",
  description:
    "The Wild Honey palette: charcoal olive, amber and cream. Shop wild forest honey and small-batch cacao from the Western Ghats.",
};

export default function HoneyPage() {
  return <LandingPage theme="honey" />;
}
