import Image from "next/image";

export default function Despre() {
  return (
    <div className="container max-w-screen-lg mx-auto py-24 px-4 md:px-8">
      {/* container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-12 gap-y-8 w-full">
        {/* Text Container */}
        <div className="w-full md:w-[60%] max-w-md max-xl:text-center text-balance">
          {/* First */}
          <div className="mb-8">
            <h2 className="mb-3 text-orange text-xl md:text-2xl">Cine suntem?</h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              doloribus possimus, accusamus saepe repudiandae veniam. Ullam
              atque dolorem aut aliquid, saepe deleniti impedit pariatur
              doloribus possimus vel alias non exercitationem.
            </p>
          </div>
          {/* Second */}
          <div>
            <h2 className="mb-3 text-orange text-xl md:text-2xl">De ce să ne alegeți?</h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              doloribus possimus, accusamus saepe repudiandae veniam. Ullam
              atque dolorem aut aliquid, saepe deleniti impedit pariatur
              doloribus possimus vel alias non exercitationem.
            </p>
          </div>
        </div>
        {/* Image Container */}
        <div className="h-60 w-full md:h-[55vh] md:w-[40%] flex justify-center md:justify-start">
          <div className="relative h-full w-[80%] md:w-full border-2 border-orange">
            <Image
              alt="De ce sa alegeti Bava Gas Grup"
              className="absolute top-3 left-3 md:top-6 md:left-6 h-full w-full object-cover object-center"
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
