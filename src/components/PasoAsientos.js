// PasoAsientos.js
import React from 'react';
import { Form } from 'react-bootstrap';
import NoLabelExample from '../components/Asientos';
import pantalla from "../images/pantalla.png";

const PasoAsientos = ({ prevStep, nextStep, totalBoletos, selectedSeats, setSelectedSeats}) => {
  // const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.length < totalBoletos) {
      // Solo permite la selección de asientos si no se excede la cantidad de boletos
      setSelectedSeats((prevSeats) => {
        const newSeats = prevSeats.includes(seat)
          ? prevSeats.filter((selected) => selected !== seat)
          : [...prevSeats, seat];
        return newSeats;
      });
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
      <div className='align-btns'>
        <button className='custom-btn-back' onClick={handlePrev}>
          Anterior
        </button>
        <button className='custom-btn-success' onClick={handleNext}>
          Siguiente
        </button>
      </div>
    </Form>

  );
};

export default PasoAsientos;
