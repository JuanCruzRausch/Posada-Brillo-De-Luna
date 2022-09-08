import "./Footer.css";
import { BiMap } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";
function Footer() {
  return (
    <div className="footer-cont">
      <div className="footer-head">
        <div className="div-head">
          <h3 className="h3-copy">Nosotros</h3>
          <p>
            Brillo de Luna es una posada que se encuentra ubicada sobre el Río
            Corriente, a unas 20 cuadras del centro de la ciudad. Se encuentra
            en la entrada de la ciudad, acceso sur. Es atendida por sus propios
            dueños y lo que más le gusta a la gente del alojamiento es la
            atención, las comidas caseras y la presencia de sus dueños.
            Destacamos en la ciudad de Esquina por la imponente vista hacia el
            Rio Corrientes y nuestra gastronomía derivada mayormente de la Pesca
            Deportiva.
          </p>
        </div>
        <div className="div-head-name">
          <h3 className="h3-copy-name">Posada Brillo de Luna</h3>
        </div>
        <div className="div-head">
          <h3 className="h3-copy">Contacto</h3>
          <p>
            <BiMap className="icon-map" />
            <a
              href="https://www.google.com/maps/place/POSADA+BRILLO+DE+LUNA/@-30.4348331,-63.1553331,6.5z/data=!4m8!3m7!1s0x944c8bb3876b1023:0x7c2dc1ef6ec93d2a!5m2!4m1!1i2!8m2!3d-30.0272388!4d-59.5351867"
              target="_blank"
            >
              Esquina, Corrientes, Argentina
            </a>
          </p>
          <p>
            Tel:
            <a
              href="https://api.whatsapp.com/send?phone=5493777218787"
              target="_blank"
            >
              (+54) 93777218787
            </a>
          </p>
          <p>
            Email:
            <a
              href="mailto:posadabrillodelunaesquina@hotmail.com"
              target="_blank"
            >
              posadabrillodelunaesquina@hotmail.com
            </a>
          </p>
          <div className="redes">
            <div>
              <a
                className="icon-redes"
                target="_blank"
                href="https://instagram.com/posadabrillodeluna?igshid=YmMyMTA2M2Y="
              >
                <AiOutlineInstagram className="icon-red" />
              </a>
            </div>
            <div>
              <a
                className="icon-redes"
                target="_blank"
                href="https://www.facebook.com/posada.brillodeluna"
              >
                <AiOutlineFacebook className="icon-red" />
              </a>
            </div>
            <div>
              <a
                className="icon-redes"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5493777218787"
              >
                <AiOutlineWhatsApp className="icon-red" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p className="p-copy">
          © Copyright 2022 |
          <a className="a-copy" href="/">
            Posada Brillo de Luna
          </a>
          | Derechos Reservados.
        </p>
        <p className="p-copy">
          Con el soporte de 👨🏼‍💻
          <a
            href="https://juancruzrausch.vercel.app/"
            className="a-copy"
            target="_blank"
          >
            Juan Cruz Rausch
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
