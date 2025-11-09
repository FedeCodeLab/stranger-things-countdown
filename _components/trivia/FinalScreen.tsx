import { useTriviaStore } from "@/store/quiz";

interface Props {
  score: number;
  total: number;
  isWinner: boolean;
  timerRef: React.MutableRefObject<NodeJS.Timeout | null>;
}

export const FinalScreen = ({ score, total, isWinner, timerRef }: Props) => {
  const resetQuiz = useTriviaStore((state) => state.resetQuiz);

  return (
    <div className="text-center py-10">
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">
        {isWinner ? "¡Ganaste!" : "Perdiste"}
      </h3>

      <p className="text-2xl mb-8 text-gray-300">
        Tu puntuación:{" "}
        <span
          className={`font-bold ${
            isWinner ? "text-green-500" : "text-[#FF1744]"
          }`}
        >
          {score}
        </span>{" "}
        de {total}
      </p>

      <p className="text-xl mb-10 text-gray-400 max-w-2xl mx-auto">
        {isWinner
          ? "¡Eres un verdadero fan de Stranger Things! 🎉"
          : "Sigue viendo la serie para convertirte en experto 👍"}
      </p>

      <button
        onClick={() => {
          if (timerRef.current) clearInterval(timerRef.current);
          resetQuiz();
        }}
        className="px-4 cursor-pointer py-2 bg-[#FF1744] hover:bg-[#D50000] text-white font-semibold text-[16px] rounded-lg transition-all transform hover:scale-105 border-2 border-[#FF1744]"
      >
        Volver a empezar
      </button>
    </div>
  );
};
