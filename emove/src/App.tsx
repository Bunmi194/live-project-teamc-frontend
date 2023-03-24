import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import tw from "tailwind-styled-components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
    </Routes>
  );
}

export default App;
