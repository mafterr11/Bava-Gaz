import Certificari from "@/components/home/Certificari";
import Cta from "@/components/home/CTA";
import Despre from "@/components/home/Despre";
import Hero from "@/components/home/Hero";
import Review from "@/components/home/Review";
import Servicii from "@/components/home/Servicii";

export default function Home() {
  return (
    <>
      <Hero />
      <Despre />
      <Servicii />
      <Review/>
      <Certificari />
      <Cta />
    </>
  );
}
