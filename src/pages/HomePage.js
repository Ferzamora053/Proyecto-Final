import React from "react";
import { Link } from "react-router-dom"
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