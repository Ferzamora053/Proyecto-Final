import React from 'react';
import "../CSS/footer.css"

function Footer() {
  return (
    <footer className="footer-style">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 CINEWEB. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-end">
            <p>  
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="30" height="52" viewBox="3 1 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            <path d="M15 7a2 2 0 0 1 2 2" />
            <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
            9 93478593 | Ubicados Av. Camilo Henríquez 3690</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
