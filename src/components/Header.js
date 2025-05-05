import React from 'react';
import './Header.css';
import { FaCog } from 'react-icons/fa'; // Ícono de tuerca

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Mauricio Caballero Rua</h1>
        <p>Cambiando la facultad</p>
        <FaCog className="rotating-gear" />
      </div>
    </header>
  );
};

export default Header;
