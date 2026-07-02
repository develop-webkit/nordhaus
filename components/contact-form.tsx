"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const projectTypes = ["Residential", "Renovation", "Commercial", "Not sure yet"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only — no backend. Wire this to your form handler of choice.
    setSent(true);
  }

  return (
    <div className="relative">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Name" name="name" type="text" required />
          <Field label="Email" name="email" type="email" required />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone" htmlFor="type">Project type</label>
          <select id="type" name="type" className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 outline-none focus:border-clay">
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone" htmlFor="message">Tell us about your space</label>
          <textarea id="message" name="message" rows={4} required className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-2 outline-none focus:border-clay" />
        </div>
        <button type="submit" className="rounded-full bg-ink px-7 py-3 text-sm tracking-wide text-cream transition hover:bg-clay">
          Send enquiry
        </button>
      </form>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 -m-4 flex flex-col items-center justify-center gap-4 bg-cream/95 text-center"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-clay text-cream">
              <Check className="h-6 w-6" />
            </span>
            <p className="font-serif text-2xl">Thank you</p>
            <p className="max-w-xs text-sm text-stone">We&apos;ve received your enquiry and will be in touch within two working days.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-stone" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 outline-none focus:border-clay" />
    </div>
  );
}
