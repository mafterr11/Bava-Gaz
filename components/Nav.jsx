"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const links = [
  {
    path: "/",
    name: "acasă",
  },
  // {
  //   path: "/despre",
  //   name: "despre",
  // },
  {
    path: "/servicii",
    name: "servicii",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

const dropdownLinks = [
  {
    path: "/servicii#extinderi-rețea-gaze-naturale",
    name: "Extinderi rețea gaze naturale",
  },
  {
    path: "/servicii#branșamente-gaze-naturale",
    name: "Branșamente gaze naturale",
  },
  {
    path: "/servicii#instalații-gaze-naturale",
    name: "Instalații gaze naturale",
  },
  {
    path: "/servicii#instalații-sanitare-și-termice",
    name: "Instalații sanitare și termice",
  },
  {
    path: "/servicii#verificări-și-revizii-instalații-de-utilizare",
    name: "Verificări și revizii instalații de utilizare",
  },
  {
    path: "/servicii#verificări-și-revizii-centrale-termice",
    name: "Verificări și revizii centrale termice",
  },
  { path: "/servicii#consultanță-tehnică", name: "Consultanță tehnică" },
];

const Nav = ({ containerStyles, linkStyles }) => {
  const currentRoute = usePathname();
  return (
    <nav className={`${containerStyles} flex items-center justify-center`}>
      {links.map((link, index) => {
        if (link.path === "/servicii") {
          return (
            <NavigationMenu key={index}>
              <NavigationMenuList>
                <NavigationMenuItem as="div" className={`${linkStyles}`}>
                  <NavigationMenuTrigger as="span">
                    <Link
                      href="/servicii"
                      className={`${
                        currentRoute === link.path
                          ? "decoration-accent active-link text-lg capitalize underline decoration-2 underline-offset-[0.5rem] hover:scale-[0.97]"
                          : "hover text-lg capitalize hover:scale-[0.97]"
                      } font-medium`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent as="div" className="py-2">
                    {dropdownLinks.map((dropdownLink, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownLink.path}
                        passHref
                        legacyBehavior
                      >
                        <NavigationMenuLink>
                          <div className="my-6 flex w-[21rem] gap-x-[4px] text-center">
                            <span className="text-orange">&#9679;</span>
                            <div className="hover">
                              <span>{dropdownLink.name}</span>
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        } else {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${linkStyles} ${
                currentRoute === link.path
                  ? "active-link decoration-accent text-lg capitalize underline decoration-2 underline-offset-[0.5rem] transition-all duration-500 ease-in-out hover:scale-[0.97]"
                  : "hover text-lg capitalize hover:scale-[0.97]"
              } font-medium`}
            >
              <span>{link.name}</span>
            </Link>
          );
        }
      })}
    </nav>
  );
};

export default Nav;
