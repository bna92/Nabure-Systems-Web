import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

const badges: Record<string, string> = {
  "sitios-web": "Más solicitado",
  "puntos-de-venta": "Disponible como plan",
};

export default function Services() {
  const featured = services.slice(0, 4);

  return (
    <div className="flex flex-col gap-xl">
      <SectionHeading
        eyebrow="Servicios"
        title="Soluciones a la medida para cada necesidad"
        description="Desde una idea hasta un sistema en producción: cubrimos todo el ciclo de desarrollo de tu proyecto."
      />

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
        {featured.map((service, index) => (
          <Reveal key={service.id} delayMs={index * 100}>
            <Card hover className="relative">
              {badges[service.id] && (
                <span className="absolute -top-3 left-lg z-10 rounded-full bg-emerald-100 px-sm py-1 text-label-md font-bold text-emerald-700">
                  {badges[service.id]}
                </span>
              )}
              <div className="flex h-full flex-col gap-sm p-lg">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-container-low text-on-surface">
                  <Icon name={service.icon} className="text-2xl" />
                </div>
                <h3 className="text-title-lg text-on-surface">{service.title}</h3>
                <p className="text-body-sm text-on-surface-variant">{service.description}</p>
                <ul className="mt-2 flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-body-sm text-on-surface-variant"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-on-surface" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Button as="link" to="/servicios" variant="secondary" className="self-center">
        Ver todos los servicios
        <Icon name="arrow_forward" className="ml-2" />
      </Button>
    </div>
  );
}
