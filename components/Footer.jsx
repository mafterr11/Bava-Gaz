import { Clock9, Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative z-[2] mx-auto flex w-full flex-col-reverse items-center justify-between gap-y-8 border-t-2 border-orange bg-black py-8 font-nunitoSans lg:flex-row xl:px-12">
      {/* Left side */}
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-center gap-x-2">
          {/* Logo */}
          <div className="h-24 w-24">
            <Image
              src="/logo.png"
              width={600}
              height={600}
              alt="Bava Gaz logo"
            />
          </div>
          {/* Bava Gas Construct */}
          <div className="flex flex-col items-start justify-center -space-y-2">
            <h2 className="text-orange">
              Bava <span className="text-white">Gaz</span>
            </h2>
            <h2>Construct</h2>
          </div>
        </div>
        {/* ANPC */}
        <div className="flex flex-col items-center justify-center -space-y-6">
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow">
            <img
              style={{ width: "240px" }}
              src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png"
              alt="Solutionarea Alternativa a Litigiilor"
            />
          </a>
          <br />
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="nofollow"
          >
            <img
              style={{ width: "240px" }}
              src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png"
              alt="Solutionarea Online a Litigiilor"
            />
          </a>
        </div>
      </div>
      {/* Center */}
      <div className="mx-auto max-w-md rounded-md p-6 text-white ">
        <h2 className="mb-4 text-lg font-bold">Detalii de contact:</h2>
        <p className="mb-2 flex items-center gap-x-2">
          <PhoneCall className="text-orange" />
          021.9176
        </p>
        <p className="mb-2 flex items-center gap-x-2">
          <Mail className="text-orange" />
          <a href="mailto:bavagaz@office.ro">bavagaz@office.ro</a>
        </p>
        <p className="mb-2 flex items-center gap-x-2 tracking-tighter">
          <MapPin className="text-orange" />
          Str. Depozitului nr 3, sector 2 București, România
        </p>
        <p className="mb-2 flex items-center gap-x-2">
          <Clock9 className="text-orange" />
          Luni - Vineri: 8:00 - 17:00
        </p>
      </div>
    </footer>
  );
};

export default Footer;
