import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { CustomSoftwareIllustration } from "@/components/illustrations";

const featureList = [
  { icon: "tune", label: "Desarrollo pensado para tu negocio" },
  { icon: "support_agent", label: "Soporte continuo" },
  { icon: "bolt", label: "Entrega ágil" },
];

export default function Highlights() {
  return (
    <section className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      {/* Column 1: feature list — shown last on mobile, first on desktop */}
      <Card hover className="order-3 md:order-1">
        <div className="flex h-full flex-col gap-8 p-5 md:p-6">
          <div className="relative h-40 overflow-hidden rounded-2xl bg-surface-container-low">
            <CustomSoftwareIllustration className="h-full w-full scale-125" />
            <div className="card-soft-shadow absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-on-surface backdrop-blur-sm">
              <Icon name="auto_awesome" className="text-xl" />
            </div>
          </div>
          <ul className="mt-auto flex w-full flex-col text-body-sm font-medium text-on-surface">
            {featureList.map((item, index) => (
              <li
                key={item.label}
                className={`group flex cursor-default items-center gap-3 py-3 ${
                  index < featureList.length - 1 ? "border-b border-surface-container-high" : ""
                }`}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-container-low text-on-surface">
                  <Icon name={item.icon} className="text-base" />
                </span>
                <span className="tracking-tight text-on-surface-variant transition-colors group-hover:text-on-surface">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {/* Column 2: highlight quote — shown first on mobile */}
      <Card
        innerBg="bg-surface-container-low"
        className="group/hl order-1 overflow-hidden md:order-2"
      >
        <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
          <h3 className="relative z-10 mt-1 pr-2 text-4xl font-medium leading-[1.1] tracking-tighter text-on-surface transition-transform duration-500 ease-out group-hover/hl:translate-x-2 md:mt-4 md:text-5xl lg:text-[3rem]">
            Construimos el sistema más sólido para hacer crecer tu negocio
          </h3>
        </div>
      </Card>

      {/* Column 3: mission & commitment — shown second on mobile */}
      <div className="order-2 flex flex-col justify-between gap-6 md:order-3 md:gap-8">
        <Card hover>
          <div className="flex h-full items-center gap-5 p-5  md:p-6">
            <div className="flex size-[100px] shrink-0 items-center justify-center rounded-2xl bg-surface-container-low">
              <Icon name="flag" className="text-4xl text-on-surface" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-label-md font-semibold uppercase tracking-widest text-on-surface-variant">
                Misión //
              </h4>
              <p className="pr-2 text-body-sm font-medium leading-relaxed text-on-surface-variant">
                Que cualquier negocio, sin importar su tamaño, tenga acceso a
                software hecho a su medida.
              </p>
            </div>
          </div>
        </Card>

        <Card hover>
          <div className="flex h-full items-center gap-5 p-5">
            <div className="flex size-[100px] shrink-0 items-center justify-center rounded-2xl bg-surface-container-low">
              <Icon name="handshake" className="text-4xl text-on-surface" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-label-md font-semibold uppercase tracking-widest text-on-surface-variant">
                Compromiso
              </h4>
              <p className="pr-2 text-body-sm font-medium leading-relaxed text-on-surface-variant">
                Acompañarte de principio a fin, con soporte real después de
                la entrega.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
