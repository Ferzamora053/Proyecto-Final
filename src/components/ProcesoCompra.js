// ProcesoCompra.js
import React, { useState } from 'react';
import PasoBoletos from './PasoBoletos';
import PasoAsientos from './PasoAsientos';
import PasoFinalizarCompra from './PasoFinalizarCompra';
import Barra from './Barra';

const ProcesoCompra = ({ actualizarCantidadBoletos }) => {
  const [step, setStep] = useState(1);
  const [cantidadBoletos, setCantidadBoletos] = useState(0);

  const nextStep = (quantities) => {
    setCantidadBoletos(quantities);
    setStep(step + 1);

    console.log('Cantidad de Adulto PC: ', quantities.cantidadAdulto);
    console.log('Cantidad de Niño PC: ', quantities.cantidadNino);
    console.log('Cantidad de Adulto Mayor PC: ', quantities.cantidadAdultoMayor);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const calcularProgreso = () => {
    // Calcular el progreso según el número de pasos y el paso actual
    return (step / 3) * 100;
  };

  return (
    <div className='mt-1 mb-4'>
      <Barra now={calcularProgreso()} />
      {step === 1 && (
        <PasoBoletos
          nextStep={nextStep}
          actualizarCantidadBoletos={actualizarCantidadBoletos}
        />
      )}
      {step === 2 && (
        <PasoAsientos prevStep={prevStep} nextStep={nextStep} totalBoletos={cantidadBoletos.cantidadBoletos} />
      )}
      {step === 3 && <PasoFinalizarCompra prevStep={prevStep} />}
    </div>
  );
};

export default ProcesoCompra;
