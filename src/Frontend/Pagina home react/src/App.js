import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ranking from './components/Ranking';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

