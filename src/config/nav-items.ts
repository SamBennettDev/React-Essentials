import { MainNavItem, NavItem } from "@/types/nav";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faContactBook,
  faFolder,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export const mainNav: MainNavItem[] = [
  {
    title: "Projects",
    href: "/Projects",
    icon: faHome,
  },
  {
    title: "Experience",
    href: "/Experience",
    icon: faFolder,
  },
  {
    title: "Contact",
    href: "/Contact",
    icon: faContactBook,
  },
  {
    title: "GitHub",
    href: "https://github.com/SamBennettDev",
    icon: faGithub,
    external: true,
  },
];

export const appNav: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: faHome,
  },
  {
    title: "Experience",
    href: "/Experience",
    icon: faFolder,
  },
  {
    title: "Contact",
    href: "/Contact",
    icon: faContactBook,
  },
  {
    title: "GitHub",
    href: "https://github.com/SamBennettDev",
    icon: faGithub,
    external: true,
  },
];
