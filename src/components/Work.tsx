import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type ProjectCategory } from "../data/projects";
import Section from "./Section";

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Work() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="work" title="Work.">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === f
                ? "border-ink bg-ink text-white"
                : "border-line bg-white/60 text-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div>
                <div
                  className={`aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${p.gradient} transition-transform duration-500 group-hover:scale-[1.02]`}
                />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted">{p.description}</p>
                    {(p.platform || p.stack) && (
                      <p className="mt-1 text-xs text-muted">
                        {[p.platform, p.stack].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {p.category}
                  </span>
                </div>
                <div className="mt-3 flex gap-2 text-xs">
                  {p.appStore && (
                    <a href={p.appStore} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-3 py-1 font-medium text-white hover:opacity-85">
                      App Store ↗
                    </a>
                  )}
                  {p.playStore && (
                    <a href={p.playStore} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-3 py-1 font-medium text-white hover:opacity-85">
                      Google Play ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
