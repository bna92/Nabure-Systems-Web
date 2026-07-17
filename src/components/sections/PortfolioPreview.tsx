import { useRef } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { portfolioProjects } from "@/data/portfolio";

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
          description="Un vistazo a los sistemas y sitios que hemos desarrollado. Conoce el detalle de cada proyecto en nuestro portafolio."
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
        {portfolioProjects.map((project) => (
          <Link
            key={project.id}
            to="/portafolio"
            className="w-[260px] shrink-0 snap-start sm:w-[300px]"
          >
            <Card hover>
              <div className="flex h-full flex-col gap-4 p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-container-low">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-1 text-on-surface-variant">
                      <Icon name="hourglass_top" className="text-2xl" />
                      <span className="text-label-md font-semibold uppercase tracking-widest">
                        Próximamente
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-label-md font-bold uppercase tracking-wider text-on-surface-variant">
                    {project.category}
                  </span>
                  <h3 className="text-title-lg text-on-surface">{project.title}</h3>
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
