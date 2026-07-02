import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container grid gap-12 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl tracking-[0.25em]">NORDHAUS</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            An interior design studio crafting warm, considered spaces across the Nordics and beyond.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition hover:bg-cream hover:text-ink">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition hover:bg-cream hover:text-ink">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-cream/50">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link href="/studio" className="link-line text-cream/80 hover:text-cream">Studio</Link></li>
            <li><Link href="/services" className="link-line text-cream/80 hover:text-cream">Services</Link></li>
            <li><Link href="/projects" className="link-line text-cream/80 hover:text-cream">Projects</Link></li>
            <li><Link href="/contact" className="link-line text-cream/80 hover:text-cream">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-cream/50">Studio</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            <li>Møllergata 12</li>
            <li>0179 Oslo, Norway</li>
            <li>hello@nordhaus.studio</li>
            <li>+47 22 00 00 00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} NORDHAUS Interior Design Studio.</p>
          <p>Crafted with Next.js, TypeScript &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
