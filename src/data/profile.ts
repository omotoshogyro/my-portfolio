export interface Profile {
  name: string;
  role: string;
  email: string;
  available: boolean;
  intro: { text: string; dim?: boolean }[];
  greetings: string[];
  socials: { kind: "linkedin" | "github" | "x"; label: string; href: string }[];
  skills: { label: string; emoji: string }[];
  bio: string[];
}

export const profile: Profile = {
  name: "Okikiola Omotosho",
  role: "Mobile Engineer",
  email: "omotoshookiki@gmail.com",
  available: true,
  intro: [
    { text: "Mobile engineer" },
    { text: " who has shipped 10+ apps to the App Store,", dim: true },
    { text: " building fast, reliable and delightful experiences in" },
    { text: " React Native, TypeScript and SwiftUI." },
  ],
  greetings: ["hello", "bonjour", "hola", "bawo ni"],
  socials: [
    { kind: "github", label: "omotoshogyro", href: "https://github.com/omotoshogyro" },
    { kind: "linkedin", label: "okikiolaomotosho", href: "https://www.linkedin.com/in/okikiolaomotosho/" },
    { kind: "x", label: "Computer_Adikt", href: "https://x.com/Computer_Adikt" },
  ],
  skills: [
    { label: "React Native", emoji: "📱" },
    { label: "TypeScript", emoji: "🧩" },
    { label: "SwiftUI", emoji: "🍎" },
    { label: "Live Activities & Widgets", emoji: "⚡" },
    { label: "Expo Modules", emoji: "🛠️" },
    { label: "Mini Game Engine", emoji: "🎮" },
  ],
  bio: [
    "I'm Okikiola Omotosho, a mobile engineer who loves bringing ideas to life with code. I've shipped 10+ apps to the App Store across fintech, social, productivity and AI, mostly with React Native, TypeScript and SwiftUI.",
    "I go native when an app needs it: Live Activities and WidgetKit widgets, custom haptics with Expo Modules, and StoreKit to test RevenueCat payments while App Store payment info is still in review. My most challenging build so far is a mini game engine in React Native using WebViews.",
    "These days I'm delving into Kotlin Multiplatform. My greatest strength is my ability to adapt and learn.",
  ],
};
