import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirigir
import './TeacherQuizSection.css';

const TeacherQuizSection = () => {
  const navigate = useNavigate(); // Inicializamos el hook useNavigate

  // Función que redirige al hacer clic en el botón
  const handlePlayNowClick = () => {
    navigate('/quiz'); // Redirige a la vista del quiz, por ejemplo '/quiz'
  };

  return (
    <div className="teacher-quiz-section animate-slide-in">
      <h3>¿Qué tanto conoces IA+?</h3>
      <p>
        Descubre cuánto sabes sobre tu docente en esta divertida dinámica. ¡Pon a prueba tu memoria!
      </p>

      <div className="click-hand" />

      {/* Aquí asignamos el evento onClick al botón para redirigir */}
      <button className="quiz-button" onClick={handlePlayNowClick}>🎮 Juega ahora</button>
    </div>
  );
};

export default TeacherQuizSection;
