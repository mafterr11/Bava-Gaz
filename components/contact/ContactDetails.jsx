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
      highlight: "Str. Strada Plantelor 5, Videle, Teleorman",
    },
  ];

  return (
    <>
      <div className="mx-auto mb-8 grid max-w-[75%] xl:max-w-[55%] grid-cols-3 md:max-xl:grid-cols-2 gap-x-12 max-md:grid-cols-1 max-xl:gap-y-7">
        {detalii.map((detaliu, index) => (
          <div
            key={index}
            className="flex min-h-[230px] flex-col items-center justify-start gap-y-4 rounded-lg bg-neutral-900 p-6 text-center shadow-lg"
          >
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="text-3xl text-orange">{detaliu.icon}</div>
              <p className="text-lg font-semibold">{detaliu.name}</p>
            </div>
            <div>
              <p className="mb-2  leading-6">{detaliu.text}</p>
              <p className="font-semibold text-orange leading-6">{detaliu.highlight}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Google Maps Integration */}
      <div className="h-[500px] xl:container xl:px-12">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.261144477857!2d25.545399076579745!3d44.263446812748306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ade951f1c5cd41%3A0xcbbf6e1dc125d605!2sStrada%20Plantelor%205%2C%20Videle%20145300!5e0!3m2!1sro!2sro!4v1732558575491!5m2!1sro!2sro"
          className="h-full w-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
