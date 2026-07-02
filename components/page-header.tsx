import { Reveal } from "@/components/reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="container pt-40 pb-14 sm:pt-48">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-clay">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">{title}</h1>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">{subtitle}</p>
        </Reveal>
      )}
    </section>
  );
}
