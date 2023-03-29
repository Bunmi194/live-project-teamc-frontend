import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Layout } from './Layouts/Layout';
// import tw from "tailwind-styled-components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} ></Route>
      <Route path="/layout" element={<Layout leftContentWidth='70%' rightContentWidth='30%'/>} ></Route>
    </Routes>
  );
}

export default App;
