import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "default" | "correct" | "incorrect";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href: string;
}

export const ButtonLink = ({
  children,
  variant = "default",
  href,
}: ButtonProps) => {
  const baseStyles =
    "flex items-center w-fit justify-center select-none gap-2 px-6 py-2 text-white font-bold text-[14px] rounded-lg transition-all transform hover:scale-105 border-2 cursor-pointer";

  const variantStyles = {
    default: "bg-neutral-800 hover:bg-neutral-700 border-neutral-600",
    correct: "border-green-500 hover:bg-green-700",
    incorrect: "border-[#FF1744] hover:bg-[#FF1744]",
  };

  return (
    <Link target="_blank" href={href} className={clsx(baseStyles, variantStyles[variant])}>
      {children}
    </Link>
  );
};
