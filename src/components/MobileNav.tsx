import { mainNav } from "@/config/nav-items";
import { navbarHeight } from "@/utils/sizes";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggleSwitch";

export function MobileNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`flex justify-between items-center mx-[20px] md:hidden`}
        style={{ height: `${navbarHeight}px` }}
      >
        <div className="flex items-center">
          {/* Hamburger menu */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
          </button>
        </div>

        {/* Theme toggle */}
        <ThemeToggle />
      </nav>

      <div
        className={`absolute h-screen z-100 top-0 left-0 w-2/3 items-center content-center flex flex-col bg-card gap-[20px] transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo (only visible when menu is open) */}
        <div
          className={`h-[${navbarHeight}px] flex justify-between w-full px-[20px]`}
        >
          <Link
            to="/"
            className={`flex items-center justify-center w-min text-2xl`}
            onClick={toggleMenu}
          >
            <div className="font-bold">React</div>
            <div className="">Essentials</div>
          </Link>
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            <FontAwesomeIcon icon={faClose} className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation links (only visible when menu is open) */}
        {mainNav.map((navItem, index) => (
          <Link
            key={index}
            to={navItem.href}
            className={
              location.pathname === navItem.href
                ? "text-foreground w-min text-xl"
                : "text-muted-foreground hover:text-foreground w-min text-xl"
            }
            target={navItem.external ? "_blank" : undefined}
            onClick={toggleMenu}
          >
            {navItem.title}
          </Link>
        ))}
      </div>
    </>
  );
}
