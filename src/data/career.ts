export interface Job {
  company: string;
  role: string;
  type?: string;
  period: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export const career: Job[] = [
  {
    company: "Kloza",
    role: "Mobile Engineer",
    type: "Contract",
    period: "Jan 2024 - Mar 2024",
    highlights: [
      "Built the feed, post creation (video, photo, text), comments and likes.",
      "Implemented real-time chat with message status and push notifications.",
      "Shipped to both the App Store and Play Store.",
    ],
  },
  {
    company: "Feather Africa",
    role: "Mobile Engineer",
    period: "Jan 2022 - Feb 2024",
    highlights: [
      "Built and maintained a fintech app with biometric auth and encryption.",
      "Implemented peer-to-peer payments, bill payments and fund transfers.",
      "Real-time agent search with Google Maps API and Firebase push notifications.",
    ],
  },
  {
    company: "Munch UK",
    role: "Mobile Developer",
    period: "Jul 2022 - Sep 2022",
    highlights: [
      "Built a food ordering app with real-time order tracking using Socket.IO.",
      "Created the driver app with live geolocation and Stripe payouts.",
      "Added Mixpanel analytics to monitor retention and conversion.",
    ],
  },
  {
    company: "Ikarely",
    role: "Frontend Developer",
    type: "Contract",
    period: "Mar 2020 - Nov 2021",
    highlights: [
      "Built the frontend of a healthcare web app connecting patients to professionals.",
      "Worked with the product designer in Figma and integrated backend APIs.",
    ],
  },
];

export const education: Education = {
  school: "Obafemi Awolowo University",
  degree: "BSc. Electrical and Electronics Engineering",
  period: "2018 - 2025",
};
