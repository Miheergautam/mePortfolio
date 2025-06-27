import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="bg-neutral-900 rounded-2xl p-4 md:p-6 border border-neutral-700 w-[90%] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] text-center shadow-lg overflow-y-auto max-h-[90vh]"
            initial={{
              scaleY: 0.3,
              opacity: 0,
            }}
            animate={{
              scaleY: 1,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.8, 0.25, 1],
              },
            }}
            exit={{
              scaleY: 0.3,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            style={{ transformOrigin: "center center" }}
          >
            <h2 className="text-xl font-bold text-cust-red mb-4">{title}</h2>
            <div className="text-neutral-300 mb-4">{children}</div>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-cust-red text-black font-semibold hover:bg-cust-red/80 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
