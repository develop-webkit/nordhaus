import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-service interior design: residential, renovation, and commercial — from concept to final styling.",
};

const services = [
  {
    n: "01",
    title: "Residential Design",
    desc: "Complete interiors for houses and apartments — space planning, custom joinery, materials, lighting, furniture, and styling.",
    points: ["Space planning & layouts", "Bespoke joinery & millwork", "Material & colour palettes", "Furniture, lighting & styling"],
  },
  {
    n: "02",
    title: "Renovation",
    desc: "Sensitive renovations of period and modern properties, balancing character and comfort with contemporary living.",
    points: ["Heritage-sensitive design", "Kitchens & bathrooms", "Structural coordination", "On-site project management"],
  },
  {
    n: "03",
    title: "Commercial",
    desc: "Workspaces, hospitality, and retail interiors that feel warm and human while working hard for your brand.",
    points: ["Workplace strategy", "FF&E specification", "Acoustics & wellbeing", "Brand integration"],
  },
];

const process = [
  { n: "01", title: "Discovery", desc: "We listen. We learn how you live or work, your taste, budget, and timeline." },
  { n: "02", title: "Concept", desc: "Layouts, moodboards, and materials that set the direction for the whole project." },
  { n: "03", title: "Design", desc: "Detailed drawings, specifications, and 3D visuals so you can see it before it's built." },
  { n: "04", title: "Delivery", desc: "We manage trades, procurement, and installation, then style the finished space." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your space needs, under one roof"
        subtitle="From a single room to a full renovation, we take projects from first idea to the day you move in."
      />

      <section className="container pb-24">
        <div className="space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="grid gap-8 border-t border-ink/15 pt-10 md:grid-cols-[1fr_1.4fr]">
                <div>
                  <span className="font-serif text-2xl text-clay">{s.n}</span>
                  <h2 className="mt-3 font-serif text-3xl">{s.title}</h2>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-stone">{s.desc}</p>
                  <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-clay" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand/40 py-24">
        <div className="container">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-clay">How we work</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">A calm, four-step process</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <span className="font-serif text-4xl text-clay">{p.n}</span>
                <h3 className="mt-4 font-serif text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">Have a project in mind?</h2>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm tracking-wide text-cream transition hover:bg-clay">
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
