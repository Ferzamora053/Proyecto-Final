import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import InfoPelicula from "./pages/Infopelicula";
import CompraEntrada from "./pages/CompraEntrada";
import InfoEquipo from "./pages/InfoEquipo";
import Contacto from "./pages/Contacto";
import ScrollToTop from "./components/ScrollToTop";

import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <Layout /> <ScrollToTop /> </>}>
          <Route index element={<HomePage />} />
          <Route path="infopeli/:id" element={<InfoPelicula />} />
          <Route path="compraentrada" element={<CompraEntrada />} />
          <Route path="infoequipo" element={<InfoEquipo />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;