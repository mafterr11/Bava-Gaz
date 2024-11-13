import { Quote } from "lucide-react";
import Image from "next/image";

export default function Review() {
  const reviews = [
    {
      name: "Victor",
      text: "Am apelat la această companie pentru branșamentul la gaze și sunt extrem de mulțumit. Au gestionat totul cu profesionalism, inclusiv documentația necesară și instalarea întregului sistem de gaze. Echipa este serioasă, punctuală și foarte bine pregătită. Recomand cu încredere celor care caută soluții rapide și de calitate!",
    },
    {
      name: "Ioana",
      text: "Am lucrat cu această firmă pentru un proiect imobiliar mai mare și pot să spun că m-au impresionat. Au realizat branșamentele și instalațiile de gaze pentru întreg ansamblul, respectând termenele și oferind un serviciu impecabil. Comunicare excelentă, iar echipa știe exact ce face. Cu siguranță îi voi recomanda mai departe.",
    },
    {
      name: "Simona",
      text: "Căutam o companie de încredere pentru instalația de gaze a noii mele locuințe, iar această firmă a fost alegerea perfectă. Totul a decurs fără probleme, de la consultanță până la execuția lucrărilor. M-au ajutat inclusiv cu actele și m-au ținut la curent cu toate etapele. Dacă vreți lucrări de calitate și o echipă profesionistă, apelați la ei!",
    },
  ];
  return (
    <div>
      <div className="mb-24 text-center">
        <h3 className="text-orange">Recenzii</h3>
        <h2>Clienții noștri, prioritatea noastră</h2>
      </div>
      <div className="mx-auto mb-40 grid w-[66%] grid-cols-3 items-start gap-x-20 max-md:grid-cols-1">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative grid h-full grid-cols-subgrid bg-neutral-700 p-3"
          >
            <Quote
              size={45}
              fill="#fd8300"
              className="absolute right-7 top-6 text-orange"
            />
            {/* Icon/Name */}
            <div className="mb-6 flex flex-col items-center justify-center">
              <div className="h-16 w-16">
                <Image
                  src="/logo.png"
                  width={600}
                  height={600}
                  alt="Bava Gaz logo"
                />
              </div>
              <h3>{review.name}</h3>
            </div>
            {/* Text */}
            <p className="text-balance text-center">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
