import { motion } from "framer-motion";
import { career } from "../data/career";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto w-full max-w-[1400px] px-5 py-10 sm:px-10"
    >
      <div className="rounded-[2rem] bg-white p-8 sm:p-12">
        <h2 className="mb-10 text-4xl font-bold tracking-tight">Career Journey.</h2>

        <ol className="relative space-y-10 border-l border-line pl-8">
          {career.map((job) => (
            <li key={job.company + job.period} className="relative">
              <span className="absolute -left-[37px] top-1.5 size-2.5 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">
                  {job.company}
                  <span className="ml-2 text-sm font-normal text-muted">
                    {job.role}
                    {job.type ? ` · ${job.type}` : ""}
                  </span>
                </h3>
                <span className="text-sm text-muted">{job.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-6 marker:text-muted">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
