"use client";

import { motion } from "framer-motion"
import Image from "next/image";

export function ProfileCircle() {
  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 18, restSpeed: 0.5, restDelta: 0.01, delay: 0.1 }}
    >
      <div className="w-75 h-75 rounded-full overflow-hidden shadow-xl ring-4 ring-white dark:ring-zinc-800">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/profile.jpg`} alt="Profile" width={300} height={300} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col items-center mt-1">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">Michael Chau</h1>
        <h2 className="text-3xl">Full Stack Software Engineer</h2>
      </div>
    </motion.div>
  );
}