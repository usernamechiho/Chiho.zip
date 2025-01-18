"use client";

import { FADE_IN_UP } from "@/_constants/framer";
import { motion } from "motion/react";

export default function AnimatedPageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <motion.div {...FADE_IN_UP}>{children}</motion.div>;
}
