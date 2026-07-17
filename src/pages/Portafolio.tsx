import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Panel from "@/components/ui/Panel";
import Reveal from "@/components/ui/Reveal";
import { portfolioProjects } from "@/data/portfolio";

export default function Portafolio() {
  return (
    <Panel className="flex flex-col gap-xl">
      <SectionHeading
        eyebrow="Portafolio"
        title="Proyectos que hemos desarrollado"
        description="Sistemas y sitios web reales que construimos para nuestros clientes."
      />

      <div className="grid grid-cols-1 gap-lg sm:grid-cols-2">
        {portfolioProjects.map((project, index) => (
          <Reveal key={project.id} delayMs={(index % 2) * 100}>
            <Card hover innerBg="bg-white">
              <div className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[2rem] bg-surface-container-low">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-on-surface-variant">
                      <Icon name="hourglass_top" className="text-3xl" />
                      <span className="text-label-md font-semibold uppercase tracking-widest">
                        Próximamente
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-sm p-lg">
                  <span className="w-fit rounded-full bg-surface-container-low px-sm py-1 text-label-md font-bold uppercase tracking-wider text-on-surface-variant">
                    {project.category}
                  </span>
                  <h3 className="text-title-lg text-on-surface">{project.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{project.description}</p>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex w-fit items-center gap-1 pt-sm text-body-sm font-semibold text-on-surface hover:underline"
                    >
                      Ver proyecto
                      <Icon name="arrow_outward" className="text-base" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="flex flex-col items-center gap-md rounded-[2rem] bg-surface-container-low px-md py-lg text-center">
        <h2 className="text-headline-sm text-on-surface">
          ¿Quieres ver tu proyecto aquí?
        </h2>
        <p className="max-w-[28rem] text-body-md text-on-surface-variant">
          Cuéntanos qué necesitas y te ayudamos a construir la solución
          adecuada para tu negocio.
        </p>
        <Button as="link" to="/contacto">
          Cotiza tu proyecto
        </Button>
      </div>
    </Panel>
  );
}
