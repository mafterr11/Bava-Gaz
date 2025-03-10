import Intro from "@/components/Intro";
import { ServiciiContent } from "@/components/servicii/ServiciiContent";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title:
    "Servicii - BAVA GAZ CONSTRUCT | Soluții Complete pentru Instalații de Gaze",
  description:
    "Oferim servicii profesionale pentru instalații de gaze naturale: extinderi rețea, branșamente, verificări, revizii și consultanță tehnică. Asigurăm siguranță și eficiență pentru fiecare proiect.",
  keywords:
    "servicii BAVA GAZ CONSTRUCT, instalații gaze, extinderi gaze, branșamente gaze, verificări instalații gaze, revizii centrale termice, consultanță tehnică gaze",
});

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
