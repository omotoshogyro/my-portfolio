import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  greetings: string[];
}

export default function GreetingBubble({ greetings }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % greetings.length), 2600);
    return () => clearInterval(id);
  }, [greetings.length]);

  return (
    <div className="relative w-fit" aria-hidden="true">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-[2.5rem] bg-gradient-to-b from-[#eaf5ff] to-[#a7d3fa] px-10 py-5 shadow-[0_20px_50px_-20px_rgba(36,152,244,0.55)] sm:px-12 sm:py-6"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={greetings[i]}
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
            transition={{ duration: 0.4 }}
            className="block bg-gradient-to-b from-[#62b4f8] to-[#2498f4] bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-8xl"
          >
            {greetings[i]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <div className="ml-24 mt-3 size-9 rounded-full bg-gradient-to-b from-[#d4eafd] to-[#a7d3fa]" />
      <div className="ml-28 mt-2 size-4 rounded-full bg-[#a7d3fa]" />
    </div>
  );
}
