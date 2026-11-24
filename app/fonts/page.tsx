import type { Metadata } from "next";
import { FontStudiesIndex } from "@/components/FontStudiesIndex";

export const metadata: Metadata = {
  title: "Type studies",
  description:
    "Fourteen typefaces from the Magadha Vana shortlist, previewed on the same Canopy landing page.",
};

export default function FontStudiesPage() {
  return <FontStudiesIndex />;
}
