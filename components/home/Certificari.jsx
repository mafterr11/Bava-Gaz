import Image from "next/image";

export default function Certificari() {
  return (
    <div className="mb-[10rem] flex flex-col items-center justify-center gap-y-24">
      <div className="text-center">
        <h3 className="text-orange">Certificari</h3>
        <h2>Garantie a excelenței și calității</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-x-16 max-md:flex-col max-md:items-center max-md:gap-y-12 md:items-start lg:gap-x-20">
        <div className="h-44 w-44 bg-neutral-700 p-5">
          <Image
            src={"/anre-logo.png"}
            width={600}
            height={600}
            alt="ANRE logo"
          />
        </div>
        <div className="h-44 w-44 bg-neutral-700 p-5">
          <Image
            src={"/iscir-logo.png"}
            width={600}
            height={600}
            alt="ISCIR logo"
          />
        </div>
      </div>
    </div>
  );
}
