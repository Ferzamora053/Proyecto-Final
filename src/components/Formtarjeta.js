import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function PaymentForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Nombre en la tarjeta</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre en la tarjeta"
          />
          <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Número de tarjeta</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Número de tarjeta"
          />
          <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Fecha de vencimiento</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="MM/AA"
          />
          <Form.Control.Feedback type="invalid">
            Por favor, proporciona una fecha de vencimiento válida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Código de seguridad</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="CVC"
          />
          <Form.Control.Feedback type="invalid">
            Por favor, proporciona un código de seguridad válido.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustomEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, proporciona un correo electrónico válido.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default PaymentForm;
