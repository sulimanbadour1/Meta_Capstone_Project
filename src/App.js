import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import "../src/index.css";

import { Link, Route, Routes } from "react-router-dom";
import Map from "./components/Map";
import MainElement from "./components/MainElement";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainElement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
