import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { unsplash } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Studio",
  description: "Meet NORDHAUS — a Nordic interior design studio built on warmth, craft, and restraint.",
};

const values = [
  { title: "Warmth first", desc: "We design for how a space feels to live in, not just how it photographs." },
  { title: "Honest materials", desc: "Natural oak, stone, linen, and lime — materials that age beautifully." },
  { title: "Quiet detail", desc: "The best details are the ones you feel long before you notice them." },
  { title: "Built to last", desc: "We design slowly and specify well, so your interior outlives trends." },
];

const team = [
  { name: "Elin Dahl", role: "Founder & Creative Director" },
  { name: "Johan Vik", role: "Principal Designer" },
  { name: "Maja Holt", role: "Project Architect" },
];

export default function StudioPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Studio"
        title="A small studio with a slow, considered way of working"
        subtitle="Founded in Oslo in 2014, NORDHAUS is a tight-knit team of designers and architects crafting interiors across the Nordics."
      />

      <section className="container pb-24">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-sand">
            <Image src={unsplash("1600607687939-ce8a6c25118c", 1600)} alt="The NORDHAUS studio" fill sizes="100vw" className="object-cover" />
          </div>
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <h2 className="font-serif text-3xl leading-snug">Our story</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-stone">
            <p>
              NORDHAUS began with a simple conviction: that the spaces we live in shape how we feel every
              day. What started as one designer working from a small Oslo apartment has grown into a
              studio trusted with homes, renovations, and workplaces across four countries.
            </p>
            <p>
              We stay deliberately small. It means every project has a principal&apos;s full attention,
              and every decision — from the plan down to the door handle — is made with care.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand/40 py-24">
        <div className="container">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-clay">What we value</p>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-serif text-xl">{v.title}</h3>
                  <p className="mt-3 text-stone">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay">The team</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">The people behind the work</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="relative mb-5 aspect-[3/4] overflow-hidden bg-sand">
                <Image src={unsplash(["1493809842364-78817add7ffb", "1560448204-e02f11c3d0e2", "1600210492486-724fe5c67fb0"][i], 800)} alt={m.name} fill sizes="33vw" className="object-cover" />
              </div>
              <h3 className="font-serif text-xl">{m.name}</h3>
              <p className="mt-1 text-sm text-stone">{m.role}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
