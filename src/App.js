import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const youtubeVideoUrl = 'https://www.youtube.com/watch?v=WGIK4p-FJ_M';
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;