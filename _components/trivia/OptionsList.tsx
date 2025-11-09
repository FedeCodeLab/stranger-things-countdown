interface Props {
  options: string[];
  correctAnswer: string;
  selectedAnswer?: string;
  showResult: boolean;
  onSelect: (answer: string) => void;
}

export const OptionsList = ({
  options,
  correctAnswer,
  selectedAnswer,
  showResult,
  onSelect,
}: Props) => (
  <div className="grid grid-cols-1 gap-4 select-none">
    {options.map((option, index) => {
      let btn =
        "w-full text-left p-4 rounded-lg border-2 transition-all cursor-pointer ";

      if (showResult && selectedAnswer !== undefined) {
        if (option === correctAnswer)
          btn += "bg-green-600 border-green-500 text-white";
        else if (option === selectedAnswer)
          btn += "bg-red-600 border-red-500 text-white";
        else btn += "bg-gray-800 border-gray-700 text-gray-300";
      } else if (selectedAnswer === option) {
        btn += "bg-[#FF1744] border-[#FF1744] text-white";
      } else {
        btn +=
          "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600";
      }

      return (
        <button
          key={index}
          onClick={() => !selectedAnswer && onSelect(option)}
          disabled={!!selectedAnswer}
          className={btn}
        >
          <span className="font-bold mr-2 select-none">
            {String.fromCharCode(65 + index)}
          </span>
          {option}
        </button>
      );
    })}
  </div>
);
