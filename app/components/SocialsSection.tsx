"use client";

import { motion } from "framer-motion"
import Image from "next/image";

export function SocialsSection() {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-zinc-500 text-sm tracking-widest uppercase">Find me on</p>
      <div className="flex flex-row gap-8 items-center">
        <a className="inline-flex hover:opacity-70 transition-opacity" href="https://www.linkedin.com/in/michaelanhchau/" target="_blank" rel="noopener noreferrer">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/linkedin.png`} alt="LinkedIn" width={40} height={40} className="object-contain w-12 h-12" />
        </a>

        <a className="inline-flex hover:opacity-70 transition-opacity" href="https://github.com/wyznozy" target="_blank" rel="noopener noreferrer">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/github.png`} alt="GitHub" width={40} height={40} className="object-contain w-12 h-12" />
        </a>
      </div>
    </motion.div>
  );
}
