import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'; 
import Achieve from './components/Achieve'; 

function App() {

  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Achieve />
    </div>
  )
}

export default App
