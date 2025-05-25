import React from 'react';
import NoticiasUMC from './components/noticiasUMC/noticiasUMC'; // Mayúscula
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Mi Sitio de Noticias</h1>
      <NoticiasUMC /> {/* Mayúscula aquí también */}
    </div>
  ); // Cierre correcto
}

export default App;