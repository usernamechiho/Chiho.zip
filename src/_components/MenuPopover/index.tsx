import { AnimatePresence, motion } from "motion/react";

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
          className="absolute w-full top-10 right-1 border border-zinc-300 p-2"
          key="modal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "linear" }}
        >
          <p>123123123123</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
