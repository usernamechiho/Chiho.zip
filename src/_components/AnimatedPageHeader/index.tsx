"use client";

import { FADE_IN_UP } from "@/_constants/framer";
import { motion } from "motion/react";

export default function AnimatedPageHeader({ label }: { label: string }) {
  return (
    <motion.div className="text-lg font-semibold mb-12" {...FADE_IN_UP}>
      {label}
    </motion.div>
  );
}
