import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home_Section/Home';
import About from './Components/About_Section/About';
import Skills from './Components/Skills_Section/Skills';
import Project from './Components/Projects_Section/Project';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact_Section/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
