export type ProjectCategory = "Fintech" | "Social" | "Productivity" | "AI & Learning";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  stack?: string;
  platform?: "iOS" | "Android" | "iOS & Android";
  gradient: string;
  appStore?: string;
  playStore?: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Steminai",
    category: "AI & Learning",
    description: "Fun coding & AI.",
    gradient: "from-sky-200 to-indigo-100",
    appStore: "https://apps.apple.com/us/app/steminai-fun-coding-ai/id6753605281",
  },
  {
    id: "p2",
    title: "SHFT",
    category: "Productivity",
    description: "Shift scheduling and swapping.",
    gradient: "from-emerald-200 to-teal-100",
    appStore: "https://apps.apple.com/us/app/shft-fastest-shifts-swap/id6751990866",
  },
  {
    id: "p3",
    title: "Parakletos",
    category: "Productivity",
    description: "Spiritual habit accountability.",
    gradient: "from-violet-200 to-fuchsia-100",
    appStore: "https://apps.apple.com/us/app/parakletos-habit-tracker/id6754220127",
  },
  {
    id: "p4",
    title: "Clea by Autoclear",
    category: "Fintech",
    description: "Pay foreign vendors easily.",
    gradient: "from-orange-200 to-amber-100",
    appStore: "https://apps.apple.com/gb/app/clea-by-autoclear/id6749337169",
  },
  {
    id: "p5",
    title: "Zingo",
    category: "AI & Learning",
    description: "Translate video and audio.",
    gradient: "from-rose-200 to-pink-100",
    appStore: "https://apps.apple.com/us/app/translate-video-audio-zingo/id6746193562",
  },
  {
    id: "p6",
    title: "Speaking Bee",
    category: "AI & Learning",
    description: "A translation app.",
    gradient: "from-yellow-200 to-lime-100",
    appStore: "https://apps.apple.com/us/app/speaking-bee-translation-app/id6504189049",
  },
  {
    id: "p7",
    title: "Stacs",
    category: "Fintech",
    description: "Save and get credit.",
    gradient: "from-cyan-200 to-sky-100",
    appStore: "https://apps.apple.com/ng/app/stacs-save-get-credit/id6450111151",
  },
  {
    id: "p8",
    title: "Kloza",
    category: "Social",
    description: "Unite cultures, connect hearts.",
    gradient: "from-fuchsia-200 to-rose-100",
    appStore: "https://apps.apple.com/ng/app/kloza/id6479576483",
  },
  {
    id: "p9",
    title: "Wallet by Stacs",
    category: "Fintech",
    description: "A wallet for sending and holding money.",
    gradient: "from-teal-200 to-emerald-100",
    appStore: "https://apps.apple.com/us/app/wallet-by-stacs/id6504357184",
  },
  {
    id: "p10",
    title: "Feather",
    category: "Fintech",
    description: "Cash on the go.",
    gradient: "from-amber-200 to-orange-100",
    appStore: "https://apps.apple.com/ng/app/feather-cash-on-the-go/id6447082427",
  },
];
