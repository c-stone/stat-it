import { Game } from "~/components/Game";

export default function GamePage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-10 text-white">
      <h1>Game {params.id}</h1>
      <Game />
    </main>
  );
}
