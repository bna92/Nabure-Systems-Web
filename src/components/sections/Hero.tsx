import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import HeroAnimation from "@/components/sections/HeroAnimation";

const serviceIcons: { icon: string; label: string }[] = [
  { icon: "code", label: "Sistemas a la medida" },
  { icon: "language", label: "Sitios web" },
  { icon: "point_of_sale", label: "Puntos de venta" },
  { icon: "chat", label: "WhatsApp" },
];

export default function Hero() {
  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center pb-16 pt-4 md:pb-20">
      <h1 className="sr-only">Nabure Systems — software a la medida de tu negocio</h1>

      <Link
        to="/servicios"
        className="card-soft-shadow absolute right-0 top-0 z-20 inline-flex items-center gap-3 rounded-full border border-surface-container-highest bg-white py-1.5 pl-5 pr-1.5 text-label-md font-semibold uppercase tracking-widest text-on-surface-variant transition-all hover:bg-surface-container-low"
      >
        Ver servicios
        <span className="flex size-8 items-center justify-center rounded-full bg-[#111] text-white">
          <Icon name="north_east" />
        </span>
      </Link>

      <HeroAnimation />

      <div className="absolute bottom-33 left-0 z-20 hidden max-w-[280px] text-left md:block">
        <a
          href="#servicios"
          className="group mb-3 inline-flex items-center gap-1 text-body-sm font-semibold uppercase tracking-widest text-on-surface transition-colors hover:text-on-surface-variant"
        >
          <Icon
            name="north_east"
            className="text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
          Conoce más
        </a>
        <p className="text-body-sm font-medium leading-relaxed text-on-surface-variant">
          Nabure Systems es el estudio que convierte procesos reales de tu
          negocio en software a la medida: sitios, puntos de venta y
          automatizaciones, sin plantillas genéricas.
        </p>
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center">
        <Button as="link" to="/contacto">
          <span className="inline-flex items-center gap-2">
            Cotiza tu proyecto
            <Icon name="dns" className="text-lg" />
          </span>
        </Button>
      </div>

      <div className="absolute bottom-45 right-0 z-20 hidden flex-col items-end gap-3 md:flex">
        <span className="text-body-sm font-semibold uppercase tracking-widest text-on-surface-variant">
          Nuestros servicios
        </span>
        <div className="flex -space-x-3">
          {serviceIcons.map((service) => (
            <div
              key={service.label}
              title={service.label}
              className="card-soft-shadow flex size-10 items-center justify-center rounded-full border-[3px] border-white bg-surface-container text-on-surface transition-transform hover:z-10 hover:-translate-y-1"
            >
              <Icon name={service.icon} className="text-base" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
