import Intro from "@/components/servicii/Intro";
import { ServiciiContent } from "@/components/servicii/ServiciiContent";
import { constructMetadata } from "@/lib/utils";

// export const metadata = constructMetadata( {
//   title: "Servicii Bava Gaz",
//   description:
//     "",
//   keywords:
//     "",
// });

const Servicii = () => {
  return (
    <div className="pt-[7.9rem] xl:pt-[8rem]">
      <Intro />
      <ServiciiContent />
    </div>
  );
};

export default Servicii;