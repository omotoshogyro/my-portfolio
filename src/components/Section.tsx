import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto w-full max-w-5xl px-6 py-20"
    >
      <h2 className="mb-10 text-4xl font-bold tracking-tight">{title}</h2>
      {children}
    </motion.section>
  );
}
