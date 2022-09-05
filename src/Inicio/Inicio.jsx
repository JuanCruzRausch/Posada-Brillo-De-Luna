import React from "react";
import Landing from "../Landing/Landing";
import "./Inicio.css";
import { FaSwimmingPool } from "react-icons/fa";
import SwiperEsq from "../SwiperEsq/SwiperEsq";
import SwiperRes from "../SwiperRes/SwiperRes";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
          <a href="/contacto">
            <button className="contact-btn">Contáctanos</button>
          </a>
        </div>
        <div className="service-container">
          <div>
            <h2 className="h2-service">Servicios</h2>
          </div>
          <div className="servicios">
            <div className="service1">
              <div>
                <FaSwimmingPool className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Picina</h4>
                <p className="p-service">
                  La pileta tiene 3.50 x 7mts con una profundidad de 1.60 metros
                  en la parte mas honda.
                </p>
              </div>
            </div>
            <div className="service1">
              <div>
                <FaSwimmingPool className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Picina</h4>
                <p className="p-service">
                  La pileta tiene 3.50 x 7mts con una profundidad de 1.60 metros
                  en la parte mas honda.
                </p>
              </div>
            </div>
            <div className="service1">
              <div>
                <FaSwimmingPool className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Picina</h4>
                <p className="p-service">
                  La pileta tiene 3.50 x 7mts con una profundidad de 1.60 metros
                  en la parte mas honda.
                </p>
              </div>
            </div>
            <div className="service1">
              <div>
                <FaSwimmingPool className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Picina</h4>
                <p className="p-service">
                  La pileta tiene 3.50 x 7mts con una profundidad de 1.60 metros
                  en la parte mas honda.
                </p>
              </div>
            </div>

            <div className="service1">
              <div>
                <FaSwimmingPool className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Picina</h4>
                <p className="p-service">
                  La pileta tiene 3.50 x 7mts con una profundidad de 1.60 metros
                  en la parte mas honda.
                </p>
              </div>
            </div>
            <div className="service1">
              <div>
                <FaSwimmingPool className="icon-service" />
              </div>
              <div>
                <h4 className="h4-service">Picina</h4>
                <p className="p-service">
                  La pileta tiene 3.50 x 7mts con una profundidad de 1.60 metros
                  en la parte mas honda.
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
