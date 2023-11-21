// PasoBoletos.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const PasoBoletos = ({ nextStep, handleChange, values }) => {
  const { cantidadBoletos } = values;

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Form>
      <Form.Group controlId="formCantidadBoletos">
        <Form.Label>Cantidad de Boletos</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese la cantidad de boletos"
          value={cantidadBoletos}
          onChange={handleChange('cantidadBoletos')}
        />
      </Form.Group>
      <Button className="mt-3" variant="primary" onClick={handleNext}>
        Siguiente
      </Button>
    </Form>
  );
};

export default PasoBoletos;
