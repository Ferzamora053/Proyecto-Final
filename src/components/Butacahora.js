import React from "react";
import "../CSS/butacahora.css";
function Butacahora() {
    return (
        <div className="container reset-card-styles">
            <h1><p className="text-start fw-bold mt-3">Horarios</p></h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <button type="button" className="btn btn-secondary">2D</button>
                        <button type="button" className="btn btn-outline-primary">DOBLADA</button>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="mt-1">BUTACA TRADICIONAL</p>
                            <button type="button" className="btn btn-outline-primary">12:00</button>
                            <button type="button" className="btn btn-outline-primary">16:00</button>
                            <button type="button" className="btn btn-outline-primary">20:00</button>
                        </div>
                        <div className="accordion-body">
                            <p className="mt-1">BUTACA PREMIUM</p>
                            <button type="button" className="btn btn-outline-primary">12:00</button>
                            <button type="button" className="btn btn-outline-primary">16:00</button>
                            <button type="button" className="btn btn-outline-primary">20:00</button>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <button type="button" className="btn btn-secondary">2D</button>
                        <button type="button" className="btn btn-outline-primary">SUBTITULADA</button>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="mt-1">BUTACA TRADICIONAL</p>
                            <button type="button" className="btn btn-outline-primary">12:00</button>
                            <button type="button" className="btn btn-outline-primary">16:00</button>
                            <button type="button" className="btn btn-outline-primary">20:00</button>
                        </div>
                        <div className="accordion-body">
                            <p className="mt-1">BUTACA PREMIUM</p>
                            <button type="button" className="btn btn-outline-primary">12:00</button>
                            <button type="button" className="btn btn-outline-primary">16:00</button>
                            <button type="button" className="btn btn-outline-primary">20:00</button>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTree" aria-expanded="false" aria-controls="collapseTree">
                        <button type="button" className="btn btn-secondary">3D</button>
                        <button type="button" className="btn btn-outline-primary">DOBLADA</button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stereo-glasses" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 3h-2l-3 9" />
                        <path d="M16 3h2l3 9" />
                        <path d="M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18z" />
                        <path d="M7 16h1" />
                        <path d="M16 16h1" />
                        </svg>
                    </button>
                    </h2>
                    <div id="collapseTree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="mt-1">BUTACA TRADICIONAL</p>
                            <button type="button" className="btn btn-outline-primary">12:00</button>
                            <button type="button" className="btn btn-outline-primary">16:00</button>
                            <button type="button" className="btn btn-outline-primary">20:00</button>
                        </div>
                        <div className="accordion-body">
                            <p className="mt-1">BUTACA PREMIUM</p>
                            <button type="button" className="btn btn-outline-primary">12:00</button>
                            <button type="button" className="btn btn-outline-primary">16:00</button>
                            <button type="button" className="btn btn-outline-primary">20:00</button>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <button type="button" className="btn btn-secondary">3D</button>
                        <button type="button" className="btn btn-outline-primary">SUBTITULADA</button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stereo-glasses" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 3h-2l-3 9" />
                        <path d="M16 3h2l3 9" />
                        <path d="M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18z" />
                        <path d="M7 16h1" />
                        <path d="M16 16h1" />
                        </svg>
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="mt-1">BUTACA TRADICIONAL</p>
                            <button type="button" className="btn btn-outline-primary">12:00</button>
                            <button type="button" className="btn btn-outline-primary">16:00</button>
                            <button type="button" className="btn btn-outline-primary">20:00</button>
                        </div>
                        <div className="accordion-body">
                            <p className="mt-1">BUTACA PREMIUM</p>
                            <button type="button" className="btn btn-outline-primary">12:00</button>
                            <button type="button" className="btn btn-outline-primary">16:00</button>
                            <button type="button" className="btn btn-outline-primary">20:00</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Butacahora;
