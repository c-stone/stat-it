"use client";

import { useState } from "react";
import type { CheckboxOption, Checked } from "~/types/checkboxTypes";

import { gloomhaveConditions, dndConditions } from "~/data/conditions";

import { Button } from "~/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { RemoveButton } from "./RemoveButton";
import { BadgeList } from "./BadgeList";
import { CheckboxList } from "./CheckboxList";

type ConditionSelectorProps = {
  options: string;
  onRemove: (arg: string) => void;
};

export default function ConditionSelector({
  options,
  onRemove,
}: ConditionSelectorProps) {
  const [checkboxes, setCheckboxes] = useState<CheckboxOption[]>(
    options === "gloomhaven"
      ? gloomhaveConditions
      : options === "dnd"
        ? dndConditions
        : [],
  );

  const handleCheckboxChange = (id: string, checked: Checked) => {
    setCheckboxes((current) =>
      current.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: checked } : checkbox,
      ),
    );
  };

  const handleRemoveCondition = (id: string) => {
    handleCheckboxChange(id, false);
  };

  return (
    <div className="flex w-full items-end justify-between gap-2">
      <div className="flex w-full flex-col gap-2">
        <BadgeList checkboxes={checkboxes} onRemove={handleRemoveCondition} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Conditions</Button>
          </DropdownMenuTrigger>
          <CheckboxList
            checkboxes={checkboxes}
            onCheckboxChange={handleCheckboxChange}
            disabled={false}
          />
        </DropdownMenu>
      </div>
      <RemoveButton name={options} onRemove={onRemove} />
    </div>
  );
}
