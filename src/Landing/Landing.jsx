import "./Landing.css";
import React, { useRef, useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider.js";
import { NavLink } from "react-router-dom";

function Landing() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={`container landing-container backimg${slideIndex}`}>
      <div className="carrusel">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slider active-anim" : "slider"
              }
            >
              <h2 className="h2-landing">{obj.title}</h2>
              <p className="p-landing">{obj.text}</p>
              {slideIndex === 1 ? (
                <NavLink className="btn-langing" to="/contacto">
                  Has tu consulta!
                </NavLink>
              ) : slideIndex === 2 ? (
                <NavLink className="btn-langing" to="/galeria">
                  Ir a galeria
                </NavLink>
              ) : slideIndex === 3 ? (
                <NavLink className="btn-langing" to="/servicios">
                  Ver servicios
                </NavLink>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="carrusel">
        <div className="container-slider">
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img src={`img${index + 1}.jpg`} />
              </div>
            );
          })}
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
          <div className="container-dots">
            {Array.from({ length: 3 }).map((item, index) => (
              <div
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
