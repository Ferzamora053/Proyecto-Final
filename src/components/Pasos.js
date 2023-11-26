import React from 'react';
import "../CSS/pasos.css";

function Pasos() {
  return (
    <div className='row custom-progress-bar'>
        <div className='col'>
            Paso 1 <br/> Boletos
        </div>
        <div className='col'>
            Paso 2 <br/> Asientos
        </div>
        <div className='col'>
            Paso 3 <br/> Confirmación
        </div>
    </div>
  );
}

export default Pasos;