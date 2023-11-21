import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import "../CSS/pasos.css";

function Pasos() {
  return (
    <Row className="reset-card-styles mt-3">
    <Col sm={12} className="p-0">
        <CardGroup className="text-center">
            <Card>
                Paso 1 <br/> Boletos
            </Card>
            <Card>
                Paso 2 <br/> Asientos
            </Card>
            <Card>
                Paso 3 <br/> Finalizar compra
            </Card>
        </CardGroup>
    </Col>
</Row>
  );
}

export default Pasos;