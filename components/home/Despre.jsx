import Image from "next/image";

export default function Despre() {
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-16 md:py-24 md:px-8">
      {/* container */}
      <div className="flex w-full flex-col items-center justify-center gap-x-8 gap-y-8 md:flex-row">
        {/* Text Container */}
        <div className="w-full max-w-lg text-balance max-xl:text-center md:w-[80%]">
          {/* First */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl text-orange md:text-2xl">
              Cine suntem?
            </h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              doloribus possimus, accusamus saepe repudiandae veniam. Ullam
              atque dolorem aut aliquid, saepe deleniti impedit pariatur
              doloribus possimus vel alias non exercitationem.
            </p>
          </div>
          {/* Second */}
          <div>
            <h2 className="mb-3 text-xl text-orange md:text-2xl">
              De ce să ne alegeți?
            </h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              doloribus possimus, accusamus saepe repudiandae veniam. Ullam
              atque dolorem aut aliquid, saepe deleniti impedit pariatur
              doloribus possimus vel alias non exercitationem.
            </p>
          </div>
        </div>
        {/* Image Container */}
        <div className="flex h-60 w-full justify-center md:h-[55vh] md:w-[40%] md:justify-start">
          <div className="relative h-full w-[80%] border-2 border-orange md:w-full">
            <Image
              alt="De ce sa alegeti Bava Gas Grup"
              className="absolute left-3 top-3 h-full w-full object-cover object-center md:left-6 md:top-6"
              width={800}
              height={800}
              src="/meeting.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
