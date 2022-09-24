import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useFirebaseApp, useUser } from "reactfire";
import "firebase/auth";
import BotonPerfil from "../Componentes/botonPerfil";

function NavBar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink style={{ color: "white" }} exact to="/" className="nav-logo">
            <img
              src="https://i.ibb.co/TgFMgJk/Imagen2-removebg-preview.png"
              width="195px"
            ></img>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                style={{ color: "white" }}
                exact
                to={{
                  pathname: "/CrearProducto",
                  state: { valor: 0 },
                }}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <BotonPerfil></BotonPerfil>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
