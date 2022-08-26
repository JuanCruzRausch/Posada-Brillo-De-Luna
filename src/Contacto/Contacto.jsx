import "./Contacto.css"
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
  return <div className="contacto-container">
    <div className="img-contact">Mandanos un Mail o mensaje en wpp B)</div>
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
        <MdOutlineEmail className="contact_option-icon" />
        <h4>Email</h4>
        <h5>juancruzrauschdiaz@gmail.com</h5>
        <a href="mailto:juancruzrauschdiaz@gmail.com" target="_blank">
          Send a message
        </a>
      </article>
      <article className="contact_option">
        <ImWhatsapp className="contact_option-icon" />
        <h4>Whatsapp</h4>
        <h5>(+54) 3435341533</h5>
        <a
          href="https://api.whatsapp.com/send?phone=543435341533"
          target="_blank"
        >
          Send a message
        </a>
      </article>
    </div>
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Full Name..."
        required
      />
      <input
       type="email"
        name="email"
        placeholder="Your Email..."
        required
      />
      <textarea
       name="message"
        rows="7"
        placeholder="Your Message..."
        required
      ></textarea>
      <button type="submit" className="btn btn-primary">
        end Message
      </button>
    </form>
  </div>
  </div>;
}

export default Contacto;
