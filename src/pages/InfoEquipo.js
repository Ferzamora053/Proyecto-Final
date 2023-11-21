import React from "react";
import "../CSS/justificar-parrafo.css"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import arturo from "../images/arturo.jpg";
import diego from "../images/diego.jpg";
import fer from "../images/fer.jpg";

function InfoEquipo () {
    return (
        <Container fluid>
            <div className="reset-card-styles" style={{ marginLeft: 30, marginRight: 30 }}>
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
            <CardGroup className="mt-5 mb-5 mx-0 px-0">
                <Miembro nombre="Fernando Zamora" imagen={fer} rol="Diseñador" descripcion="Profesional designado para la concepción y elaboración del diseño de la página web desempeña un papel fundamental en la
                configuración visual y estructural del sitio. Este rol implica la responsabilidad de asegurar que la estética del sitio web sea atractiva, cautivadora y acorde con los estándares contemporáneos de diseño." />
                <Miembro nombre="Arturo Figueroa" imagen={arturo} rol="Programador" descripcion="Profesional designado para llevar a cabo las funciones operativas de la página web desempeña un rol central en la implementación, supervisión y mantenimiento de las características interactivas y operativas del sitio. Este papel implica una responsabilidad fundamental en la garantía del funcionamiento efectivo de todas las herramientas y funcionalidades disponibles en el entorno digital." />
                <Miembro nombre="Diego Espinoza" imagen={diego} rol="Arquitecto" descripcion="Profesional designado para la elaboración de la estructura de la página web desempeña un papel crucial en la configuración y organización lógica del sitio. Este rol implica la responsabilidad de asegurar que la arquitectura del sitio sea meticulosamente planificada, presentando una disposición coherente y fácilmente accesible para los usuarios." />
            </CardGroup>
        </Container>      
    );
}

function Miembro ({ nombre, imagen, rol, descripcion }) {
    return (
        <Card style={{ margin: 30, color: "white"}} className="rounded" >
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{rol}</Card.Text>
                <Card.Text className="justificar-parrafo">{descripcion}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center"><p style={{ color: "black" }} className="mb-0 p-1 fs-5">{nombre}</p></Card.Footer>
        </Card>
    );
}

export default InfoEquipo;
