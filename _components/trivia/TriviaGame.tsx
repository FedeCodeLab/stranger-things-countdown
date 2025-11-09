import { easyQuestions, hardQuestions } from "@/data/questions";
import { useState, useEffect, useCallback } from "react";
import { useTriviaStore } from "@/store/quiz";

export const TriviaGame = () => {
  const {
    difficulty,
    currentQuestionIndex,
    selectedAnswers,
    selectAnswer,
    nextQuestion,
    finishQuiz,
    isFinished,
  } = useTriviaStore();

  const questions = difficulty === "easy" ? easyQuestions : hardQuestions;
  const currentQuestion = questions[currentQuestionIndex];
  const [showResult, setShowResult] = useState(false);

  const calculateScore = useCallback(() => {
    return questions.reduce((score, question, index) => {
      return selectedAnswers[index] === question.correctAnswer
        ? score + 1
        : score;
    }, 0);
  }, [questions, selectedAnswers]);

  useEffect(() => {
    if (isFinished) {
      const score = calculateScore();
      if (score > 5) {
      }
    }
  }, [isFinished, selectedAnswers, questions, calculateScore]);

  const handleAnswerSelect = (answer: string) => {
    selectAnswer(currentQuestionIndex, answer);
    setShowResult(true);

    setTimeout(() => {
      setShowResult(false);
      if (currentQuestionIndex < questions.length - 1) {
        nextQuestion();
      } else {
        finishQuiz();
      }
    }, 1500);
  };

  if (isFinished) {
    const score = calculateScore();
    const isWinner = score > 5;

    return (
      <div className="text-center py-10">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">
          {isWinner ? "¡Ganaste!" : "¡Gracias por jugar!"}
        </h3>
        <p className="text-2xl mb-8 text-gray-300">
          Tu puntuación:{" "}
          <span className="font-bold text-[#FF1744]">{score}</span> de{" "}
          {questions.length}
        </p>
        <p className="text-xl mb-10 text-gray-400 max-w-2xl mx-auto">
          {isWinner
            ? "¡Eres un verdadero fan de Stranger Things! 🎉"
            : "Sigue viendo la serie para convertirte en experto 👍"}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-4 bg-[#FF1744] hover:bg-[#D50000] text-white font-bold text-xl rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-[#FF1744]"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400">
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </span>
          <span className="text-gray-400">
            Dificultad:{" "}
            <span className="font-bold uppercase">{difficulty}</span>
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-[#FF1744] h-2.5 rounded-full"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-200 text-center">
        {currentQuestion.question}
      </h3>

      <div className="grid grid-cols-1 gap-4">
        {currentQuestion.options.map((option, index) => {
          let buttonClass =
            "w-full text-left p-4 rounded-lg border-2 transition-all ";

          if (showResult && selectedAnswer) {
            if (option === currentQuestion.correctAnswer) {
              buttonClass += "bg-green-600 border-green-500 text-white";
            } else if (
              option === selectedAnswer &&
              option !== currentQuestion.correctAnswer
            ) {
              buttonClass += "bg-red-600 border-red-500 text-white";
            } else {
              buttonClass += "bg-gray-800 border-gray-700 text-gray-300";
            }
          } else if (selectedAnswer === option) {
            buttonClass += "bg-[#FF1744] border-[#FF1744] text-white";
          } else {
            buttonClass +=
              "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600";
          }

          return (
            <button
              key={index}
              onClick={() => !selectedAnswer && handleAnswerSelect(option)}
              disabled={!!selectedAnswer}
              className={buttonClass}
            >
              <span className="font-bold mr-2">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div
          className={`mt-6 p-4 rounded-lg text-center text-lg font-bold ${
            isCorrect
              ? "bg-green-900 text-green-200"
              : "bg-red-900 text-red-200"
          }`}
        >
          {isCorrect
            ? "¡Correcto! 🎉"
            : `Incorrecto. La respuesta correcta es: ${currentQuestion.correctAnswer}`}
        </div>
      )}
    </div>
  );
};
