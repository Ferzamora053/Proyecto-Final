import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProcesoCompra from "../components/ProcesoCompra";
import Pasos from "../components/Pasos";
import '../CSS/anular.css'
import Asientos from "../components/Asientos";



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

    const renderResumen = () => {
        return (
            <div>
                <h4>Resumen de la compra</h4>
                <p>Cantidad de entradas: {cantidadEntradas}</p>
                <p>Asientos seleccionados: {asientosSeleccionados.join(", ") || "Ninguno"}</p>
                <button onClick={handleConfirmarCompra}>Confirmar compra</button>
            </div>
        );
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Pasos />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProcesoCompra   
                        cantidadEntradas={cantidadEntradas}
                        asientosSeleccionados={asientosSeleccionados}
                        setAsientosSeleccionados={setAsientosSeleccionados}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default CompraEntrada;
