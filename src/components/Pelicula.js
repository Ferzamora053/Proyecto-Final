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
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-light d-none d-lg-block">{text}</p>
          <p className='card-text text-light'>{date}</p>
          <a
            href={url}
            className="btn btn-outline-secondary rounded-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to this page
          </a>
        </div>
      </div>
  );
}

export default Pelicula;
