import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const trustBadges = ["Cotización gratuita", "Respuesta en 24h", "Soporte en español"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F6FFF] via-[#2f8dff] to-[#22d3ff]">
      {/* Floating decorative shapes */}
      <Icon
        name="send"
        className="pointer-events-none absolute left-[8%] top-16 hidden rotate-[18deg] text-4xl text-white/25 md:block"
      />
      <Icon
        name="bolt"
        className="pointer-events-none absolute right-[12%] top-24 hidden text-3xl text-white/25 lg:block"
      />
      <span className="pointer-events-none absolute left-[18%] top-40 hidden size-3 rounded-full bg-white/40 md:block" />
      <span className="pointer-events-none absolute right-[20%] top-16 hidden size-4 rounded-full bg-white/30 lg:block" />
      <Icon
        name="stars"
        className="pointer-events-none absolute right-[6%] bottom-24 hidden text-3xl text-white/25 md:block"
      />

      <Container className="relative flex flex-col items-center py-xl text-center">
        <h1 className="mt-md max-w-3xl text-display-xl text-white">
          Construimos el sistema que tu negocio necesita
        </h1>

        <p className="mt-md max-w-2xl text-body-lg text-white/85">
          Sitios web, puntos de venta, automatización de WhatsApp y sistemas
          administrativos a la medida, sin importar el giro de tu empresa.
        </p>

        <div className="mt-lg flex flex-col gap-sm sm:flex-row">
          <Button as="link" to="/contacto" className="bg-white text-secondary shadow-xl hover:bg-white/90">
            Cotiza tu proyecto
            <Icon name="arrow_forward" />
          </Button>
          <Button
            as="link"
            to="/servicios"
            variant="secondary"
            className="border-white/40 bg-white/10 text-white hover:border-white hover:bg-white/20 hover:text-white"
          >
            Ver servicios
          </Button>
        </div>

        <div className="mt-lg flex flex-wrap items-center justify-center gap-sm">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-white/15 px-sm py-1 text-body-sm text-white backdrop-blur"
            >
              {badge}
            </span>
          ))}
        </div>
      </Container>

      <svg
        viewBox="0 0 1440 80"
        fill="none"
        className="block w-full text-surface"
        preserveAspectRatio="none"
      >
        <path d="M0 40 C 360 90 1080 -10 1440 40 L1440 80 L0 80 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
