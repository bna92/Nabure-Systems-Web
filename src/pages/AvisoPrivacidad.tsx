import Panel from "@/components/ui/Panel";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AvisoPrivacidad() {
  return (
    <Panel>
      <div className="mx-auto flex max-w-3xl flex-col gap-xl">
        <SectionHeading
          align="left"
          eyebrow="Legal"
          title="Aviso de privacidad"
          description="Última actualización: julio de 2026."
        />

        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-md py-sm text-body-sm text-amber-800">
          Este aviso es una plantilla general de referencia y no sustituye
          asesoría legal. Antes de publicarlo de forma definitiva, te
          recomendamos que lo revise un abogado para asegurar que cumple con
          la Ley Federal de Protección de Datos Personales en Posesión de los
          Particulares.
        </div>

        <div className="flex flex-col gap-lg text-body-md leading-relaxed text-on-surface-variant">
          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">1. Responsable de tus datos</h2>
            <p>
              Nabure Systems ("nosotros"), con contacto en{" "}
              <a href="mailto:bryanamezcua@gmail.com" className="font-semibold text-on-surface hover:underline">
                bryanamezcua@gmail.com
              </a>
              , es responsable del tratamiento de los datos personales que nos
              proporciones a través de este sitio web.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">2. Datos que recabamos</h2>
            <p>A través de nuestro formulario de contacto podemos recabar:</p>
            <ul className="flex flex-col gap-2 pl-1">
              <li className="flex items-start gap-2">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-on-surface-variant" />
                Nombre completo
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-on-surface-variant" />
                Correo electrónico
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-on-surface-variant" />
                Nombre de tu empresa u organización (opcional)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-on-surface-variant" />
                Tipo de proyecto en el que estás interesado
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-on-surface-variant" />
                El mensaje o descripción que nos compartas sobre tu proyecto
              </li>
            </ul>
            <p>No recabamos datos financieros ni datos personales sensibles.</p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">3. Para qué usamos tus datos</h2>
            <p>Utilizamos tus datos personales únicamente para:</p>
            <ul className="flex flex-col gap-2 pl-1">
              <li className="flex items-start gap-2">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-on-surface-variant" />
                Responder a tu solicitud de contacto o cotización
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-on-surface-variant" />
                Dar seguimiento a tu proyecto en caso de contratar nuestros servicios
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-on-surface-variant" />
                Comunicarnos contigo sobre el estatus de tu solicitud
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">4. Con quién compartimos tus datos</h2>
            <p>
              No vendemos ni compartimos tus datos personales con terceros
              para fines de mercadotecnia. Solo los compartiríamos si así lo
              exige una autoridad competente conforme a la ley.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">5. Tus derechos ARCO</h2>
            <p>
              Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al uso
              de tus datos personales (derechos ARCO). Para ejercerlos,
              escríbenos a{" "}
              <a href="mailto:bryanamezcua@gmail.com" className="font-semibold text-on-surface hover:underline">
                bryanamezcua@gmail.com
              </a>{" "}
              indicando tu nombre y la solicitud específica. Responderemos en
              un plazo razonable.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">6. Cambios a este aviso</h2>
            <p>
              Podemos actualizar este aviso de privacidad. Cualquier cambio se
              publicará en esta misma página con su fecha de actualización.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="text-title-lg text-on-surface">7. Contacto</h2>
            <p>
              Si tienes dudas sobre este aviso de privacidad, contáctanos en{" "}
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
