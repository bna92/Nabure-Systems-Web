import { useState, type FormEvent } from "react";
import { SiWhatsapp } from "react-icons/si";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import Panel from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from "@/data/site";

const projectTypes = [
  "Software a medida",
  "Desarrollo web",
  "Sistemas POS",
  "Automatización de WhatsApp",
  "Sistema administrativo",
  "Otro",
];

const WHATSAPP_MESSAGE = "Hola, me gustaría cotizar un proyecto con Nabure Systems.";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function Contacto() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "Nueva solicitud de cotización — Nabure Systems",
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Panel>
      <div className="grid grid-cols-1 gap-xl lg:grid-cols-12">
        {/* Columna izquierda: contenido y detalles */}
        <div className="flex flex-col gap-lg lg:col-span-5">
          <div className="space-y-sm">

            <h1 className="text-display-lg text-on-surface">
              Hablemos de tu proyecto
            </h1>

          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-lg py-sm text-body-md font-semibold text-white transition-opacity hover:opacity-90"
          >
            <SiWhatsapp size={20} />
            Escríbenos por WhatsApp
          </a>

          <Card innerBg="bg-surface-container-low">
            <div className="space-y-md p-md">
              <div className="flex items-start gap-sm">
                <div className="rounded-xl bg-white p-xs text-on-surface card-soft-shadow">
                  <Icon name="mail" />
                </div>
                <div>
                  <p className="text-title-lg text-on-surface">Correo electrónico</p>
                  <p className="text-body-md text-on-surface-variant">{CONTACT_EMAIL}</p>
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
                    Lunes a domingo: 09:00 - 18:00
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
                    Empresa / organización <span className="normal-case text-outline">(Opcional)</span>
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

              <Button type="submit" className="w-full" disabled={status === "sending"}>
                <span className="inline-flex items-center gap-2">
                  {status === "sending" ? "Enviando..." : "Enviar solicitud"}
                  <Icon name="arrow_forward" className="text-lg" />
                </span>
              </Button>

              {status === "success" && (
                <p className="text-body-sm font-semibold text-on-surface">
                  ¡Gracias! Te contactaremos pronto.
                </p>
              )}

              {status === "error" && (
                <p className="text-body-sm font-semibold text-red-600">
                  Hubo un problema al enviar tu solicitud. Intenta de nuevo o
                  escríbenos por WhatsApp.
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </Panel>
  );
}
