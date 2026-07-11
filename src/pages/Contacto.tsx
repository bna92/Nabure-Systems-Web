import { useState, type FormEvent } from "react";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

const projectTypes = [
  "Software a medida",
  "Desarrollo web",
  "Sistemas POS",
  "Automatización de WhatsApp",
  "Sistema administrativo",
  "Otro",
];

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: conectar a un servicio de envío de correo o backend real.
    setSubmitted(true);
  }

  return (
    <Container className="py-xl">
      <div className="grid grid-cols-1 gap-xl lg:grid-cols-12">
        {/* Columna izquierda: contenido y detalles */}
        <div className="flex flex-col gap-lg lg:col-span-5">
          <div className="space-y-sm">
            <span className="text-label-md font-bold uppercase tracking-widest text-secondary">
              Hablemos de su proyecto
            </span>
            <h1 className="text-display-lg text-on-surface">
              Soluciones tecnológicas a medida para su empresa.
            </h1>
            <p className="max-w-[28rem] text-body-lg text-on-surface-variant">
              En Nabure Systems transformamos ideas de negocio en sistemas
              reales y escalables. Cuéntanos qué necesitas y te contactamos
              para platicarlo.
            </p>
          </div>

          <div className="space-y-md rounded-3xl border border-outline-variant bg-surface-container-lowest p-md">
            <div className="flex items-start gap-sm">
              <div className="rounded-xl bg-secondary-container p-xs text-white">
                <Icon name="mail" />
              </div>
              <div>
                <p className="text-title-lg text-on-surface">Correo electrónico</p>
                <p className="text-body-md text-on-surface-variant">
                  contacto@naburesystems.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-sm">
              <div className="rounded-xl bg-secondary-container p-xs text-white">
                <Icon name="location_on" />
              </div>
              <div>
                <p className="text-title-lg text-on-surface">Ubicación</p>
                <p className="text-body-md text-on-surface-variant">México</p>
                <p className="text-body-md text-on-surface-variant">
                  Atención remota a todo el país
                </p>
              </div>
            </div>

            <div className="flex items-start gap-sm">
              <div className="rounded-xl bg-secondary-container p-xs text-white">
                <Icon name="schedule" />
              </div>
              <div>
                <p className="text-title-lg text-on-surface">Horario de atención</p>
                <p className="text-body-md text-on-surface-variant">
                  Lunes a viernes: 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-outline-variant bg-white p-md shadow-sm md:p-lg">
            <form onSubmit={handleSubmit} className="space-y-md">
              <div className="grid grid-cols-1 gap-md md:grid-cols-2">
                <div className="flex flex-col gap-base">
                  <label
                    htmlFor="name"
                    className="text-label-md uppercase text-on-surface-variant"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    className="rounded-xl border border-outline-variant p-sm outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
                <div className="flex flex-col gap-base">
                  <label
                    htmlFor="email"
                    className="text-label-md uppercase text-on-surface-variant"
                  >
                    Correo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="juan@empresa.com"
                    className="rounded-xl border border-outline-variant p-sm outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-md md:grid-cols-2">
                <div className="flex flex-col gap-base">
                  <label
                    htmlFor="projectType"
                    className="text-label-md uppercase text-on-surface-variant"
                  >
                    Tipo de proyecto
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue={projectTypes[0]}
                    className="appearance-none rounded-xl border border-outline-variant bg-surface-container-lowest p-sm outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  >
                    {projectTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-base">
                  <label
                    htmlFor="company"
                    className="text-label-md uppercase text-on-surface-variant"
                  >
                    Empresa / organización
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="rounded-xl border border-outline-variant p-sm outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-base">
                <label
                  htmlFor="message"
                  className="text-label-md uppercase text-on-surface-variant"
                >
                  Necesidades del negocio
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe brevemente lo que necesitas resolver..."
                  className="resize-none rounded-xl border border-outline-variant p-sm outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </div>

              <div className="flex items-center gap-sm py-xs">
                <input
                  id="privacy"
                  type="checkbox"
                  required
                  className="size-4 rounded-md border-outline-variant text-secondary focus:ring-secondary"
                />
                <label htmlFor="privacy" className="text-body-sm text-on-surface-variant">
                  Acepto el tratamiento de mis datos para fines de contacto.
                </label>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-sm rounded-full bg-secondary py-md text-body-md font-bold text-white shadow-lg shadow-secondary/20 transition-all hover:bg-on-secondary-fixed-variant active:scale-[0.98]"
              >
                Enviar solicitud
                <Icon name="arrow_forward" />
              </button>

              {submitted && (
                <p className="text-body-sm text-secondary">
                  ¡Gracias! Te contactaremos pronto.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
