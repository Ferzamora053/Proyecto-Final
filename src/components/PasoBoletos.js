import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../CSS/pasoboletos.css';

const PasoBoletos = ({ nextStep, setCantidadBoletos, cantidadBoletos }) => {

  const handleNext = () => {
    nextStep(cantidadBoletos);
  };

  return (
    <div className='container-boletos'>
      <h4>Selecciona la cantidad de boletos</h4>
      <p style={{ marginTop: '25px' }}>Puedes comprar hasta un máximo de 5 boletos por transacción.</p>
      <p className='fs-4 mt-5'>Tipo de Butaca</p>
      <Container className='mt-4' style={{ minWidth: '200px', maxWidth: '500px' }}>
        <Boton
          edad='Adulto'
          precio='2990'
          cantidadBoletos={cantidadBoletos}
          setCantidadBoletos={setCantidadBoletos}
          tipoBoleto='cantidadAdulto'
        />
        <Boton
          edad='Niño'
          precio='1490'
          cantidadBoletos={cantidadBoletos}
          setCantidadBoletos={setCantidadBoletos}
          tipoBoleto='cantidadNino'
        />
        <Boton
          edad='Adulto Mayor'
          precio='1990'
          cantidadBoletos={cantidadBoletos}
          setCantidadBoletos={setCantidadBoletos}
          tipoBoleto='cantidadAdultoMayor'
        />
      </Container>
      <div className='align-btns'>
        <button className='custom-btn-success' onClick={() => handleNext(setCantidadBoletos)}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

function Boton ({ edad, precio, cantidadBoletos, setCantidadBoletos, tipoBoleto }) {
  const maxCantidad = 5;

  const handleSumar = () => {
    if (cantidadBoletos.cantidadBoletos < maxCantidad && cantidadBoletos[tipoBoleto] < maxCantidad) {
      const canBoletos = {...cantidadBoletos}
      canBoletos[tipoBoleto] = canBoletos[tipoBoleto]+1
      canBoletos.cantidadBoletos = canBoletos.cantidadBoletos+1
      setCantidadBoletos(canBoletos)
    }
  };

  const handleRestar = () => {
    if (cantidadBoletos[tipoBoleto] > 0) {
      const canBoletos = {...cantidadBoletos}
      canBoletos[tipoBoleto] = canBoletos[tipoBoleto]-1
      canBoletos.cantidadBoletos = canBoletos.cantidadBoletos-1
      setCantidadBoletos(canBoletos)
    }
  };
  
  return (
    <div className='row mb-2 d-flex align-items-center'>
      <div className='col text-start'>{edad}</div>
      <div className='col'>${precio}</div>
      <div className='col d-flex align-items-center'>
        <button
          type='button'
          onClick={handleRestar}
          className={`custom-btn ${cantidadBoletos[tipoBoleto] === 0 ? 'disabled-btn' : ''}`}
          disabled={ cantidadBoletos[tipoBoleto] === 0 }
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
        <button
          type='button'
          onClick={handleSumar}
          className={`custom-btn ${cantidadBoletos.cantidadBoletos >= maxCantidad ? 'disabled-btn' : ''}`}
          disabled={ cantidadBoletos.cantidadBoletos >= maxCantidad }
        >
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
        <div className='display-cantidad-boletos'>{cantidadBoletos[tipoBoleto]}</div>
      </div>
    </div>
  );
}

export default PasoBoletos;
