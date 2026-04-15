"use client";

import { motion, useScroll, useMotionValueEvent  } from "framer-motion"
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



export default function Home() {
  // const router = useRouter();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (value) => {
      console.log(value) // now you get 0, 0.1, 0.5 etc.
  })

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

      <div id="ExperienceSection" className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-blue-950">
      </div>
      
      
      <div id="SandboxSection" className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-green-900">
      </div>
    </>
  );
}
