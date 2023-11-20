import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../CSS/pelicula.css";

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [fechaInicio, setFechaInicio] = useState("2023-10-01");
  const [fechaFin, setFechaFin] = useState("2024-01-01");
  const apiKey = "c89fe48f27367d1ff270bdf4c51518ed";
  const omdbApiKey = "f7eea519";

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`;

    axios.get(apiUrl)
    .then(async (response) => {
      const filtroPeliculas = response.data.results.filter(pelicula => pelicula.release_date >= fechaInicio && pelicula.release_date <= fechaFin);

      const peliculas = filtroPeliculas.sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return dateB - dateA;
      })

      const detallesPeliculas = await Promise.all(
        peliculas.map(async (pelicula) => {
          const omdbApiUrl = `https://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(pelicula.title)}`;
          const omdbResponse = await axios.get(omdbApiUrl);
          return { ...pelicula, omdbData: omdbResponse.data };
        })
      );

      setPeliculas(detallesPeliculas);
    })
    .catch((error) => {
      console.log("Error al capturar los datos:", error);
    });

  }, [apiKey, omdbApiKey, fechaInicio, fechaFin]);

  return (
    <div className="container-fluid-lg d-flex justify-content-center align-items-center h-80">
      <div className="row">
        <div className="mb-1 mt-4">
          <h2 className="text-center">Cartelera</h2>
        </div>
        {peliculas.map((pelicula, index) => ( index < 12 &&
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 sol mb-2 mt-4" key={pelicula.id}> 
            <Pelicula 
              imageSource={'https://www.themoviedb.org/t/p/w440_and_h660_face' + pelicula.poster_path} 
              title={pelicula.title}
              id={pelicula.id}
              omdbData={pelicula.omdbData}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Pelicula({ imageSource, title, id, omdbData, tmdbData }) {
  const [isHovered, setIsHovered] = useState(false);

  const plot = omdbData && omdbData.Plot ? omdbData.Plot : (tmdbData ? tmdbData.overview : 'Sinopsis no disponible');

  const plotTextColor = "#d3d3d3";

  return (
      <div
        className={`card text-center bg-dark animate__animated ${
          isHovered ? 'card-hover' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow">
          <img 
            src={imageSource}
            alt="a wallpaper" 
            className="card-img-top"
            style={{ width: "100%", height: "auto" }} 
          />
        </div>
        <div className="card-body text-light p-2">
          <h4 className="card-title h4-lg mb-2">{title}</h4>
          <p className="card-text" style={{ color: plotTextColor }}>{plot}</p>
          <Link
            to={`/infopeli/${id}`}
            className="btn btn-outline-secondary rounded-0 mt-2"
          >
            Ver horarios
          </Link>
        </div>
      </div>
  );
}

export default Peliculas;
