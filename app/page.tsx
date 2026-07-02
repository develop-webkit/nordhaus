import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { Counter } from "@/components/counter";
import { projects } from "@/lib/projects";
import { unsplash } from "@/lib/utils";

const services = [
  { n: "01", title: "Residential design", desc: "Full interiors for homes that reflect the people who live in them." },
  { n: "02", title: "Renovation", desc: "Sensitive updates that honour a building's history and character." },
  { n: "03", title: "Commercial", desc: "Workspaces and hospitality interiors that feel human and warm." },
];

const stats = [
  { to: 60, suffix: "+", label: "Projects delivered" },
  { to: 11, suffix: "", label: "Years of practice" },
  { to: 4, suffix: "", label: "Countries" },
  { to: 18, suffix: "", label: "Design awards" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro */}
      <section className="container py-24 sm:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-clay">Our philosophy</p>
            <h2 className="mt-6 font-serif text-3xl leading-snug sm:text-4xl">
              We design calm, tactile spaces where light, material, and proportion do the talking.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex items-end">
            <p className="text-lg leading-relaxed text-stone">
              NORDHAUS is a Nordic interior design studio. We believe a good interior is felt before
              it is seen — in the warmth of oak underfoot, the softness of morning light, the quiet
              confidence of a room that simply works. Every project begins with how you want to live.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container pb-24 sm:pb-32">
        <Reveal className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-clay">Selected work</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Recent projects</h2>
          </div>
          <Link href="/projects" className="link-line hidden text-sm tracking-wide text-stone hover:text-ink sm:inline-flex">
            View all
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-ink/10 bg-sand/40 py-24 sm:py-32">
        <div className="container">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-clay">What we do</p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl sm:text-4xl">A full-service studio, from first sketch to final styling</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="border-t border-ink/15 pt-6">
                  <span className="font-serif text-2xl text-clay">{s.n}</span>
                  <h3 className="mt-4 font-serif text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link href="/services" className="mt-12 inline-flex items-center gap-2 text-sm tracking-wide link-line">
              Explore our services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-20 text-cream">
        <div className="container grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-serif text-5xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm text-cream/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="container py-24 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-2xl leading-relaxed sm:text-3xl">
            &ldquo;They understood how we wanted to live before we could put it into words. Our home
            has never felt more like ours.&rdquo;
          </p>
          <p className="mt-8 text-sm uppercase tracking-widest text-stone">Ingrid &amp; Anders — Oslo</p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container pb-24 sm:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm">
            <Image src={unsplash("1600585154340-be6161a56a0c", 1600)} alt="Interior detail" width={1600} height={700} className="h-[380px] w-full object-cover sm:h-[460px]" />
            <div className="absolute inset-0 bg-ink/45" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-cream">
              <h2 className="max-w-2xl font-serif text-3xl leading-snug sm:text-5xl">Let&apos;s design something you&apos;ll love coming home to</h2>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm tracking-wide text-ink transition hover:bg-clay hover:text-cream">
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
