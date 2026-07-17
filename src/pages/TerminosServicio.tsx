import Panel from "@/components/ui/Panel";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TerminosServicio() {
  return (
    <Panel>
      <div className="mx-auto flex max-w-3xl flex-col gap-xl">
        <SectionHeading
          align="left"
          eyebrow="Legal"
          title="Términos de servicio"
          description="Última actualización: julio de 2026."
        />

        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-md py-sm text-body-sm text-amber-800">
          Estos términos son una plantilla general de referencia y no
          sustituyen asesoría legal. Antes de publicarlos de forma
          definitiva, te recomendamos que los revise un abogado y que cada
          proyecto se respalde además con un contrato o propuesta firmada.
        </div>

        <div className="flex flex-col gap-lg text-body-md leading-relaxed text-on-surface-variant">
          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">1. Aceptación de los términos</h2>
            <p>
              Al contactarnos o contratar nuestros servicios, aceptas los
              presentes términos. Si no estás de acuerdo con ellos, te
              pedimos no contratar nuestros servicios.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">2. Servicios que ofrecemos</h2>
            <p>
              Nabure Systems desarrolla software a la medida, incluyendo
              sistemas administrativos, sitios web, puntos de venta y
              automatización de WhatsApp, entre otros proyectos a solicitud
              del cliente.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">3. Cotización y proceso de trabajo</h2>
            <p>
              Cada proyecto inicia con una plática para entender tus
              necesidades, seguida de una propuesta con alcance, tiempos y
              costo. El desarrollo comienza una vez que ambas partes acuerdan
              la propuesta. Los precios mostrados en este sitio son de
              referencia; el costo final de cada proyecto se confirma en la
              cotización correspondiente.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">4. Pagos</h2>
            <p>
              Las condiciones de pago (anticipos, pagos parciales o
              suscripción mensual, según el tipo de servicio) se acuerdan en
              cada cotización antes de iniciar el proyecto.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">5. Propiedad del proyecto</h2>
            <p>
              Una vez cubierto el pago acordado, el código desarrollado
              específicamente para tu proyecto te pertenece. Las
              herramientas, librerías o componentes de terceros utilizados en
              el desarrollo se rigen por sus propias licencias.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">6. Soporte y garantía</h2>
            <p>
              Ofrecemos soporte posterior a la entrega según lo acordado en
              cada proyecto o plan de suscripción. Los ajustes fuera del
              alcance original se cotizan por separado.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">7. Limitación de responsabilidad</h2>
            <p>
              Trabajamos para entregar sistemas funcionales y confiables,
              pero no garantizamos que el software esté completamente libre
              de errores. No somos responsables por pérdidas indirectas
              derivadas del uso del sistema fuera de lo especificado en la
              propuesta del proyecto.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">8. Cambios a estos términos</h2>
            <p>
              Podemos actualizar estos términos de servicio. Cualquier cambio
              se publicará en esta misma página con su fecha de
              actualización.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">9. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes aplicables en México. Ante
              cualquier controversia, buscaremos primero resolverla
              directamente contigo.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">10. Contacto</h2>
            <p>
              Si tienes dudas sobre estos términos, contáctanos en{" "}
              <a href="mailto:bryanamezcua@gmail.com" className="font-semibold text-on-surface hover:underline">
                bryanamezcua@gmail.com
              </a>{" "}
              o por WhatsApp al +52 667 150 5736.
            </p>
          </section>
        </div>
      </div>
    </Panel>
  );
}
