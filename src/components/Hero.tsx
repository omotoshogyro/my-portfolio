import { motion } from "framer-motion";
import { profile } from "../data/profile";
import GreetingBubble from "./GreetingBubble";

export default function Hero() {
  return (
    <section id="top" className="flex min-h-screen items-center justify-center px-6 py-28">
      <div className="flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">
        <GreetingBubble greetings={profile.greetings} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-sm"
        >
          <h1 className="text-3xl font-bold tracking-tight">I'm {profile.name}.</h1>
          <p className="mt-5 text-[15px] leading-6">
            {profile.intro.map((part, idx) => (
              <span key={idx} className={part.dim ? "text-muted" : undefined}>
                {part.text}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
