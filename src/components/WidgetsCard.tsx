import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "./ui/button";
import Plus from "./icons/Plus";

import Counter from "./Counter";
import ConditionSelector from "./ConditionSelector";

export default function WidgetsCard({
  counters,
  conditionSelectors,
}: {
  counters: { name: string }[];
  conditionSelectors: string[];
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Stonee</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {counters.map((counter) => (
          <Counter key={counter.name} name={counter.name} />
        ))}
        {conditionSelectors.map((selector) => (
          <ConditionSelector key={selector} options={selector} />
        ))}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>
          <Plus />
        </Button>
      </CardFooter>
    </Card>
  );
}
