import React, { useState } from 'react';
import './QuizPage.css'; // Aquí puedes agregar tus estilos para la página del quiz

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Aquí puedes definir tus preguntas y opciones
  const questions = [
    {
      question: "¿Cuál es el nombre del docente?",
      options: ["Juan", "Mauricio", "Ana", "Pedro"],
      answer: "Mauricio",
    },
    {
      question: "¿Director de que carrera es actualmente?",
      options: ["Robotica", "Sistemas", "Informatica", "Redes"],
      answer: "Redes",
    },
    {
      question: "¿Cuál es la especialidad del docente?",
      options: ["Matemáticas", "Física", "Química", "Circuitos logicos"],
      answer: "Circuitos logicos",
    },
    {
        question: "¿A que se postula el ing Caballero?",
        options: ["Decano", "Guardia", "Vicedecano", "Vicerector"],
        answer: "Vicedecano",
      },
    // Agrega más preguntas según sea necesario
  ];

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1); // Aumenta el puntaje si la respuesta es correcta
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1); // Mueve a la siguiente pregunta
    } else {
      setQuizFinished(true); // Si no hay más preguntas, termina el quiz
    }
  };

  return (
    <div className="quiz-page-container">
      {!quizFinished ? (
        <div className="quiz-container">
          <h2 className="quiz-question">{questions[currentQuestion].question}</h2>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="quiz-option-button"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-result">
          <h2>¡Quiz Finalizado!</h2>
          <p>Tu puntaje es: {score} de {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
