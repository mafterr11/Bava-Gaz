import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Clock9, MapPin, PhoneCall } from "lucide-react";

const Header = () => {
  return (
    <header
      className={` fixed left-0 right-0 top-0 text-white z-50 w-full border-b-[2px] border-accent transition-all duration-200`}
    >
      {/* Top container */}
      <div className="flex py-2.5 items-center justify-center px-10 md:px-16 md:max-lg:justify-between xl:gap-x-32 bg-gradient-to-t from-blue to-blue/90 w-full font-semibold">
        {/* phone */}
        <div className="flex items-center gap-x-2"><PhoneCall /> <span className="text-orange text-lg">+40.755.313.662</span></div>
        {/* adress */}
        <p className="flex items-center gap-x-2 text-md"><MapPin /> STR. Costache Sibiceanu NR.8, SECTOR 2 BUCUREȘTI, ROMÂNIA</p>
        <p className="flex items-center gap-x-2 text-md"><Clock9 className="text-orange"/> Luni-Vineri: 9:00 - 18:00</p>
      </div>
      {/* Bottom container */}
      <div className="bg-black w-full">
        <div className=" container flex items-center py-5 justify-between px-10 md:px-16 md:max-lg:justify-between xl:gap-x-32">
          {/* logo */}
          <Link href="/" className="flex items-center justify-center gap-x-4">
            <Image
              src={logo}
              width={60}
              height={60}
              priority
              alt="Tng Grup logo"
              className="hidden rounded-[50%] border-2 border-accent xl:flex"
            />
            <h3 className="font-nunitoSans">
              <span className="text-orange">Bava</span> Gaz Construct
            </h3>
          </Link>
          {/* nav */}
          <Nav containerStyles="hidden xl:flex gap-x-12" linkStyles="" />
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl text-accent"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
