import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Button } from "./ui/button";
import { Plus } from "./icons/Plus";
import { Trash } from "./icons/Trash";
import { Counter } from "./Counter";
import { ConditionSelector } from "./ConditionSelector";
import { EditableHeader } from "./EditableHeader";
import { ModuleComponent } from "./Interfaces";

interface WidgetsCardProps {
  name: string;
  components: ModuleComponent[];
  onRemove: (name: string) => void;
}

const WidgetsCard = ({
  name,
  components,
  onRemove,
}: WidgetsCardProps) => {
  return (
    <Card className="w-full">
      <EditableHeader text={name} />
      <CardContent className="flex flex-col gap-4">
        {components.map((component, index) => {
          switch (component.componentType) {
            case "counter":
              return (
                <Counter
                  key={index}
                  value={component.value}
                  name={component.name || ""}
                  onRemove={() => {}}
                />
              );
            case "condition":
              return (
                <ConditionSelector
                  key={index}
                  options={component.enabled || []}
                  onRemove={() => {}}
                />
              );
            default:
              return null;
          }
        })}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button
          variant={"destructive"}
          size={"icon"}
          onClick={() => onRemove(name)}
        >
          <Trash />
        </Button>
        {/* Add button to add new components */}
        <Button size={"icon"}>
          <Plus />
        </Button>
      </CardFooter>
    </Card>
  );
};

export { WidgetsCard };