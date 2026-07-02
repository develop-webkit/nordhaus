"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { unsplash } from "@/lib/utils";

const line = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const word = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={unsplash("1616486338812-3dadae4b4ace", 1920)}
          alt="A warm, light-filled living room"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/30" />
      </div>

      <div className="container pb-20 text-cream">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.35em] text-cream/80"
        >
          Interior Design Studio · Est. 2014
        </motion.p>

        <motion.h1 variants={line} initial="hidden" animate="show" className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] sm:text-7xl">
          {["Spaces that", "feel like home"].map((l) => (
            <span key={l} className="block overflow-hidden">
              <motion.span variants={word} className="block">{l}</motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm tracking-wide text-ink transition hover:bg-clay hover:text-cream"
          >
            View our work
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-cream/80">
            Warm, considered interiors across the Nordics — designed to be lived in and loved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
