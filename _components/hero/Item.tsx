import { ReactNode } from "react";

export const Item = ({ children }: { children: ReactNode }) => {
  return <p className="text-lg md:text-xl text-gray-300">{children}</p>;
};
