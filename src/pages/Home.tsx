import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowWeHelp from "@/components/sections/HowWeHelp";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeHelp />
      <About />
      <Process />
      <Cta />
    </>
  );
}
