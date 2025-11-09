"use client";

import { DifficultySelector } from "./DifficultySelector";
import { useTriviaStore } from "@/store/quiz";
import { TriviaGame } from "./TriviaGame";

export const Trivia = () => {
  const { difficulty } = useTriviaStore();

  return (
    <section
      className="py-20 bg-black border-t-2 border-[#FF1744]"
      aria-labelledby="trivia-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="trivia-heading"
          className="text-4xl md:text-5xl font-bold mb-12 text-center uppercase"
          style={{
            color: "#FF1744",
            textShadow: "0 0 10px rgba(255, 23, 68, 0.6)",
          }}
        >
          ¿Cuánto sabes de Stranger Things?
        </h2>

        <div
          className="grid grid-cols-1 items-center justify-center gap-12 bg-neutral-950 border-2 border-[#FF1744] p-10 w-full rounded-xl min-h-[500px]"
          style={{
            boxShadow: "0 0 20px rgba(255, 23, 68, 0.5)",
          }}
        >
          {!difficulty ? <DifficultySelector /> : <TriviaGame />}
        </div>
      </div>
    </section>
  );
};
