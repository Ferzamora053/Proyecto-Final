import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "../components/Video";
import Info from "../components/Info";
import Butacahora from "../components/Butacahora";
import axios from "axios";

function InfoPelicula () {
    const { id } = useParams();
    const [DataPelicula, setDataPelicula] = useState(null);
    const [OmdbData, setOmbdData] = useState(null);

    useEffect(() => {
        const apiKey = "c89fe48f27367d1ff270bdf4c51518ed";
        const omdbApiKey = "f7eea519";

        const tmbdApiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

        axios.get(tmbdApiUrl)
        .then(async (response) => {
            const detallesPeliculas = response.data;
            setDataPelicula(detallesPeliculas);

            const omdbApiUrl = `https://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(detallesPeliculas.title)}`;

            try {
                const omdbResponse = await axios.get(omdbApiUrl);
                setOmbdData(omdbResponse.data);
            } catch (error) {
                console.log("Error al capturar los datos de OMDB:", error);
            }
        })
        .catch((error) => {
            console.log("Error al capturar los datos de TMDB:", error);
        });

    }, [id]);

    if (!DataPelicula || !OmdbData) {
        return <div>Cargando...</div>;
    }

    const genres = DataPelicula ? DataPelicula.genres.map(genre => genre.name).join(', ') : OmdbData.Genre || 'Genre not available';

    const dataPelicula = {
        titulo: DataPelicula ? DataPelicula.title : OmdbData.Title,
        genero: genres,
        duracion: DataPelicula.runtime + ' min',
        agerating: OmdbData && OmdbData.Rated ? OmdbData.Rated : (DataPelicula ? (DataPelicula.adult ? '18+' : 'Todo público') : 'Clasificación de edad no disponible'),
        image: 'https://www.themoviedb.org/t/p/w440_and_h660_face' + DataPelicula.poster_path,
        sinopsis: DataPelicula ? DataPelicula.overview : OmdbData.Plot || 'Sinopsis no disponible',
        lenguajeOriginal: OmdbData ? OmdbData.Language : 'Lenguaje original no disponible',
        calificacion: OmdbData ? OmdbData.imdbRating : 'Calificación no disponible',
        fechaEstreno: DataPelicula.release_date,
      };
    
    return (
        <div>
            {/* <Video videoUrl={youtubeVideoUrl} /> */}
            <Info data={dataPelicula}/>
            <Butacahora />  
        </div>      
    );
}

export default InfoPelicula;