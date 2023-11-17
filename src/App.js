import "./App.css";
import {BrowerRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Horarios from "./components/Horarios";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Peliculas from "./components/Peliculas";
import Video from "./components/Video";
import Info from "./components/Info";
import Butacahora from "./components/Butacahora";



function App() {
  const youtubeVideoUrl = 'https://www.youtube.com/watch?v=WGIK4p-FJ_M';
  return (
    <BrowerRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowerRouter>
  );
}

export default App;