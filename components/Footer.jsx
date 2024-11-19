import { Clock9, Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const dropdownLinks = [
  {
    path: "/servicii#extinderi-rețea-gaze-naturale",
    name: "Extinderi rețea gaze naturale",
  },
  {
    path: "/servicii#branșamente-gaze-naturale",
    name: "Branșamente gaze naturale",
  },
  {
    path: "/servicii#instalații-gaze-naturale",
    name: "Instalații gaze naturale",
  },
  {
    path: "/servicii#instalații-sanitare-și-termice",
    name: "Instalații sanitare și termice",
  },
  {
    path: "/servicii#verificări-și-revizii-instalații-de-utilizare",
    name: "Verificări și revizii instalații de utilizare",
  },
  {
    path: "/servicii#verificări-și-revizii-centrale-termice",
    name: "Verificări și revizii centrale termice",
  },
  { path: "/servicii#consultanță-tehnică", name: "Consultanță tehnică" },
];

const Footer = () => {
  return (
    <footer className="relative z-[2] w-full gap-y-8 border-t-2 border-orange bg-black font-nunitoSans">
      {/* Main inside container */}
      <div className="mx-auto flex flex-col-reverse items-center justify-between py-8 xl:px-24 max-md:gap-y-12 lg:flex-row">
        {/* Left side */}
        <div className="flex flex-col gap-y-4 items-center lg:items-start">
          <div className="flex items-center gap-x-2">
            {/* Logo */}
            <div className="h-20 w-20 md:h-24 md:w-24">
              <Image
                src="/logo.png"
                width={600}
                height={600}
                alt="Bava Gaz logo"
                className="object-contain"
              />
            </div>
            {/* Bava Gas Construct */}
            <div className="flex flex-col items-center lg:items-start justify-center -space-y-2">
              <h2 className="text-orange">
                Bava <span className="text-white">Gaz</span>
              </h2>
              <h2>Construct</h2>
            </div>
          </div>
          {/* ANPC */}
          <div className="flex flex-col items-center lg:items-start -space-y-6">
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="nofollow"
              className="hover:opacity-80"
            >
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
              className="hover:opacity-80"
            >
              <img
                style={{ width: "240px" }}
                src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png"
                alt="Solutionarea Online a Litigiilor"
              />
            </a>
          </div>
        </div>
        {/* Right side */}
        <div className="flex gap-x-16 lg:gap-x-20 flex-wrap max-md:flex-col max-md:items-center md:items-start max-md:gap-y-12">
          <div>
            <h2 className="mb-4 text-lg font-bold text-orange text-center md:text-left">
              Serviciile noastre:
            </h2>
            <ul className="space-y-1 text-center md:text-left">
              {dropdownLinks.map((link, index) => (
                <li key={index} className="md:list-disc marker:text-orange">
                  <Link href={link.path}>
                    <span className="text-white hover:text-orange">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto max-w-md text-white text-center md:text-left">
            <h2 className="mb-4 text-lg font-bold text-orange">
              Detalii de contact:
            </h2>
            <p className="mb-2 flex items-center justify-center md:justify-start gap-x-2">
              <PhoneCall className="text-orange" />
              021.9176
            </p>
            <p className="mb-2 flex items-center justify-center md:justify-start gap-x-2">
              <Mail className="text-orange" />
              <a href="mailto:bavagaz@office.ro">bavagaz@office.ro</a>
            </p>
            <p className="mb-2 flex items-center justify-center md:justify-start gap-x-2 tracking-tighter">
              <MapPin className="text-orange" />
              Str. Depozitului nr 3, sector 2 București, România
            </p>
            <p className="mb-2 flex items-center justify-center md:justify-start gap-x-2">
              <Clock9 className="text-orange" />
              Luni - Vineri: 8:00 - 17:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
