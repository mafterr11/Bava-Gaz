import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Cta = () => {
  return (
    <section className="bg-CTA relative mb-44 bg-cover bg-fixed py-28">
      <div className="absolute -inset-[1px] bg-blue/85" />
      <div className="relative mx-auto md:max-xl:max-w-[90%]">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex flex-col items-center justify-center gap-y-2 text-center xl:max-w-5xl">
            <h3 className="text-orange">
              Ajutor profesionist pentru instalația de gaze?
            </h3>
            <h2 className="text-balance max-md:text-lg">
              Specialiștii noștri sunt la dispoziția dumneavoastră.
              Contactați-ne astăzi pentru o consultație gratuită!
            </h2>
          </div>
          <div>
            <Link href="/contact">
              <Button className="group gap-x-2">
              Sună-ne Acum
                <Send
                  size={18}
                  className="transition-all duration-300 ease-in-out group-hover:rotate-[20deg]"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
