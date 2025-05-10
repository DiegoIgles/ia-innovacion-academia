import React from 'react';
import './Header.css';
import { FaCog } from 'react-icons/fa'; // Ícono de tuerca

const Header = () => {
  return (
    <header>
      <div className="header-content">
      <img src="/logoia.png" alt="Logo" className="logo" />

        <h1>INNOVACIÓN MAS ACADEMIA</h1>
        <p>F.I.C.C.T.</p>
        <FaCog className="rotating-gear" />
      </div>
    </header>
  );
};

export default Header;
