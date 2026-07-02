import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="relative h-[70vh] min-h-[420px] w-full">
        <Image src={project.cover} alt={project.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-ink/10" />
        <div className="container absolute inset-x-0 bottom-0 pb-14 text-cream">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-cream/80">{project.category}</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-6xl">{project.title}</h1>
          </Reveal>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <Reveal>
            <dl className="space-y-6 border-t border-ink/15 pt-6 text-sm">
              <div>
                <dt className="uppercase tracking-widest text-stone">Location</dt>
                <dd className="mt-1 font-serif text-lg">{project.location}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-widest text-stone">Year</dt>
                <dd className="mt-1 font-serif text-lg">{project.year}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-widest text-stone">Scope</dt>
                <dd className="mt-1 space-y-1">
                  {project.scope.map((s) => (
                    <span key={s} className="block">{s}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-2xl leading-snug">{project.summary}</p>
            <p className="mt-6 text-lg leading-relaxed text-stone">{project.description}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {project.gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.06} className={i === 0 ? "sm:col-span-2" : ""}>
              <div className={`relative overflow-hidden bg-sand ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image src={src} alt={`${project.title} — image ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10">
        <Link href={`/projects/${next.slug}`} className="group container flex items-center justify-between py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone">Next project</p>
            <p className="mt-3 font-serif text-3xl transition-colors group-hover:text-clay sm:text-4xl">{next.title}</p>
          </div>
          <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" />
        </Link>
      </section>
    </>
  );
}
