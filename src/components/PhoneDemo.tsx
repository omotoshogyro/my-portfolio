import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SCREEN_MS = 4200;

function ChatScreen() {
  const msgs = [
    { me: false, text: "Is my order on the way?" },
    { me: true, text: "Yes, 4 mins away 🚴" },
    { me: false, text: "Perfect, thanks!" },
  ];
  return (
    <div className="flex h-full flex-col gap-2 px-3 pt-10">
      <p className="text-[11px] font-semibold">Chat</p>
      {msgs.map((m, i) => (
        <motion.div
          key={m.text}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.7 }}
          className={`max-w-[80%] rounded-2xl px-3 py-1.5 text-[10px] ${
            m.me ? "ml-auto bg-accent text-white" : "bg-neutral-100"
          }`}
        >
          {m.text}
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ delay: 2.6, duration: 1.2, times: [0, 0.1, 0.8, 1] }}
        className="flex w-fit gap-1 rounded-2xl bg-neutral-100 px-3 py-2"
      >
        {[0, 1, 2].map((d) => (
          <motion.span
            key={d}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.12 }}
            className="size-1.5 rounded-full bg-neutral-400"
          />
        ))}
      </motion.div>
    </div>
  );
}

function WalletScreen() {
  return (
    <div className="flex h-full flex-col px-3 pt-10">
      <p className="text-[10px] text-muted">Balance</p>
      <p className="text-xl font-bold tracking-tight">₦120,500</p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 flex items-center justify-between rounded-xl bg-neutral-100 px-3 py-2 text-[10px]"
      >
        <span>Transfer to Ada</span>
        <span className="font-semibold">-₦5,000</span>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 14 }}
        className="mx-auto mt-8 flex size-14 items-center justify-center rounded-full bg-green-500"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <motion.path d="M5 12l5 5 9-10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.9, duration: 0.4 }} />
        </svg>
      </motion.div>
      <p className="mt-2 text-center text-[10px] font-medium text-green-600">Transfer successful</p>
    </div>
  );
}

function MapScreen() {
  const route = "M20 150 C 50 110, 70 140, 90 90 S 130 50, 150 30";
  return (
    <div className="relative h-full overflow-hidden bg-[#eaf2ea]">
      <svg viewBox="0 0 170 300" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
        <g stroke="#d4e2d4" strokeWidth="6">
          <path d="M0 60 H170M0 140 H170M0 220 H170M40 0 V300M110 0 V300" />
        </g>
        <motion.path
          d={route}
          fill="none"
          stroke="#2498f4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        <motion.circle
          r="6"
          fill="#2498f4"
          stroke="white"
          strokeWidth="2"
          style={{ offsetPath: `path("${route}")` }}
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-x-3 bottom-4 rounded-xl bg-white px-3 py-2 text-[10px] shadow">
        <p className="font-semibold">Driver is nearby</p>
        <p className="text-muted">Arriving in 4 min</p>
      </div>
    </div>
  );
}

const screens = [
  { key: "chat", label: "Real-time chat", node: <ChatScreen /> },
  { key: "wallet", label: "Fintech payments", node: <WalletScreen /> },
  { key: "map", label: "Live tracking", node: <MapScreen /> },
];

export default function PhoneDemo() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % screens.length), SCREEN_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-[19rem] w-[10.5rem] overflow-hidden rounded-[2.2rem] border-[6px] border-ink bg-white shadow-xl"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" />
        <AnimatePresence mode="wait">
          <motion.div
            key={screens[i].key}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {screens[i].node}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="flex gap-1.5" role="tablist" aria-label="Demo screens">
        {screens.map((s, idx) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={idx === i}
            aria-label={s.label}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-ink" : "w-1.5 bg-line"}`}
          />
        ))}
      </div>
      <p className="text-xs font-medium text-muted">{screens[i].label}</p>
    </div>
  );
}
