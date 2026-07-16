import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Cta() {
  return (
    <section className="py-xl">
      <Container>
        <div className="shell-shadow relative flex flex-col items-center gap-md overflow-hidden rounded-[2.5rem] bg-primary-container px-md py-xl text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(255,255,255,0.08),_transparent_50%)]"
            aria-hidden="true"
          />
          <h2 className="max-w-[36rem] text-headline-md text-on-primary">
            ¿Tienes un proyecto en mente? Hagámoslo realidad.
          </h2>
          <p className="max-w-[32rem] text-body-md text-on-primary-container">
            Cuéntanos qué necesita tu negocio y te ayudamos a construir la
            solución adecuada.
          </p>
          <Button as="link" to="/contacto">
            Cotiza tu proyecto
            <Icon name="arrow_forward" className="ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
