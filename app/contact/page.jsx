import ContactDetails from "@/components/contact/ContactDetails";
import Intro from "@/components/Intro";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Contact - BAVA GAZ CONSTRUCT | Ia legătura cu noi",
  description:
    "Ai nevoie de informații despre serviciile noastre? Contactează BAVA GAZ CONSTRUCT pentru consultanță tehnică, oferte personalizate și asistență în domeniul instalațiilor de gaze naturale.",
  keywords:
    "contact BAVA GAZ CONSTRUCT, date de contact, consultanță gaze, servicii instalații gaze, suport tehnic, întrebări și oferte",
});

const ContactPage = () => {
  return (
    <div className="pb-[10rem] pt-[7.9rem] md:pt-[11rem] xl:pt-[8rem]">
      <Intro
        src={"/meeting2.jpg"}
        title={"Contact - Suntem aproape de tine"}
        subtitle={
          "Răspundem prompt tuturor solicitărilor. Așteptăm să ne contactezi!"
        }
      />
      <ContactDetails />
    </div>
  );
};

export default ContactPage;
