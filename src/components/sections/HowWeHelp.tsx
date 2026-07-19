import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Link } from "react-router-dom";
import {
  CustomSoftwareIllustration,
  WebsiteIllustration,
  PosIllustration,
  WhatsappIllustration,
} from "@/components/illustrations";

const rows = [
  {
    id: "sistemas",
    title: "Software que se adapta a ti, no al revés",
    description:
      "Nada de forzar tu operación a encajar en una plantilla genérica. Construimos el sistema alrededor de cómo ya trabajas.",
    link: "/servicios#sistemas-empresariales",
    Illustration: CustomSoftwareIllustration,
  },
  {
    id: "web",
    title: "Un sitio web que representa tu marca",
    description:
      "Rápido, responsivo y fácil de administrar, sin importar si vendes ropa, servicios profesionales o comida.",
    link: "/servicios#sitios-web",
    Illustration: WebsiteIllustration,
  },
  {
    id: "pos",
    title: "Vende y controla tu inventario en un solo lugar",
    description:
      "Un punto de venta pensado para tu negocio, con reportes claros y la opción de contratarlo como suscripción mensual.",
    link: "/servicios#puntos-de-venta",
    Illustration: PosIllustration,
  },
  {
    id: "whatsapp",
    title: "Atiende a tus clientes sin estar pegado al celular",
    description:
      "Automatiza respuestas, seguimiento y notificaciones en WhatsApp, sin perder el toque humano cuando importa.",
    link: "/servicios#automatizacion-whatsapp",
    Illustration: WhatsappIllustration,
  },
];

export default function HowWeHelp() {
  return (
    <div className="flex flex-col gap-xl">
      <SectionHeading
        eyebrow="Cómo te ayudamos"
        title="Cada paso hacia tu solución ideal"
        description="La creación de tu sistema es solo el comienzo: te acompañamos en todo el camino."
      />

      <div className="flex flex-col gap-xl">
        {rows.map((row, index) => (
          <Reveal key={row.id} delayMs={100}>
            <div
              className={`grid grid-cols-1 items-center gap-lg lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <row.Illustration className="mx-auto w-full max-w-[22rem]" />
              <div className="flex flex-col gap-sm">
                <h3 className="text-headline-sm text-on-surface">{row.title}</h3>
                <p className="text-body-md text-on-surface-variant">{row.description}</p>
                <Link
                  to={row.link}
                  className="mt-1 inline-flex w-fit items-center gap-1 text-body-sm font-semibold text-on-surface hover:underline"
                >
                  Conoce más →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
