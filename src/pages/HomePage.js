import React from "react";
import { Link } from "react-router-dom"
import Carousel from "../components/Carousel";
import Peliculas from "../components/Peliculas";

function HomePage() {
    return (
        <div>
            <Carousel />
            <div className="container">
                <Peliculas />
            </div>
        </div>
    )
}

export default HomePage;