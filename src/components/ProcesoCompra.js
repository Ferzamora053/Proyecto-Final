// ProcesoCompra.js
import React, { useState } from 'react';
import PasoBoletos from './PasoBoletos';
import PasoAsientos from './PasoAsientos';
import PasoFinalizarCompra from './PasoFinalizarCompra';
import Barra from './Barra';
import { Container } from 'react-bootstrap';

const ProcesoCompra = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    cantidadBoletos: 0,
    ubicacionAsientos: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  const calcularProgreso = () => {
    // Calcular el progreso según el número de pasos y el paso actual
    return (step / 3) * 100;
  };

  return (
      <div className='mt-1 mb-4'>
        <Barra now={calcularProgreso()} />
        <h1>Compra de Entradas</h1>
        {step === 1 && <PasoBoletos nextStep={nextStep} handleChange={handleChange} values={values} />}
        {step === 2 && <PasoAsientos prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={values} />}
        {step === 3 && <PasoFinalizarCompra prevStep={prevStep} />}
      </div>
  );
};

export default ProcesoCompra;
