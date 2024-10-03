// src/App.js
import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Ranking from './components/Ranking';
import About from './components/About';
import Contribution from './components/Contribution';
import Footer from './components/Footer';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Carousel />
            <Ranking />
            <About />
            <Contribution />
            <Footer />
        </div>
    );
}

export default App;
