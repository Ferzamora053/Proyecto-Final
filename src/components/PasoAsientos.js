import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import NoLabelExample from '../components/Asientos';

const PasoAsientos = ({ prevStep, nextStep, totalBoletos }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.length < totalBoletos) {
      // Solo permite la selección de asientos si no se excede la cantidad de boletos
      setSelectedSeats((prevSeats) =>
        prevSeats.includes(seat)
          ? prevSeats.filter((selected) => selected !== seat)
          : [...prevSeats, seat]
      );
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

  console.log('Cantidad de boletos:', totalBoletos )

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
