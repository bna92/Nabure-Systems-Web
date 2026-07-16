import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/data/services";

export default function Process() {
  return (
    <div className="flex flex-col gap-xl">
      <SectionHeading
        eyebrow="Proceso"
        title="Así trabajamos tu proyecto"
        description="Un proceso claro y transparente de principio a fin, sin sorpresas en el camino."
      />

      <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal key={step.id} delayMs={index * 100}>
            <div className="flex flex-col gap-sm">
              <span className="text-display-lg text-surface-container-highest">{step.number}</span>
              <h3 className="text-title-lg text-on-surface">{step.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
