import { useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import Panel from "@/components/ui/Panel";
import Button from "@/components/ui/Button";

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
    <Panel>
      <div className="grid grid-cols-1 gap-xl lg:grid-cols-12">
        {/* Columna izquierda: contenido y detalles */}
        <div className="flex flex-col gap-lg lg:col-span-5">
          <div className="space-y-sm">
            <span className="text-label-md font-bold uppercase tracking-widest text-on-surface-variant">
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

          <Card innerBg="bg-surface-container-low">
            <div className="space-y-md p-md">
              <div className="flex items-start gap-sm">
                <div className="rounded-xl bg-white p-xs text-on-surface card-soft-shadow">
                  <Icon name="mail" />
                </div>
                <div>
                  <p className="text-title-lg text-on-surface">Correo electrónico</p>
                  <p className="text-body-md text-on-surface-variant">
                    bryanamezcua@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-sm">
                <div className="rounded-xl bg-white p-xs text-on-surface card-soft-shadow">
                  <Icon name="location_on" />
                </div>
                <div>
                  <p className="text-title-lg text-on-surface">Ubicación</p>
                  <p className="text-body-md text-on-surface-variant">México</p>
                  <p className="text-body-md text-on-surface-variant">
                    Atención remota a todo el país y ubicados en Culiacán, Sinaloa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-sm">
                <div className="rounded-xl bg-white p-xs text-on-surface card-soft-shadow">
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
          </Card>
        </div>

        {/* Columna derecha: formulario */}
        <div className="lg:col-span-7">
          <Card>
            <form onSubmit={handleSubmit} className="space-y-md p-md md:p-lg">
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
                    className="rounded-xl border border-outline-variant p-sm outline-none transition-all focus:border-on-surface focus:ring-2 focus:ring-on-surface/10"
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
                    className="rounded-xl border border-outline-variant p-sm outline-none transition-all focus:border-on-surface focus:ring-2 focus:ring-on-surface/10"
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
                    className="appearance-none rounded-xl border border-outline-variant bg-surface-container-lowest p-sm outline-none transition-all focus:border-on-surface focus:ring-2 focus:ring-on-surface/10"
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
                    className="rounded-xl border border-outline-variant p-sm outline-none transition-all focus:border-on-surface focus:ring-2 focus:ring-on-surface/10"
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
                  className="resize-none rounded-xl border border-outline-variant p-sm outline-none transition-all focus:border-on-surface focus:ring-2 focus:ring-on-surface/10"
                />
              </div>

              <div className="flex items-center gap-sm py-xs">
                <input
                  id="privacy"
                  type="checkbox"
                  required
                  className="size-4 rounded-md border-outline-variant text-on-surface focus:ring-on-surface"
                />
                <label htmlFor="privacy" className="text-body-sm text-on-surface-variant">
                  Acepto el tratamiento de mis datos para fines de contacto.
                </label>
              </div>

              <Button type="submit" className="w-full">
                <span className="inline-flex items-center gap-2">
                  Enviar solicitud
                  <Icon name="arrow_forward" className="text-lg" />
                </span>
              </Button>

              {submitted && (
                <p className="text-body-sm font-semibold text-on-surface">
                  ¡Gracias! Te contactaremos pronto.
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </Panel>
  );
}
