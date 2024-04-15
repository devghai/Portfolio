import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Skills  from './components/Skills';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      
      <div className='About'>
        <About></About>
      </div>

      <div className = 'Interests'>
        <Interests></Interests>
      </div>

      <div className='Skills'>
       <Skills>
        
       </Skills>
      </div>

      <div className='work'>
        <Work></Work>
      </div>

      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;