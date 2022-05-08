import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, MockmanAPI } from "./pages";
import { Navbar, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/mockman" element={<MockmanAPI />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
