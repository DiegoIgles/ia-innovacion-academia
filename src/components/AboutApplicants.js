import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutApplicants.css'; // Importa los estilos para este componente
import applicantImage from '../assets/applicant-image.jpg'; // Importa la imagen

const AboutApplicants = () => {
  const navigate = useNavigate(); // Utilizamos useNavigate para redirigir a otra página

  const handleButtonClick = () => {
    navigate('/applicants'); // Redirige a la vista donde se verían los postulantes
  };

  return (
    <div className="about-applicants-container">
      <div>
        <h2>Acerca de los Postulantes</h2>
        <p>
          Aquí encontrarás información sobre los postulantes para el proyecto. Conoce más sobre sus habilidades y por qué son ideales para la campaña.
        </p>
        <button className="about-applicants-button" onClick={handleButtonClick}>
          Conocerlos
        </button>
      </div>

      <div>
        <img src={applicantImage} alt="Postulantes" />
      </div>
    </div>
  );
};

export default AboutApplicants;
