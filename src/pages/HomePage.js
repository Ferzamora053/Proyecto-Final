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
            <h1><Link to="infopeli">Información Película</Link></h1>
            <h1><Link to="compraentrada">Comprar entrada</Link></h1>
        </div>
    )
}

export default HomePage;