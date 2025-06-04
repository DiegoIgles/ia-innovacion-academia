import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import profesImg from '../assets/profes.jpg';

const Proposals = () => {
  const [registro, setRegistro] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');
  const [showAd, setShowAd] = useState(false);
  const navigate = useNavigate();

  const buscarEstudiante = async () => {
    try {
      const response = await axios.get(`https://votaciones.cisistemasficct.com/api/estudiantes/registro/${registro}`);
      setResultado(response.data);
      setError('');
      setShowAd(true);
    } catch (err) {
      setResultado(null);
      setError('No está habilitado para votar en la FICCT');
      setShowAd(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Verificación de Votación</h2>
        <p style={styles.subtitle}>Ingrese su número de registro para verificar si puede votar.</p>

        <div style={styles.form}>
          <input
            type="text"
            placeholder="Ingrese su registro"
            value={registro}
            onChange={(e) => setRegistro(e.target.value)}
            style={styles.input}
          />
          <button onClick={buscarEstudiante} style={styles.button}>
            Consultar
          </button>
        </div>

        {error && (
          <div style={styles.error}>
            <strong>{error}</strong>
          </div>
        )}

        {resultado && (
          <div style={styles.result}>
            <h3 style={styles.resultTitle}>Datos del Estudiante</h3>
            <p><strong>Nombre:</strong> {resultado.nombre_completo}</p>
            <p><strong>Registro:</strong> {resultado.registro}</p>
            <p><strong>Carrera:</strong> {resultado.carrera}</p>
            <p><strong>Facultad:</strong> {resultado.facultad}</p>
            <p><strong>Sede:</strong> {resultado.sede}</p>
            <p><strong>Mesa:</strong> {resultado.mesa}</p>
            <p><strong>Vota Decano:</strong> <span style={getVoteStyle(resultado.vota_decano)}>{resultado.vota_decano}</span></p>
            <p><strong>Vota Rector:</strong> <span style={getVoteStyle(resultado.vota_rector)}>{resultado.vota_rector}</span></p>
            <p><strong>Voto General:</strong> <span style={getVoteStyle(resultado.vota_general)}>{resultado.vota_general}</span></p>
          </div>
        )}
      </div>

      <button style={styles.floatingButton} onClick={() => navigate('/')}>
        🏠 Inicio
      </button>

      {showAd && (
        <div style={styles.adOverlay} onClick={() => setShowAd(false)}>
          <div style={styles.adContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeAd} onClick={() => setShowAd(false)}>×</button>
            <img src={profesImg} alt="Propaganda" style={styles.adImage} />
          </div>
        </div>
      )}
    </div>
  );
};

const amarillo = '#f2ff00';
const amarilloSuave = '#ffffcc';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: amarilloSuave,
    minHeight: '100vh',
    position: 'relative',
  },
  card: {
    backgroundColor: '#fff',
    border: `2px solid ${amarillo}`,
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: `0 4px 12px rgba(242, 255, 0, 0.4)`,
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    fontSize: '1.9rem',
    marginBottom: '0.5rem',
    color: '#666600',
  },
  subtitle: {
    color: '#555500',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1rem',
  },
  input: {
    padding: '0.75rem',
    border: `1px solid ${amarillo}`,
    borderRadius: '5px',
    fontSize: '1rem',
    backgroundColor: '#fffff8',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: amarillo,
    color: 'black',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  },
  error: {
    color: 'red',
    marginTop: '1rem',
  },
  result: {
    marginTop: '2rem',
    lineHeight: '1.6',
    backgroundColor: '#fffef3',
    padding: '1rem',
    borderRadius: '8px',
    border: `1px dashed ${amarillo}`,
  },
  resultTitle: {
    color: '#666600',
  },
  floatingButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: amarillo,
    color: 'black',
    border: 'none',
    borderRadius: '50px',
    padding: '0.75rem 1.2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  adOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    padding: '1rem',
  },
  adContent: {
    position: 'relative',
    backgroundColor: '#fffff4',
    padding: '1rem',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    maxWidth: '90vw',
    maxHeight: '90vh',
  },
  adImage: {
    width: '100%',
    maxWidth: '320px',
    height: 'auto',
    borderRadius: '10px',
  },
  closeAd: {
    position: 'absolute',
    top: '5px',
    right: '10px',
    fontSize: '1.5rem',
    color: '#333',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
};

const getVoteStyle = (valor) => ({
  color: valor === 'SI' ? 'green' : 'red',
  fontWeight: 'bold',
});

export default Proposals;
