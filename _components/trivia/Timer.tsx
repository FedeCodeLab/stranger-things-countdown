export const Timer = ({ timeLeft }: { timeLeft: number }) => (
  <div className="text-center text-lg text-gray-300 mb-6">
    Tiempo restante:{" "}
    <span
      className={`font-bold ${
        timeLeft <= 3 ? "text-[#FF1744]" : "text-gray-100"
      }`}
    >
      {timeLeft}s
    </span>
  </div>
);
