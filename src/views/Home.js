// src/views/Home.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import './Home.css';
import ingImage from '../assets/ing.png';
import TeacherQuizSection from '../components/TeacherQuizSection';
import AboutApplicants from '../components/AboutApplicants';  // Importa el nuevo componente

import img1 from '../assets/photo1.jpg';
import img2 from '../assets/photo2.jpg';
import img3 from '../assets/photo3.jpg';
import img4 from '../assets/photo4.jpg';
import img5 from '../assets/photo5.jpg';
import img6 from '../assets/photo6.jpg';
import img7 from '../assets/photo7.jpg';
import img8 from '../assets/photo8.jpg';
import img9 from '../assets/photo9.jpg';
import img10 from '../assets/photo10.jpg';
import img11 from '../assets/photo11.jpg';
import img12 from '../assets/photo12.jpg';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
const Home = () => {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null); // Estado para la imagen agrandada

  const handleImageClick = () => {
    navigate('/votantes');
  };

  const handleButtonClick = () => {
    navigate('/votantes');
  };

  const handleCollageImageClick = (image) => {
    setModalImage(image); // Mostrar imagen en el modal
  };

  const handleCloseModal = () => {
    setModalImage(null); // Cerrar el modal
  };

  const collageImages = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
    img9, img10, img11, img12
  ];

  useEffect(() => {
    const images = document.querySelectorAll('.collage-image');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    images.forEach(image => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-container">
      <Header />
      <img 
        src={ingImage} 
        alt="Ingeniero" 
        className="home-image animate-fade-in" 
        onClick={handleImageClick} 
      />

      <h2 className="home-title animate-slide-in">Bienvenido y se parte del cambio</h2>
      <p className="home-description animate-fade-in-delay">
        Este es un proyecto para mejorar la facultad contamos con tu apoyo.
      </p>

      <div className="animate-pop">
        <Button text="Consulta si estas habilitado" onClick={handleButtonClick} />
      </div>
      <AboutApplicants />
      <TeacherQuizSection />
      
      {/* Collage de imágenes */}
      <div className="image-collage">
        {collageImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Collage ${index + 1}`}
            className="collage-image"
            onClick={() => handleCollageImageClick(image)}
          />
        ))}
      </div>

      {/* Modal para imagen grande */}
      {modalImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Ampliada" />
            <span className="close" onClick={handleCloseModal}>&times;</span>
          </div>
        </div>
      )}
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
