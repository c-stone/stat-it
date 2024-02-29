"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Plus from "~/components/icons/Plus";
import { Button } from "~/components/ui/button";

import Counter from "~/components/Counter";
import ConditionSelector from "~/components/ConditionSelector";
import WidgetsCard from "~/components/WidgetsCard";

export default function Game({ params }: { params: { id: string } }) {
  const [counters, setCounters] = useState([
    { name: "HP" },
    { name: "XP" },
    { name: "Gold" },
  ]);
  const [conditionSelectors, setConditionSelectors] = useState(["gloomhaven"]);
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-10 text-white">
      <h1>Game {params.id}</h1>
      <WidgetsCard
        counters={counters}
        conditionSelectors={conditionSelectors}
      />
    </main>
  );
}
