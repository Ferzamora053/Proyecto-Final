import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import ProcesoCompra from "../components/ProcesoCompra";
import Pasos from "../components/Pasos";
import ResumenComponents from "../components/Resumen";
import "../CSS/compraentrada.css";
import "../CSS/resumen.css";

function CompraEntrada() {
    const { Resumen, ResumenMobile } = ResumenComponents;
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Extraer los parámetros de la URL
    const horario = searchParams.get("horario");
    const tipoPantalla = searchParams.get("tipoPantalla");
    const subtitulos = searchParams.get("subtitulos");
    const tipoButacas = searchParams.get("tipoButacas");
    const movieId = searchParams.get("movieId");
    const movieTitle = searchParams.get("movieTitle");
    const movieImage = searchParams.get("movieImage");

    const [cantidadBoletos, setCantidadBoletos] = useState(0);
    const [ubicacionAsientos, setUbicacionAsientos] = useState([]);

    const actualizarCantidadBoletos = (cantidad) => {
        setCantidadBoletos(cantidad);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Container fluid className="flex-grow-1">
                <div className="row">
                    <div className="col-lg-8 col-xxl-9">
                        <div className="custom-div">
                            <Pasos />
                            <ProcesoCompra 
                                actualizarCantidadBoletos={actualizarCantidadBoletos}
                                setUbicacionAsientos={setUbicacionAsientos}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-xxl-3 d-none d-lg-block custom-resumen">
                    <Resumen
                        movieTitle={movieTitle}
                        movieImage={movieImage}
                        horario={horario}
                        tipoPantalla={tipoPantalla}
                        subtitulos={subtitulos}
                        tipoButacas={tipoButacas}
                        cantidades={cantidadBoletos}
                        ubicacionAsientos={ubicacionAsientos}
                    />
                    </div>
                </div>
                <div className="d-block d-lg-none">
                    <ResumenMobile 
                        movieTitle={movieTitle}
                        horario={horario}
                    />
                </div>
            </Container>
        </div>
    );
}

export default CompraEntrada;