import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: rgb(0, 0, 0, 0.6);
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vm - 1000px) / 2);
  border-bottom: solid 2px var(--primary);
  z-index: 10;
  @media screen and (max-width: 768px) {
    background: var(--bg);
    ${(props) =>
      props.slide === "false" &&
      css`
        border-bottom: solid 2px transparent;
      `}
  }
`;

export const NavLink = styled(Link)`
  color: var(--white);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: var(--primary);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--white);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: var(--primary);
  padding: 10px 20px;
  color: var(--white);
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--white);
    color: var(--bg);
  }
`;

export const NavLinkSlide = styled(Link)`
  color: var(--white);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: var(--primary);
  }
`;

export const NavBtnLinkSlide = styled(Link)`
  border-radius: 4px;
  width: 105px;
  background: var(--primary);
  padding: 10px 20px;
  color: var(--white);

  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin: 20px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--white);
    color: var(--bg);
  }
`;
