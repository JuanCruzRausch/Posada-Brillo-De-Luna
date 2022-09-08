import "./Servicios.css";
import {
  FaSwimmingPool,
  FaTree,
  FaWifi,
  FaDumpsterFire,
  FaAnchor,
  FaCar,
  FaCoffee,
} from "react-icons/fa";
import { GiFishingHook, GiThermometerCold } from "react-icons/gi";
import { IoRestaurantSharp, IoBed, IoTvOutline } from "react-icons/io5";
import { TbSoccerField } from "react-icons/tb";
import { RiTempHotLine } from "react-icons/ri";

function Servicios() {
  return (
    <div className="service-container2">
      <div className="img-service">
        <h2>SERVICIOS</h2>
      </div>
      <div className="services-cont">
        <div className="call-gen">
          <h4>
            Nuestra posada está pensada para que tengas una estadía confortable,
            placentera y con todos los servicios que necesitás a tu disposición.
          </h4>
          <a href="/contacto">CONTACTANOS</a>
        </div>
        <div className="general-services">
          <div className="gen-ser">
            <IoTvOutline className="icon-gen" />
            <h6>TV/Cable</h6>
          </div>
          <div className="gen-ser">
            <FaWifi className="icon-gen" />
            <h6>WiFi</h6>
          </div>
          <div className="gen-ser">
            <RiTempHotLine className="icon-gen" />
            <h6>Calefacción</h6>
          </div>
          <div className="gen-ser">
            <GiThermometerCold className="icon-gen" />
            <h6>Aire Acondicionado</h6>
          </div>
          <div className="gen-ser">
            <FaDumpsterFire className="icon-gen" />
            <h6>Parrilla</h6>
          </div>
          <div className="gen-ser">
            <FaAnchor className="icon-gen" />
            <h6>Bajada de Lancha</h6>
          </div>
          <div className="gen-ser">
            <FaCar className="icon-gen" />
            <h6>Estacionamiento</h6>
          </div>
          <div className="gen-ser">
            <FaCoffee className="icon-gen" />
            <h6>Desayuno</h6>
          </div>
        </div>
        <div className="service">
          <a className="img-ser-cont" href="/galeria">
            <img className="img-ser izq-img" src="servicio8.jpg" />
          </a>
          <div className="serv-explain">
            <div className="header">
              <GiFishingHook className="icon-ser" />
              <h3>Pesca</h3>
            </div>
            <p>
              Contamos con una playa privada en la cual se puede pescar de
              costa, podrás pescar desde tu lancha en el río Corrientes gracias
              a nuestra amplia bajada de lancha, y para tener una experiencia
              magnífica tenemos guía en la cual podrás disfrutar de una pesca
              completa y un delicioso almuerzo en la isla.
            </p>
          </div>
        </div>

        <div className="service der-serv">
          <div className="serv-explain">
            <div className="header">
              <IoRestaurantSharp className="icon-ser" />
              <h3>Gastronomia</h3>
            </div>
            <p>
              Contamos con un menú del día donde encontraras la mejor comida
              casera de Equina Corrientes, y si desea pasar el día en la isla
              también podrá almorzar desde la misma con la misma calidad que
              encontraría en la posada.
            </p>
          </div>
          <a className="img-ser-cont" href="/galeria">
            <img className="img-ser der-img" src="servicio6.jpg" />
          </a>
        </div>
        <div className="service">
          <a className="img-ser-cont" href="/galeria">
            <img className="img-ser izq-img" src="posada10.jpg" />
          </a>
          <div className="serv-explain">
            <div className="header">
              <FaTree className="icon-ser" />
              <h3>Gran Patio</h3>
            </div>
            <p>
              Grandes extensiones de césped y arboledas le proporcionan un
              hermoso ambiente para relajarse en su estadía, conectándose con la
              naturaleza y disfrutando de la tranquilidad que nuestra localidad
              le proporciona.
            </p>
          </div>
        </div>
        <div className="service der-serv">
          <div className="serv-explain">
            <div className="header">
              <FaSwimmingPool className="icon-ser" />
              <h3>Piscina</h3>
            </div>
            <p>
              Contamos con una hermosa piscina de 4 x 6 mts donde podrá
              refrescarse y pasar una estadía lo más agradable posible en
              nuestra posada.
            </p>
          </div>
          <a className="img-ser-cont" href="/galeria">
            <img className="img-ser der-img" src="servicio2.jpg" />
          </a>
        </div>
        <div className="service">
          <a className="img-ser-cont" href="/galeria">
            <img className="img-ser izq-img" src="comodidades1.jpg" />
          </a>
          <div className="serv-explain">
            <div className="header">
              <IoBed className="icon-ser" />
              <h3>Habitaciones Equipadas</h3>
            </div>
            <p>
              Podrá descansar en nuestras habitaciones, estas mismas son
              grandes, con todas las comodidades tales como aire acondicionado,
              plasma, somier y baño privado. 
            </p>
          </div>
        </div>
        <div className="service der-serv">
          <div className="serv-explain">
            <div className="header">
              <TbSoccerField className="icon-ser" />
              <h3>Pádel/Fútbol</h3>
            </div>
            <p>
              Podrás pasar un divertido momento gracias a nuestras canchas de
              Pádel y Fútbol.
            </p>
          </div>
          <a className="img-ser-cont" href="/galeria">
            <img className="img-ser der-img" src="servicio3.jpg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
