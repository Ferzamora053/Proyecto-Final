import React from "react";
import "../CSS/info.css"
import "../CSS/anular.css"
import image6 from '../images/image6.jpg'

function Info() {
    return (
      <div className="container reset-card-styles">
        <h1><p className="text-start fw-bold mt-3">FIVE NIGHTS AT FREDDY'S: LA PELÍCULA.</p></h1>
        <p className="text-start">TERROR | 1hrs 49min | +14</p>
  
        <div className="row">
          <div className="col-md-12">
            <div className="card mx-auto border-0 mt-3 mb-3" style={{ maxWidth: '1100px' }}>
              <div className="row g-4">
                <div className="col-md-4">
                  <img src={image6} className="img-fluid rounded-start" alt="Placeholder" />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-start mb-3 mr-3">
                    <h5 className="card-title fw-bold">SINOPSIS</h5>
                    <p className="card-text">
                        Un guardia de seguridad con problemas comienza a trabajar en Freddy Fazbear's Pizza. Mientras pasa su primera noche en el trabajo, 
                        se da cuenta de que el turno de noche en Freddy's no será tan fácil de superar.
                    </p>
                    <h5 className="card-title fw-bold">Estado</h5>
                    <p className="card-text"><small className="text-body-secondary">Estrenada</small></p>
                    <h5 className="card-title fw-bold">Idioma original</h5>
                    <p className="card-text"><small className="text-body-secondary">Inglés</small></p>
                    <h5 className="card-title fw-bold">Presupuesto</h5>
                    <p className="card-text"><small className="text-body-secondary">$20,000,000.00</small></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
    
export default Info;