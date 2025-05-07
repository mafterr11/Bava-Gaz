import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Clock9, MapPin, PhoneCall } from "lucide-react";

const Header = () => {
  return (
    <header
      className={`font-nunitoSans fixed top-0 right-0 left-0 z-50 w-full text-white transition-all duration-200`}
    >
      {/* Top container */}
      <div className="flex w-full items-center justify-center bg-[#082d64] px-10 py-1.5 font-semibold max-md:flex-col max-md:gap-y-1 md:px-16 md:py-2.5 md:max-xl:justify-between xl:gap-x-32">
        {/* phone */}
        <div className="flex items-center gap-x-2">
          <PhoneCall className="text-orange" />{" "}
          <a
            href="tel:+40755313662"
            target="blank"
            className="text-lg font-bold"
          >
            +40.755.313.662
          </a>
        </div>
        {/* adress */}
        <p className="text-md hidden items-center gap-x-2 xl:flex">
          <MapPin className="text-orange" /> Str. Strada Plantelor 5, Videle,
          Teleorman
        </p>
        {/* program */}
        <p className="text-md hidden items-center gap-x-2 md:flex">
          <Clock9 className="text-orange" /> Luni-Vineri: 9:00 - 18:00
        </p>
      </div>
      {/* Bottom container */}
      <div className="border-orange bg-black-heavy w-full border-t">
        <div className="mx-auto flex w-[79%] items-center justify-between px-0 py-3 md:px-16 md:py-4 md:max-lg:justify-between xl:gap-x-32">
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
              <span className="text-orange">BAVA</span> GAZ CONSTRUCT
            </h3>
          </Link>
          {/* nav */}
          <Nav containerStyles="hidden xl:flex gap-x-12" linkStyles="" />
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-orange"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
