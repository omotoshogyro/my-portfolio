import { useState } from "react";
import { profile } from "../data/profile";

const links = [
  { label: "Works", href: "#work" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
];

export default function Nav() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white/50 bg-white/40 px-5 py-3 shadow-[0_1px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl backdrop-saturate-150">
      <nav className="flex items-center gap-6 sm:gap-10">
        <a href="#top" aria-label="Home" className="flex size-8 items-center justify-center">
          <img src="/mylogo_icon.png" alt="" className="size-7 object-contain" />
        </a>
        <ul className="hidden items-center gap-10 text-sm font-medium text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        {profile.available && (
          <span className="hidden items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-green-600 sm:flex">
            <span className="size-1.5 rounded-full bg-green-500" />
            Available
          </span>
        )}
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-2 text-sm transition-colors hover:bg-white"
        >
          {copied ? "Copied!" : profile.email}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
        </button>
      </div>
    </header>
  );
}
