import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-md px-md text-center">
      <span className="text-label-md font-bold uppercase tracking-widest text-secondary">
        Error 404
      </span>
      <h1 className="text-headline-md text-on-surface">Esta página no existe</h1>
      <p className="max-w-[28rem] text-body-md text-on-surface-variant">
        Puede que el enlace esté roto o la página se haya movido.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-lg py-sm text-body-md font-bold text-white shadow-lg shadow-secondary/20 transition-all hover:bg-on-secondary-fixed-variant"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
