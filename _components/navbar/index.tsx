"use client";

import { useScrollStore } from "@/store/scrollTo";
import { Button } from "../ui/Button";
import { Bellow } from "../ui/Icons";

export const Navbar = () => {
  const { scrollToTrivia } = useScrollStore();

  return (
    <nav className="absolute top-0 right-[5%] lg:right-[10%] w-full">
      <div className="py-3 flex justify-end items-center relative z-50">
        <Button variant="incorrect" onClick={scrollToTrivia}>
          Quiz
          <Bellow width={18} height={20} />
        </Button>
      </div>
    </nav>
  );
};
