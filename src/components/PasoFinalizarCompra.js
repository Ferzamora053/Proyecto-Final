// PasoFinalizarCompra.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Formtarjeta from '../components/Formtarjeta';
import '../CSS/custombotones.css';

const PasoFinalizarCompra = ({ prevStep, totalBoletos }) => {
  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const navigate = useNavigate();

  const handleFinalizarCompra = () => {
    alert('¡Compra realizada con éxito, muchas gracias por elerginos!')
    navigate('/');
  };

  return (
    <div>
      <h2>Confirmar compra</h2>
      <Formtarjeta />
      <div className='align-btns'>
        <button className='custom-btn-back' onClick={handlePrev}>
          Anterior
        </button>
        <button className='custom-btn-end' onClick={handleFinalizarCompra}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default PasoFinalizarCompra;
