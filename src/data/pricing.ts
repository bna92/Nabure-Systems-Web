export interface PricingTier {
  id: string;
  name: string;
  price: string;
  billing: string;
  badge?: string;
  badgeTone: "green" | "blue" | "amber";
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

// NOTE: precios de ejemplo — reemplázalos por tus tarifas reales antes de publicar.
export const posPricingTiers: PricingTier[] = [
  {
    id: "basico",
    name: "Básico",
    price: "$999",
    billing: "MXN / mes (ejemplo)",
    badgeTone: "green",
    description: "Para un negocio con un solo punto de venta.",
    features: [
      "1 punto de venta",
      "Control de inventario",
      "Reportes de ventas",
      "Corte de caja diario",
      "Soporte por correo",
    ],
    cta: "Empezar",
  },
  {
    id: "profesional",
    name: "Profesional",
    price: "$1,899",
    billing: "MXN / mes (ejemplo)",
    badge: "Más popular",
    badgeTone: "blue",
    description: "Para negocios con varias sucursales o cajas.",
    features: [
      "Hasta 3 puntos de venta",
      "Multi-usuario con roles y permisos",
      "Reportes avanzados",
      "Sincronización en tiempo real",
      "Soporte prioritario",
    ],
    cta: "Elegir Profesional",
    highlighted: true,
  },
  {
    id: "empresarial",
    name: "Empresarial",
    price: "Personalizado",
    billing: "Cotización a la medida",
    badgeTone: "amber",
    description: "Para cadenas con necesidades específicas.",
    features: [
      "Puntos de venta ilimitados",
      "Integraciones a medida",
      "Dashboard multi-sucursal",
      "Soporte dedicado",
    ],
    cta: "Hablar con ventas",
  },
];
