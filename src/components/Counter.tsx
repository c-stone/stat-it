"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface CounterProps {
  name: string;
}

export default function Counter({ name }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="flex items-center gap-2">
      <h1 className="font-medium leading-none">{name}:</h1>
      <span>{count}</span>
      <div className="flex gap-1">
        <Button variant="outline" size="icon" onClick={increment}>
          +
        </Button>
        <Button variant="outline" size="icon" onClick={decrement}>
          -
        </Button>
      </div>
    </div>
  );
}
