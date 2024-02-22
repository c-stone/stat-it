export default function Game({ params }: { params: { id: string } }) {
  return <div>Game {params.id}</div>;
}
