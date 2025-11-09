import { useTriviaStore } from "@/store/quiz";
import { Button } from "../ui/Button";

export const DifficultySelector = () => {
  const setDifficulty = useTriviaStore((state) => state.setDifficulty);

  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <h3 className="text-2xl md:text-3xl max-w-[500px] font-bold mb-8 text-gray-200">
          ¿Fácil como un paseo en bici o difícil como el Demogorgon?
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Button variant="correct" onClick={() => setDifficulty("easy")}>
          Modo Novato
        </Button>

        <Button variant="incorrect" onClick={() => setDifficulty("hard")}>
          Modo Pesadilla
        </Button>
      </div>
    </div>
  );
};
