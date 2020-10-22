import React from 'react';
import NavGauche from './NavGauche';
import './App.css';
import NavDroit from './NavDroit';
import Footer from './Footer';

function App() {
  return (
    <div class="container"> 
       <NavGauche />
       <NavDroit />
       <Footer />
    </div>
    
  );
}

export default App;
