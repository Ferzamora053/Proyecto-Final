import React, { useEffect, useState } from "react";
import Pelicula from "./Pelicula";
import axios from "axios";


function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const apiKey = "c89fe48f27367d1ff270bdf4c51518ed";
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
    axios.get(apiUrl)
    .then((response) => {
      setPeliculas(response.data.results);
    })

  }, []);

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
