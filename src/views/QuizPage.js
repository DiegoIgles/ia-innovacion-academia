import React, { useState } from 'react';
import './QuizPage.css'; // Aquí puedes agregar tus estilos para la página del quiz

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Aquí puedes definir tus preguntas y opciones
  const questions = [
    {
      question: "¿Que significa IA+?",
      options: ["Innovacion y Academia", "Innovador mas academia", "Innovacion mas academia", "Investigacion y academia"],
      answer: "Innovacion mas academia",
    },
    {
      question: "¿Que materia da el ingeniero Junior?",
      options: ["Calculo 2", "Redes 1", "Lenguajes formales", "Sistemas operativos 2"],
      answer: "Redes 1",
    },
    {
      question: "¿Que materia da el ingeniero Leonardo Vargas?",
      options: ["Ingles 1", "Auditoria informatica", "Redes 2", "Estructura de Datos 2"],
      answer: "Auditoria informatica",
    },
    {
        question: "¿A que se postula el ing Mauricio caballero?",
        options: ["Decano", "Guardia", "Vicedecano", "Vicerector"],
        answer: "Vicedecano",
      },
      {
        question: "¿Quien dice la frase 'voj no sabej programar'?",
        options: ["Ing Flores", "Ing Braulio", "Ing peinado", "Ing siles"],
        answer: "Ing peinado",
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
