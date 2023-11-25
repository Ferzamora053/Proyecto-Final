import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/resumen.css';

function Resumen ({ movieTitle, movieImage, horario, tipoPantalla, subtitulos, tipoButacas, cantidadEntradas, asientosSeleccionados }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className='style-resumen row'>
            <div className='custom-titulo'>
                <div className='col-10'>
                    <p className='m-0'>Resumen de compra</p>
                </div>
                <div className='col-2'>
                    <button 
                        type='button'
                        className='custom-back-btn'
                        onClick={handleClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg>    
                    </button>
                </div>
            </div>
            <div>
                <p className='fs-5 m-0'>Película: {movieTitle}</p>
                <div className='row'>
                    <div className='col div-poster'>
                        <img className='movie-poster' src={movieImage} alt={movieTitle} />
                    </div>
                    <div className='col div-info'>
                        <p className='mb-1'>Horario: {horario}</p>
                        <p className='mb-1'>Tipo de pantalla: {tipoPantalla}</p>
                        <p className='mb-1'>Subtítulos: {subtitulos}</p>
                        <p className='mb-1'>Tipo de butacas: {tipoButacas}</p>
                    </div>
                </div>
            </div>
            <div className='info-bol-as'>
                Cantidad de boletos: <br /> Asientos:
            </div>
            <div>
                Total a pagar:
            </div>
        </div>
    );
}

export default Resumen;