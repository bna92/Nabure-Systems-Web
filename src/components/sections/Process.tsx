import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
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
              <div className="flex items-center">
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-surface-container-low text-on-surface">
                  <Icon name={step.icon} className="text-2xl" />
                  <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-[#111] text-[10px] font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="mx-3 hidden h-0.5 flex-1 bg-surface-container-highest lg:block" />
                )}
              </div>
              <h3 className="text-title-lg text-on-surface">{step.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
