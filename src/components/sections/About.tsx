import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostman,
  SiZod,
  SiGit,
  SiWhatsapp,
  SiFirebase,
} from "react-icons/si";

const points = [
  "Tecnologías modernas: React, TypeScript, Node.js y más",
  "Sitios rápidos, con buen rendimiento y SEO optimizado",
  "Diseño responsivo: se ve bien en cualquier dispositivo",
  "Entregas parciales para que veas avances reales, no solo al final",
  "Integraciones con herramientas que ya usas: WhatsApp, correo, sistemas actuales",
  "Comunicación directa durante todo el desarrollo",
  "Código escalable, mantenible y documentado",
  "Soporte y mejoras después de la entrega",
];

const tools: { label: string; icon: ReactNode; color: string }[] = [
  { label: "React", icon: <SiReact size={22} />, color: "#61DAFB" },
  { label: "TypeScript", icon: <SiTypescript size={22} />, color: "#3178C6" },
  { label: "Tailwind CSS", icon: <SiTailwindcss size={22} />, color: "#06B6D4" },
  { label: "Angular", icon: <SiAngular size={22} />, color: "#DD0031" },
  { label: "Python", icon: <SiPython size={22} />, color: "#3776AB" },
  { label: "Node.js", icon: <SiNodedotjs size={22} />, color: "#5FA04E" },
  { label: "Express", icon: <SiExpress size={22} />, color: "#111111" },
  { label: "MySQL", icon: <SiMysql size={22} />, color: "#4479A1" },
  { label: "Postman", icon: <SiPostman size={22} />, color: "#FF6C37" },
  { label: "Zod", icon: <SiZod size={22} />, color: "#3E67B1" },
  { label: "Git", icon: <SiGit size={22} />, color: "#F05032" },
  { label: "REST APIs", icon: <Icon name="api" className="text-xl" />, color: "#111111" },
  { label: "Baileys", icon: <SiWhatsapp size={22} />, color: "#25D366" },
  { label: "Firebase", icon: <SiFirebase size={22} />, color: "#FFCA28" },
];

export default function About() {
  return (
    <div id="nosotros" className="flex flex-col gap-xl">
      <div className="grid grid-cols-1 items-center gap-xl lg:grid-cols-2">
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
              <li
                key={point}
                className="flex items-start gap-sm text-body-sm text-on-surface-variant"
              >
                <Icon name="check_circle" className="mt-0.5 shrink-0 text-on-surface" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-md">

          <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-surface-container-low p-md">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-on-surface">
              <Icon name="location_on" className="text-xl" />
            </div>
            <p className="text-body-sm text-on-surface-variant">
              Con base en{" "}
              <span className="font-semibold text-on-surface">Culiacán, Sinaloa</span>,
              atendemos proyectos en todo México.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-md">
        <span className="text-label-md font-semibold uppercase tracking-widest text-on-surface-variant">
          Tecnologías que usamos
        </span>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
          {tools.map((tool) => (
            <div
              key={tool.label}
              className="card-soft-shadow flex flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center transition-transform hover:-translate-y-1"
            >
              <span style={{ color: tool.color }}>{tool.icon}</span>
              <span className="text-label-md font-medium text-on-surface-variant">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
