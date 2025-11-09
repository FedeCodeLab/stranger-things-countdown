import { TriviaState } from "@/types/quiz.types";
import { create } from "zustand";

export const useTriviaStore = create<TriviaState>((set) => ({
  difficulty: null,
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswers: {},
  isFinished: false,
  setDifficulty: (difficulty) => set({ difficulty }),
  selectAnswer: (questionIndex, answer) =>
    set((state) => ({
      selectedAnswers: { ...state.selectedAnswers, [questionIndex]: answer },
    })),
  nextQuestion: () =>
    set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),
  finishQuiz: () => set({ isFinished: true }),
  resetQuiz: () =>
    set({
      difficulty: null,
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswers: {},
      isFinished: false,
    }),
}));
