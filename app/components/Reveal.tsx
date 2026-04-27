"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  mode?: "load" | "scroll";
};

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  mode = "scroll",
}: RevealProps) {
  const animationProps =
    mode === "load"
      ? {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
        }
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
        };

  return (
    <motion.div
      className={className}
      {...animationProps}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
