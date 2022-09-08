import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Galeria from "./Galeria/Galeria";
import Contacto from "./Contacto/Contacto";
import Servicio from "./Servicios/Servicios";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { ImWhatsapp } from "react-icons/im";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <a
        href="https://api.whatsapp.com/send?phone=5493777218787"
        target="_blank"
      >
        <ImWhatsapp className="icon-whatsapp-fixed" />
      </a>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/servicios" element={<Servicio />} />
        <Route exact path="/galeria" element={<Galeria />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
