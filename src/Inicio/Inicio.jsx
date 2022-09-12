import React from "react";
import Landing from "../Landing/Landing";
import "./Inicio.css";
import { FaSwimmingPool, FaTree } from "react-icons/fa";
import { GiFishingHook } from "react-icons/gi";
import { IoRestaurantSharp, IoBed } from "react-icons/io5";
import { TbSoccerField } from "react-icons/tb";
import SwiperEsq from "../SwiperEsq/SwiperEsq";
import SwiperRes from "../SwiperRes/SwiperRes";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <Landing />
      <div className="container-in">
        <div className="img-conatiner">
          <a
            href="https://www.google.com/maps/place/POSADA+BRILLO+DE+LUNA/@-30.0272341,-59.5373754,17z/data=!3m1!4b1!4m8!3m7!1s0x944c8bb3876b1023:0x7c2dc1ef6ec93d2a!5m2!4m1!1i2!8m2!3d-30.0272388!4d-59.5351867"
            className="img-h3"
            target="_blank"
          >
            Esquina, Corrientes
          </a>
        </div>
        <p>
          Esquina es una ciudad situada en el rincón sudoeste de la provincia de
          Corrientes. Además de ser cabecera del departamento Esquina, posee
          destacada importancia turística al ser sede de la Fiesta Nacional del
          Pacú. La unión de los ríos Corriente y Paraná, genera en esta ciudad
          una costa bellísima, que da lugar a hermosas playas y a la pesca de
          una amplia variedad de especies. Los ríos, esteros, lagunas y montes,
          constituyen el lugar ideal para la pesca. Allí encontrarán ejemplares
          de surubíes, dorados y patíes, además de manduvés, moncholos, pacúes,
          bogas, amarillos, armados, rayas, bagre amarillo y salmón criollo.
          Entre las modalidades existentes, aficionados y profesionales de esta
          disciplina, podrán aplicar en Esquina: fly casting, spinning, pesca
          con mosca y trolling, disfrutando al mismo tiempo del deporte y del
          aire libre
        </p>
        <p>
          Esquina esta acodada en el Rio Corriente, nos ofrece la posibilidad de
          disfrutar de sus playas y balnearios recostados al sol de su litoral
          ribereño. Siendo típicas playas de rio convoca a locales y visitantes
          a relajarse y dejarse llevar por el ambiente, protegida por un delta,
          la calma del Rio Paraná y Rio Corriente que permiten calmas y cómodas
          playas, un espacio ideal para el esparcimiento de grandes y chicos. Se
          puede disfrutar de un momento distinto, en comunión con la naturaleza,
          que nos abraza y nos enamora. Realizar un safari fotográfico o
          avistaje de flora y fauna nos permite conocer y aprender acerca de la
          riqueza de la región y su gente, además de sacar fotos imperdibles.
        </p>
        <div className="pre-carrousel">
          <h4>
            Por esto y mucho más le aseguramos una estadía tranquila y
            confortable
          </h4>
        </div>
        <SwiperEsq />
        <div className="contacto-inicio">
          <h3 className="contact-h3">¡Alójate en Posada Brillo de Luna!</h3>
          <Link to="/contacto">
            <button className="contact-btn">Contáctanos</button>
          </Link>
        </div>
        <div className="service-container">
          <div>
            <h2 className="h2-service">Servicios</h2>
          </div>
          <div className="servicios">
            <div className="service1">
              <div>
                <GiFishingHook className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Pesca</h4>
                <p className="p-service">
                  Contamos con una playa privada en la cual se puede pescar de
                  costa, podrás pescar desde tu lancha en el río Corrientes
                  gracias a nuestra amplia bajada de lancha, y para tener una
                  experiencia magnífica tenemos guía en la cual podrás disfrutar
                  de una pesca completa y un delicioso almuerzo en la isla.
                </p>
              </div>
            </div>
            <div className="service1">
              <div>
                <IoRestaurantSharp className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Gastronomia</h4>
                <p className="p-service">
                  Contamos con un menú del día donde encontraras la mejor comida
                  casera de Equina Corrientes.
                </p>
              </div>
            </div>
            <div className="service1">
              <div>
                <FaTree className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Gran Patio</h4>
                <p className="p-service">
                  Grandes extensiones de césped y arboledas le proporcionan un
                  hermoso ambiente para relajarse.
                </p>
              </div>
            </div>
            <div className="service1">
              <div>
                <FaSwimmingPool className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Piscina</h4>
                <p className="p-service">
                  Podras refrescarte en nuesta piscina de 4 x 6 mts.
                </p>
              </div>
            </div>

            <div className="service1">
              <div>
                <IoBed className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Habitaciones Equipadas</h4>
                <p className="p-service">
                  Las habitaciones son grandes, con todas las comodidades, aire
                  acondicionado, plasma, somier, baño privado.
                </p>
              </div>
            </div>
            <div className="service1">
              <div>
                <TbSoccerField className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Pádel/Fútbol</h4>
                <p className="p-service">
                  Podrás pasar un divertido momento gracias a nuestras canchas
                  de Pádel y Fútbol.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="reseñas">
          <SwiperRes />
        </div>
      </div>
    </>
  );
}

export default Inicio;
