// pasoBoletos.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../CSS/pasoboletos.css';
import { Button } from 'react-bootstrap';

const PasoBoletos = ({ nextStep, handleChange, values }) => {
  const { cantidadBoletos } = values;

  const handleNext = () => {
    nextStep(cantidadBoletos);
  };

  return (
    <div className='container-boletos'>
      <h4>Selecciona la cantidad de boletos</h4>
      <p style={{ marginTop: '25px' }}>Puedes comprar hasta un máximo de 5 boletos por transacción.</p>
      <p className='fs-4 mt-5'>Tipo de Butaca</p>
      <Container className='mt-4' style={{ minWidth: '200px', maxWidth: '500px' }}>
        <Boton edad='Adulto' precio='100' />
        <Boton edad='Niño' precio='50' />
        <Boton edad='Adulto Mayor' precio='75' />
      </Container>
      <button className='custom-btn-success' onClick={handleNext}>
        Siguiente
      </button>
    </div>
  );
};

function Boton ({ edad, precio }) {
  const [cantidad, setCantidad] = useState(0)

  const handleSumar = () => {
    setCantidad(cantidad + 1)
  }

  const handleRestar = () => {
    setCantidad(cantidad > 0 ? cantidad - 1 : 0)
  }

  return (
    <div className='row mb-2 d-flex align-items-center'>
      <div className='col text-start'>{edad}</div>
      <div className='col'>${precio}</div>
      <div className='col d-flex align-items-center'>
        <button
          type='button'
          onClick={handleRestar}
          className={`custom-btn ${cantidad === 0 ? 'disabled-btn' : ''}`}
          disabled={cantidad === 0}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-minus'
            width='32px'
            height='24px'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='#2c3e50'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l14 0' />
          </svg>
        </button>
        <button type='button' onClick={handleSumar} className='custom-btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-plus'
            width='32px'
            height='24px'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='#2c3e50'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M12 5l0 14' />
            <path d='M5 12l14 0' />
          </svg>
        </button>
        <div className='display-cantidad-boletos'>{cantidad}</div>
      </div>
    </div>
  );
}

export default PasoBoletos;
