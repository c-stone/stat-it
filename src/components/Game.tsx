"use client";

import { useState } from "react";

import { WidgetsCard } from "./WidgetsCard";
import { Button } from "./ui/button";
import { Plus } from "./icons/Plus";

const Game = () => {
  const [widgetsCards, setWidgetsCards] = useState<{ name: string }[]>([]);

  function removeWidgetCardByName(name: string) {
    setWidgetsCards((current) => current.filter((card) => card.name !== name));
  }

  return (
    <>
      <div className="flex h-full w-3/4 flex-col gap-4">
        {widgetsCards.map((card, index) => (
          <WidgetsCard
            key={card.name}
            name={card.name}
            onRemove={removeWidgetCardByName}
          />
        ))}
      </div>
      <div className="mt-auto flex w-full justify-end pb-[40px]">
        <Button
          variant={"secondary"}
          onClick={() =>
            setWidgetsCards((current) => [
              ...current,
              { name: `Player ${current.length + 1}` },
            ])
          }
        >
          <Plus />
        </Button>
      </div>
    </>
  );
};

export { Game };
