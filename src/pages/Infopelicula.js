import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "../components/Video";
import Info from "../components/Info";
import Butacahora from "../components/Butacahora";
import axios from "axios";

function InfoPelicula () {
    const { id } = useParams();
    const [DataPelicula, setDataPelicula] = useState(null);

    useEffect(() => {
        const apiKey = "c89fe48f27367d1ff270bdf4c51518ed";
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

        axios.get(apiUrl)
        .then((response) => {
            setDataPelicula(response.data);
        })
        .catch((error) => {
            console.log("Error al capturar los datos:", error);
        });
    }, [id]);

    if (!DataPelicula) {
        return <div>Cargando...</div>;
    }

    const genres = DataPelicula.genres && DataPelicula.genres.length > 0 ? DataPelicula.genres.map(genre => genre.name).join(', ') : 'Genre not available';

    const dataPelicula = {
        titulo: DataPelicula.title,
        genero: genres,
        agerating: DataPelicula.adult ? '18+' : 'Todo público',
        image: 'https://www.themoviedb.org/t/p/w440_and_h660_face' + DataPelicula.poster_path,
        sinopsis: DataPelicula.overview,
        lenguajeOriginal: DataPelicula.original_language,
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