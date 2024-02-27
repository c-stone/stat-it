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

export default function Game({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-10 text-white">
      <h1>Game {params.id}</h1>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Stonee</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Counter name="HP" />
          <Counter name="MP" />
          <ConditionSelector />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>
            <Plus />
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
