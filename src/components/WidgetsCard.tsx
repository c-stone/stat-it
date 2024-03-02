"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { Button } from "./ui/button";
import Plus from "./icons/Plus";

import Counter from "./Counter";
import ConditionSelector from "./ConditionSelector";
import XMark from "./icons/XMark";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function WidgetsCard() {
  const [counters, setCounters] = useState<{ name: string }[]>([]);
  const [conditionSelectors, setConditionSelectors] = useState<string[]>([]);
  const [newCounterName, setNewCounterName] = useState<string>("");
  const [newConditionSelector, setNewConditionSelector] = useState<string>("");

  function addCounter(name: string) {
    setCounters((current) => [...current, { name }]);
  }

  function removeCounter(name: string) {
    setCounters((current) =>
      current.filter((counter) => counter.name !== name),
    );
  }

  function addConditionSelector(name: string) {
    setConditionSelectors((current) => [...current, name]);
  }

  function removeConditionSelector(name: string) {
    setConditionSelectors((current) =>
      current.filter((selector) => selector !== name),
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Stonee</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {counters.map((counter) => (
          <div key={counter.name} className="flex justify-between gap-1">
            <Counter name={counter.name} />
            <Button
              variant={"destructive"}
              size={"icon"}
              onClick={() => removeCounter(counter.name)}
            >
              <XMark />
            </Button>
          </div>
        ))}
        {conditionSelectors.map((selector, i) => (
          <div key={`selector-${i}`} className="flex w-full items-end gap-1">
            <ConditionSelector key={`selector-${i}`} options={selector} />
            <Button
              variant={"destructive"}
              size={"icon"}
              onClick={() => removeConditionSelector(selector)}
            >
              <XMark />
            </Button>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Plus />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add widgets</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-4">
              <li className="flex w-full max-w-sm items-end space-x-2">
                <div className="grid w-full max-w-sm items-center gap-1.5 text-slate-950">
                  <Label htmlFor="counter-name">Counter</Label>
                  <Input
                    id="counter-name"
                    placeholder="Gold"
                    onChange={(e) => setNewCounterName(e.target.value)}
                  />
                </div>
                <Button
                  onClick={() => addCounter(newCounterName)}
                  disabled={!newCounterName}
                >
                  Create
                </Button>
              </li>
              <li className="flex w-full max-w-sm items-end space-x-2">
                <div className="grid w-full max-w-sm items-center gap-1.5 text-slate-950">
                  <Label htmlFor="condition-selector">Condition Selector</Label>
                  <Select
                    onValueChange={(value: string) => {
                      console.log(value);
                      setNewConditionSelector(value);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Condition Presets" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gloomhaven">Gloomhaven</SelectItem>
                      <SelectItem value="dnd">DnD</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={() => {
                    console.log(newConditionSelector);
                    addConditionSelector(newConditionSelector);
                  }}
                  disabled={!newConditionSelector}
                >
                  Create
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  );
}
