import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Panel from "@/components/ui/Panel";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { posPricingTiers, type PricingTier } from "@/data/pricing";

const badges: Record<string, string> = {
  "sitios-web": "Más solicitado",
};

const badgeToneClasses: Record<PricingTier["badgeTone"], string> = {
  green: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  amber: "bg-amber-100 text-amber-700",
};

export default function Servicios() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <Panel className="flex flex-col gap-xl">
      <SectionHeading
        eyebrow="Servicios"
        title="Soluciones a la medida para cada necesidad"
        description="Desde una idea hasta un sistema en producción: cubrimos todo el ciclo de desarrollo de tu proyecto."
      />

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.id} delayMs={(index % 3) * 100}>
            <Card hover className="relative">
              {badges[service.id] && (
                <span className="absolute -top-3 left-lg z-10 rounded-full bg-emerald-100 px-sm py-1 text-label-md font-bold text-emerald-700">
                  {badges[service.id]}
                </span>
              )}
              <div className="flex h-full flex-col gap-sm p-lg">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-container-low text-on-surface">
                  <Icon name={service.icon} className="text-2xl" />
                </div>
                <h3 className="text-title-lg text-on-surface">{service.title}</h3>
                <p className="text-body-sm text-on-surface-variant">{service.description}</p>
                <ul className="mt-2 flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-body-sm text-on-surface-variant"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-on-surface" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.id === "puntos-de-venta" && (
                  <a
                    href="#precios"
                    className="mt-1 inline-flex w-fit items-center gap-1 text-body-sm font-semibold text-on-surface hover:underline"
                  >
                    Ver planes mensuales →
                  </a>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div id="precios" className="flex scroll-mt-28 flex-col gap-xl border-t border-outline-variant pt-xl">
        <SectionHeading
          eyebrow="Precios"
          title="Tu punto de venta, como suscripción mensual"
          description="Sin instalación compleja ni pagos grandes de entrada: elige el plan que se ajuste al tamaño de tu negocio."
        />

        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-md py-sm text-center text-body-sm text-amber-800">
          Los precios que ves aquí son de ejemplo, en lo que definimos tus
          tarifas reales.
        </div>

        <div className="grid grid-cols-1 gap-lg lg:grid-cols-3">
          {posPricingTiers.map((tier) => (
            <Card
              key={tier.id}
              hover
              className={tier.highlighted ? "ring-2 ring-[#111] ring-offset-2" : ""}
            >
              <div className="relative flex h-full flex-col gap-md p-lg">
                {tier.badge && (
                  <span
                    className={`absolute -top-3 left-lg rounded-full px-sm py-1 text-label-md font-bold ${badgeToneClasses[tier.badgeTone]}`}
                  >
                    {tier.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-title-lg text-on-surface">{tier.name}</h3>
                  <p className="mt-1 text-body-sm text-on-surface-variant">{tier.description}</p>
                </div>

                <div>
                  <span className="text-display-lg text-on-surface">{tier.price}</span>
                  <p className="text-body-sm text-on-surface-variant">{tier.billing}</p>
                </div>

                <Button
                  as="link"
                  to="/contacto"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>

                <ul className="flex flex-col gap-2 border-t border-outline-variant pt-md">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-body-sm text-on-surface-variant"
                    >
                      <Icon name="check_circle" className="mt-0.5 shrink-0 text-on-surface" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-md rounded-[2rem] bg-surface-container-low px-md py-lg text-center">
        <h2 className="text-headline-sm text-on-surface">
          ¿No encuentras lo que necesitas?
        </h2>
        <p className="max-w-[28rem] text-body-md text-on-surface-variant">
          Cuéntanos tu idea y te ayudamos a definir la solución adecuada, sin
          compromiso.
        </p>
        <Button as="link" to="/contacto">
          Cotiza tu proyecto
        </Button>
      </div>
    </Panel>
  );
}
