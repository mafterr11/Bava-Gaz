import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="relative mt-[9.25rem] h-screen w-screen bg-hero bg-cover bg-[bottom_center] bg-no-repeat">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-[#0D0C0BA6]" />
      {/* Hero container */}
      <div className="flex flex-col items-center justify-center pt-40 xl:h-full xl:px-20 xl:pb-20 xl:pt-0 2xl:px-0">
        <div className="relative z-30 text-center font-nunitoSans">
          <h3 className="mb-3 font-semibold text-orange">Bava Gaz Construct</h3>
          <h1 className="mb-6 px-2 md:max-xl:px-7 xl:max-w-5xl">
            Instalații Gaz, Electrice, Sanitare, Automatizări, Consultanță,
            Proiectare
          </h1>
          <Button>
            <a href="tel:+40755313662" target="blank" className="text-lg">
              +40.755.313.662
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
