import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "../src/index.css";
import { Route, Routes } from "react-router-dom";
import MainElement from "./components/MainElement";
import NotFound from "./components/NotFound";
import Reservation from "./components/Reservation";
// Confirmation content
import React, { useState } from "react";
import ConfirmationContext from "./components/ConfirmationContext";
import Confirmation from "./components/Confirmation";
//Ends here
function App() {
  const [bookingDetails, setBookingDetails] = useState({});

  return (
    <>
      <ConfirmationContext.Provider
        value={{ bookingDetails, setBookingDetails }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<MainElement />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ConfirmationContext.Provider>
    </>
  );
}

export default App;
