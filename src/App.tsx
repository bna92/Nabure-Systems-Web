import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Servicios from "@/pages/Servicios";
import Portafolio from "@/pages/Portafolio";
import Contacto from "@/pages/Contacto";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
