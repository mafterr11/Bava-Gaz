"use client";
// Image
import Image from "next/image";
// Motion

const Intro = ({ src, title, subtitle }) => {
  return (
    <div className="mb-12 xl:mb-24">
      <div className="relative h-64 w-full overflow-hidden xl:h-[24rem]">
        <Image
          src={src}
          alt="Despre TNG imagine intro"
          fill
          priority={true}
          className="object-cover"
        />
        <div className="absolute inset-0 border-b border-orange bg-black/60" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-y-4">
          <div className="mb-[4rem] mt-[4rem] text-center">
            <h1 className="mb-2 px-2 leading-8 text-orange">{title}</h1>
            <h3 className="subtitle px-4 font-normal text-white/90">
              {subtitle}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
