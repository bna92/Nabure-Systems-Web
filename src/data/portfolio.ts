import posSystemImg from "@/assets/portfolio/pos-system.png";
import copeSystemImg from "@/assets/portfolio/cope-system.png";
import kamBarberImg from "@/assets/portfolio/kam-barber.png";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  url?: string;
  image?: string;
  comingSoon?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "pos-system",
    title: "POS System",
    category: "Punto de venta",
    description:
      "Sistema de punto de venta para abarrotes y tiendas: ventas, control de inventario, clientes, proveedores y reportes en tiempo real.",
    url: "https://pos-system-topaz-xi.vercel.app",
    image: posSystemImg,
  },
  {
    id: "cope-system",
    title: "COPE System",
    category: "Sistema administrativo",
    description:
      "Plataforma de gestión de empleados y capacitación para Oil Test International: control de personal, cursos, certificaciones y reportes por centro de trabajo.",
    url: "https://cope-system.vercel.app",
    image: copeSystemImg,
  },
  {
    id: "kam-barber-salon",
    title: "KAM Barber Salon",
    category: "Sitio web",
    description:
      "Sitio web para una barbería unisex: catálogo de servicios, galería, videos y reservación de citas.",
    url: "https://www.kambarbersalon.com/",
    image: kamBarberImg,
  },
  {
    id: "linshop",
    title: "LinShop",
    category: "Tienda en línea",
    description: "Tienda en línea a la medida. Muy pronto disponible.",
    comingSoon: true,
  },
];
