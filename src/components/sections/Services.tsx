import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

const badges: Record<string, string> = {
  "sitios-web": "Más solicitado",
  "puntos-de-venta": "Disponible como plan",
};

export default function Services() {
  const featured = services.slice(0, 3);

  return (
    <section className="py-xl">
      <Container className="flex flex-col gap-xl">
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones a la medida para cada necesidad"
          description="Desde una idea hasta un sistema en producción: cubrimos todo el ciclo de desarrollo de tu proyecto."
        />

        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 100}>
              <div className="relative flex h-full flex-col gap-sm rounded-3xl border border-outline-variant bg-surface-container-lowest p-lg shadow-sm transition-all hover:-translate-y-1 hover:border-secondary/50 hover:shadow-lg">
                {badges[service.id] && (
                  <span className="absolute -top-3 left-lg rounded-full bg-emerald-100 px-sm py-1 text-label-md font-bold text-emerald-700">
                    {badges[service.id]}
                  </span>
                )}
                <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary-container text-white">
                  <Icon name={service.icon} className="text-2xl" />
                </div>
                <h3 className="text-title-lg text-on-surface">{service.title}</h3>
                <p className="text-body-sm text-on-surface-variant">
                  {service.description}
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-body-sm text-on-surface-variant"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Button as="link" to="/servicios" variant="secondary" className="self-center">
          Ver todos los servicios
          <Icon name="arrow_forward" />
        </Button>
      </Container>
    </section>
  );
}
