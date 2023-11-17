import React from "react";
import Pelicula from "./Pelicula";

import image1 from "../images/image1.jpg";
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'
import image8 from '../images/image8.jpg'


const peliculas = [
  {
    id: 1,
    title: "El asesino",
    image: image1,
    url: "#",
    text: "Descripcion de la imagen"
  },
  {
    id: 2,
    title: "Fazt Blog",
    image: image2,
    url: "#",
    text: "Descripcion de la imagen"

  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: image3,
    url: "#",
    text: "Descripcion de la imagen"

  },
  {
    id: 4,
    title: "Fazt Youtube",
    image: image4,
    url: "#",
    text: "Descripcion de la imagen"

  },
  {
    id: 5,
    title: "Fazt Youtube",
    image: image5,
    url: "#",
    text: "Descripcion de la imagen"

  },
  {
    id: 6,
    title: "Fazt Youtube",
    image: image6,
    url: "#",
    text: "Descripcion de la imagen"

  },
  {
    id: 7,
    title: "Fazt Youtube",
    image: image7,
    url: "#",
    text: "Descripcion de la imagen"

  },
  {
    id: 8,
    title: "Fazt Youtube",
    image: image8,
    url: "#",
    text: "Descripcion de la imagen"

  },
];

function Peliculas() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-80">
      <div className="row">
        <div className="mb-1 mt-4">
          <h2 className="text-center">Cartelera</h2>
        </div>
        {peliculas.map(({ title, image, url, text, id }) => (
          <div className="col-md-3 mb-2 mt-4" key={id}> 
            <Pelicula imageSource={image} title={title} url={url} text={text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Peliculas;
