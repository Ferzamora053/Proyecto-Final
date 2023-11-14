import React from 'react';

import image1c from "../images/image1c.jpg";
import image2c from "../images/image2c.jpg";
import image3c from "../images/image3c.jpg";
import image4c from "../images/image4c.jpg";
import image5c from "../images/image5c.jpg";
import image6c from "../images/image6c.jpg";
import image7c from "../images/image7c.jpg";


function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1c} className="d-block w-100 img-fluid" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={image2c} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={image3c} className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={image4c} className="d-block w-100" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src={image5c} className="d-block w-100" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={image6c} className="d-block w-100" alt="Slide 6" />
        </div>
        <div className="carousel-item">
          <img src={image7c} className="d-block w-100" alt="Slide 7" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
