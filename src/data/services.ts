import type { Service, ProcessStep, NavLink } from "@/types";

export const services: Service[] = [
  {
    id: "sistemas-a-medida",
    title: "Sistemas Empresariales",
    description:
      "Desarrollamos software personalizado que se adapta a los procesos exactos de tu negocio, sin pagar por funciones que no necesitas.",
    icon: "code",
    features: [
      "Sistemas administrativos",
      "Sistemas de facturacion",
      "Sistemas para RRHH",
      "Integraciones con tus herramientas actuales",
    ],
  },
  {
    id: "sitios-web",
    title: "Sitios web para cualquier giro",
    description:
      "Sitios web rápidos, modernos y optimizados para negocios de cualquier industria: desde landing pages hasta plataformas complejas.",
    icon: "language",
    features: [
      "Diseño responsivo para cualquier dispositivo",
      "Optimización SEO y de rendimiento",
      "Contenido autoadministrable",
    ],
  },
  {
    id: "puntos-de-venta",
    title: "Puntos de venta (POS)",
    description:
      "Sistemas de punto de venta a medida para agilizar cobros, inventario y reportes de tu negocio, sean uno o varios puntos.",
    icon: "point_of_sale",
    features: [
      "Control de inventario en tiempo real",
      "Reportes de ventas y cortes de caja",
      "Multi-sucursal y multi-usuario",
    ],
  },
  {
    id: "automatizacion-whatsapp",
    title: "Automatización de WhatsApp",
    description:
      "Chatbots y flujos automatizados en WhatsApp para atención al cliente, ventas y seguimiento, sin perder el toque humano.",
    icon: "chat",
    features: [
      "Respuestas automáticas y flujos de conversación",
      "Integración con tu CRM o sistema interno",
      "Notificaciones y recordatorios automáticos",
    ],
  },
  {
    id: "sistemas-administrativos",
    title: "Sistemas administrativos empresariales",
    description:
      "Plataformas internas para gestionar operaciones, finanzas, recursos humanos y más, centralizando la información de tu empresa.",
    icon: "business_center",
    features: [
      "Gestión de usuarios y permisos por rol",
      "Dashboards y reportes personalizados",
      "Automatización de procesos internos",
    ],
  },
  {
    id: "otros-proyectos",
    title: "Y cualquier otro proyecto que imagines",
    description:
      "Si tu idea no encaja en una caja, con gusto la analizamos. Nos especializamos en construir soluciones para cada necesidad.",
    icon: "widgets",
    features: [
      "Consultoría técnica inicial sin costo",
      "Propuesta de solución ",
      "Acompañamiento durante todo el proyecto",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "conversamos",
    icon: "forum",
    title: "Conversamos sobre tu proyecto",
    description:
      "Entendemos tu negocio, tus procesos y lo que necesitas resolver antes de proponer una solución.",
  },
  {
    id: "propuesta",
    icon: "design_services",
    title: "Propuesta y diseño",
    description:
      "Definimos alcance, tiempos y te presentamos una propuesta clara antes de comenzar a desarrollar.",
  },
  {
    id: "desarrollo",
    icon: "code",
    title: "Desarrollo",
    description:
      "Construimos tu sistema con entregas parciales para que veas el avance real del proyecto.",
  },
  {
    id: "entrega",
    icon: "rocket_launch",
    title: "Entrega y soporte",
    description:
      "Ponemos tu sistema en producción y te acompañamos con soporte y mejoras continuas.",
  },
];

export const navLinks: NavLink[] = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Portafolio", to: "/portafolio" },
  { label: "Contacto", to: "/contacto" },
];
