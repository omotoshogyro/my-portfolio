import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="space-y-1 px-6 pb-12 pt-6 text-center text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <p>
        Design inspired by{" "}
        <a
          href="https://www.hidysaam.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-ink underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          Samsul Hidayat's portfolio
        </a>
        .
      </p>
    </footer>
  );
}
