import React from 'react';
import { Button } from 'react-bootstrap';
import Fomrtarjeta from '../components/Formtarjeta';

const PasoFinalizarCompra = ({ prevStep }) => {
  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleFinalizarCompra = () => {
    // Lógica para finalizar la compra
    console.log('Compra finalizada');
  };

  return (
    <div>
      <h2>Confirmar compra</h2>
      {/* Mostrar resumen de la compra */}
      <Fomrtarjeta />
      <Button className="mt-3" variant="secondary" onClick={handlePrev}>
        Anterior
      </Button>{' '}
    </div>
  );
};

export default PasoFinalizarCompra;
