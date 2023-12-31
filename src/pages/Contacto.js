import React from "react";
import "../CSS/contacto.css";
import '../CSS/anular.css';
import "../CSS/justificar-parrafo.css";

import { Container, Card, Form, Row, Col, Button, CardGroup } from 'react-bootstrap';

const InfoCard = ({ title, text }) => {
    return (
      <Card border="primary" className="my-3 mx-1 rounded border-start">
        <div style={{ flex: 2, padding: '1rem' }}>
          <Card.Body>
            <Card.Title style={{ color: "#00008B"}} className="fw-bold text-center">{title}</Card.Title>
            <Card.Text className="justificar-parrafo">{text}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    );
};

const Contacto = () => {
    const cardData = [
      {
        title: 'Nuestra Historia del Cine:',
        text: 'Sumérgete con nosotros en un viaje a través de las eras cinematográficas. Desde los primeros destellos de imágenes en blanco y negro hasta las producciones de vanguardia de la actualidad, nuestra página web está dedicada a exponer la rica y fascinante historia del cine. Descubre cómo esta forma de arte ha evolucionado, inspirado y conectado a personas de todo el mundo logrando un sin fin de nuevas personas que llegan a este mundo.',
      },
      {
        title: 'Misión:',
        text: 'En el corazón de nuestra misión se encuentra el deseo de brindar experiencias cinematográficas excepcionales que perduren en la memoria de nuestros visitantes. Nos esforzamos por ofrecer una cuidadosa selección de películas que no solo entretengan, sino que también provoquen reflexión y emoción. Queremos ser el destino preferido de los amantes del cine, donde cada visita se traduzca en momentos inolvidables.',
      },
      {
        title: 'Visión:',
        text: 'Imaginamos un futuro donde la magia del cine continúe siendo una fuente inagotable de inspiración y entretenimiento. Nuestra visión es crear un espacio donde la diversidad de voces y perspectivas en el cine se celebre y donde cada usuario se sienta parte de una comunidad apasionada. Buscamos ir más allá de ser simplemente un cine; aspiramos a ser un hogar para aquellos que comparten nuestra devoción por las historias bien contadas.',
      },
    ];

  return (
    <Container className="reset-card-styles">
        <h1><p className="text-center fw-bold mt-2">CineWeb</p></h1>
        <p className="text-center mb-4">¡Bienvenidos a nuestra página web de cine, el lugar donde la magia del séptimo 
        arte cobra vida! Aquí, nos enorgullece presentarles no solo una selección excepcional de películas, 
        sino también una experiencia digital diseñada con pasión y dedicación.</p>
        <Container className="mx-0">
            <div className="row">
                <div className=" col-lg-12 col-xxl-5 m-auto">
                    <h4 style={{ color: "#00008B"}} className="fw-bold">Valores:</h4>
                    <ul>
                        <li>En nuestra página web, nos guiamos por valores fundamentales que creemos son esenciales para crear una experiencia auténtica y enriquecedora:</li>
                        <li>Pasión por el Cine: Nos apasiona el cine en todas sus formas y expresiones, y buscamos compartir esa pasión con cada visitante.</li>
                        <li>Diversidad y Inclusión: Valoramos y celebramos la diversidad en todas sus formas, tanto en las películas que presentamos como en nuestra comunidad de espectadores.</li>
                        <li>Calidad y Excelencia: Nos esforzamos por ofrecer la más alta calidad en todo lo que hacemos, desde la selección de películas hasta la experiencia digital que ofrecemos a nuestros usuarios.</li>
                    </ul>
                </div>
                <div className="col-xxl-5 mr-3">
                <img
                  src="https://img.freepik.com/foto-gratis/vista-elementos-cine-3d_23-2150720822.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700438400&semt=sph"
                  alt="Elementos de cine"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  className="mx-auto d-block d-none d-xxl-block"
                />
                </div>
            </div>
        </Container>
        <Container>
          <CardGroup className="flex-column flex-lg-row">
            {cardData.map((data, index) => (
              <InfoCard key={index} {...data} />
            ))}
          </CardGroup>
        </Container>

        <p className="text-center">Si quieres saber más de nosotros, contactanos...</p>
        <h1><p className="text-center fw-bold mt-4">Contacto</p></h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Form>
        <Row className="mb-3 gx-2">
        <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo" />
        </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridSubject">
        <Form.Label>Tema</Form.Label>
        <Form.Control placeholder="Ingresa tu tema" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridMessage">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Ingresa tu mensaje" />
        </Form.Group>

        <Row className="mb-3 gx-2">
        <Form.Group as={Col} controlId="formGridPhone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="tel" placeholder="Ingresa tu telefono" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCompany">
        <Form.Label>Compañia</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu compañia" />
        </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
        Enviar
        </Button>
        </Form>
        </div>
    </Container>
  );
}

export default Contacto;
