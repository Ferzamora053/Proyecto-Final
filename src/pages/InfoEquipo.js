import React from "react";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import arturo from "../images/arturo.jpg";
import diego from "../images/diego.jpg";
import fer from "../images/fer.jpg";

function InfoEquipo () {
    return (

        <Container fluid className="">
            <div className="reset-card-styles">
            <Card className="text-center mt-5">
                <Card.Header>CineWeb</Card.Header>
                <Card.Body>
                <Card.Title>Nuestro Equipo</Card.Title>
                <Card.Text>
                Todos los integrantes que aportaron su granito de arena para que este proyecto sea posible.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <CardGroup className="mt-5 mb-5" style={{ margin: 100 }}>
            <Card style={{ margin: 30 , color: "white"}}>
            <Card.Img variant="top" src={fer} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Fernando Zamora</small>
            </Card.Footer>
            </Card>
            <Card style={{ margin: 30 , color: "white"}}>
            <Card.Img variant="top" src={arturo} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Arturo Figueroa</small>
            </Card.Footer>
            </Card>
            <Card style={{ margin: 30 , color: "white"}}>
            <Card.Img variant="top" src={diego} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Diego Espinoza</small>
            </Card.Footer>
            </Card>
            </CardGroup>
        </Container>
 
      
    );
}

export default InfoEquipo;