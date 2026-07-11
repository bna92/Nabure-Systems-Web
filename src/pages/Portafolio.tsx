import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

export default function Portafolio() {
  return (
    <Container className="flex flex-col items-center gap-md py-xl text-center">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary-container text-white">
        <Icon name="deployed_code" className="text-3xl" />
      </div>
      <span className="text-label-md font-bold uppercase tracking-widest text-secondary">
        Portafolio
      </span>
      <h1 className="text-headline-md text-on-surface">
        Estamos preparando esta sección
      </h1>
      <p className="max-w-[28rem] text-body-md text-on-surface-variant">
        Muy pronto encontrarás aquí los proyectos que hemos desarrollado.
        Mientras tanto, cuéntanos sobre el tuyo.
      </p>
      <Button as="link" to="/contacto">
        Cotiza tu proyecto
      </Button>
    </Container>
  );
}
