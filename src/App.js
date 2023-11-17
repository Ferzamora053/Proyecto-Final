import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import InfoPelicula from "./pages/InfoPelicula";
import CompraEntrada from "./pages/CompraEntrada";
import InfoEquipo from "./pages/InfoEquipo";
import Contacto from "./pages/Contacto";

import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const youtubeVideoUrl = 'https://www.youtube.com/watch?v=WGIK4p-FJ_M';
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="infopeli" element={<InfoPelicula />} />
          <Route path="compraentrada" element={<CompraEntrada />} />
          <Route path="infoequipo" element={<InfoEquipo />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;