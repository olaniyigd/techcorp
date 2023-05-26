import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={< Home/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;