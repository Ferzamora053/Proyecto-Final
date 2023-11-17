import React from "react";
import imageHr from "../images/imageHr.png";
import "../CSS/horarios.css";

function Horarios() {
  const cardStyle = {
    maxWidth: '540px',
  };

  return (
    <div className="container reset-card-styles">
      <div className="card mb-3 hover-effect" style={cardStyle}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageHr} className="img-fluid rounded-start" alt="Placeholder" />
          </div>
          <div className="col-md-8">
            <div className="card-body hover-effect">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Horarios;
