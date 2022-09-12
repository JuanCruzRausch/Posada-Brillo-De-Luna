import "./Contacto.css";
import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";

import { GrMap } from "react-icons/gr";
import { helpHttp } from "../helper/helpHttp";

function Contacto() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    console.log(JSON.stringify(form));

    helpHttp()
      .post(
        "https://formsubmit.co/ajax/posadabrillodelunaesquina@hotmail.com",
        {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setResponse(true);
        setTimeout(() => {
          setResponse(false);
        }, 5000);
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  };

  return (
    <div className="contacto-container">
      <div className="img-contact">
        <h2>CONTÁCTANOS</h2>
      </div>
      <div className="explain">
        <div>
          <h3>
            Te asesorarémos con toda la información que debes saber para
            alojarte en nuestras residencias
          </h3>
          <p>
            Puedes enviarnos un mail desde aqui, o tambien puedes mandarnos un
            mensaje via wpp o tu sistema de correos preferido
          </p>
        </div>
      </div>
      <div className="form-container">
        <div className="btns-contact">
          <div className="btn-cont">
            <h4 className="h4-contact">
              <GrMap className="icon-contact" /> Dirección
            </h4>
            <p>
              José hernández 820 3196 Esquina, Provincia de Corrientes,
              Argentina
            </p>
            <a
              href="https://www.google.com/maps/place/POSADA+BRILLO+DE+LUNA/@-30.0272341,-59.5373754,17z/data=!3m1!4b1!4m8!3m7!1s0x944c8bb3876b1023:0x7c2dc1ef6ec93d2a!5m2!4m1!1i2!8m2!3d-30.0272388!4d-59.5351867"
              target="_blank"
            >
              <button className="g-btn">Ir a Google maps</button>
            </a>
          </div>
          <div className="btn-cont email">
            <h4 className="h4-contact">
              <MdOutlineEmail className="icon-contact" />
              Email
            </h4>
            <p>posadabrillodelunaesquina@hotmail.com</p>
            <a
              href="mailto:posadabrillodelunaesquina@hotmail.com"
              target="_blank"
            >
              <button className="e-btn">Enviar Correo</button>
            </a>
          </div>
          <div className="btn-cont">
            <h4 className="h4-contact">
              <ImWhatsapp className="icon-contact" />
              Whatsapp
            </h4>
            <p>(+54) 93777218787</p>
            <a
              href="https://api.whatsapp.com/send?phone=5493777218787"
              target="_blank"
            >
              <button className="w-btn">Enviar Mensaje</button>
            </a>
          </div>
        </div>
        <div className="form-contact">
          <h3>Completa los campos y envianos un mail con tu consulta</h3>
          <form onSubmit={sendEmail} method="POST">
            <input
              onChange={(e) => handleChange(e)}
              className="input"
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              required
            />
            <input
              onChange={(e) => handleChange(e)}
              className="input"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />

            <textarea
              onChange={(e) => handleChange(e)}
              className="input"
              name="message"
              rows="7"
              placeholder="Su Mensaje..."
              required
            ></textarea>
            <button type="submit" className="btn-primary">
              Enviar
            </button>
          </form>
          {loading && <div>Enviando...</div>}
          {response && <div>Mensaje enviado con exito</div>}
        </div>
      </div>
    </div>
  );
}

export default Contacto;
