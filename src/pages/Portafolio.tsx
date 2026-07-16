import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Panel from "@/components/ui/Panel";

export default function Portafolio() {
  return (
    <Panel>
      <div className="flex min-h-[40vh] flex-col items-center justify-center gap-md text-center">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-surface-container-low text-on-surface">
          <Icon name="deployed_code" className="text-3xl" />
        </div>
        <span className="text-label-md font-bold uppercase tracking-widest text-on-surface-variant">
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
      </div>
    </Panel>
  );
}
