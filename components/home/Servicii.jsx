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
    name: "Instalații sanitare/termice",
  },
  {
    name: "Verificări instalații de utilizare",
  },
  {
    name: "Revizii instalații de utilizare",
  },
  {
    name: "Verificări/revizii/puneri în funcțiune centrale termice",
  },
  {
    name: "Consultanță tehnică",
  },
];


export default function Servicii() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-24 md:px-8">
      <div className="flex w-full flex-col items-center justify-center gap-x-24 gap-y-8 md:flex-row">
        {/* Imagine container */}
        <div className="flex h-60 w-full justify-center md:h-[55vh] md:justify-start">
          <div className="relative h-full w-[80%] border-2 border-orange md:w-full">
            <Image
              alt="De ce sa alegeti Bava Gas Grup"
              className="absolute left-3 top-3 h-full w-full object-cover object-center md:left-6 md:top-6"
              width={800}
              height={800}
              src="/electric-work.webp"
            />
          </div>
        </div>
        {/* Text container */}
        <div className="flex flex-col gap-y-3">
          <div>
            <h3 className="text-orange">Bava Gaz Construct SRL</h3>
            <h2>
              Instalații De Gaze Și Servicii Sanitare - Oricând La Dispoziția
              Dumneavoastră
            </h2>
          </div>
          <p className="mb-2">
            Specializați în instalații de gaze și sisteme sanitare, oferim
            servicii de încredere pentru siguranța și confortul casei dvs.
          </p>
          <ul className="mb-5 list-disc pl-5 marker:text-orange">
            {servicii.map((serviciu, index) => {
              return <li key={index}>{serviciu.name}</li>;
            })}
          </ul>

          <div>
            <Link href={"/servicii"}>
            <Button>Citește mai mult</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
