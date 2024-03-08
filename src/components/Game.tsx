"use client";

import { useState } from "react";

import { WidgetsCard } from "./WidgetsCard";
import { Button } from "./ui/button";
import Plus from "./icons/Plus";

const Game = () => {
  const [widgetsCards, setWidgetsCards] = useState<{ name: string }[]>([]);

  function onRemove(name: string) {
    setWidgetsCards((current) => current.filter((card) => card.name !== name));
  }

  return (
    <div className="grid w-3/4 grid-cols-2 gap-4">
      {widgetsCards.map((card, index) => (
        <WidgetsCard key={index} name={card.name} onRemove={onRemove} />
      ))}
      <div className="flex justify-end">
        <Button
          onClick={() =>
            setWidgetsCards((current) => [
              ...current,
              { name: `WidgetsCard ${current.length + 1}` },
            ])
          }
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export { Game };
