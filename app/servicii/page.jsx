import Intro from "@/components/Intro";
import { ServiciiContent } from "@/components/servicii/ServiciiContent";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

const Servicii = () => {
  return (
    <div className="pt-[7.9rem] md:pt-[11rem] xl:pt-[8rem]">
      <Intro
        src={"/servicii-intro.webp"}
        title={"Servicii - Bava Gaz Construct"}
        subtitle={
          "Lucrăm alături de tine pentru a crea soluții sigure, moderne și adaptate nevoilor tale"
        }
      />
      <ServiciiContent />
    </div>
  );
};

export default Servicii;
