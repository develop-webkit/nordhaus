import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with NORDHAUS. Tell us about your space and we'll be in touch.",
};

const details = [
  { label: "Studio", lines: ["Møllergata 12", "0179 Oslo, Norway"] },
  { label: "Email", lines: ["hello@nordhaus.studio"] },
  { label: "Phone", lines: ["+47 22 00 00 00"] },
  { label: "Hours", lines: ["Mon – Fri, 9:00 – 17:00"] },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start with a conversation"
        subtitle="Tell us a little about your space, your timeline, and how you'd like to live. We'll take it from there."
      />

      <section className="container grid gap-16 pb-28 md:grid-cols-[1.3fr_1fr] md:gap-24">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-8 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.label} className="border-t border-ink/15 pt-5">
                <p className="text-xs uppercase tracking-widest text-clay">{d.label}</p>
                {d.lines.map((l) => (
                  <p key={l} className="mt-2 text-stone">{l}</p>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
