import React, { useState } from 'react';
import PasoBoletos from './PasoBoletos';
import PasoAsientos from './PasoAsientos';
import PasoFinalizarCompra from './PasoFinalizarCompra';
import Barra from './Barra';

const ProcesoCompra = ({ setCantidadBoletos, cantidadBoletos, ubicacionAsientos, setUbicacionAsientos }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
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
        <PasoBoletos nextStep={nextStep} setCantidadBoletos={setCantidadBoletos} cantidadBoletos={cantidadBoletos} />
      )}
      {step === 2 && (
        <PasoAsientos prevStep={prevStep} nextStep={nextStep} totalBoletos={cantidadBoletos.cantidadBoletos} selectedSeats={ubicacionAsientos} setSelectedSeats={setUbicacionAsientos} />
      )}
      {step === 3 && <PasoFinalizarCompra prevStep={prevStep} totalBoletos={cantidadBoletos.cantidadBoletos} selectedSeats={ubicacionAsientos} />}
    </div>
  );
};

export default ProcesoCompra;
