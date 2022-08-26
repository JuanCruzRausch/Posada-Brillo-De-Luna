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
  const [slideBar, setSlideBar] = useState(false);

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
  console.log(slideBar);

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
          <NavLink to="/contacto" activeStyle>
            Contacto
          </NavLink>
          <NavBtnLink to="/contacto">Reserva</NavBtnLink>
        </NavMenu>
      </Nav>
      <div className={slideBar ? "slide-bar" : "slide-bar active"}>
        <NavLinkSlide to="/" activeStyle>
          <AiOutlineHome className="icon-slide" /> Inicio
        </NavLinkSlide>
        <NavLinkSlide to="/servicios" activeStyle>
          <MdOutlineVolunteerActivism className="icon-slide" />
          Servicios
        </NavLinkSlide>
        <NavLinkSlide to="/galeria" activeStyle>
          <HiOutlinePhotograph className="icon-slide" />
          Galeria
        </NavLinkSlide>
        <NavLinkSlide to="/contacto" activeStyle>
          <AiOutlineContacts className="icon-slide" />
          Contacto
        </NavLinkSlide>
        <NavBtnLinkSlide to="/contacto">Reserva</NavBtnLinkSlide>
      </div>
    </>
  );
}

export default NavBar;
