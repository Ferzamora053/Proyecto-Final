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
    text: ""
  },
  {
    id: 2,
    title: "Oppenheimer",
    image: image2,
    url: "#",
    text: ""

  },
  {
    id: 3,
    title: "The Marvels",
    image: image3,
    url: "#",
    text: ""

  },
  {
    id: 4,
    title: "Loki",
    image: image4,
    url: "#",
    text: ""

  },
  {
    id: 5,
    title: "Ataque de los Titanes",
    image: image5,
    url: "#",
    text: ""

  },
  {
    id: 6,
    title: "Five Nights at Freddy's",
    image: image6,
    url: "infopeli",
    text: ""

  },
  {
    id: 7,
    title: "The Creator",
    image: image7,
    url: "#",
    text: ""

  },
  {
    id: 8,
    title: "John Wick 4",
    image: image8,
    url: "#",
    text: ""

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
