"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"
import { motion, useScroll } from "framer-motion"
import { useState } from "react"

function ProfileCircle() {
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

function ContentSquare() {
  return (
    <motion.div
      className="flex w-75 mt-auto flex-col items-center gap-4"
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 18, restSpeed: 0.5, restDelta: 0.01, delay: 0.1 }}
    >
      <div className="flex flex-row gap-50 items-center justify-between text-center sm:items-start sm:text-left">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/linkedin.png`} alt="LinkedIn" width={40} height={40} className="object-contain w-16 h-16" />
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/github.png`} alt="LinkedIn" width={40} height={40} className="object-contain w-16 h-16" />
      </div>
    </motion.div>
  );
}

const navItems = [
  { number: "01", label: "HOME" },
  { number: "02", label: "PHOTOS" },
  { number: "03", label: "CONTACT" },
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
        >
          <div className="overflow-hidden">
            <motion.span
              className="block text-4xl font-bold text-black dark:text-white tracking-tight"
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {item.label}
            </motion.span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Home() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  function homeBtnClicked() {
    router.push("/mynextpage");
  }

  return (
    <>
      <div className="fixed left-25 top-0 h-screen flex items-center pl-8 z-50">
        <NavMenu />
      </div>

      
      <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex w-full min-h-screen mx-auto flex-col items-center gap-8 py-32 px-16 bg-white dark:bg-black ">
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

            <ContentSquare />
        </main>
      </div>


      <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-blue-950">
      </div>
      
    </>
  );
}
