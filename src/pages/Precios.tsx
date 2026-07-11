import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { posPricingTiers, type PricingTier } from "@/data/pricing";

const badgeToneClasses: Record<PricingTier["badgeTone"], string> = {
  green: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  amber: "bg-amber-100 text-amber-700",
};

export default function Precios() {
  return (
    <Container className="flex flex-col gap-xl py-xl">
      <SectionHeading
        eyebrow="Precios"
        title="Tu punto de venta, como suscripción mensual"
        description="Sin instalación compleja ni pagos grandes de entrada: elige el plan que se ajuste al tamaño de tu negocio."
      />

      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-md py-sm text-center text-body-sm text-amber-800">
        Los precios que ves aquí son de ejemplo, en lo que definimos tus
        tarifas reales.
      </div>

      <div className="grid gap-lg lg:grid-cols-3">
        {posPricingTiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative flex flex-col gap-md rounded-3xl border-2 bg-white p-lg shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
              tier.highlighted ? "border-secondary" : "border-outline-variant"
            }`}
          >
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
                <li key={feature} className="flex items-start gap-2 text-body-sm text-on-surface-variant">
                  <Icon name="check_circle" className="mt-0.5 shrink-0 text-secondary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-md rounded-3xl border border-outline-variant bg-surface-container-lowest px-md py-lg text-center">
        <h2 className="text-headline-sm text-on-surface">
          ¿Necesitas otro de nuestros servicios como suscripción?
        </h2>
        <p className="max-w-[28rem] text-body-md text-on-surface-variant">
          También podemos ofrecer la automatización de WhatsApp u otros
          sistemas como plan mensual. Cuéntanos qué necesitas.
        </p>
        <Button as="link" to="/contacto">
          Hablar con nosotros
        </Button>
      </div>
    </Container>
  );
}
