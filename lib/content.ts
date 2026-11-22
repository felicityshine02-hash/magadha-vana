export type ThemeId = "canopy" | "cacao" | "monsoon" | "honey";

export type Palette = {
  id: ThemeId;
  name: string;
  mood: string;
  description: string;
  route: string;
  swatches: string[];
};

export const palettes: Palette[] = [
  {
    id: "canopy",
    name: "Canopy",
    mood: "Rooted & classic",
    description: "Deep forest green, brass and warm cream — the quiet luxury of an old-growth grove.",
    route: "/",
    swatches: ["#071b12", "#123527", "#8fbf7a", "#e3c178", "#f7f3e8"],
  },
  {
    id: "cacao",
    name: "Cacao Grove",
    mood: "Warm & crafted",
    description: "Roasted cacao, terracotta and date-sugar cream — an editorial nod to the harvest.",
    route: "/cacao",
    swatches: ["#160d08", "#4a2818", "#8b5a3c", "#e08a55", "#f8eee2"],
  },
  {
    id: "monsoon",
    name: "Monsoon Fern",
    mood: "Cool & alive",
    description: "Monsoon teal, mist and a flash of coral — the glassy hush after rain.",
    route: "/monsoon",
    swatches: ["#04161a", "#0d3b40", "#6fd3bc", "#eaa987", "#f2fbf9"],
  },
  {
    id: "honey",
    name: "Wild Honey",
    mood: "Bold & sunny",
    description: "Charcoal olive, amber and cream — sun on a jar of forest honey.",
    route: "/honey",
    swatches: ["#141204", "#3a3612", "#e5b24a", "#9fae5a", "#faf4e2"],
  },
];

export type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  facts: { value: string; label: string }[];
  image: string;
  alt: string;
  tag: string;
  stamp: string;
};

export const slides: Slide[] = [
  {
    id: "forest",
    eyebrow: "Hebri · Udupi · Western Ghats",
    title: "A food forest,",
    emphasis: "not a factory.",
    description:
      "Seventy-plus farm-grown foods from a biodiversity food forest in the foothills of the Western Ghats. Grown slowly, harvested honestly, packed at the farm.",
    primary: { label: "Shop the harvest", href: "#shop" },
    secondary: { label: "Our story", href: "#story" },
    facts: [
      { value: "150+", label: "bird species" },
      { value: "70+", label: "farm products" },
    ],
    image: "/images/forest-stream.jpg",
    alt: "A clear stream running between mossy rocks under a dense green forest canopy",
    tag: "The river at first light",
    stamp: "Est. 2018",
  },
  {
    id: "sale",
    eyebrow: "Cacao harvest sale · this week",
    title: "Slow-cured cacao,",
    emphasis: "up to 25% off.",
    description:
      "Small-batch trail mixes from our single-origin cacao — caramelised with coconut sugar, dates, seeds and nuts. Harvested here, roasted here, packed here.",
    primary: { label: "Shop the cacao sale", href: "#shop" },
    secondary: { label: "Meet the harvest", href: "#shop" },
    facts: [
      { value: "25%", label: "harvest sale" },
      { value: "100%", label: "farm-grown cacao" },
    ],
    image: "/images/cacao-flatlay.jpg",
    alt: "Cacao pod, beans and a bowl of cacao granola beside a Magadha Vana pouch",
    tag: "Madana · trail-a-cacao",
    stamp: "Harvest sale",
  },
  {
    id: "farmstay",
    eyebrow: "Farmstay opening · December 2026",
    title: "Wake to a dawn chorus.",
    emphasis: "Stay a while.",
    description:
      "Riverside cottages, guided bird walks and unhurried farm meals inside a 150-species forest. A small number of stays open this winter.",
    primary: { label: "Join the stay waitlist", href: "#newsletter" },
    secondary: { label: "Explore the farmstay", href: "#farmstay" },
    facts: [
      { value: "Dec 2026", label: "first stays" },
      { value: "3", label: "riverside rooms" },
    ],
    image: "/images/butterfly.jpg",
    alt: "A teal and charcoal butterfly resting on a bright green leaf",
    tag: "Farmstay · opening soon",
    stamp: "Waitlist open",
  },
];

export type ProductCategory = "cacao" | "pantry";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  weight: string;
  price: number;
  compareAt?: number;
  note: string;
  badge?: string;
  image: string;
  bestseller?: boolean;
};

export const products: Product[] = [
  {
    id: "coco-a-nut",
    name: "Coco-a-nut",
    category: "cacao",
    weight: "200 g",
    price: 420,
    compareAt: 525,
    note: "Farm cacao, coconut sugar and toasted coconut, caramelised in small batches.",
    badge: "No. 1 bestseller",
    image: "/images/product-coco-a-nut.jpg",
    bestseller: true,
  },
  {
    id: "date-a-cacao",
    name: "Date-a-Cacao",
    category: "cacao",
    weight: "200 g",
    price: 450,
    compareAt: 560,
    note: "Date sugar, Zahidi date bits and warm spice folded through single-origin cacao.",
    badge: "New harvest",
    image: "/images/product-date-a-cacao.jpg",
    bestseller: true,
  },
  {
    id: "energising-seeds",
    name: "Energising Seeds",
    category: "cacao",
    weight: "200 g",
    price: 390,
    note: "Cacao with pumpkin, sunflower, flax, sesame and watermelon seeds.",
    image: "/images/product-energising-seeds.jpg",
    bestseller: true,
  },
  {
    id: "healthy-nuts",
    name: "Healthy Nuts",
    category: "cacao",
    weight: "200 g",
    price: 480,
    note: "Toasted almond, cashew, pistachio and walnut meet farm-grown cacao.",
    image: "/images/product-healthy-nuts.jpg",
    bestseller: true,
  },
  {
    id: "forest-honey",
    name: "Forest Honey",
    category: "pantry",
    weight: "250 g",
    price: 550,
    note: "Raw, unheated honey from wild hives at the forest edge. Nothing added.",
    badge: "Raw harvest",
    image: "/images/product-forest-honey.jpg",
    bestseller: true,
  },
  {
    id: "malabar-pepper",
    name: "Malabar Black Pepper",
    category: "pantry",
    weight: "100 g",
    price: 260,
    note: "Sun-dried pepper from our vines — fresh, pungent and bright.",
    badge: "Single origin",
    image: "/images/product-pepper.jpg",
    bestseller: true,
  },
  {
    id: "moringa",
    name: "Moringa Leaf Powder",
    category: "pantry",
    weight: "150 g",
    price: 240,
    note: "Stone-milled leaves from the farm's moringa trees, dried in the shade.",
    image: "/images/product-moringa.jpg",
    bestseller: true,
  },
  {
    id: "banana-flour",
    name: "Raw Banana Flour",
    category: "pantry",
    weight: "500 g",
    price: 190,
    note: "Green banana, sun-dried and milled — gluten-free and gently sweet.",
    image: "/images/product-banana-flour.jpg",
    bestseller: true,
  },
  {
    id: "ko-kori-rotti",
    name: "Ko-kori da Rotti",
    category: "cacao",
    weight: "220 g",
    price: 430,
    note: "The Tulu pantry, reimagined: puffed rice, spice and cacao for a nostalgic crunch.",
    badge: "Tulu classic",
    image: "/images/product-ko-kori-rotti.jpg",
  },
  {
    id: "tropical-fruits",
    name: "Tropical Fruits",
    category: "cacao",
    weight: "200 g",
    price: 460,
    note: "Cacao caramelised with five farm-grown fruits — mango, pineapple and more.",
    badge: "Fruity",
    image: "/images/product-tropical-fruits.jpg",
  },
  {
    id: "kokum-rinds",
    name: "Sun-kissed Kokum",
    category: "pantry",
    weight: "150 g",
    price: 310,
    note: "Hand-picked kokum rinds, slowly sun-dried. A cool, tart coastal staple.",
    badge: "Sun-dried",
    image: "/images/product-kokum.jpg",
  },
  {
    id: "banana-gummies",
    name: "Banana Gummies",
    category: "pantry",
    weight: "120 g",
    price: 260,
    note: "Naturally sweet banana, sun-dried into chewy little bites. No refined sugar.",
    badge: "Low calorie",
    image: "/images/product-banana-gummies.jpg",
  },
];

export type Bird = {
  name: string;
  latin: string;
  note: string;
  image: string;
  alt: string;
};

export const birds: Bird[] = [
  {
    name: "Malabar Trogon",
    latin: "Harpactes fasciatus",
    note: "A cobalt flash with a ruby eye — the forest's shyest jewel.",
    image: "/images/bird-trogon.jpg",
    alt: "Malabar Trogon perched on a branch, blue head and yellow belly",
  },
  {
    name: "Paradise Flycatcher",
    latin: "Terpsiphone paradisi",
    note: "A ribbon-tailed dancer that follows the river at first light.",
    image: "/images/bird-flycatcher.jpg",
    alt: "Paradise Flycatcher with a long white tail perched among green branches",
  },
];

export const blogPosts = [
  {
    kicker: "Field notes",
    date: "Nov 2026",
    title: "Dawn at the river: finding the Malabar Trogon",
    read: "6 min read",
    href: "#birds",
  },
  {
    kicker: "Field guide",
    date: "Oct 2026",
    title: "A beginner's guide to birding the Western Ghats",
    read: "9 min read",
    href: "#birds",
  },
  {
    kicker: "Journal",
    date: "Sep 2026",
    title: "Monsoon birdsong: what to listen for in July",
    read: "5 min read",
    href: "#birds",
  },
];

export const trustPoints = [
  { title: "100% farm grown", detail: "Single-source harvest" },
  { title: "No chemicals, ever", detail: "Naturally reared" },
  { title: "70+ harvest products", detail: "From one food forest" },
  { title: "Rooted in Tulu Nadu", detail: "Hebri · Udupi" },
];

export const navTabs = [
  { id: "shop", label: "Shop" },
  { id: "farmstay", label: "Farmstay" },
  { id: "birds", label: "Bird Blog" },
  { id: "story", label: "Our Story" },
] as const;

export type NavTab = (typeof navTabs)[number]["id"];
