"use client";

import { useState } from "react";

import { CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { PencilSquare } from "./icons/PencilSquare";
import { Check } from "./icons/Check";

const EditableHeader = ({ text }: { text: string }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  function toggleEditing() {
    setIsEditing((current) => !current);
  }

  function updateValue(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <CardHeader className="group flex-row items-center gap-3">
      {isEditing ? (
        <Input
          className="max-w-xs"
          value={value}
          onChange={updateValue}
        ></Input>
      ) : (
        <CardTitle>{value}</CardTitle>
      )}
      <Button
        className="invisible group-hover:visible"
        size={"icon"}
        variant={"outline"}
        onClick={toggleEditing}
      >
        {isEditing ? <Check /> : <PencilSquare />}
      </Button>
    </CardHeader>
  );
};

export { EditableHeader };
