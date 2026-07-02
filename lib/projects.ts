import { unsplash } from "@/lib/utils";

export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Renovation" | "Commercial";
  location: string;
  year: string;
  summary: string;
  description: string;
  cover: string;
  gallery: string[];
  scope: string[];
}

export const projects: Project[] = [
  {
    slug: "lumen-loft",
    title: "Lumen Loft",
    category: "Residential",
    location: "Oslo, Norway",
    year: "2024",
    summary: "A light-filled loft where warm oak meets soft plaster and quiet, tactile texture.",
    description:
      "A full interior for a young family in central Oslo. We opened the plan around a central kitchen island, layered warm oak with lime-plaster walls, and let north light do the rest. Every piece was chosen to feel calm, honest, and built to last.",
    cover: unsplash("1616486338812-3dadae4b4ace"),
    gallery: [unsplash("1618221195710-dd6b41faaea6"), unsplash("1586023492125-27b2c045efd7"), unsplash("1600585154340-be6161a56a0c")],
    scope: ["Space planning", "Custom joinery", "Lighting design", "Styling"],
  },
  {
    slug: "nordic-calm",
    title: "Nordic Calm",
    category: "Residential",
    location: "Copenhagen, Denmark",
    year: "2023",
    summary: "Pared-back Scandinavian living built around light, linen, and pale timber.",
    description:
      "A serene apartment that celebrates restraint. A muted palette of chalk, sand, and pale ash creates a sense of stillness, while considered lighting gives the rooms warmth after dark.",
    cover: unsplash("1618221195710-dd6b41faaea6"),
    gallery: [unsplash("1600607687939-ce8a6c25118c"), unsplash("1615529182904-14819c35db37"), unsplash("1522708323590-d24dbb6b0267")],
    scope: ["Concept design", "Furniture selection", "Textiles", "Art curation"],
  },
  {
    slug: "atelier-house",
    title: "Atelier House",
    category: "Renovation",
    location: "Bergen, Norway",
    year: "2024",
    summary: "A heritage townhouse reimagined for modern life without losing its soul.",
    description:
      "A sensitive renovation of a 1920s townhouse. We restored original mouldings and floors, then introduced a contemporary kitchen and bathrooms that speak quietly to the past.",
    cover: unsplash("1586023492125-27b2c045efd7"),
    gallery: [unsplash("1493809842364-78817add7ffb"), unsplash("1560448204-e02f11c3d0e2"), unsplash("1600210492486-724fe5c67fb0")],
    scope: ["Heritage renovation", "Kitchen & bath", "Bespoke details", "Project management"],
  },
  {
    slug: "warm-minimal",
    title: "Warm Minimal",
    category: "Residential",
    location: "Stockholm, Sweden",
    year: "2023",
    summary: "Minimalism with a heartbeat — soft curves, clay tones, and honest materials.",
    description:
      "A compact apartment proving that minimal need not mean cold. Rounded forms, a clay accent wall, and layered lighting make a small footprint feel generous and welcoming.",
    cover: unsplash("1600585154340-be6161a56a0c"),
    gallery: [unsplash("1616137466211-f939a420be84"), unsplash("1616627561950-9f746e330187"), unsplash("1600566753086-00f18fb6b3ea")],
    scope: ["Space planning", "Colour & materials", "Custom lighting", "Styling"],
  },
  {
    slug: "studio-verde",
    title: "Studio Verde",
    category: "Commercial",
    location: "Helsinki, Finland",
    year: "2022",
    summary: "A boutique workspace that feels more like a home than an office.",
    description:
      "A creative studio designed to help people do their best work. Biophilic touches, acoustic softness, and a warm material palette turn a commercial floor into somewhere people actually want to be.",
    cover: unsplash("1600607687939-ce8a6c25118c"),
    gallery: [unsplash("1616594039964-ae9021a400a0"), unsplash("1567538096630-e0c55bd6374c"), unsplash("1616486338812-3dadae4b4ace")],
    scope: ["Workplace strategy", "FF&E", "Acoustics", "Branding integration"],
  },
  {
    slug: "the-terrace",
    title: "The Terrace",
    category: "Residential",
    location: "Reykjavík, Iceland",
    year: "2024",
    summary: "Indoor-outdoor living framed by volcanic stone and endless northern light.",
    description:
      "A hillside home that blurs the line between inside and out. Stone, glass, and warm wood frame dramatic views, while a restrained interior lets the landscape take centre stage.",
    cover: unsplash("1615529182904-14819c35db37"),
    gallery: [unsplash("1600585154340-be6161a56a0c"), unsplash("1586023492125-27b2c045efd7"), unsplash("1618221195710-dd6b41faaea6")],
    scope: ["Full interior", "Custom joinery", "Lighting design", "Landscape liaison"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
