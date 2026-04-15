"use client";

import { motion } from "framer-motion"
import Image from "next/image";

export function SocialsSection() {
  return (
    <motion.div
      className="flex w-75 mt-auto flex-col items-center gap-4"
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 18, restSpeed: 0.5, restDelta: 0.01, delay: 0.1 }}
    >
      <div className="flex flex-row w-full items-center justify-between text-center">
        <a className="inline-flex" href="https://www.linkedin.com/in/michaelanhchau/" target="_blank" rel="noopener noreferrer">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/linkedin.png`} alt="LinkedIn" width={40} height={40} className="object-contain w-12 h-12" />
        </a>

        <a className="inline-flex" href="https://github.com/wyznozy" target="_blank" rel="noopener noreferrer">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/github.png`} alt="GitHub" width={40} height={40} className="object-contain w-12 h-12" />
        </a>
      </div>
    </motion.div>
  );
}