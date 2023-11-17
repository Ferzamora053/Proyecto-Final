import React, { useState } from 'react';
import "../CSS/pelicula.css";

function Pelicula({ imageSource, title, text, date, url }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div
        className={`card text-center bg-dark animate__animated ${
          isHovered ? 'card-hover' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow">
          <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body text-light p-1">
          <h5 className="card-title h4-lg">{title}</h5>
          <p className="card-text text-light d-none d-lg-block">{text}</p>
          <p className='card-text text-light'>Fecha de estreno: {date}</p>
          <a
            href={url}
            className="btn btn-outline-secondary rounded-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar
          </a>
        </div>
      </div>
  );
}

export default Pelicula;
