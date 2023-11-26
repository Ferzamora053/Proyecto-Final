import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/resumen.css';

function Resumen({ movieTitle, movieImage, horario, tipoPantalla, subtitulos, tipoButacas, cantidades, ubicacionAsientos }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const sumaPrecio = () => {
        let suma = 0;
        suma += cantidades.cantidadAdulto * 2990;
        suma += cantidades.cantidadNino * 1490;
        suma += cantidades.cantidadAdultoMayor * 1990;
        return suma;
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
                        <p className='mb-3'>Horario: {horario}</p>
                        <p className='mb-3'>Tipo de pantalla: {tipoPantalla}</p>
                        <p className='mb-3'>Subtítulos: {subtitulos}</p>
                        <p className='mb-3'>Tipo de butacas: {tipoButacas}</p>
                    </div>
                </div>
            </div>
            <div className='info-bol-as'>
                Cantidad de boletos: {cantidades.cantidadBoletos} <br /> Asientos: {ubicacionAsientos.join(', ')}
            </div>
            <div>
                Total a pagar: ${sumaPrecio()} CLP
            </div>
        </div>
    );
}

function ResumenMobile({ movieTitle, horario, cantidades }) {
    const sumaPrecio = () => {
        let suma = 0;
        suma += cantidades.cantidadAdulto * 2990;
        suma += cantidades.cantidadNino * 1490;
        suma += cantidades.cantidadAdultoMayor * 1990;
        return suma;
    }

    return (
        <Container className='mt-5 text-center border-top'>
            <h5 className='mt-3 mb-4'>Resumen de compra</h5>
            <Row>
                <Col className='mt-2 mb-4 custom-border'>Película: {movieTitle}</Col>
                <Col className='mt-2 mb-4 custom-border'>Horario: {horario}</Col>
            </Row>
            <Row className='custom-border mb-4'>
                <Col className='py-2 text-start'>Total a pagar: {cantidades.cantidadBoletos}</Col>
                <Col className='py-2 text-end'>${sumaPrecio()} CLP</Col>
            </Row>
        </Container>
    );
}

export default { Resumen, ResumenMobile };