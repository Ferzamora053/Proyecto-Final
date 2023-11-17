import React, { useState } from 'react';
import "../CSS/pelicula.css";

function Pelicula({ imageSource, title, url }) {
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
        <div className="card-body text-light p-2">
          <h4 className="card-title h4-lg mb-2">{title}</h4>
          <a
            href={url}
            className="btn btn-outline-secondary rounded-0 mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver horarios
          </a>
        </div>
      </div>
  );
}

export default Pelicula;
