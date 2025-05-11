import React from 'react';
import './ApplicantsView.css'; // Asegúrate de definir estilos adecuados
import decanoImg from '../assets/decano.jpg';
import vicedecanaImg from '../assets/vicedecano.jpg';
import informaticaImg from '../assets/director-informatica.jpg';
import sistemasImg from '../assets/director-sistemas.jpg';
import redesImg from '../assets/director-redes.jpg';
import { useNavigate } from 'react-router-dom';

const applicants =[
  {
    id: 1,
    nombre: "MSc. Ing. Miguel peinado",
    cargo: "Decano",
    biografia: "Con mas de 30 años de experiencia en desarrollo de software y exitoso empresario en el area de desarrollo, gracias a el se desarrollaron los actuales planes de estudio de las 3 carreras, apoya a los estudiantes incorporandolos a su empresa, tiene su propio frase 'no acepto a nadie en mi empresa que no sea de la gabriel'",
    imagen: decanoImg
  },
  {
    id: 2,
    nombre: "MSc. Ing. Mauricio Caballero",
    cargo: "Vicedecano",
    biografia: "Actual director de sistemas el cual cumplio todas sus propuestas de la gestion pasada, entre ellas se abrio titulacion por diplomado para la carrera de redes, mejoro el logo , impulso las pasantias y ofertas laborales para la su carrera entre otras muchas cosas",
    imagen: vicedecanaImg
  },
  {
    id: 3,
    nombre: "MSc. Ing. Junior Villagomez",
    cargo: "Director de Ingeniería Informática",
    biografia: "Representante de mozilla en bolivia, realizo sus estudios de postgrado en españa, impulso varios proyectos de grado y fue tutor de la primera promocion de tecnico medio de redes",
    imagen: informaticaImg
  },
  {
    id: 4,
    nombre: "MSc. Ing. Leonardo Vargas",
    cargo: "Director de Ingeniería en Sistemas",
    biografia: "Caracterizado por la excelencia academica , realizo sus estudios de postgrado en españa, amplia experiencia laboral en auditoria informatica y hacking etico, coordinador academico en el area de redes, te enseña a como hackear el whatsapp de tu ex ",
    imagen: sistemasImg
  },
  {
    id: 5,
    nombre: "MSc. Ing. Jorge Rosales",
    cargo: "Director de Ingeniería en Redes",
    biografia: "Reconocido docente en la carrera de redes, realizo sus estudios de postgrado en brasil",
    imagen: redesImg
  }
];

const ApplicantsView = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <div className="applicants-view-container">
      <button className="back-button" onClick={handleBackClick}>
        ⬅ Regresar
      </button>
      <h1>Candidatos</h1>
      <div className="applicants-grid">
        {applicants.map(applicant => (
          <div key={applicant.id} className="applicant-card">
            <img src={applicant.imagen} alt={applicant.nombre} />
            <h3>{applicant.nombre}</h3>
            <h4>{applicant.cargo}</h4>
            <p>{applicant.biografia}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantsView;
