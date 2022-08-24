import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Profil from "./pages/Profil/Profil";
import Gallery from "./pages/Gallery/Gallery";
import MusicFav from "./pages/MusicFav/MusicFav";
import FilmFav from "./pages/FilmFav/FilmFav";
import Tahun90 from "./pages/MusicFav/90s/Tahun90";
import Tahun20 from "./pages/MusicFav/20s/Tahun20";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/MusicFav" element={<MusicFav />} />
        {/* Anaknya MusicFav */}
        <Route path="/MusicFav/90s" element={<Tahun90 />} />
        <Route path="/MusicFav/20s" element={<Tahun20 />} />
        <Route path="/FilmFav" element={<FilmFav />} />
      </Routes>
    </>
  );
}

export default App;
