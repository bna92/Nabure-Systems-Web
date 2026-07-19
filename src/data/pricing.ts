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
  contactMessage: string;
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
        billing: "MXN / mes ",
        badgeTone: "green",
        description: "Para un negocio con un solo punto de venta.",
        features: [
          "1 punto de venta",
          "Control de inventario",
          "Reportes de ventas",
          "Corte de caja diario",
          "Soporte por correo",
        ],
        cta: "Elegir Básico",
        tintClass: "bg-blue-800/2",
        contactMessage:
          "Buen día, Nabure Systems. Me gustaría solicitar información sobre el plan Básico de punto de venta.",
      },
      {
        id: "pos-profesional",
        name: "Profesional",
        price: "$1,699",
        billing: "MXN / mes ",
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
        contactMessage:
          "Buen día, Nabure Systems. Me gustaría solicitar información sobre el plan Profesional de punto de venta.",
      },
      {
        id: "pos-empresarial",
        name: "Empresarial",
        price: "Personalizado",
        billing: "Cotización personalizada",
        badgeTone: "amber",
        description: "Para cadenas con necesidades específicas.",
        features: [
          "Puntos de venta ilimitados",
          "Integraciones a medida",
          "Dashboard multi-sucursal",
          "Soporte dedicado",
        ],
        cta: "Elegir Empresarial",
        tintClass: "bg-green-800/2",
        contactMessage:
          "Buen día, Nabure Systems. Me interesa el plan Empresarial de punto de venta; me gustaría platicar sobre las necesidades específicas de mi negocio.",
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
          "Respuestas y flujos de conversación claros",
          "Integración con tu catálogo o sistema interno",
          "Notificaciones y recordatorios automáticos",
          "Ajustes y mejoras al flujo incluidos",
        ],
        cta: "Empezar mi automatización",
        highlighted: true,
        tintClass: "bg-green-800/4",
        contactMessage:
          "Buen día, Nabure Systems. Me gustaría solicitar información sobre la automatización de WhatsApp para mi negocio.",
      },
    ],
  },
  {
    id: "sitios-web",
    eyebrow: "Sitios web",
    title: "Un sitio ajustado a tu presupuesto",
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
        contactMessage:
          "Buen día, Nabure Systems. Me gustaría solicitar información sobre el servicio de Landing Page.",
      },
      {
        id: "sitio-completo",
        name: "Sitio Web Completo",
        price: "Desde $10,000",
        billing: "MXN, pago único",
        badgeTone: "blue",
        description: "Para negocios que necesitan varias secciones, catálogo o blog.",
        features: [
          "Múltiples páginas y secciones",
          "Panel de administración de contenido",
          "SEO y rendimiento optimizados",
          "Integración con WhatsApp, redes sociales o CRM",
        ],
        cta: "Cotizar sitio completo",
        highlighted: true,
        tintClass: "bg-orange-800/4",
        contactMessage:
          "Buen día, Nabure Systems. Me gustaría solicitar información sobre el servicio de Sitio Web Completo.",
      },
    ],
  },
  {
    id: "sistemas-empresariales",
    eyebrow: "Sistemas empresariales",
    title: "Software para operar y capacitar a tu equipo",
    description:
      "Plataformas internas hechas para tus procesos. Por ejemplo: un sistema de administración y capacitación de empleados.",
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
          "Reportes y dashboards ",
          "Sistemas de facturación"
        ],
        cta: "Cotizar mi sistema",
        tintClass: "bg-red-800/4",
        contactMessage:
          "Buen día, Nabure Systems. Me gustaría solicitar información sobre un Sistema Empresarial .",
      },
    ],
  },
];
