import { Description } from "./Description";
import { Contact } from "./Contact";
import { Links } from "./Links";
import { CTA } from "./CTA";

export const Footer = () => {
  return (
    <footer
      className="w-full bg-neutral-900 border-t-2 border-[#FF1744] py-12 flex flex-col gap-10"
      style={{
        boxShadow: "0 0 20px rgba(255, 23, 68, 0.5)",
      }}
    >
      <div className="text-center lg:text-start w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-2 lg:gap-0 items-center lg:items-start justify-center lg:justify-between border-b border-neutral-600 pb-10">
        <Description />
        <Links />
        <CTA />
        <Contact />
      </div>

      <span className="w-[80%] mx-auto text-neutral-400 text-center lg:text-start">
        ✨ 2025 · Federico Pablo Guzmán · Hecho con Next.js
      </span>
    </footer>
  );
};
