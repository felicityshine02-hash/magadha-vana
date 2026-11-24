export type FontStudy = {
  slug: string;
  name: string;
  renderedWith: string;
  availability: "web" | "match";
  category: "Serif" | "Sans" | "Display";
  classification: string;
  blurb: string;
  displayVar: string;
  bodyVar: string;
  displayWeight: number;
  tracking: string;
  specimen: string;
};

/**
 * The Canva shortlist, mapped to what can actually render in a browser.
 *
 * "web" means the exact family is available as an open web font.
 * "match" means the Canva face is proprietary or not licensed for web
 * embedding, so the study uses the closest open face and labels it clearly.
 */
export const fontStudies: FontStudy[] = [
  {
    slug: "cotoris",
    name: "Cotoris",
    renderedWith: "Marcellus",
    availability: "match",
    category: "Serif",
    classification: "Glyphic sans",
    blurb:
      "Calligraphic, high-contrast and quietly ceremonial. Best when a headline needs to feel like a crest.",
    displayVar: "--font-marcellus",
    bodyVar: "--font-manrope",
    displayWeight: 400,
    tracking: "-0.01em",
    specimen: "Grown slowly. Kept carefully.",
  },
  {
    slug: "futura",
    name: "Futura",
    renderedWith: "Jost",
    availability: "match",
    category: "Sans",
    classification: "Geometric sans",
    blurb:
      "The original modern geometry. Efficient, optimistic and quietly expensive.",
    displayVar: "--font-jost",
    bodyVar: "--font-jost",
    displayWeight: 500,
    tracking: "-0.02em",
    specimen: "A food forest, not a factory.",
  },
  {
    slug: "quicksand",
    name: "Quicksand",
    renderedWith: "Quicksand",
    availability: "web",
    category: "Sans",
    classification: "Rounded geometric sans",
    blurb:
      "Rounded, warm and friendly. It softens the forest without turning it childish.",
    displayVar: "--font-quicksand",
    bodyVar: "--font-quicksand",
    displayWeight: 600,
    tracking: "-0.02em",
    specimen: "Good things, grown softly.",
  },
  {
    slug: "museo-moderno",
    name: "Museo Moderno",
    renderedWith: "Museo Moderno",
    availability: "web",
    category: "Sans",
    classification: "Geometric display sans",
    blurb:
      "Playful geometry with a museum-poster confidence. Distinctive without being loud.",
    displayVar: "--font-museo-moderno",
    bodyVar: "--font-museo-moderno",
    displayWeight: 600,
    tracking: "-0.03em",
    specimen: "A museum of small harvests.",
  },
  {
    slug: "itc-bauhaus",
    name: "ITC Bauhaus",
    renderedWith: "Comfortaa",
    availability: "match",
    category: "Sans",
    classification: "Rounded geometric sans",
    blurb:
      "Bauhaus bones, soft corners. Friendly, retro and unmistakably designed.",
    displayVar: "--font-comfortaa",
    bodyVar: "--font-manrope",
    displayWeight: 600,
    tracking: "-0.01em",
    specimen: "Built on roots, not rules.",
  },
  {
    slug: "cinzel-decorative",
    name: "Cinzel Decorative",
    renderedWith: "Cinzel Decorative",
    availability: "web",
    category: "Display",
    classification: "Decorative Roman",
    blurb:
      "Engraved caps with a flourish. For seals, labels and very short headlines.",
    displayVar: "--font-cinzel-decorative",
    bodyVar: "--font-cormorant-garamond",
    displayWeight: 700,
    tracking: "0.01em",
    specimen: "Est. 2018 · Hebri",
  },
  {
    slug: "cinzel",
    name: "Cinzel",
    renderedWith: "Cinzel",
    availability: "web",
    category: "Serif",
    classification: "Roman inscriptional",
    blurb:
      "Roman inscriptional lettering — carved, classical and unhurried. Best in caps.",
    displayVar: "--font-cinzel",
    bodyVar: "--font-cormorant-garamond",
    displayWeight: 600,
    tracking: "0.01em",
    specimen: "A forest, in capitals.",
  },
  {
    slug: "the-seasons",
    name: "The Seasons",
    renderedWith: "Prata",
    availability: "match",
    category: "Serif",
    classification: "High-contrast serif",
    blurb:
      "Vintage-chic serif with dramatic curves. Luxury that doesn't need to shout.",
    displayVar: "--font-prata",
    bodyVar: "--font-cormorant-garamond",
    displayWeight: 400,
    tracking: "-0.02em",
    specimen: "Harvest, in high contrast.",
  },
  {
    slug: "cormorant-garamond",
    name: "Cormorant Garamond",
    renderedWith: "Cormorant Garamond",
    availability: "web",
    category: "Serif",
    classification: "Old-style serif",
    blurb:
      "Warm, literary and botanical. The safest kind of beautiful.",
    displayVar: "--font-cormorant-garamond",
    bodyVar: "--font-cormorant-garamond",
    displayWeight: 600,
    tracking: "-0.01em",
    specimen: "A field guide to the forest.",
  },
  {
    slug: "glacial-indifference",
    name: "Glacial Indifference",
    renderedWith: "Glacial Indifference",
    availability: "web",
    category: "Sans",
    classification: "Geometric sans",
    blurb:
      "Cool, Nordic and precise. A clean counterpoint to all that green.",
    displayVar: "--font-glacial-indifference",
    bodyVar: "--font-glacial-indifference",
    displayWeight: 600,
    tracking: "-0.02em",
    specimen: "Cool air. Clear water.",
  },
  {
    slug: "agrandir",
    name: "Agrandir",
    renderedWith: "Space Grotesk",
    availability: "match",
    category: "Sans",
    classification: "Grotesque sans",
    blurb:
      "Wide, confident and a little offbeat. A modern farm, not a rustic one.",
    displayVar: "--font-space-grotesk",
    bodyVar: "--font-space-grotesk",
    displayWeight: 600,
    tracking: "-0.04em",
    specimen: "Modern farm. Wild soul.",
  },
  {
    slug: "league-spartan",
    name: "League Spartan",
    renderedWith: "League Spartan",
    availability: "web",
    category: "Sans",
    classification: "Geometric sans",
    blurb:
      "Bold, athletic and poster-ready. Built for sale banners and big claims.",
    displayVar: "--font-league-spartan",
    bodyVar: "--font-league-spartan",
    displayWeight: 600,
    tracking: "-0.02em",
    specimen: "Bold harvest. Big flavour.",
  },
  {
    slug: "copperplate-gothic",
    name: "Copperplate Gothic 29 BC",
    renderedWith: "Forum",
    availability: "match",
    category: "Serif",
    classification: "Engraved serif",
    blurb:
      "Bank-note authority with tiny serifs. Old-world, exacting, unmistakably engraved.",
    displayVar: "--font-forum",
    bodyVar: "--font-cormorant-garamond",
    displayWeight: 400,
    tracking: "0.02em",
    specimen: "The estate collection.",
  },
  {
    slug: "lovelo",
    name: "Lovelo",
    renderedWith: "Poiret One",
    availability: "match",
    category: "Display",
    classification: "Art-deco display",
    blurb:
      "Slim geometric lines with a deco pulse. Best as a logo or one very big line.",
    displayVar: "--font-poiret-one",
    bodyVar: "--font-manrope",
    displayWeight: 400,
    tracking: "0.03em",
    specimen: "Wild by design.",
  },
];

export function findFontStudy(slug: string) {
  return fontStudies.find((study) => study.slug === slug);
}
