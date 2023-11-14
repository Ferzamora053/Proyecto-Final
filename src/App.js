import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;