interface Props {
  current: number;
  total: number;
  difficulty: string | null;
}

export const QuestionHeader = ({ current, total, difficulty }: Props) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-400">
        Pregunta {current + 1} de {total}
      </span>
      <span className="text-gray-400">
        Dificultad: <span className="font-bold uppercase">{difficulty}</span>
      </span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-[#FF1744] h-2.5 rounded-full transition-all"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
  </div>
);
