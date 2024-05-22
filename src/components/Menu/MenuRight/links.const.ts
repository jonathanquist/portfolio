import {
  IconLogoGithub,
  IconLogoInstagram,
  IconLogoLinkedin,
  IconLogoTwitter,
  IconMail,
} from "@/components/Icons";

export const pages = [
  {
    name: "Projects",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Design Reel",
    path: "/reel",
  },
];

export const social = [
  {
    link: "https://www.linkedin.com/in/jonathan-quist",
    tooltip: "LinkedIn",
    Icon: IconLogoLinkedin,
  },
  {
    link: "https://www.instagram.com/kinjinson/",
    tooltip: "Instagram",
    Icon: IconLogoInstagram,
  },
  {
    link: "https://twitter.com/Twittahman",
    tooltip: "Twitter",
    Icon: IconLogoTwitter,
  },
  {
    link: "https://github.com/Kinjinson/",
    tooltip: "Github",
    Icon: IconLogoGithub,
  },
  {
    link: "mailto:jonathan.quist@outlook.com",
    tooltip: "Email",
    Icon: IconMail,
  },
];
