// pasoBoletos.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../CSS/pasoboletos.css';

const PasoBoletos = ({ nextStep, actualizarCantidadBoletos }) => {
  const [totalBoletos, setTotalBoletos] = useState(0);
  const [cantidadAdulto, setCantidadAdulto] = useState(0);
  const [cantidadNino, setCantidadNino] = useState(0);
  const [cantidadAdultoMayor, setCantidadAdultoMayor] = useState(0);

  const handleNext = () => {
    const quantities = {
      cantidadBoletos: totalBoletos,
      cantidadAdulto,
      cantidadNino,
      cantidadAdultoMayor,
    };

    nextStep(quantities);
  };

  console.log('Cantidad de boletos: ', totalBoletos);
  console.log('Cantidad de Adulto: ', cantidadAdulto);
  console.log('Cantidad de Niño: ', cantidadNino);
  console.log('Cantidad de Adulto Mayor: ', cantidadAdultoMayor);

  return (
    <div className='container-boletos'>
      <h4>Selecciona la cantidad de boletos</h4>
      <p style={{ marginTop: '25px' }}>Puedes comprar hasta un máximo de 5 boletos por transacción.</p>
      <p className='fs-4 mt-5'>Tipo de Butaca</p>
      <Container className='mt-4' style={{ minWidth: '200px', maxWidth: '500px' }}>
        <Boton
          edad='Adulto'
          precio='100'
          totalBoletos={totalBoletos}
          setTotalBoletos={setTotalBoletos}
          cantidad={cantidadAdulto}
          setCantidad={setCantidadAdulto}
          actualizarCantidadBoletos={actualizarCantidadBoletos}
        />
        <Boton
          edad='Niño'
          precio='50'
          totalBoletos={totalBoletos}
          setTotalBoletos={setTotalBoletos}
          cantidad={cantidadNino}
          setCantidad={setCantidadNino}
          actualizarCantidadBoletos={actualizarCantidadBoletos}
        />
        <Boton
          edad='Adulto Mayor'
          precio='75'
          totalBoletos={totalBoletos}
          setTotalBoletos={setTotalBoletos}
          cantidad={cantidadAdultoMayor}
          setCantidad={setCantidadAdultoMayor}
          actualizarCantidadBoletos={actualizarCantidadBoletos}
        />
      </Container>
      <button className='custom-btn-success' onClick={() => handleNext(actualizarCantidadBoletos)}>
        Siguiente
      </button>
    </div>
  );
};

function Boton ({ edad, precio, totalBoletos, setTotalBoletos, cantidad, setCantidad, actualizarCantidadBoletos }) {
  const maxCantidad = 5;

  const handleSumar = () => {
    if (cantidad < maxCantidad && totalBoletos < maxCantidad) {
      setCantidad(cantidad + 1);
      setTotalBoletos(totalBoletos + 1);
      actualizarCantidadBoletos(totalBoletos + 1);
    }
  };

  const handleRestar = () => {
    if (cantidad > 0 && totalBoletos > 0) {
      setCantidad(cantidad - 1);
      setTotalBoletos(totalBoletos - 1);
      actualizarCantidadBoletos(totalBoletos - 1);
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
          className={`custom-btn ${cantidad === 0 ? 'disabled-btn' : ''}`}
          disabled={ cantidad === 0 }
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
          className={`custom-btn ${totalBoletos >= maxCantidad ? 'disabled-btn' : ''}`}
          disabled={ totalBoletos >= maxCantidad }
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
        <div className='display-cantidad-boletos'>{cantidad}</div>
      </div>
    </div>
  );
}

export default PasoBoletos;
