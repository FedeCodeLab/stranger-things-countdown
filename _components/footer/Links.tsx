"use client";
import { useScrollStore } from "@/store/scrollTo";

export const Links = () => {
  const { scrollToTop, scrollToAvances, scrollToTrivia } = useScrollStore();

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[18px] font-semibold text-neutral-300">Navegación</h4>

      <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
        <button
          onClick={scrollToTop}
          className="cursor-pointer text-neutral-400 hover:text-neutral-100"
        >
          Inicio
        </button>
        <button
          onClick={scrollToAvances}
          className="cursor-pointer text-neutral-400 hover:text-neutral-100"
        >
          Avances
        </button>
        <button
          onClick={scrollToTrivia}
          className="cursor-pointer text-neutral-400 hover:text-neutral-100"
        >
          Quiz
        </button>
      </div>
    </div>
  );
};
