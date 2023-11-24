// PasoAsientos.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import NoLabelExample from '../components/Asientos';
import pantalla from "../images/pantalla.png";

const PasoAsientos = ({ prevStep, nextStep, values }) => {
  const { cantidadBoletos } = values;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selected) => selected !== seat));
    } else {
      if (selectedSeats.length < cantidadBoletos) {
        setSelectedSeats([...selectedSeats, seat]);
      }
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep(selectedSeats);
  };

  return (
    <Form>
      <NoLabelExample
        selectedSeats={selectedSeats}
        handleSeatSelection={handleSeatSelection}
      />
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
