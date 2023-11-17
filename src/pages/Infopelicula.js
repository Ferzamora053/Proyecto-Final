import React from "react";
import Video from "../components/Video";
import Info from "../components/Info";
import Butacahora from "../components/Butacahora";

function InfoPelicula () {
    const youtubeVideoUrl = 'https://www.youtube.com/watch?v=WGIK4p-FJ_M';
    return (
        <div>
            <Video videoUrl={youtubeVideoUrl} />
            <Info />
            <Butacahora />  
        </div>      
    );
}

export default InfoPelicula;