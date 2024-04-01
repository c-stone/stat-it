"use client";

import { useEffect, useState } from 'react';
import { Game } from "~/components/Game";
import { GameInfo } from "~/components/Interfaces";

export default function GamePage({ params }: { params: { id: string } }) {
  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);

  useEffect(() => {
    async function fetchGameInfo() {
      try {
        const response = await fetch(`/api/game/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch game info');
        }
        const data = await response.json();
        setGameInfo(data.gameInfo);
      } catch (error) {
        console.error('Error fetching game info:', error);
      }
    }
    fetchGameInfo();
  }, [params.id]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-10 text-white">
      {gameInfo ? <h1>{gameInfo.gameName}</h1> : <h1>Loading...</h1>}
      {gameInfo ? <Game gameInfo={gameInfo} /> : null}
    </main>
  );
}