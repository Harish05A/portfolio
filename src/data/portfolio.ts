import type { IconType } from "react-icons";
import {
  SiFlutter,
  SiFirebase,
  SiPython,
  SiDart,
  SiC,
  SiGit,
  SiScikitlearn,

} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineCpuChip,
  HiOutlineBeaker,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

/* ===== Personal Info ===== */
export const personalInfo = {
  name: "Harish A",
  headline: "Software Developer & CS Student",
  typingStrings: [
    "Building Scalable Mobile Apps",
    "Flutter & Firebase Developer",
    "AI/ML Enthusiast",
    "Problem Solver & Innovator",
  ],
  summary:
    "A pre-final year Computer Science student passionate about building robust, scalable, and future-ready software solutions. Skilled in requirements analysis, software design, development, and unit testing — driven to create innovative, user-centered experiences that solve real-world problems.",
  location: "Chennai, India",
  email: "harisharumugam2005@gmail.com",
  phone: "6379405973",
  github: "https://github.com/Harish05A",
  linkedin: "https://linkedin.com/in/harish-a",
  resumeFileName: "Harish_Resume.pdf",
};

/* ===== Navigation ===== */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ===== Education ===== */
export const education = [
  {
    degree: "Bachelor of Engineering in Computer Science & Design",
    institution: "Rajalakshmi Engineering College",
    duration: "Sep 2023 — Present",
    tagline:
      "Merging technology and creativity to create innovative, user-centered solutions.",
  },
];

/* ===== Experience ===== */
export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Flutter Developer Intern",
    company: "ATG Banao Tech",
    duration: "Sep 2025 — Oct 2025",
    points: [
      "Worked on AstroVachan, a mobile app delivering personalized Vedic astrology insights and predictions with a clean, user-friendly interface.",
      "Contributed to Agora chat feature development, bug fixing, and performance optimization to improve overall user experience and engagement.",
    ],
  },
  {
    role: "IoT Trainee",
    company: "REC Nexus, TANSAM",
    duration: "Jun 2025 — Jul 2025",
    points: [
      "Gained hands-on experience with hardware-software integration and real-time data processing, building fundamentals relevant to embedded and systems software.",
    ],
  },
];

/* ===== Skills ===== */
export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: HiOutlineCodeBracket,
    skills: [
      { name: "C", icon: SiC },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: HiOutlineCpuChip,
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Firebase", icon: SiFirebase },
      { name: "Git", icon: SiGit },
      { name: "Azure DevOps", icon: HiOutlineCpuChip },
    ],
  },
  {
    title: "AI / ML",
    icon: HiOutlineBeaker,
    skills: [{ name: "Scikit-learn", icon: SiScikitlearn }],
  },
  {
    title: "Engineering Practices",
    icon: HiOutlineDevicePhoneMobile,
    skills: [
      { name: "API Integration", icon: HiOutlineCodeBracket },
      { name: "DSA", icon: HiOutlineCodeBracket },
      { name: "Unit Testing", icon: HiOutlineCodeBracket },
      { name: "UI/UX Design", icon: HiOutlineCodeBracket },
      { name: "Requirements Analysis", icon: HiOutlineCodeBracket },
    ],
  },
];

/* ===== Projects ===== */
export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  category: "mobile" | "ml" | "all";
}

export const projects: Project[] = [
  {
    title: "PingMe",
    description:
      "Smart Academic Reminder & Focus Assistant enabling faculty to push real-time reminders directly to students.",
    longDescription:
      "A full-featured academic productivity app that bridges the communication gap between faculty and students through real-time notifications, focus mode sessions, and distraction detection using background services and system-level overlays.",
    tech: ["Flutter", "Firebase", "FCM", "Dart"],
    features: [
      "Real-time push notifications from faculty to students",
      "Full-screen and overlay notification system",
      "Focus mode sessions with distraction detection",
      "Firebase Auth with role-based access control",
      "Firestore real-time sync and scheduled alerts",
    ],
    github: "https://github.com/Harish05A",
    category: "mobile",
  },
  {
    title: "Farmezy",
    description:
      "Agricultural Marketplace App connecting farmers, workers, and buyers on a scalable digital platform.",
    longDescription:
      "A scalable agricultural marketplace application supporting multiple user roles — farmers, workers, and buyers — with real-time price updates, logistics tracking, and a consistent, robust user experience.",
    tech: ["Flutter", "Firebase", "Dart"],
    features: [
      "Multi-role user system (Farmers, Workers, Buyers)",
      "Real-time price updates and market data",
      "Logistics and delivery tracking",
      "Requirements analysis and software design driven",
      "Comprehensive unit testing for data flow integrity",
    ],
    github: "https://github.com/Harish05A",
    category: "mobile",
  },
  {
    title: "Solar Power Output Predictor",
    description:
      "Machine learning regression model that predicts solar power output from time-series sensor data.",
    longDescription:
      "A predictive analysis solution leveraging time-series sensor data to forecast solar power output. The model demonstrates potential for real-world performance optimization in renewable energy systems.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    features: [
      "Time-series data preprocessing and analysis",
      "Regression model for power output prediction",
      "Performance optimization insights",
      "Data visualization and exploratory analysis",
    ],
    github: "https://github.com/Harish05A",
    category: "ml",
  },
];

/* ===== Achievements ===== */
export interface Achievement {
  title: string;
  description: string;
  type: "award" | "hackathon" | "certification";
}

export const achievements: Achievement[] = [
  {
    title: "Top 10 — TN Skills 2025",
    description:
      "Secured a Top 10 position in the state-level TN Skills 2025 competition, demonstrating strong technical proficiency against statewide competition.",
    type: "award",
  },
  {
    title: "Special Mention — Mindspark Ideathon",
    description:
      "Received the Special Mention Award at the Mindspark Ideathon for innovative problem-solving and impactful project ideation.",
    type: "hackathon",
  },
  {
    title: "3rd Place — I'Quest'25",
    description:
      "Achieved 3rd place at the departmental-level I'Quest'25 technical competition, showcasing deep domain knowledge and competitive skills.",
    type: "award",
  },
  {
    title: "Multiple Hackathon Participant",
    description:
      "Active participant in multiple hackathons, consistently building and presenting innovative solutions under tight deadlines.",
    type: "hackathon",
  },
];

/* ===== Stats ===== */
export const stats = [
  { label: "Projects Built", value: 3 },
  { label: "Internships", value: 2 },
  { label: "Hackathons", value: 4 },
  { label: "Awards", value: 3 },
];
