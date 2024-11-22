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
      <div className="mx-auto mb-8 grid max-w-[75%] grid-cols-3 md:max-xl:grid-cols-2 gap-x-12 xl:container max-md:grid-cols-1 max-xl:gap-y-7">
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
              <p className="mb-2">{detaliu.text}</p>
              <p className="font-semibold text-orange">{detaliu.highlight}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Google Maps Integration */}
      <div className="h-[500px] xl:container xl:px-12">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3278729482417!2d-122.41941548468223!3d37.77928027975807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c9e56c2af%3A0x3e012e6c0b5fd37f!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1690213992591!5m2!1sen!2sus"
          className="h-full w-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
