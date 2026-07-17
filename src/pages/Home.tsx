import Panel from "@/components/ui/Panel";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Services from "@/components/sections/Services";
import HowWeHelp from "@/components/sections/HowWeHelp";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Panel className="flex flex-col gap-6 md:gap-10">
        <Hero />
        <Highlights />
      </Panel>
      <Panel>
        <Services />
      </Panel>
      <Panel>
        <HowWeHelp />
      </Panel>
      <Panel>
        <About />
      </Panel>
      <Panel>
        <Process />
      </Panel>
      <Cta />
    </>
  );
}
