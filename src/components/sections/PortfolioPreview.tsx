import { useRef } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import {
  CustomSoftwareIllustration,
  WebsiteIllustration,
  PosIllustration,
  WhatsappIllustration,
  AdminSystemIllustration,
} from "@/components/illustrations";

const slides = [
  {
    id: "sistemas",
    title: "Sistemas a la medida",
    description: "Software hecho a la medida del proceso de cada negocio.",
    Illustration: CustomSoftwareIllustration,
  },
  {
    id: "web",
    title: "Sitios web",
    description: "Sitios rápidos y responsivos para cualquier giro.",
    Illustration: WebsiteIllustration,
  },
  {
    id: "pos",
    title: "Puntos de venta",
    description: "Control de ventas e inventario en un solo lugar.",
    Illustration: PosIllustration,
  },
  {
    id: "whatsapp",
    title: "Automatización de WhatsApp",
    description: "Atención y seguimiento automatizado a clientes.",
    Illustration: WhatsappIllustration,
  },
  {
    id: "admin",
    title: "Sistemas administrativos",
    description: "Plataformas internas para operar tu negocio.",
    Illustration: AdminSystemIllustration,
  },
];

export default function PortfolioPreview() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(amount: number) {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col gap-xl">
      <div className="flex flex-col items-start justify-between gap-md sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Portafolio"
          title="Proyectos"
          description="Un vistazo a las categorías de sistemas que desarrollamos. Conoce el detalle de cada proyecto en nuestro portafolio."
        />
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollBy(-340)}
            aria-label="Anterior"
            className="card-soft-shadow flex size-10 items-center justify-center rounded-full bg-white text-on-surface transition-colors hover:bg-surface-container-low"
          >
            <Icon name="arrow_back" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(340)}
            aria-label="Siguiente"
            className="card-soft-shadow flex size-10 items-center justify-center rounded-full bg-white text-on-surface transition-colors hover:bg-surface-container-low"
          >
            <Icon name="arrow_forward" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-1 flex snap-x snap-mandatory gap-md overflow-x-auto scroll-smooth px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide) => (
          <Link
            key={slide.id}
            to="/portafolio"
            className="w-[260px] shrink-0 snap-start sm:w-[300px]"
          >
            <Card hover>
              <div className="flex h-full flex-col gap-4 p-4">
                <div className="relative h-36 overflow-hidden rounded-2xl bg-surface-container-low">
                  <slide.Illustration className="h-full w-full scale-125" />
                </div>
                <div>
                  <h3 className="text-title-lg text-on-surface">{slide.title}</h3>
                  <p className="mt-1 text-body-sm text-on-surface-variant">
                    {slide.description}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <Link
        to="/portafolio"
        className="inline-flex w-fit items-center gap-1 self-center text-body-sm font-semibold text-on-surface hover:underline"
      >
        Ver portafolio completo
        <Icon name="arrow_forward" />
      </Link>
    </div>
  );
}
