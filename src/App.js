// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importación actualizada
import Home from './views/Home';
import Proposals from './views/Proposals'; // Vista de las propuestas
import Footer from './components/Footer';
import QuizPage from './views/QuizPage'; // El componente de la página del quiz (ajusta el nombre según tu proyecto)

function App() {
  return (
    <Router>
      <div>
        <Routes>  {/* Reemplazamos Switch con Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/proposals" element={<Proposals />} /> {/* Ruta para las propuestas */}
          <Route path="/quiz" element={<QuizPage />} /> {/* Aquí es donde irás cuando hagas clic en el botón */}

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
