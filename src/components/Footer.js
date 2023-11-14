import React from 'react';
import "./footer.css"

function Footer() {
  return (
    <footer className="footer-style">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-end">
            <p>Política de privacidad | Términos y condiciones</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
