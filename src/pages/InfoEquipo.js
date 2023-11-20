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
            <Card.Title>Fernando Zamora</Card.Title>
            <Card.Text>
            Profesional designado para la concepción y elaboración del diseño de la página web desempeña un papel fundamental en la 
            configuración visual y estructural del sitio. Este rol implica la responsabilidad de 
            asegurar que la estética del sitio web sea atractiva, cautivadora y acorde con los estándares contemporáneos de diseño.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Fernando Zamora</small>
            </Card.Footer>
            </Card>
            <Card style={{ margin: 30 , color: "white"}}>
            <Card.Img variant="top" src={arturo} />
            <Card.Body>
            <Card.Title>Arturo Figueroa</Card.Title>
            <Card.Text>
            Profesional designado para llevar a cabo las funciones operativas de la página web desempeña un rol central en la implementación, 
            supervisión y mantenimiento de las características interactivas y operativas del sitio. Este papel implica una responsabilidad fundamental 
            en la garantía del funcionamiento efectivo de todas las herramientas y funcionalidades disponibles en el entorno digital.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Arturo Figueroa</small>
            </Card.Footer>
            </Card>
            <Card style={{ margin: 30 , color: "white"}}>
            <Card.Img variant="top" src={diego} />
            <Card.Body>
            <Card.Title>Diego Espinoza</Card.Title>
            <Card.Text>
            Profesional designado para la elaboración de la estructura de la página web desempeña un papel crucial en la configuración y 
            organización lógica del sitio. Este rol implica la responsabilidad de asegurar que la arquitectura del sitio sea meticulosamente 
            planificada, presentando una disposición coherente y fácilmente accesible para los usuarios.
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
