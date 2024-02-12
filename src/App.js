import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../src/components/navabr/Navbar.js'
import HomePage from './components/homePage/HomePage.js';
import Footer from './components/footer/Footer.js';
import Exchange from  './components/exchange/Exchange.js'
import Cryptocurrencies from './components/cryptocurrencies/Cryptocurrencies.js';
import CryptoDetails from './components/cryptoDetails/CryptoDetails.js';
import News from './components/news/News.js';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/exchange" element={<Exchange />} />
        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route exact path="/coin/:uuid" element={<CryptoDetails/>} />
        <Route exact path="/news" element={<News />} />
      </Routes>
      <Footer />
      </BrowserRouter>
   

  )
}

export default App