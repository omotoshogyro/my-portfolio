import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { education } from "../data/career";
import PhoneDemo from "./PhoneDemo";

const dots = {
  backgroundImage: "radial-gradient(#d9d9e0 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex min-h-[28rem] flex-col rounded-[2rem] bg-white p-8" style={dots}>
      <h3 className="text-2xl font-bold tracking-tight text-ink/80">{title}</h3>
      <div className="flex flex-1 flex-col justify-center">{children}</div>
    </div>
  );
}

const tilts = [-3, 2, 3, -2, 3];
const indents = ["0%", "6%", "28%", "10%", "2%"];

function Powers() {
  return (
    <Card title="Powers.">
      <ul className="space-y-3">
        {profile.skills.map((s, i) => (
          <motion.li
            key={s.label}
            style={{ rotate: tilts[i % tilts.length], marginLeft: indents[i % indents.length] }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="w-fit rounded-full border border-line bg-white px-4 py-2 text-sm font-medium shadow-sm"
          >
            <span className="mr-2">{s.emoji}</span>
            {s.label}
          </motion.li>
        ))}
      </ul>
    </Card>
  );
}

function Ships() {
  return (
    <Card title="Ships.">
      <PhoneDemo />
    </Card>
  );
}

function Icon({ kind }: { kind: "linkedin" | "github" | "x" | "mail" }) {
  const base = "flex size-8 shrink-0 items-center justify-center";
  if (kind === "linkedin")
    return <span className={`${base} rounded-md bg-ink text-xs font-bold text-white`}>in</span>;
  if (kind === "x")
    return (
      <svg className={base} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  if (kind === "github")
    return (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
      </svg>
    );
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function Connect() {
  const rows = [
    ...profile.socials.map((s) => ({ kind: s.kind, label: s.label, href: s.href })),
    { kind: "mail" as const, label: profile.email, href: `mailto:${profile.email}` },
  ];
  return (
    <Card title="Connect.">
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.label}>
            <a
              href={r.href}
              target={r.kind === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-line bg-white px-4 py-3 text-sm transition-colors hover:bg-canvas"
            >
              <Icon kind={r.kind} />
              <span className="truncate">{r.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Education() {
  return (
    <div className="flex min-h-[28rem] flex-col rounded-[2rem] bg-white p-8" style={dots}>
      <h3 className="text-2xl font-bold tracking-tight text-ink/80">Education.</h3>
      <div className="flex flex-1 items-center">
        <p className="text-lg font-bold leading-snug">{education.degree}</p>
      </div>
      <p className="text-sm italic text-muted">
        {education.school}
        <br />
        {education.period}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-10"
    >
      <h2 className="text-5xl font-bold tracking-tight">About Me.</h2>

      <div className="mt-24 max-w-xl space-y-6 text-[17px] italic leading-6 text-muted">
        {profile.bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-24 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Powers />
        <Ships />
        <Connect />
        <Education />
      </div>
    </motion.section>
  );
}
