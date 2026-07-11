import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const badges: Record<string, string> = {
  "sitios-web": "Más solicitado",
};

export default function Servicios() {
  return (
    <Container className="flex flex-col gap-xl py-xl">
      <SectionHeading
        eyebrow="Servicios"
        title="Soluciones a la medida para cada necesidad"
        description="Desde una idea hasta un sistema en producción: cubrimos todo el ciclo de desarrollo de tu proyecto."
      />

      <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.id} delayMs={(index % 3) * 100}>
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
              {service.id === "puntos-de-venta" && (
                <Link
                  to="/precios"
                  className="mt-1 inline-flex w-fit items-center gap-1 text-body-sm font-semibold text-secondary hover:underline"
                >
                  Ver planes mensuales →
                </Link>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="flex flex-col items-center gap-md rounded-3xl border border-outline-variant bg-surface-container-lowest px-md py-lg text-center">
        <h2 className="text-headline-sm text-on-surface">
          ¿No encuentras lo que necesitas?
        </h2>
        <p className="max-w-[28rem] text-body-md text-on-surface-variant">
          Cuéntanos tu idea y te ayudamos a definir la solución adecuada, sin
          compromiso.
        </p>
        <Button as="link" to="/contacto">
          Cotiza tu proyecto
        </Button>
      </div>
    </Container>
  );
}
