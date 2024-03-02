"use client";

import { useState } from "react";

import WidgetsCard from "~/components/WidgetsCard";

export default function Game({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-10 text-white">
      <h1>Game {params.id}</h1>
      <WidgetsCard />
    </main>
  );
}
