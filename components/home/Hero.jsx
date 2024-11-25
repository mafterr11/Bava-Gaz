import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative mt-[9.25rem] h-screen w-screen bg-hero bg-cover bg-[bottom_center] bg-no-repeat max-md:mt-[7.8rem]">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-[#0D0C0BA6]" />
      {/* Hero container */}
      <div className="flex h-[85vh] flex-col items-center justify-center">
        <div className="relative z-30 text-center font-nunitoSans">
          <h3 className="mb-3 font-semibold text-orange">BAVA GAZ CONSTRUCT</h3>
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
    </section>
  );
}
