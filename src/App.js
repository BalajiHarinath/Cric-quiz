import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, MockmanAPI, Rules, Question, Result, SignUp, Login } from "./pages";
import { Navbar, Footer, RestrictAuth, RequireAuth } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<RestrictAuth />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/rules/:quizId" element={<Rules />} />
          <Route
            path="/question/:quizId/:questionNumber"
            element={<Question />}
          />
          <Route path="/result" element={<Result />} />
        </Route>
        
        {/* <Route path="/mockman" element={<MockmanAPI />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
