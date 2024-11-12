import Image from "next/image";
import { Button } from "../ui/button";

const servicii = [
  {
    name: "Extinderi retea gaze naturale",
  },
  {
    name: "Bransamente gaze naturale",
  },
  {
    name: "Instalatii gaze naturale",
  },
  {
    name: "Instalatii sanitare/termice",
  },
  {
    name: "Verificari instalatii de utilizare",
  },
  {
    name: "Revizii instalatii de utilizare",
  },
  {
    name: "Verificari/revizii/puneri in functiune centrale termice",
  },
  {
    name: "Consultanta tehnica",
  },
];

export default function Servicii() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-24 md:px-8">
      <div className="flex w-full flex-col items-center justify-center gap-x-12 gap-y-8 md:flex-row">
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
        <div>
          <h3>Bava Gaz Construct SRL</h3>
          <h2>
            Instalații De Gaze Și Servicii Sanitare - Oricând La Dispoziția
            Dumneavoastră
          </h2>
          <p>
            Specializați în instalații de gaze și sisteme sanitare, oferim
            servicii de încredere pentru siguranța și confortul casei dvs.
          </p>
          {servicii.map((serviciu, index) => {
            return (
              <ul key={index}>
                <li>{serviciu.name}</li>
              </ul>
            );
          })}
          <Button>Citeste mai mult</Button>
        </div>
      </div>
    </div>
  );
}
