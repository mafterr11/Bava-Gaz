import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative h-screen w-screen bg-hero bg-cover bg-center bg-no-repeat mt-[9.6rem]"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative flex flex-col items-center justify-center xl:justify-evenly xl:flex-row h-full xl:px-20 2xl:px-0">
        {/* Hero container */}
        <div className="relative z-30 max-xl:pt-20 max-xl:text-center">
          <h4 className=" font-semibold text-accent opacity-0">
            Subtitle here
          </h4>
          <h1 className=" mb-6 px-2 opacity-0 md:max-xl:px-7 xl:max-w-4xl">
            Title here
          </h1>
          <Link href="">
            <Button className="hero__button opacity-0">
              <span>Contact here</span>
            </Button>
          </Link>
        </div>
        {/* Image */}
        <div className="z-30 hidden md:flex md:pt-24 shrink-0">
          <Image
            src="/tools.webp"
            width={500}
            height={500}
            alt="Hero Micky"
            quality={100}
            className=" rounded-bl-[50%] rounded-tr-[50%] opacity-0 md:h-[450px] md:w-[400px] lg:h-[550px] lg:w-[500px] xl:max-2xl:w-[450px] xl:max-2xl:h-[500px] "
          />
        </div>
      </div>
      <div>waefwf</div>
      <div>waefwf</div>
      <div>waefwf</div>
      <div>waefwf</div>
      <div>waefwf</div>
      <div>waefwf</div>

      <div>waefwf</div>
      <div>waefwf</div>
      <div>waefwf</div>
      <div>waefwf</div>
      <div>waefwf</div>
    </div>
  );
};

