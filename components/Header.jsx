import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Clock9, MapPin, PhoneCall } from "lucide-react";

const Header = () => {
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full text-white transition-all duration-200 font-nunitoSans`}
    >
      {/* Top container */}
      <div className="flex w-full items-center justify-center bg-[#082d64] px-10 py-1.5 font-semibold max-md:flex-col max-md:gap-y-1 md:px-16 md:py-2.5 md:max-lg:justify-between xl:gap-x-32">
        {/* phone */}
        <div className="flex items-center gap-x-2">
          <PhoneCall />{" "}
          <a
            href="tel:+40755313662"
            target="blank"
            className="text-lg font-bold text-orange"
          >
            +40.755.313.662
          </a>
        </div>
        {/* adress */}
        <p className="text-md hidden items-center gap-x-2 md:flex">
          <MapPin /> Str. Costache Sibiceanu NR.8, SECTOR 2 BUCUREȘTI, ROMÂNIA
        </p>
        {/* program */}
        <p className="text-md hidden items-center gap-x-2 md:flex">
          <Clock9 className="text-orange" /> Luni-Vineri: 9:00 - 18:00
        </p>
      </div>
      {/* Bottom container */}
      <div className="w-full border-t border-orange bg-black-heavy">
        <div className="container flex w-[85%] items-center justify-between px-0 py-3 md:px-16 md:py-4 md:max-lg:justify-between xl:gap-x-32">
          {/* logo */}
          <Link href="/" className="flex items-center justify-center gap-x-4">
            <Image
              src={logo}
              width={60}
              height={60}
              priority
              alt="Bava Gaz Construct logo"
              className="border-accent flex rounded-[50%] border-2"
            />
            <h3>
              <span className="text-orange">Bava</span> Gaz Construct
            </h3>
          </Link>
          {/* nav */}
          <Nav containerStyles="hidden xl:flex gap-x-12" linkStyles="" />
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl text-orange"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
