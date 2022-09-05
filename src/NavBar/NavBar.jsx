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
        <NavLink to="/">
          <img className="logo" src="Posada.png" alt="logo" />
          <h1 className="title-name">Posada Brillo de Luna</h1>
        </NavLink>
        <Bars onClick={showSidebar} />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Inicio
          </NavLink>
          <NavLink to="/servicios" activeStyle>
            Servicios
          </NavLink>
          <NavLink to="/galeria" activeStyle>
            Galeria
          </NavLink>
          <NavBtnLink to="/contacto">Contacto</NavBtnLink>
        </NavMenu>
      </Nav>
      <div className={slideBar ? "slide-bar" : "slide-bar active"}>
        <NavLinkSlide onClick={() => setSlideBar(!slideBar)} to="/" activeStyle>
          <AiOutlineHome className="icon-slide" /> Inicio
        </NavLinkSlide>
        <NavLinkSlide
          onClick={() => setSlideBar(!slideBar)}
          to="/servicios"
          activeStyle
        >
          <MdOutlineVolunteerActivism className="icon-slide" />
          Servicios
        </NavLinkSlide>
        <NavLinkSlide
          onClick={() => setSlideBar(!slideBar)}
          to="/galeria"
          activeStyle
        >
          <HiOutlinePhotograph className="icon-slide" />
          Galeria
        </NavLinkSlide>
        <NavLinkSlide
          onClick={() => setSlideBar(!slideBar)}
          to="/contacto"
          activeStyle
        >
          <AiOutlineContacts className="icon-slide" />
          Contacto
        </NavLinkSlide>
        <NavBtnLinkSlide onClick={() => setSlideBar(!slideBar)} to="/contacto">
          Reserva
        </NavBtnLinkSlide>
      </div>
    </>
  );
}

export default NavBar;
