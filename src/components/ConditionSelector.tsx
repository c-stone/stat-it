"use client";

import { useState } from "react";
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { gloomhaveConditions, dndConditions } from "~/data/conditions";

import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import XMark from "./icons/XMark";
import RemoveButton from "./RemoveButton";

type Checked = DropdownMenuCheckboxItemProps["checked"];

type CheckboxOption = {
  id: string;
  label: string;
  checked: Checked;
  disabled?: boolean;
};

type BadgeListProps = {
  checkboxes: CheckboxOption[];
  onRemove: (id: string) => void;
};

type ConditionCheckboxListProps = {
  checkboxes: CheckboxOption[];
  onCheckboxChange: (id: string, checked: Checked) => void;
  disabled: boolean;
};

type ConditionSelectorProps = {
  options: string;
  onRemove: (arg: string) => void;
};

const BadgeList = ({ checkboxes, onRemove }: BadgeListProps) => (
  <ul className="flex min-h-6 gap-1">
    {checkboxes
      .filter((checkbox: CheckboxOption) => checkbox.checked)
      .map((checkbox: CheckboxOption) => (
        <li key={checkbox.id}>
          <Badge className="flex gap-1">
            {checkbox.label}
            <button onClick={() => onRemove(checkbox.id)}>
              <XMark />
            </button>
          </Badge>
        </li>
      ))}
  </ul>
);

const ConditionCheckboxList = ({
  checkboxes,
  onCheckboxChange,
  disabled,
}: ConditionCheckboxListProps) => (
  <DropdownMenuContent className="h-56 w-56 overflow-scroll">
    {checkboxes.map(({ id, label, checked }: CheckboxOption) => (
      <DropdownMenuCheckboxItem
        key={id}
        checked={checked}
        onCheckedChange={(checked: Checked) => onCheckboxChange(id, checked)}
        disabled={disabled}
      >
        {label}
      </DropdownMenuCheckboxItem>
    ))}
  </DropdownMenuContent>
);

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
          <ConditionCheckboxList
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
