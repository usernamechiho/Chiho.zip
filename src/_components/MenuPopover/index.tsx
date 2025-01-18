"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MENU_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Post", path: "/post" },
  { label: "Resume", path: "/resume" },
  { label: "About", path: "/about" },
] as const;

export default function MenuPopover({
  opens,
  onClose,
}: {
  opens: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  return (
    <AnimatePresence>
      {opens && (
        <motion.div
          className="absolute w-full h-[calc(100vh-7.5rem)] top-10 right-0 backdrop-blur-md"
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <nav className="border border-zinc-200 p-4 rounded-lg">
            <ul className="flex flex-col justify-between gap-6">
              {MENU_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="hover:text-gray border-b border-zinc-200 cursor-pointer"
                  onClick={() => {
                    router.push(item.path);
                    onClose();
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
