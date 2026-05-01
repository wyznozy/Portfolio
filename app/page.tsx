"use client";

import { motion } from "framer-motion";
import { NavMenu } from "./components/NavMenu";
import { ProfileCircle } from "./components/ProfileCircle";
import { SocialsSection } from "./components/SocialsSection";
import { ExperienceSection } from "./components/ExperienceSection";

export default function Home() {
  return (
    <>
      <div className="fixed left-25 top-0 h-screen flex items-center pl-8 z-50">
        <NavMenu />
      </div>

      <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-black">
        <main id="AboutMeSection" className="flex w-full min-h-screen mx-auto flex-col items-center gap-8 py-32 px-16 bg-white dark:bg-black">
          <ProfileCircle />

          <motion.p
            className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: .5 }}
          >
            
          I&apos;m a developer who was originally captivated by games and learned to apply that passion and competitiveness to my professional career. Having seen
          my applications used in real world environments and make people&apos;s lives easier and safer, has only driven my motivation further. I hope to make a positive impact on wherever I go and 
          am excited for what the future holds!
          </motion.p>




          <motion.p
            className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 1.5 }}
          >
            
          Look forward to meeting you :)

          </motion.p>


        </main>
      </div>

      <ExperienceSection />

      <div id="SandboxSection" className="flex flex-col min-h-screen items-center justify-end bg-zinc-50 font-sans dark:bg-green-900">

          <SocialsSection />


      </div>
    </>
  );
}
