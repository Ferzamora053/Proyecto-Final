import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProcesoCompra from "../components/ProcesoCompra";
import Pasos from "../components/Pasos";
import Asientos from "../components/Asientos";
import PasoBoletos from "../components/PasoBoletos";
import Resumen from "../components/Resumen";



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
                <Row>
                    <Col lg={9}>
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
                    </Col>
                    <Col sm={3} className="d-none d-lg-block">
                        <Resumen />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CompraEntrada;
