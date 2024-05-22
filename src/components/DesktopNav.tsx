import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggleSwitch";
import { mainNav } from "@/config/nav-items";
import { navbarHeight } from "@/utils/sizes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function DesktopNav() {
  const location = useLocation();

  return (
    <nav
      className={` justify-between items-center mx-[20px] hidden md:flex`}
      style={{ height: `${navbarHeight}px` }}
    >
      <div className="flex gap-[10px]">
        <Link to="/" className="flex items-center justify-center mr-[10px]">
          <div className="font-bold">React</div>
          <div className="">Essentials</div>
        </Link>
        {mainNav.map((navItem, index) => {
          return (
            <Link
              className={
                location.pathname === navItem.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }
              key={index}
              to={navItem.href}
              target={navItem.external ? "_blank" : undefined}
            >
              {navItem.title}
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-[20px]">
        <ThemeToggle />
        <Link
          className={
            location.pathname === "/Account"
              ? "text-foreground w-full h-full flex items-center justify-center"
              : "text-muted-foreground hover:text-foreground w-full h-full flex items-center justify-center"
          }
          to={"/Account"}
          key={"Account"}
        >
          <FontAwesomeIcon icon={faUser} className="text-xl"></FontAwesomeIcon>
        </Link>
      </div>
    </nav>
  );
}
