import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Galeria from "./Galeria/Galeria";
import Contacto from "./Contacto/Contacto";
import Servicio from "./Servicios/Servicios";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
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
