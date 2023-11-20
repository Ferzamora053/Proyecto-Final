import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../CSS/anular.css'

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
            <Row className="reset-card-styles">
                <Col sm={8} className="p-0">
                    <CardGroup className="text-center">
                        <Card className="p-2" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                            Paso 1 <br/> Boletos
                            <br />
                            <label>
                                Cantidad de entradas:
                                <input
                                    type="number"
                                    min="1"
                                    max="6"
                                    value={cantidadEntradas}
                                    onChange={handleCantidadChange}
                                />
                            </label>
                        </Card>
                        <Card>
                            Paso 2 <br/> Asientos
                        </Card>
                    </CardGroup>
                </Col>
                <Col sm={4} className="p-0">
                    <Card className="p-2">
                        Paso 3 <br/> Resumen
                        <Card.Body className="p-3">
                            {renderResumen()}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CompraEntrada;
