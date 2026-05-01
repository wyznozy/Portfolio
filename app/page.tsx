"use client";

import { motion, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { ProfileCircle } from "./components/ProfileCircle";
import { SocialsSection } from "./components/SocialsSection";


const navItems = [
  { label: "ABOUT ME" , key: "AboutMeSection"},
  { label: "EXPERIENCE", key: "ExperienceSection" },
  { label: "SANDBOX", key: "SandboxSection" },
]

function NavMenu() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="hidden sm:flex flex-col gap-2 w-full" onMouseLeave={() => setHovered(null)}>
      {navItems.map((item) => (
        <motion.div
          key={item.label}
          onMouseEnter={() => setHovered(item.label)}
          animate={{ opacity: hovered === null || hovered === item.label ? 1 : 0.3 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-4 cursor-pointer overflow-hidden py-1"
          onClick={()=> document.getElementById(item.key)?.scrollIntoView({ behavior: "smooth"})}>
          <div className="overflow-hidden">
            <motion.span
              className="block text-4xl font-bold text-black dark:text-white tracking-tight"
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              {item.label}
            </motion.span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}


type TimelineItemProps = {
  title: string;
  company: string;
  date: string;
  description: string;
  bullets: string[];
  tags: string[];
  active?: boolean;
  index?: number;
};

const TimelineItem = ({ title, company, date, description, bullets, tags, active = false, index = 0 }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.7 }}
      className={`absolute -left-12 top-2 w-4 h-4 rounded-full z-10 ${active ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-zinc-700"}`}
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


const experiences: TimelineItemProps[] = [
  {
    title: "Software Engineer",
    company: "Aptaero (formerly Airline Choice)",
    date: "2023 — PRESENT",
    description: "Focus on soft skills alongside system design.",
    bullets: [
      "Architected and implemented Digital Boarding Pass distribution for Android and iOS, including the end-to-end pipeline for pass generation and updates on both platforms.",
      "Created and deployed multiple security related applications to airports utilizing biometric recognition for secure vetting.",
      "Developed more Peripheral Control Manager (PCM) applications and Certified with SITA.",
      "Lead team to successfully convert Xamarin based project to a new MAUI project and transition appropriate customers.",
      "Integrated Swagger into legacy .NET APIs + autogenerating clients on appropriate applications.",
    ],
    tags: ["MAUI", "Azure Devops", "VMware"],
    active: true,
  },
  {
    title: "Junior Developer",
    company: "Airline Choice",
    date: "2022 — 2023",
    description: "Given the opportunity to focus on technical skills and fundamentals.",
    bullets: [
      "Converted VB.NET project to latest .NET framework.",
      "Developed a Report Generator application utilized internally to autonomously email scheduled reports to all customers.",
      "Helped transition team off of Team Foundation Studio (TFS) and onto .git workflow.",
      "Supported bugfixing and feature requests for Airline Choice Mobile.",
      "Developed and Certified with Materna an application for transmitting printer/scanner data to Airline Choice DCS via Citrix."
    ],
    tags: ["Winforms", "C#", "ASP.NET", "SQL", "Xamarin", "Cron"],
  },
];


function ExperienceSection() {
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
            className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-blue-500 origin-bottom"
          />

          <div className="space-y-24 pl-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} {...exp} index={experiences.length - 1 - i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <>
      <div className="fixed left-25 top-0 h-screen flex items-center pl-8 z-50">
        <NavMenu />
      </div>

      <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-black">
        <main id="AboutMeSection" className="flex w-full min-h-screen mx-auto flex-col items-center gap-8 py-32 px-16 bg-white dark:bg-black ">
          <ProfileCircle />

          <motion.p
            className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
          >
            Welcome to my personal website! :)
          </motion.p>

          <SocialsSection />
        </main>
      </div>

      <ExperienceSection />

      <div id="SandboxSection" className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-green-900">
      </div>
    </>
  );
}
