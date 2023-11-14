import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <h1>HOLA</h1>
      <h2>CHAO</h2>
      <Navbar />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;