import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Panel from "@/components/ui/Panel";
import Reveal from "@/components/ui/Reveal";
import { pricingGroups, type PricingTier } from "@/data/pricing";

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
 


      {pricingGroups.map((group) => (
        <div
          key={group.id}
          id={group.id}
          className="flex scroll-mt-28 flex-col gap-xl border-t border-outline-variant pt-xl"
        >
          <SectionHeading
            title={group.eyebrow}
            description={`${group.title}. ${group.description}`}
          />

          <div className="grid grid-cols-1 gap-lg lg:grid-cols-3">
            {group.tiers.map((tier, index) => (
              <Reveal
                key={tier.id}
                delayMs={index * 100}
                className={group.tiers.length === 1 ? "lg:col-start-2" : ""}
              >
                <Card
                  hover
                  innerBg={tier.tintClass}
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
                      <p className="mt-1 text-body-sm text-on-surface-variant">
                        {tier.description}
                      </p>
                    </div>

                    <div>
                      <span className="text-display-lg text-on-surface">{tier.price}</span>
                      <p className="text-body-sm text-on-surface-variant">{tier.billing}</p>
                    </div>

                    <Button
                      as="link"
                      to={`/contacto?mensaje=${encodeURIComponent(tier.contactMessage)}`}
                      variant="primary"
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
              </Reveal>
            ))}
          </div>
        </div>
      ))}

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
