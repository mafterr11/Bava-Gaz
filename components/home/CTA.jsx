import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Cta = () => {
  return (
    <section className="bg-tools relative mb-44 bg-cover bg-fixed py-28">
      <div className="absolute inset-0 bg-blue/85" />
      <div className="container relative mx-auto md:max-xl:max-w-[90%]">
        <div className="flex flex-col items-center">
          <h2 className="mb-6 flex flex-col items-center justify-center gap-y-2 text-center xl:max-w-5xl">
            For more information, feel free to contact me
            <span className="text-3xl font-medium md:max-xl:text-4xl">
              Let's crush those goals together
            </span>
          </h2>
          <div>
            <Link href="https://www.instagram.com/micky_bordeianu?igsh=MWpvOGFidzEydHBkaA==">
              <Button className="group gap-x-2">
                Contact me
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
