import "./Contacto.css";
import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import emailjs from "emailjs-com";

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5dpstml",
        "template_6nfzjam",
        form.current,
        "NqRHLHRC2_eAX9Ahu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
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
          <a
            className="anchor-btn"
            href="mailto:posadabrillodelunaesquina@hotmail.com"
            target="_blank"
          >
            <article className="contact_option-mail">
              <MdOutlineEmail className="contact_option-icon" />
              <h4>Email</h4>

              <p>Enviar un mensaje</p>
            </article>
          </a>
          <a
            className="anchor-btn"
            href="https://api.whatsapp.com/send?phone=5493777218787"
            target="_blank"
          >
            <article className="contact_option-wpp">
              <ImWhatsapp className="contact_option-icon" />
              <h4>Whatsapp</h4>

              <p>Enviar un mensaje</p>
            </article>
          </a>
        </div>
        <div className="form-contact">
          <h3>Completa los campos y envianos un mail con tu consulta</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              required
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />

            <textarea
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
        </div>
      </div>
    </div>
  );
}

export default Contacto;

{
  /* <div className="container contact_container">
  <div className="img-contact">Mandanos un Mail o mensaje en wpp B)</div>
  <div className="contact_options">
  </div>
</div> */
}
