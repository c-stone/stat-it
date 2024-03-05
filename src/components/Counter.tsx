"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import RemoveButton from "./RemoveButton";

interface CounterProps {
  name: string;
  onRemove: (arg: string) => void;
}

type IncrementDecrementButtonsProps = {
  onIncrement: () => void;
  onDecrement: () => void;
};

const IncrementDecrementButtons = ({
  onIncrement,
  onDecrement,
}: IncrementDecrementButtonsProps) => (
  <div className="flex gap-1">
    <Button
      variant="outline"
      size="icon"
      onClick={onIncrement}
      aria-label="Increment"
    >
      +
    </Button>
    <Button
      variant="outline"
      size="icon"
      onClick={onDecrement}
      aria-label="Decrement"
    >
      -
    </Button>
  </div>
);

export default function Counter({ name, onRemove }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  function onIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function onDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="font-medium leading-none">{name}:</h1>
        <span>{count}</span>
        <IncrementDecrementButtons
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
      <RemoveButton name={name} onRemove={onRemove} />
    </div>
  );
}
