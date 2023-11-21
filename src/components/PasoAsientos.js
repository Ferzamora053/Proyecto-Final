// PasoAsientos.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const PasoAsientos = ({ prevStep, nextStep, handleChange, values }) => {
  const { ubicacionAsientos } = values;

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Form>
      <Form.Group controlId="formUbicacionAsientos">
        <Form.Label>Ubicación de los Asientos</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la ubicación de los asientos"
          value={ubicacionAsientos}
          onChange={handleChange('ubicacionAsientos')}
        />
      </Form.Group>
      <Button className="mt-3" variant="secondary" onClick={handlePrev}>
        Anterior
      </Button>{' '}
      <Button className="mt-3" variant="primary" onClick={handleNext}>
        Siguiente
      </Button>
    </Form>
  );
};

export default PasoAsientos;
