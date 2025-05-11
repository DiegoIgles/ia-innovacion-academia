// src/components/FloatingWhatsApp.js
import React, { useState } from 'react';
import './FloatingWhatsApp.css';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);
  const groupLink = 'https://chat.whatsapp.com/GHlgYyYn12l34uxQocXVWJ'; // Reemplaza con tu link

  return (
    <div className="floating-whatsapp">
      <div className="whatsapp-tab" onClick={() => setOpen(!open)}>
        <FaWhatsapp size={30} color="#fff" />
      </div>
      {open && (
        <div className="whatsapp-popup">
          <p>Únete al grupo de innovación</p>
          <a href={groupLink} target="_blank" rel="noopener noreferrer">
            Ir al grupo
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsApp;
