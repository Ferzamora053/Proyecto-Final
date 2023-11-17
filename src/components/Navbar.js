import React from "react";
import { Link } from "react-router-dom";
import "../CSS/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-custom">
      <div className="container-fluid">
        <a class="NPag"><Link to="/">CINEWEB</Link> </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active text-white" aria-current="page">
              <Link to="/">Inicio</Link>
            </a>
            <a className="nav-link text-white">
              <Link to="contacto">Contacto</Link>
            </a>
            <a className="nav-link text-white">
              <Link to="infoequipo">Información del Equipo</Link>
            </a>
       
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
