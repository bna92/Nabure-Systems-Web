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
  tintClass: string;
}

export interface PricingGroup {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tiers: PricingTier[];
}

// NOTE: precios de ejemplo — reemplázalos por tus tarifas reales antes de publicar.
export const pricingGroups: PricingGroup[] = [
  {
    id: "puntos-de-venta",
    eyebrow: "Puntos de venta",
    title: "Tu punto de venta, como suscripción mensual",
    description:
      "Sin instalación compleja ni pagos grandes de entrada: elige el plan que se ajuste al tamaño de tu negocio.",
    tiers: [
      {
        id: "pos-basico",
        name: "Básico",
        price: "$499",
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
        tintClass: "bg-blue-800/2",
      },
      {
        id: "pos-profesional",
        name: "Profesional",
        price: "$1,699",
        billing: "MXN / mes (ejemplo)",
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
        tintClass: "bg-red-800/2",
      },
      {
        id: "pos-empresarial",
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
        tintClass: "bg-green-800/2",
      },
    ],
  },
  {
    id: "automatizacion-whatsapp",
    eyebrow: "Automatización de WhatsApp",
    title: "Un chatbot que nunca deja esperando a tus clientes",
    description:
      "Flujos de conversación que responden, cotizan y dan seguimiento por WhatsApp las 24 horas, sin perder el toque humano. Se factura como suscripción mensual, igual que tus demás herramientas.",
    tiers: [
      {
        id: "whatsapp-suscripcion",
        name: "Suscripción WhatsApp",
        price: "$199",
        billing: "MXN / mes",
        badgeTone: "green",
        description: "Un solo número, un bot, cero ventas perdidas por falta de respuesta desde:",
        features: [
          "Respuestas y flujos de conversación a la medida",
          "Integración con tu catálogo o sistema interno",
          "Notificaciones y recordatorios automáticos",
          "Ajustes y mejoras al flujo incluidos",
        ],
        cta: "Empezar mi automatización",
        highlighted: true,
        tintClass: "bg-green-800/4",
      },
    ],
  },
  {
    id: "sitios-web",
    eyebrow: "Sitios web",
    title: "Un sitio a la medida de tu presupuesto",
    description:
      "Desde una landing page para validar una idea o promocionar un servicio, hasta un sitio completo con panel de administración propio.",
    tiers: [
      {
        id: "sitio-landing",
        name: "Landing Page",
        price: "Desde $3,000",
        billing: "MXN, pago único",
        badgeTone: "green",
        description: "Ideal para captar clientes o validar una idea con una sola página.",
        features: [
          "Diseño responsivo de una sola página",
          "Formulario de contacto o botón directo a WhatsApp",
          "Optimizada para velocidad y SEO básico",
          "Entrega en pocos días",
        ],
        cta: "Cotizar landing page",
        tintClass: "bg-pink-900/4",
      },
      {
        id: "sitio-completo",
        name: "Sitio Web Completo",
        price: "Desde $10,000",
        billing: "MXN, pago único",
        badgeTone: "blue",
        description: "Para negocios que necesitan varias secciones, catálogo o blog.",
        features: [
          "Múltiples páginas y secciones a la medida",
          "Panel de administración de contenido",
          "SEO y rendimiento optimizados",
          "Integración con WhatsApp, redes sociales o CRM",
        ],
        cta: "Cotizar sitio completo",
        highlighted: true,
        tintClass: "bg-orange-800/4",
      },
    ],
  },
  {
    id: "sistemas-empresariales",
    eyebrow: "Sistemas empresariales",
    title: "Software para operar y capacitar a tu equipo",
    description:
      "Plataformas internas hechas a la medida de tus procesos. Por ejemplo: un sistema de administración y capacitación de empleados.",
    tiers: [
      {
        id: "sistema-empresarial",
        name: "Sistema Empresarial",
        price: "Desde $20,000",
        billing: "MXN, pago único",
        badgeTone: "amber",
        description:
          "Ejemplo: control de personal, asistencia, evaluaciones y cursos de capacitación interna, todo en una sola plataforma.",
        features: [
          "Gestión de empleados, roles y permisos",
          "Control de asistencia y desempeño",
          "Módulo de capacitación y cursos internos",
          "Reportes y dashboards a la medida",
          "Sistemas de facturación"
        ],
        cta: "Cotizar mi sistema",
        tintClass: "bg-red-800/4",
      },
    ],
  },
];
