import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Card = ({ children, onClick, className = "" }: CardProps) => {
  return (
    <article className={`group cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </article>
  );
};
