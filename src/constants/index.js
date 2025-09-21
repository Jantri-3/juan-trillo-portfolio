import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  BNP,
  nodejs,
  git,
  Steganography,//substitute with steganography
  DOMJudge,
  EvolutionProject,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "C++", icon: cpp },
  { name: "Node JS", icon: nodejs },
  { name: "Java", icon: java },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Cybersecurity analyst L2",
    company_name: "BNP Paribas",
    icon: BNP,
    iconBg: "#0f2111ff",
    date: "October 2023 - June 2024",
    points: [
      "Implemented cost-effective solutions such as API’s for advanced control over workflows.",
      "Managed all types of alerts with BeeHive, Elastic Security together with other SIEM tools, focused on all type of alerts such as network protocol issues and managing firewalls.",
      "Joined +5 different teams for getting different points of view on the cybersecurity space of the business.",
    ],
  },
];

export const projects = [
  {
    name: "Steganography",
    description:
      "Steganography implemented step by step: Using secure public-key encryption to protect the information, then encoding it using Base32, embedding the result in random strings based on the decimals of PI, altering it in a pseudo-random manner before being embedded into an image using the LSB technique.",
    tags: [
      { name: "Python", color: "pink-text-gradient" },
      { name: "Bash", color: "yellow-text-gradient" },
    ],
    image: Steganography,
    source_code_link: "https://github.com/Jantri-3/Steganography",
  },
  {
    name: "Analysis of DOMJudge submissions",
    description:
      "A deep analysis of submissions using static analyzers of code submitted to DOMJudge, part of my Bachelors Thesis, used and referenced in Innovation project of UCM: https://docta.ucm.es/entities/publication/a0214b7a-6ead-4751-b3a6-b82a6575fdbd",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "Java", color: "orange-text-gradient" },
      { name: "Bash", color: "yellow-text-gradient" },
    ],
    image: DOMJudge,
    source_code_link: "https://github.com/Jantri-3/analysis-of-domjudge-submissions",
  },
  {
    name: "Evolutionary Programming (PEV)",
    description:
      "Evolutionary programming project in which some practices are discussed together with working code that shows different graphics of different executions (In spanish)",
    tags: [
      { name: "Machine Learning", color: "pink-text-gradient" },
      { name: "Java", color: "orange-text-gradient" },
    ],
    image: EvolutionProject,
    source_code_link:
      "https://github.com/Jantri-3/Evolutionary-Programming",
  },
];
