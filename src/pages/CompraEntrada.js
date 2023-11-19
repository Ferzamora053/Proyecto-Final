import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../CSS/anular.css'

function CompraEntrada () {
    return (
        <Container>
            <Row className="reset-card-styles">
                <Col sm={8} className="p-0">
                    <CardGroup className="text-center">
                        <Card className="p-2" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>Paso 1 <br/> Boletos</Card>
                        <Card className="p-2" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>Paso 2 <br/> Asientos</Card>
                        <Card className="p-2" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>Paso 3 <br/> Pago</Card>
                    </CardGroup>
                    <Card className="text-center p-1">wtgrethrfgm</Card>
                </Col>
                <Col sm={4} className="p-0">
                    <Card className="text-center p-2" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>Resumen de compras</Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CompraEntrada;