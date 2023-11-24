import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import ProcesoCompra from "../components/ProcesoCompra";
import Pasos from "../components/Pasos";
import Asientos from "../components/Asientos";
import PasoBoletos from "../components/PasoBoletos";
import Resumen from "../components/Resumen";
import "../CSS/compraentrada.css";
import "../CSS/resumen.css";



function CompraEntrada() {
    const [cantidadEntradas, setCantidadEntradas] = useState(1);
    const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);

    const handleCantidadChange = (e) => {
        let cantidad = parseInt(e.target.value, 10);
        cantidad = Math.min(cantidad, 6);
        setCantidadEntradas(cantidad);
    };

    const handleConfirmarCompra = () => {
        console.log(`Confirmada compra de ${cantidadEntradas} entradas. Asientos seleccionados: ${asientosSeleccionados.join(", ")}`);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Container fluid className="flex-grow-1">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="custom-div">
                            <Pasos />
                            <ProcesoCompra   
                                cantidadEntradas={cantidadEntradas}
                                asientosSeleccionados={asientosSeleccionados}
                                setAsientosSeleccionados={setAsientosSeleccionados}
                            />
                            {/* <Asientos
                                cantidadEntradas={cantidadEntradas}
                                asientosSeleccionados={asientosSeleccionados}
                                setAsientosSeleccionados={setAsientosSeleccionados}
                            /> */}
                        </div>
                    </div>
                    <div className="col-sm-3 d-none d-lg-block custom-resumen">
                        <Resumen />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CompraEntrada;
