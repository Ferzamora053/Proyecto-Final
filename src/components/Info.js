import React from "react";
import "../CSS/info.css";
import "../CSS/anular.css";

function Info({ data }) { 
  return (
    <div className="container-lg reset-card-styles">
      <h1><p className="text-start fw-bold mt-3">{data.titulo}</p></h1>
      <p className="text-start">{data.genero} | {data.duracion} | {data.agerating}</p>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 mt-3 mb-3" style={{ maxWidth: '1100px' }}>
            <div className="row g-4">
              <div className="col-md-4">
                <img src={data.image} className="img-fluid rounded" alt="Poster" />
              </div>
              <div className="col-md-8">
                <div className="card-body text-star mb-3 mr-3">
                  <h5 className="card-title fw-bold">Sinopsis</h5>
                  <p className="card-text">{data.sinopsis}</p>
                  <h5 className="card-title fw-bold">Idioma original</h5>
                  <p className="card-text">{data.lenguajeOriginal}</p>
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