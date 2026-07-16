import Panel from "@/components/ui/Panel";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Panel>
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-md px-md text-center">
        <span className="text-label-md font-bold uppercase tracking-widest text-on-surface-variant">
          Error 404
        </span>
        <h1 className="text-headline-md text-on-surface">Esta página no existe</h1>
        <p className="max-w-[28rem] text-body-md text-on-surface-variant">
          Puede que el enlace esté roto o la página se haya movido.
        </p>
        <Button as="link" to="/">
          Volver al inicio
        </Button>
      </div>
    </Panel>
  );
}
