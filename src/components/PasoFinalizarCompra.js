// PasoFinalizarCompra.js
import React from 'react';
import { Button } from 'react-bootstrap';

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

      <Button className="mt-3" variant="secondary" onClick={handlePrev}>
        Anterior
      </Button>{' '}
      <Button className="mt-3" variant="success" onClick={handleFinalizarCompra}>
        Finalizar Compra
      </Button>
    </div>
  );
};

export default PasoFinalizarCompra;
