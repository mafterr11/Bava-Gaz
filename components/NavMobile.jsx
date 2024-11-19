"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline, IoChatbubblesSharp } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Button } from "./ui/button";
import { HousePlug, PlugZap, SquareUserRound } from "lucide-react";

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
export const links = [
  {
    path: "/",
    name: "acasă",
    icon: <HousePlug size={35}/>,
  },
  {
    path: "/servicii",
    name: "servicii",
    icon: <PlugZap size={35}/>,
  },
  {
    path: "/contact",
    name: "contact",
    icon: <SquareUserRound size={35}/>,
  },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiciiOpen, setIsServiciiOpen] = useState(false);

  const toggleServicii = () => {
    setIsServiciiOpen((prev) => !prev);
  };
  const closeMenuAndNavigate = (path) => {
    setIsMenuOpen(false);
    setIsServiciiOpen(false);
    window.location.href = path;
  };

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger btn */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-4xl transition-all duration-200" />
      </div>
      <aside
        className={`${
          isMenuOpen ? "top-0" : "-top-full"
        } fixed inset-0 z-20 h-full bg-grey p-10 transition-all duration-500`}
      >
        <div className="flex h-full flex-col items-center justify-between text-white">
          {/* close btn */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-8 top-8 flex h-10 w-10 cursor-pointer items-center justify-center text-4xl"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <Link
            href={"/"}
            onClick={() => setIsMenuOpen(false)}
            className="flex flex-col-reverse items-center"
          >
            <h2>
              <span className="text-orange">Bava</span> Gaz Construct
            </h2>
            <Image
              src={"/logo.png"}
              width={100}
              height={100}
              alt="Bava Gaz logo"
            />
          </Link>
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              if (link.path === "/servicii") {
                return (
                  <div key={index}>
                    <div
                      onClick={toggleServicii}
                      className="justify-base relative flex cursor-pointer items-center gap-x-3 hover:text-orange"
                    >
                      <div className={`${iconStyles}`}>{link.icon}</div>
                      <div className={`${linkStyles}`}>{link.name}</div>
                    </div>
                    {isServiciiOpen && (
                      <Drawer>
                        <DrawerTrigger className="absolute left-0 right-0">
                          Descoperiți Serviciile Noastre
                        </DrawerTrigger>
                        <DrawerContent as="div" className="rounded-t-2xl">
                          <DrawerHeader>
                            <DrawerTitle className="text-orange">
                              Specialiști în Instalații Gaze Naturale
                            </DrawerTitle>
                            <DrawerDescription className="text-base font-semibold">
                              Inovație, Durabilitate, Performanță
                              <span className="my-4 block border-t border-orange"></span>
                            </DrawerDescription>
                          </DrawerHeader>
                          {dropdownLinks.map((dropdownLink, dropdownIndex) => (
                            <div
                              key={dropdownIndex}
                              onClick={() =>
                                closeMenuAndNavigate(dropdownLink.path)
                              }
                              className="flex cursor-pointer gap-x-[4px] px-4 pb-6"
                            >
                              <span className="text-orange">&#9679;</span>
                              <div className="hover hover:scale-[0.96]">
                                <span>{dropdownLink.name}</span>
                              </div>
                            </div>
                          ))}
                          <DrawerFooter>
                            <DrawerClose
                              as="div"
                              className="hover:bg-orange-hover mx-auto w-[50%] bg-orange px-3 py-3 text-white hover:scale-[0.98]"
                            >
                              Închide
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                        <DrawerClose />
                      </Drawer>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link
                    key={index}
                    href={link.path}
                    className="justify-base flex items-center gap-x-3 hover:text-orange"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={`${iconStyles}`}>{link.icon}</div>
                    <div className={`${linkStyles}`}>{link.name}</div>
                  </Link>
                );
              }
            })}
          </div>
          {/* Close button */}
          <Button size="sm" onClick={() => setIsMenuOpen(false)}>
            Închide
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
