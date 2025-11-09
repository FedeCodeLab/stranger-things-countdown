import { Item } from "./Item";

export const Dates = () => {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <Item>
        Próxima en Netflix:{" "}
        <span className="font-bold text-[#FF1744]">26 de noviembre</span>
      </Item>

      <Item>
        Volumen 2:{" "}
        <span className="font-bold text-[#FF1744]">25 de diciembre</span>
      </Item>

      <Item>
        Episodio final:{" "}
        <span className="font-bold text-[#FF1744]">31 de diciembre,</span>
      </Item>
    </div>
  );
};
