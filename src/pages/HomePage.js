import React from "react";
import Carousel from "../components/Carousel";
import Peliculas from "../components/Peliculas";

function HomePage() {
    return (
        <div>
            <Carousel />
            <div className="container-lg px-4">
                <Peliculas />
            </div>
        </div>
    )
}

export default HomePage;