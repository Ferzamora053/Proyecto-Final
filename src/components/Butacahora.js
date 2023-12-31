import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/butacahora.css";
import "../CSS/anular.css";

function Butacahora({ data }) {
    console.log("Movie ID en Butacahora: ", data.movieId);

    const dataAcordion = [
        { id: 'collapseOne', tipoPantalla: '2D', subtitulos: 'DOBLADA', tipoButacas: [{ tipo: 'BUTACA TRADICIONAL', horarios: ['12:00', '16:00', '20:00'] }, { tipo: 'BUTACA PREMIUM', horarios: ['12:00', '16:00', '20:00'] }] },
        { id: 'collapseTwo', tipoPantalla: '2D', subtitulos: 'SUBTITULADA', tipoButacas: [{ tipo: 'BUTACA TRADICIONAL', horarios: ['12:00', '16:00', '20:00'] }, { tipo: 'BUTACA PREMIUM', horarios: ['12:00', '16:00', '20:00'] }] },
        { id: 'collapseThree', tipoPantalla: '3D', subtitulos: 'DOBLADA', tipoButacas: [{ tipo: 'BUTACA TRADICIONAL', horarios: ['12:00', '16:00', '20:00'] }, { tipo: 'BUTACA PREMIUM', horarios: ['12:00', '16:00', '20:00'] }] },
        { id: 'collapseFour', tipoPantalla: '3D', subtitulos: 'SUBTITULADA', tipoButacas: [{ tipo: 'BUTACA TRADICIONAL', horarios: ['12:00', '16:00', '20:00'] }, { tipo: 'BUTACA PREMIUM', horarios: ['12:00', '16:00', '20:00'] }] },
    ]

    return (
        <div className="container-lg reset-card-styles">
            <h1><p className="text-start fw-bold mt-3">Horarios</p></h1>
            <Acordion items={dataAcordion} movieId={data.movieId} movieTitle={data.titulo} movieImage={data.image} />
        </div>
    );
}

function VisualizarHorario({ horario, tipoPantalla, subtitulos, tipoButacas, movieId, movieTitle, movieImage }) {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Horario:", horario);
        console.log("Tipo de Pantalla:", tipoPantalla);
        console.log("Subtítulos:", subtitulos);
        console.log("Tipo de Butacas:", tipoButacas);
        console.log("Movie ID:", movieId);
        console.log("Movie Title:", movieTitle);
        console.log("Movie Image:", movieImage);

        navigate(`/compraentrada?horario=${horario}&tipoPantalla=${tipoPantalla}&subtitulos=${subtitulos}&tipoButacas=${JSON.stringify(tipoButacas)}&movieId=${movieId}&movieTitle=${encodeURIComponent(movieTitle)}&movieImage=${encodeURIComponent(movieImage)}`);
    }

    return (
        <button type="button" className="btn btn-outline-primary" onClick={handleClick}>
            {horario}
        </button>
    );
}

function TipoButaca ({ tipo, horarios, tipoPantalla, subtitulos, movieId, movieTitle, movieImage }) {
    return (
        <div className="accordion-body">
            <p className="mt-1">{tipo}</p>
            {horarios.map((horario, index) => (
                <VisualizarHorario 
                    key={index} 
                    horario={horario}    
                    tipoPantalla={tipoPantalla}
                    subtitulos={subtitulos}
                    tipoButacas={tipo}
                    movieId={movieId}
                    movieTitle={movieTitle}
                    movieImage={movieImage}
                />
            ))}
        </div>
    )
}

function ItemAcordion ({ id, tipoPantalla, subtitulos, tipoButacas, movieId, movieTitle, movieImage }) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${id === 'collapseOne' ? 'fw-semibold' : 'collapsed fw-semibold'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded="false"
                    aria-controls={id}
                >
                    <button type="button" className="btn btn-secondary">{tipoPantalla}</button>
                    <button type="button" className="btn btn-outline-primary">{subtitulos}</button>
                    {id === 'collapseThree' || id === 'collapseFour' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stereo-glasses" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 3h-2l-3 9" />
                        <path d="M16 3h2l3 9" />
                        <path d="M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18z" />
                        <path d="M7 16h1" />
                        <path d="M16 16h1" />
                        </svg>
                    ) : null}
                </button>
            </h2>
            <div id={id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                {tipoButacas.map((tipoButaca, index) => (
                    <TipoButaca
                        key={index}
                        tipo={tipoButaca.tipo}
                        horarios={tipoButaca.horarios}
                        tipoPantalla={tipoPantalla}
                        subtitulos={subtitulos}
                        movieId={movieId}
                        movieTitle={movieTitle}
                        movieImage={movieImage}
                    />
                ))}
            </div>
        </div>
    );
}

function Acordion ({ items, movieId, movieTitle, movieImage }) {
    return (
        <div className="accordion mb-4" id="accordionExample">
            {items.map((item, index) => (
                <ItemAcordion key={index} {...item} movieId={movieId} movieTitle={movieTitle} movieImage={movieImage} />
            ))}
        </div>
    );
}

export default Butacahora;
