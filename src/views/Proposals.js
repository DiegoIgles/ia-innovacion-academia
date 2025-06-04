import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Proposals = () => {
  const [registro, setRegistro] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const buscarEstudiante = async () => {
    try {
      const response = await axios.get(`https://votaciones.cisistemasficct.com/api/estudiantes/registro/${registro}`);
      setResultado(response.data);
      setError('');
    } catch (err) {
      setResultado(null);
      setError('No está habilitado para votar en la FICCT');
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
            <h3>Datos del Estudiante</h3>
            <p><strong>Nombre:</strong> {resultado.nombre_completo}</p>
            <p><strong>Registro:</strong> {resultado.registro}</p>
            <p><strong>Carrera:</strong> {resultado.carrera}</p>
            <p><strong>Facultad:</strong> {resultado.facultad}</p>
            <p><strong>Sede:</strong> {resultado.sede}</p>
            <p><strong>Vota Decano:</strong> <span style={getVoteStyle(resultado.vota_decano)}>{resultado.vota_decano}</span></p>
            <p><strong>Vota Rector:</strong> <span style={getVoteStyle(resultado.vota_rector)}>{resultado.vota_rector}</span></p>
            <p><strong>Voto General:</strong> <span style={getVoteStyle(resultado.vota_general)}>{resultado.vota_general}</span></p>
          </div>
        )}
      </div>

      {/* Botón flotante */}
      <button style={styles.floatingButton} onClick={() => navigate('/')}>
        🏠 Inicio
      </button>
    </div>
  );
};

// Estilos reutilizables
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    position: 'relative',
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#666',
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
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#f2ff00',
    color: 'black',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '1rem',
  },
  result: {
    marginTop: '2rem',
    lineHeight: '1.6',
  },
  floatingButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#f2ff00',
    color: 'black',
    border: 'none',
    borderRadius: '50px',
    padding: '0.75rem 1.2rem',
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
};

const getVoteStyle = (valor) => ({
  color: valor === 'SI' ? 'green' : 'red',
  fontWeight: 'bold',
});

export default Proposals;
