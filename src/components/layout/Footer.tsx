import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import Container from "@/components/ui/Container";
import logoFull from "@/assets/brand/Nabure_Systems_Logo_Transparente_2.png";
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from "@/data/site";

const legalLinks = [
  { label: "Aviso de privacidad", to: "/aviso-privacidad" },
  { label: "Términos de servicio", to: "/terminos-servicio" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-xl w-full border-t border-on-primary-container/20 bg-primary-container">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-lg px-md py-sm md:grid-cols-3 md:px-xl">
        <div className="space-y-md">
          <img src={logoFull} alt="Nabure Systems" className="w-[180px] md:w-[220px]" />
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
          <div className="flex items-center">
            <p className="text-label-md font-bold uppercase tracking-wider text-on-primary-fixed">
              Contacto directo
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Escríbenos por WhatsApp"
              className="ml-4 flex size-7 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-90"
            >
              <SiWhatsapp size={17} />
            </a>
          </div>

          <p className="text-body-sm text-on-primary-container">{CONTACT_EMAIL}</p>
        </div>


      </div>

      <Container className="flex flex-col items-center justify-between gap-sm border-t border-on-primary-container/10 py-sm md:flex-row">
        <p className="text-body-sm text-on-primary-container opacity-80">
          © {year} Nabure Systems. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
