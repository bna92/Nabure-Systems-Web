import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import logoMark from "@/assets/brand/mark-badge-small.png";

const serviceLinks = [
  { label: "Sistemas a la medida", to: "/servicios" },
  { label: "Sitios web", to: "/servicios" },
  { label: "Puntos de venta", to: "/servicios" },
  { label: "Automatización de WhatsApp", to: "/servicios" },
  { label: "Planes y precios", to: "/precios" },
];

const legalLinks = [
  { label: "Aviso de privacidad", to: "/contacto" },
  { label: "Términos de servicio", to: "/contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-xl w-full border-t border-on-primary-container/20 bg-primary-container">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-lg px-md py-xl md:grid-cols-4 md:px-xl">
        <div className="space-y-sm">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="Nabure Systems" className="size-9 rounded-xl" />
            <p className="text-headline-sm font-bold text-on-primary">Nabure Systems</p>
          </div>
          <p className="text-body-sm leading-relaxed text-on-primary-container">
            Ingeniería de software a la medida para empresas que buscan
            resolver sus procesos con tecnología.
          </p>
        </div>

        <div className="space-y-sm">
          <p className="text-label-md font-bold uppercase tracking-wider text-on-primary-fixed">
            Servicios
          </p>
          <nav className="flex flex-col gap-base">
            {serviceLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-body-sm text-on-primary-container transition-colors hover:text-on-primary hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-sm">
          <p className="text-label-md font-bold uppercase tracking-wider text-on-primary-fixed">
            Legal
          </p>
          <nav className="flex flex-col gap-base">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-body-sm text-on-primary-container transition-colors hover:text-on-primary hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-sm">
          <p className="text-label-md font-bold uppercase tracking-wider text-on-primary-fixed">
            Contacto directo
          </p>
          <div className="flex flex-col gap-base">
            <p className="text-body-sm text-on-primary-container">
              contacto@naburesystems.com
            </p>
            <p className="text-body-sm text-on-primary-container">
              +52 000 000 0000
            </p>
          </div>
          <div className="flex gap-sm pt-sm">
            <a
              href="#"
              aria-label="Redes sociales"
              className="text-on-primary-container transition-opacity hover:text-on-primary"
            >
              <Icon name="share" />
            </a>
            <a
              href="#"
              aria-label="Sitio web"
              className="text-on-primary-container transition-opacity hover:text-on-primary"
            >
              <Icon name="public" />
            </a>
          </div>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-between gap-sm border-t border-on-primary-container/10 py-md md:flex-row">
        <p className="text-body-sm text-on-primary-container opacity-80">
          © {year} Nabure Systems. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
