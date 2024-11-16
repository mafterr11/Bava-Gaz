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
    <div className="pt-[6rem] xl:pt-[8rem]">
      <ServiciiContent />
    </div>
  );
};

export default Servicii;