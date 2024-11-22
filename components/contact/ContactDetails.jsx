import { House, Mail, PhoneForwarded } from "lucide-react";

export default function ContactDetails() {
  const detalii = [
    {
      icon: <Mail />,
      name: "Scrieți-ne",
      text: "Lăsați-ne un mesaj și vă vom contacta cât mai curând posibil",
      highlight: "officebavaconstruct@gmail.com",
    },
    {
      icon: <PhoneForwarded />,
      name: "Sunați-ne",
      text: "Echipa noastră vă stă la dispoziție la numărul de mai jos",
      highlight: "+40.755.313.662",
    },
    {
      icon: <House />,
      name: "Sediul nostru",
      text: "Vizitați-ne la sediul nostru pentru asistență directă",
      highlight: "Str. Costache Sibiceanu NR.8, SECTOR 2 BUCUREȘTI, ROMÂNIA",
    },
  ];
  return (
    <>
      <div className="container grid grid-cols-3 gap-x-12 max-w-[80%]">
        {detalii.map((detaliu, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start gap-y-4 bg-neutral-900 p-6 text-center"
          >
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="text-3xl text-orange">{detaliu.icon}</div>
              <p className="font-semibold text-lg">{detaliu.name}</p>
            </div>
            <div>
              <p className="mb-2">{detaliu.text}</p>
              <p className="text-orange font-semibold">{detaliu.highlight}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
