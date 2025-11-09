"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { easyQuestions, hardQuestions } from "@/data/questions";
import { QuestionHeader } from "./QuestionHeader";
import { ResultMessage } from "./ResultMessage";
import { useTriviaStore } from "@/store/quiz";
import { FinalScreen } from "./FinalScreen";
import { OptionsList } from "./OptionsList";
import confetti from "canvas-confetti";
import { Timer } from "./Timer";

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
  const [timeLeft, setTimeLeft] = useState(10);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const calculateScore = useCallback(() => {
    return questions.reduce((score, question, index) => {
      return selectedAnswers[index] === question.correctAnswer
        ? score + 1
        : score;
    }, 0);
  }, [questions, selectedAnswers]);

  const score = calculateScore();
  const isWinner = score > 5;

  useEffect(() => {
    if (isFinished && isWinner) {
      const duration = 2000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  }, [isFinished, isWinner]);

  useEffect(() => {
    setTimeLeft(10);

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeout();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentQuestionIndex]);

  const handleTimeout = () => {
    if (!selectedAnswers[currentQuestionIndex]) {
      selectAnswer(currentQuestionIndex, "");
      setShowResult(true);

      setTimeout(() => {
        setShowResult(false);

        setTimeout(() => {
          if (currentQuestionIndex === questions.length - 1) {
            finishQuiz();
          } else {
            nextQuestion();
          }
        }, 0);
      }, 1500);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (timerRef.current) clearInterval(timerRef.current);
    selectAnswer(currentQuestionIndex, answer);
    setShowResult(true);
    setTimeout(nextOrFinish, 1500);
  };

  const nextOrFinish = () => {
    setShowResult(false);
    currentQuestionIndex < questions.length - 1 ? nextQuestion() : finishQuiz();
  };

  if (isFinished) {
    return (
      <FinalScreen
        score={score}
        total={questions.length}
        isWinner={isWinner}
        timerRef={timerRef}
      />
    );
  }

  if (!currentQuestion) return null;

  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="max-w-3xl mx-auto">
      <QuestionHeader
        current={currentQuestionIndex}
        total={questions.length}
        difficulty={difficulty}
      />

      <Timer timeLeft={timeLeft} />

      <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-200 text-center">
        {currentQuestion.question}
      </h3>

      <OptionsList
        options={currentQuestion.options}
        correctAnswer={currentQuestion.correctAnswer}
        selectedAnswer={selectedAnswer}
        showResult={showResult}
        onSelect={handleAnswerSelect}
      />

      {showResult && (
        <ResultMessage
          isCorrect={isCorrect}
          correctAnswer={currentQuestion.correctAnswer}
        />
      )}
    </div>
  );
};
