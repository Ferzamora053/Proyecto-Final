import React from "react";
import "../CSS/contacto.css";
import fondocont from "../images/fondocont.jpg";

function Contacto() {

    const fondoStyle = {
        backgroundImage: `url(${fondocont})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div lassName="container-fluid">
            <div className="container fondo"style={fondoStyle}>
                <div>
                    <h1 className="text-center text-white">CineWeb</h1>
                    <p className="text-white">
                        ¡Bienvenidos a nuestra página web de cine, el lugar donde la magia del séptimo arte cobra vida! Aquí, nos enorgullece presentarles no solo una selección excepcional de películas, sino también una experiencia digital diseñada con pasión y dedicación.
                    </p>
                    <p className="text-white">
                        <strong>Nuestra Historia del Cine:</strong> Sumérgete con nosotros en un viaje a través de las eras cinematográficas. Desde los primeros destellos de imágenes en blanco y negro hasta las producciones de vanguardia de la actualidad, nuestra página web está dedicada a exponer la rica y fascinante historia del cine. Descubre cómo esta forma de arte ha evolucionado, inspirado y conectado a personas de todo el mundo.
                    </p>
                    <p className="text-white">
                        <strong>Misión:</strong> En el corazón de nuestra misión se encuentra el deseo de brindar experiencias cinematográficas excepcionales que perduren en la memoria de nuestros visitantes. Nos esforzamos por ofrecer una cuidadosa selección de películas que no solo entretengan, sino que también provoquen reflexión y emoción. Queremos ser el destino preferido de los amantes del cine, donde cada visita se traduzca en momentos inolvidables.
                    </p>
                    <p className="text-white">
                        <strong>Visión:</strong> Imaginamos un futuro donde la magia del cine continúe siendo una fuente inagotable de inspiración y entretenimiento. Nuestra visión es crear un espacio donde la diversidad de voces y perspectivas en el cine se celebre y donde cada usuario se sienta parte de una comunidad apasionada. Buscamos ir más allá de ser simplemente un cine; aspiramos a ser un hogar para aquellos que comparten nuestra devoción por las historias bien contadas.
                    </p>
                    <p className="text-white">
                        <strong>Valores:</strong> En nuestra página web, nos guiamos por valores fundamentales que creemos son esenciales para crear una experiencia auténtica y enriquecedora.
                    </p>
                    <ul className="text-white">
                        <li><strong>Pasión por el Cine:</strong> Nos apasiona el cine en todas sus formas y expresiones, y buscamos compartir esa pasión con cada visitante.</li>
                        <li><strong>Diversidad y Inclusión:</strong> Valoramos y celebramos la diversidad en todas sus formas, tanto en las películas que presentamos como en nuestra comunidad de espectadores.</li>
                        <li><strong>Calidad y Excelencia:</strong> Nos esforzamos por ofrecer la más alta calidad en todo lo que hacemos, desde la selección de películas hasta la experiencia digital que ofrecemos a nuestros usuarios.</li>
                    </ul>
                    <p className="text-white">
                        <strong>Experiencia del Usuario:</strong> Sabemos que su tiempo es valioso, y es por eso que hemos diseñado nuestra página web para que la exploración sea fácil, intuitiva y, sobre todo, divertida. Queremos que se sienta como en casa mientras navega por nuestra selección de películas, descubre detalles fascinantes sobre la historia del cine y se sumerge en la magia que solo el cine puede ofrecer.
                    </p>
                    <h1 className="text-center text-white mb-5">....</h1>
                </div>
            </div>
            <h1 className="text-center text-black">Si quieres saber más de nosotros contactanos:</h1>

        </div>

       
            

    )
}

export default Contacto;
