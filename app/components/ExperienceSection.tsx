"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { experiences, type TimelineItemProps } from "../data/experiences";

const TimelineItem = ({ title, company, date, description, bullets, tags, active = false, glowDot = false, breathing = false, index = 0 }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative"
  >
    {breathing && (
      <motion.div
        className="absolute -left-12 top-2 w-4 h-4 rounded-full bg-blue-500 z-0"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />
    )}
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.7 }}
      className={`absolute -left-12 top-2 w-4 h-4 rounded-full z-10 ${active || glowDot ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-zinc-700"}`}
    />

    <div className="flex flex-col md:flex-row md:items-start gap-8">
      <div className="md:w-1/3">
        <span className={`text-xs font-bold tracking-widest uppercase mb-2 block ${active ? "text-blue-500" : "text-zinc-500"}`}>{date}</span>
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-zinc-500 font-medium">{company}</p>
      </div>

      <motion.div
        whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.4)", backgroundColor: "#1a1a1a" }}
        transition={{ duration: 0.3 }}
        className="md:w-2/3 bg-[#131313] border border-white/5 rounded-xl p-8"
      >
        <p className="text-zinc-300 leading-relaxed mb-6">{description}</p>
        <ul className="space-y-4 mb-8">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
              <span className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center font-bold ${active ? "bg-blue-500/10 text-blue-500" : "bg-zinc-500/10 text-zinc-400"}`}>+</span>
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-md bg-white/5 text-zinc-400 text-xs font-medium border border-white/5 hover:border-blue-500/30 hover:text-blue-400 transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export function ExperienceSection() {
  const [lineComplete, setLineComplete] = useState(false);

  return (
    <div id="ExperienceSection" className="flex flex-col min-h-screen items-center dark:bg-black py-8 px-16">
      <div className="w-full max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20"
        >
          <h1 className="text-5xl font-bold tracking-tight mb-6">Experience</h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            A look at what I&apos;ve worked on and accomplished.
          </p>
        </motion.header>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-zinc-800" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onAnimationComplete={() => setLineComplete(true)}
            className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-blue-500 origin-bottom"
          />

          <div className="space-y-24 pl-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} {...exp} index={experiences.length - 1 - i} breathing={exp.breathing && lineComplete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
