import { useState } from "react";
import "./NavBar.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  NavLinkSlide,
  NavBtnLinkSlide,
} from "./NavElements";
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { scrollToTop } from "../helper/scrollToTop";

function NavBar() {
  const [scroll, setScroll] = useState(false);
  const [slideBar, setSlideBar] = useState(true);

  const showSidebar = () => {
    setSlideBar(!slideBar);
  };

  const changeBackgruound = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeBackgruound);

  return (
    <>
      <Nav slide={`${slideBar}`} className={scroll ? "nav active" : "nav"}>
        <NavLink onClick={scrollToTop} to="/">
          <img className="logo" src="Posada.png" alt="logo" />
          <h1 className="title-name">Posada Brillo de Luna</h1>
        </NavLink>
        <Bars onClick={showSidebar} />
        <NavMenu>
          <NavLink onClick={scrollToTop} to="/" activeStyle>
            Inicio
          </NavLink>
          <NavLink onClick={scrollToTop} to="/servicios" activeStyle>
            Servicios
          </NavLink>
          <NavLink onClick={scrollToTop} to="/galeria" activeStyle>
            Galeria
          </NavLink>
          <NavBtnLink onClick={scrollToTop} to="/contacto">
            Contacto
          </NavBtnLink>
        </NavMenu>
      </Nav>
      <div className={slideBar ? "slide-bar" : "slide-bar active"}>
        <div>
          <NavLinkSlide
            onClick={() => {
              setSlideBar(!slideBar);
              scrollToTop();
            }}
            to="/"
            activeStyle
          >
            <AiOutlineHome className="icon-slide" /> Inicio
          </NavLinkSlide>
          <NavLinkSlide
            onClick={() => {
              setSlideBar(!slideBar);
              scrollToTop();
            }}
            to="/servicios"
            activeStyle
          >
            <MdOutlineVolunteerActivism className="icon-slide" />
            Servicios
          </NavLinkSlide>
          <NavLinkSlide
            onClick={() => {
              setSlideBar(!slideBar);
              scrollToTop();
            }}
            to="/galeria"
            activeStyle
          >
            <HiOutlinePhotograph className="icon-slide" />
            Galeria
          </NavLinkSlide>
          <div className="div-btn-slide">
            <NavBtnLinkSlide
              onClick={() => {
                setSlideBar(!slideBar);
                scrollToTop();
              }}
              to="/contacto"
            >
              Contacto
            </NavBtnLinkSlide>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
