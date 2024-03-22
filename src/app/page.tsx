// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
//       <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
//           <Link
//             className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//             href="/game/1"
//           >
//             <h3 className="text-2xl font-bold">Game 1</h3>
//           </Link>
//           <Link
//             className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//             href="/game/2"
//           >
//             <h3 className="text-2xl font-bold">Game 2</h3>
//           </Link>
//           <Link
//             className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//             href="game/3"
//           >
//             <h3 className="text-2xl font-bold">Game 3</h3>
//           </Link>
//           <Link
//             className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//             href="game/4"
//           >
//             <h3 className="text-2xl font-bold">Game 4</h3>
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Game {
  pk: { S: string };
  sk: { S: string };
  gameName: { S: string };
}

export default function HomePage() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch('/api/games');
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        const data = await response.json();
        setGames(data.gameInfo.items);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }
    fetchGames();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        {games.map((game, index) => (
            <Link href={`/game/${game.sk.S}`} key={index}>
              <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
                <h3 className="text-2xl font-bold">{game.gameName.S}</h3>
                <p>Game ID: {game.sk.S}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

