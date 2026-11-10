export default function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-5 left-5 z-40 flex size-10 items-center justify-center rounded-full bg-black/5 transition-colors hover:bg-black/10"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </a>
  );
}
