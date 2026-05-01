"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "ABOUT ME", key: "AboutMeSection" },
  { label: "EXPERIENCE", key: "ExperienceSection" },
  { label: "SANDBOX", key: "SandboxSection" },
];

export function NavMenu() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="hidden sm:flex flex-col gap-2 w-full" onMouseLeave={() => setHovered(null)}>
      {navItems.map((item) => (
        <motion.div
          key={item.label}
          onMouseEnter={() => setHovered(item.label)}
          animate={{ opacity: hovered === null || hovered === item.label ? 1 : 0.3 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-4 cursor-pointer overflow-hidden py-1"
          onClick={() => document.getElementById(item.key)?.scrollIntoView({ behavior: "smooth" })}
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
  );
}
