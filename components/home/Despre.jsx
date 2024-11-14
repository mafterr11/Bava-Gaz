import Image from "next/image";

export default function Despre() {
  return (
    <section className="container mx-auto max-w-screen-2xl px-4 py-16 md:px-8 md:py-24">
      {/* container */}
      <div className="flex w-full flex-col items-center justify-center xl:gap-x-32 gap-y-8 md:flex-row">
        {/* Text Container */}
        <div className="w-full max-w-xl text-balance max-xl:text-center md:w-[80%]">
          {/* First */}
          <div className="mb-12">
            <h2 className="mb-3 text-orange">Cine suntem?</h2>
            <p className="text-sm md:text-base">
              Bava Gaz Construct SRL - lider în instalații de gaze, electrice și
              sanitare, precum și în automatizări și consultanță tehnică. Ne
              dedicăm să oferim soluții moderne și sigure, adaptate nevoilor
              fiecărui client. Cu o echipă de profesioniști cu experiență și
              certificări relevante, asigurăm standarde într-un domeniu în care
              siguranța este esențială. Specializați în extinderi rețele de gaze
              naturale, instalații sanitare și termice, precum și verificări și
              revizii pentru instalații de utilizare, oferim servicii
              personalizate pentru fiecare proiect.
            </p>
          </div>
          {/* Second */}
          <div>
            <h2 className="mb-3 text-orange">De ce să ne alegeți?</h2>
            <p className="text-sm md:text-base">
              Avem o experiență vastă în domeniul instalațiilor de gaze și
              sanitare, garantând lucrări durabile și eficiente. De la
              proiectare până la execuție și verificări, suntem alături de dvs.
              în fiecare etapă a proiectului. Respectăm toate normele legale și
              oferim soluții ce pun pe primul loc confortul și siguranța casei
              sau afacerii dvs. Vă sprijinim să luați deciziile corecte pentru
              proiectele dvs. de infrastructură.
            </p>
          </div>
        </div>
        {/* Image Container */}
        <div className="flex h-60 w-full justify-center md:h-[55vh] md:w-[40%] md:justify-start">
          <div className="relative h-full w-[80%] border-2 border-orange md:w-full">
            <Image
              alt="De ce sa alegeti Bava Gas Grup"
              className="absolute right-3 top-3 h-full w-full object-cover object-center md:right-6 md:top-6"
              width={800}
              height={800}
              src="/meeting.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
