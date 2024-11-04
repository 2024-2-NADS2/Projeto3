// src/App.js
import React from 'react';
import Header from './components/Header';
import Contato from './components/Contato';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
