"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const cubicBezier = [0.76, 0, 0.24, 1];

export const LandingPageNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuLinks = [
    { href: "/components", label: "Components" },
    { href: "/blocks", label: "Blocks" },
    { href: "/templates", label: "Templates" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Documentation" },
  ];

  const socialLinks = [
    { href: "https://github.com/madebyvansh/nether-ui", label: "Github" },
    { href: "https://x.com/madebyvansh", label: "X(Twitter)" },
  ];

  return (
    <>
      {/* Header */}
      <header className="relative z-[60] h-16 w-full px-8 py-2">
        <nav
          className={`flex h-full w-full items-end justify-between transition-colors duration-500 ${
            isMenuOpen ? "text-background" : "text-foreground pr-[2px]"
          }`}
        >
          <a href="/">
            <p className="uppercase">Nether UI</p>
          </a>

          <p className="text-xs uppercase">Est. 2026</p>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="cursor-pointer font-sans text-sm uppercase"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {/* Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.7,
              //@ts-ignore
              ease: cubicBezier,
            }}
            className="fixed inset-0 z-50 grid h-dvh w-full grid-cols-2 bg-foreground text-background"
          >
            {/* Left */}
            <div className="flex items-end p-8">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.65,
                  //@ts-ignore
                  ease: cubicBezier,
                  delay: 0.22,
                }}
                className="font-heading text-[clamp(6rem,15vw,16rem)] leading-[0.8]"
              >
                Menu
              </motion.h2>
            </div>

            {/* Right */}
            <nav className="flex flex-col px-8 pt-42 justify-between">
              <ul className="flex flex-col gap-4">
                {menuLinks.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                      opacity:
                        hoveredIndex === null || hoveredIndex === idx ? 1 : 0.3,
                      y: 0,
                    }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{
                      opacity: {
                        duration: 0.3,
                        //@ts-ignore
                        ease: [0.4, 0, 0.2, 1],
                        delay: hoveredIndex === null ? 0.27 + idx * 0.09 : 0,
                      },
                      y: {
                        duration: 0.6,
                        //@ts-ignore
                        ease: cubicBezier,
                      },
                    }}
                    className="flex self-start gap-2 text-6xl"
                  >
                    <div className="flex text-2xl text-primary">
                      <span className="font-medium">[</span>
                      <span>{idx + 1}</span>
                      <span className="font-medium">]</span>
                    </div>

                    {item.label}
                  </motion.a>
                ))}
              </ul>

              <div className="text-right space-x-8 pb-4 font-medium ">
                {socialLinks.map((item, idx) => {
                  return (
                    <Link
                      className="text-2xl opacity-75 hover:opacity-100 transition-opacity duration-200"
                      key={idx}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
