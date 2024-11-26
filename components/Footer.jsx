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
      <div className="mx-auto flex flex-col-reverse items-center justify-between py-8 max-md:gap-y-12 lg:flex-row xl:px-24">
        {/* Left side */}
        <div className="flex flex-col items-center gap-y-4 lg:items-start">
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
            <div className="flex flex-col items-center justify-center -space-y-2 lg:items-start">
              <h2 className="text-orange">
                BAVA <span className="text-white">GAZ</span>
              </h2>
              <h2>CONSTRUCT</h2>
            </div>
          </div>
          {/* ANPC */}
          <div className="flex flex-col items-center -space-y-6 lg:items-start">
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
        <div className="flex flex-wrap gap-x-16 max-md:flex-col max-md:items-center max-md:gap-y-12 md:items-start lg:gap-x-20">
          <div>
            <h2 className="mb-4 text-center text-lg font-bold text-orange md:text-left">
              Serviciile noastre:
            </h2>
            <ul className="space-y-1 text-center md:text-left">
              {dropdownLinks.map((link, index) => (
                <li key={index} className="marker:text-orange md:list-disc">
                  <Link href={link.path}>
                    <span className="text-white hover:text-orange">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto max-w-md text-center text-white md:text-left">
            <h2 className="mb-4 text-lg font-bold text-orange">
              Detalii de contact:
            </h2>
            <p className="mb-2 flex items-center justify-center gap-x-2 md:justify-start">
              <PhoneCall className="text-orange" />
              +40.755.313.662
            </p>
            <p className="mb-2 flex items-center justify-center gap-x-2 md:justify-start">
              <Mail className="text-orange" />
              <a href="mailto:bavagaz@office.ro">
                officebavaconstruct@gmail.com
              </a>
            </p>
            <p className="mb-2 flex items-center justify-center gap-x-2 tracking-tighter md:justify-start">
              <MapPin className="text-orange" />
              Str. Strada Plantelor 5, Videle, Teleorman
            </p>
            <p className="mb-2 flex items-center justify-center gap-x-2 md:justify-start">
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
