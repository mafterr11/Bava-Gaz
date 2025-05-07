"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
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
    icon: <HousePlug size={34} />,
  },
  {
    path: "/servicii",
    name: "servicii",
    icon: <PlugZap size={34} />,
  },
  {
    path: "/contact",
    name: "contact",
    icon: <SquareUserRound size={34} />,
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
        className="cursor-pointer outline-hidden"
      >
        <RiMenu2Line className="text-4xl transition-all duration-200" />
      </div>
      <aside
        className={`${
          isMenuOpen ? "top-0" : "-top-full"
        } fixed inset-0 z-20 h-full bg-neutral-900 p-8 transition-all duration-500`}
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
            className="flex flex-col items-center"
          >
            <h2 className="text-center text-lg font-semibold">
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
          <div className="flex flex-col items-center gap-y-6 mt-6">
            {links.map((link, index) => {
              if (link.path === "/servicii") {
                return (
                  <Drawer key={index}>
                    <DrawerTrigger
                      onClick={toggleServicii}
                      as="div"
                      className="flex flex-col items-center justify-center gap-y-2 text-white hover:text-orange transition-all duration-200"
                    >
                      <div className=" text-orange">{link.icon}</div>
                      <div className="text-base xs:text-lg font-semibold uppercase">
                        {link.name}
                      </div>
                    </DrawerTrigger>
                    <DrawerContent as="div" className="rounded-t-2xl p-6 bg-neutral-900">
                      <DrawerHeader>
                        <DrawerTitle className="text-orange text-lg font-bold">
                          Specialiști în Instalații Gaze Naturale
                        </DrawerTitle>
                        <DrawerDescription className="text-white text-sm font-medium mt-2">
                          Inovație, Durabilitate, Performanță
                          <span className="my-4 block border-t border-orange"></span>
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="mt-4">
                        {dropdownLinks.map((dropdownLink, dropdownIndex) => (
                          <div
                            key={dropdownIndex}
                            onClick={() =>
                              closeMenuAndNavigate(dropdownLink.path)
                            }
                            className="flex items-center gap-x-3 px-4 py-2  rounded-md cursor-pointer transition-all duration-200"
                          >
                            <span className="text-orange text-lg">&#9679;</span>
                            <span className="text-white hover:text-orange text-base font-medium">
                              {dropdownLink.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      <DrawerFooter>
                        <DrawerClose
                          as="div"
                          className="hover:bg-orange-hover mx-auto w-full max-w-[200px] bg-orange px-3 py-3 text-center text-white font-semibold rounded-md transition-all duration-200"
                        >
                          Închide
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                    <DrawerClose />
                  </Drawer>
                );
              } else {
                return (
                  <Link
                    key={index}
                    href={link.path}
                    className="flex flex-col items-center justify-center gap-y-2 text-white hover:text-orange transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="text-orange">{link.icon}</div>
                    <div className="text-base xs:text-lg font-semibold uppercase">
                      {link.name}
                    </div>
                  </Link>
                );
              }
            })}
          </div>
          {/* Close button */}
          <Button
            size="sm"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 bg-orange px-6 py-2 rounded-md text-white font-semibold hover:bg-orange-hover transition-all duration-200"
          >
            Închide
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
