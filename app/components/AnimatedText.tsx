"use client";

import { motion } from "motion/react";

type AnimatedTextProps = {
  text?: string;
  className?: string;
  delay?: number;
  as?: "p" | "span" | "h1" | "h2" | "h3";
  mode?: "load" | "scroll";
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AnimatedText({
  text = "",
  className,
  delay = 0,
  as = "p",
  mode = "scroll",
}: AnimatedTextProps) {
  const safeText = typeof text === "string" ? text : "";
  const words = safeText.split(" ");

  const content = words.map((singleWord, index) => (
    <span
      key={`${singleWord}-${index}`}
      style={{
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "top",
        marginRight: "0.25em",
      }}
    >
      <motion.span
        variants={word}
        style={{
          display: "inline-block",
          willChange: "transform, opacity",
        }}
      >
        {singleWord}
      </motion.span>
    </span>
  ));

  const sharedProps =
    mode === "load"
      ? {
          className,
          variants: container,
          initial: "hidden" as const,
          animate: "visible" as const,
          transition: { delay },
          style: { overflow: "hidden" },
        }
      : {
          className,
          variants: container,
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, amount: 0.35 },
          transition: { delay },
          style: { overflow: "hidden" },
        };

  if (as === "h1") return <motion.h1 {...sharedProps}>{content}</motion.h1>;
  if (as === "h2") return <motion.h2 {...sharedProps}>{content}</motion.h2>;
  if (as === "h3") return <motion.h3 {...sharedProps}>{content}</motion.h3>;

  if (as === "span") {
    return (
      <motion.span
        {...sharedProps}
        style={{ overflow: "hidden", display: "inline-block" }}
      >
        {content}
      </motion.span>
    );
  }

  return <motion.p {...sharedProps}>{content}</motion.p>;
}
