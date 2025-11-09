import { ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "default" | "correct" | "incorrect";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = "default",
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 text-white font-bold text-[14px] rounded-lg transition-all transform hover:scale-105 shadow-xl border-2 cursor-pointer";

  const variantStyles = {
    default: "bg-neutral-800 hover:bg-neutral-700 border-neutral-600",
    correct: "border-green-500 hover:bg-green-700",
    incorrect: "border-[#FF1744] hover:bg-[#FF1744]",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variantStyles[variant])}
    >
      {children}
    </button>
  );
};
