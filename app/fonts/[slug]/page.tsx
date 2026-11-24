import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FontPreview } from "@/components/FontPreview";
import { findFontStudy, fontStudies } from "@/lib/fonts";

type FontPreviewPageProps = {
  params: Promise<{ slug: string }>;
};

// These pages are a client review tool, not a navigation-critical surface.
export const instant = false;

export function generateStaticParams() {
  return fontStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: FontPreviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = findFontStudy(slug);

  if (!study) {
    return { title: "Type study not found" };
  }

  return {
    title: study.name,
    description: `${study.name} set on the Magadha Vana landing page. ${
      study.availability === "web"
        ? "Exact web font."
        : `Closest open match: ${study.renderedWith}.`
    }`,
  };
}

export default async function FontPreviewPage({
  params,
}: FontPreviewPageProps) {
  const { slug } = await params;
  const study = findFontStudy(slug);

  if (!study) notFound();

  return <FontPreview studies={fontStudies} initialSlug={study.slug} />;
}
