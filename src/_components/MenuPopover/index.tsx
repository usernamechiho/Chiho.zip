import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

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
              <li className="hover:text-gray">
                <Link href="/">Home</Link>
              </li>

              <li className="hover:text-gray">
                <Link href="/">Post</Link>
              </li>

              <li className="hover:text-gray">
                <Link href="/">Resume</Link>
              </li>

              <li className="hover:text-gray">
                <Link href="/">About</Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
