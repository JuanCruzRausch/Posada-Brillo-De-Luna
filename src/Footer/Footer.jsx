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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
              <AiOutlineInstagram />
            </div>
            <div>
              <AiOutlineFacebook />
            </div>
            <div>
              <AiOutlineWhatsApp />
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
