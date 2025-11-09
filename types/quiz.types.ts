// Store

export interface TriviaState {
  difficulty: "easy" | "hard" | null;
  currentQuestionIndex: number;
  score: number;
  selectedAnswers: Record<number, string>;
  isFinished: boolean;
  setDifficulty: (difficulty: "easy" | "hard") => void;
  selectAnswer: (questionIndex: number, answer: string) => void;
  nextQuestion: () => void;
  finishQuiz: () => void;
  resetQuiz: () => void;
}

// Questions

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}
