import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

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
  return (
    <AnimatePresence>
      {opens && (
        <motion.div
          className="absolute w-full h-[calc(100vh-7.5rem)] top-10 right-1 backdrop-blur-sm"
          key="modal"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "linear" }}
        >
          <nav className="border border-zinc-200 p-10 rounded-lg text-black text-md">
            <ul className="flex flex-col justify-between gap-10">
              {MENU_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="hover:text-gray border-b border-zinc-200 cursor-pointer"
                >
                  <Link href={item.path} onClick={onClose}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
