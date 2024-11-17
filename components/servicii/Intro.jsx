"use client";
// Image
import Image from "next/image";
// Motion

const Intro = () => {
  return (
    <div className="mb-12 xl:mb-24">
      <div className="relative h-64 w-full overflow-hidden xl:h-[24rem]">
        <Image
          src={"/servicii-intro.webp"}
          alt="Despre TNG imagine intro"
          fill
          priority={true}
          className="object-cover"
        />
        <div className="border-orange absolute inset-0 border-b bg-black/60" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-y-4">
          <div className="mb-[4rem] mt-[4rem] text-center">
            <h3 className="leading-relaxed text-orange">
              Servicii - Bava Gaz Construct
            </h3>
            <h4 className="font-normal text-white/90">
              Lucrăm alături de tine pentru a crea soluții sigure, moderne și
              adaptate nevoilor tale
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
