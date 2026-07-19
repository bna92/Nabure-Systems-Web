import Panel from "@/components/ui/Panel";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/data/site";

export default function TerminosServicio() {
  return (
    <Panel>
      <div className="mx-auto flex max-w-3xl flex-col gap-xl">
        <h1 className="sr-only">Términos de servicio de Nabure Systems</h1>
        <SectionHeading
          align="left"
          eyebrow="Legal"
          title="Términos de servicio"
          description="Última actualización: julio de 2026."
        />

        <div className="flex flex-col gap-lg text-body-md leading-relaxed text-on-surface-variant">
          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">1. Sobre este sitio</h2>
            <p>
              Este sitio web es informativo: presenta los servicios de Nabure
              Systems, ejemplos de proyectos y precios de referencia. No se
              realizan compras ni contrataciones directamente en el sitio; su
              único fin es que puedas contactarnos por el formulario o por
              WhatsApp para platicar tu proyecto.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">2. Precios y contenido de referencia</h2>
            <p>
              Los precios, ejemplos y descripciones de servicios que ves aquí
              son de referencia. Contactarnos a través del sitio no genera
              ningún compromiso de contratación: el alcance, tiempos, precio y
              condiciones de cada proyecto se acuerdan directamente contigo
              antes de comenzar a trabajar.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">3. Propiedad intelectual del sitio</h2>
            <p>
              El diseño, logotipo, textos e imágenes de este sitio pertenecen
              a Nabure Systems y no pueden reproducirse sin autorización. Esto
              no aplica al software que desarrollamos para cada cliente, cuya
              propiedad se define en el acuerdo de cada proyecto.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">4. Limitación de responsabilidad</h2>
            <p>
              Procuramos que la información de este sitio esté siempre
              actualizada, pero no garantizamos que esté libre de errores. No
              nos hacemos responsables por decisiones tomadas únicamente con
              base en esta información, sin confirmarla directamente con
              nosotros.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">5. Cambios a estos términos</h2>
            <p>
              Podemos actualizar estos términos de servicio. Cualquier cambio
              se publicará en esta misma página con su fecha de
              actualización.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">6. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes aplicables en México. Ante
              cualquier controversia, buscaremos primero resolverla
              directamente contigo.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">7. Contacto</h2>
            <p>
              Si tienes dudas sobre estos términos, contáctanos en{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-on-surface hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              o por{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-on-surface hover:underline"
              >
                WhatsApp
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Panel>
  );
}
