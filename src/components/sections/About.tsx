import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

const points = [
  "Soluciones diseñadas alrededor de tu proceso real de negocio",
  "Comunicación directa durante todo el desarrollo",
  "Código escalable, mantenible y documentado",
  "Soporte y mejoras después de la entrega",
];

export default function About() {
  return (
    <section className="border-y border-outline-variant bg-surface-container-lowest py-xl">
      <Container className="grid items-center gap-xl lg:grid-cols-2">
        <div className="flex flex-col gap-md">
          <SectionHeading
            align="left"
            eyebrow="Nosotros"
            title="Convertimos ideas de negocio en sistemas reales"
          />
          <p className="text-body-md text-on-surface-variant">
            En Nabure Systems no vendemos plantillas: diseñamos y
            desarrollamos software pensado para resolver los problemas
            específicos de tu negocio, sin importar la industria en la que
            operes.
          </p>

          <ul className="flex flex-col gap-sm">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-sm text-body-sm text-on-surface-variant">
                <Icon name="check_circle" className="mt-0.5 shrink-0 text-secondary" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-md">
          {[
            { value: "100%", label: "Soluciones a la medida" },
            { value: "24/7", label: "Soporte disponible" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 rounded-2xl border border-outline-variant bg-surface p-md"
            >
              <span className="text-headline-md text-secondary">{stat.value}</span>
              <span className="text-body-sm text-on-surface-variant">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
