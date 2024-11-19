import Intro from "@/components/Intro";

const ContactPage = () => {
  return (
    <div className="pt-[7.9rem] md:pt-[11rem] xl:pt-[8rem]">
      <Intro
        src={"/meeting2.jpg"}
        title={"Contact - Suntem aproape de tine"}
        subtitle={
          "Răspundem prompt tuturor solicitărilor. Așteptăm să ne contactezi!"
        }
      />
    </div>
  );
};

export default ContactPage;
