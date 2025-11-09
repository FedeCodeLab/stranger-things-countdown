export const ResultMessage = ({
  isCorrect,
  correctAnswer,
}: {
  isCorrect: boolean;
  correctAnswer: string;
}) => (
  <div
    className={`mt-6 p-4 rounded-lg text-center text-lg font-bold ${
      isCorrect ? "bg-green-900 text-green-200" : "bg-red-900 text-red-200"
    }`}
  >
    {isCorrect
      ? "¡Correcto! 🎉"
      : `Incorrecto. La respuesta correcta es: ${correctAnswer}`}
  </div>
);
