import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { useInView } from "@/hooks/useInView";
import { services } from "@/data/services";

const badges: Record<string, string> = {
  "sitios-web": "Más solicitado",
  "puntos-de-venta": "Disponible como plan",
  "automatizacion-whatsapp": "Disponible como plan",
};

function ServiceVideo({ serviceId }: { serviceId: string }) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="relative h-40 overflow-hidden rounded-2xl bg-surface-container-low">
      {isInView && (
        <video
          src={`/videos/services/${serviceId}.mp4`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover object-top"
        />
      )}
    </div>
  );
}

export default function Services() {
  const featured = services.slice(0, 4);

  return (
    <div className="flex flex-col gap-xl">
      <SectionHeading
        eyebrow="Servicios"
        title="Soluciones para cada necesidad"
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
                <ServiceVideo serviceId={service.id} />
                <h3 className="flex items-center justify-between gap-2 text-title-lg text-on-surface">
                  {service.title}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-on-surface">
                    <Icon name={service.icon} className="text-base" />
                  </span>
                </h3>
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
        Ver precios
        <Icon name="arrow_forward" className="ml-2" />
      </Button>
    </div>
  );
}
