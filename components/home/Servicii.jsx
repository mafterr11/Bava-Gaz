import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const servicii = [
  {
    name: "Extinderi rețea gaze naturale",
  },
  {
    name: "Branșamente gaze naturale",
  },
  {
    name: "Instalații gaze naturale",
  },
  {
    name: "Instalații sanitare și termice",
  },
  {
    name: "Verificări și revizii instalații de utilizare",
  },
  {
    name: "Verificări și revizii centrale termice",
  },
  {
    name: "Consultanță tehnică",
  },
];

export default function Servicii() {
  return (
    <section className="relative mb-14 mt-20 bg-meeting2 bg-cover bg-fixed py-12 md:py-32 xl:mb-32">
      <div className="absolute -inset-[1px] bg-blue/95" />
      <div className="container relative mx-auto max-w-(--breakpoint-xl) px-4 md:px-8">
        <div className="flex w-full flex-col-reverse items-center justify-center gap-x-28 gap-y-8 md:flex-row">
          {/* Imagine container */}
          <div className="flex h-60 w-full justify-center md:h-[55vh] md:justify-start">
            <div className="relative h-full w-[80%] border-2 border-orange md:w-full">
              <Image
                alt="De ce sa alegeti Bava Gas Construct"
                className="absolute left-3 top-3 h-full w-full object-cover object-center md:left-6 md:top-6"
                width={800}
                height={800}
                src="/electric-work.webp"
              />
            </div>
          </div>
          {/* Text container */}
          <div className="flex flex-col gap-y-3">
            <div className="max-md:text-center">
              <h3 className="relative mb-6 inline-block">
                Bava Gaz Construct SRL
                <span className="absolute -bottom-2 left-0 h-[3px] w-[8.4rem] transform bg-orange max-md:left-1/2 max-md:-translate-x-1/2"></span>
              </h3>
              <h2>
                Instalații De Gaze Și Servicii Sanitare - Oricând La Dispoziția
                Dumneavoastră
              </h2>
            </div>

            <p className="mb-2 max-md:text-center">
              Specializați în instalații de gaze și sisteme sanitare, oferim
              servicii de încredere pentru siguranța și confortul casei dvs.
            </p>
            <ul className="mb-5 flex flex-col space-y-1 pl-5 marker:text-orange max-md:items-center md:list-disc">
              {servicii.map((serviciu, index) => {
                return <li key={index}><span className="text-orange md:hidden">-</span> {serviciu.name} <span className="text-orange md:hidden">-</span></li>;
              })}
            </ul>

            <div className="max-md:text-center">
              <Link href={"/servicii"}>
                <Button>Citește mai mult</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
