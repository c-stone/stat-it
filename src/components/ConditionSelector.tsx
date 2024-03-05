"use client";

import { useState } from "react";
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

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

// Define a type for the checkbox configuration
type CheckboxOption = {
  id: string;
  label: string;
  checked: Checked;
  disabled?: boolean;
};

const gloomhaveConditions: CheckboxOption[] = [
  { id: "bane", label: "Bane", checked: false },
  { id: "brittle", label: "Brittle", checked: false },
  { id: "disarm", label: "Disarm", checked: false },
  { id: "immobilize", label: "Immobilize", checked: false },
  { id: "impair", label: "Impair", checked: false },
  { id: "invisible", label: "Invisible", checked: false },
  { id: "muddle", label: "Muddle", checked: false },
  { id: "poison", label: "Poison", checked: false },
  { id: "regenerate", label: "Regenerate", checked: false },
  { id: "strengthen", label: "Strengthen", checked: false },
  { id: "stun", label: "Stun", checked: false },
  { id: "ward", label: "Ward", checked: false },
  { id: "wound", label: "Wound", checked: false },
];

const dndConditions: CheckboxOption[] = [
  { id: "blinded", label: "Blinded", checked: false },
  { id: "charmed", label: "Charmed", checked: false },
  { id: "deafened", label: "Deafened", checked: false },
  { id: "frightened", label: "Frightened", checked: false },
  { id: "grappled", label: "Grappled", checked: false },
  { id: "incapacitated", label: "Incapacitated", checked: false },
  { id: "invisible", label: "Invisible", checked: false },
  { id: "paralyzed", label: "Paralyzed", checked: false },
  { id: "petrified", label: "Petrified", checked: false },
  { id: "poisoned", label: "Poisoned", checked: false },
  { id: "prone", label: "Prone", checked: false },
  { id: "restrained", label: "Restrained", checked: false },
  { id: "stunned", label: "Stunned", checked: false },
  { id: "unconscious", label: "Unconscious", checked: false },
];

export default function ConditionSelector({
  options,
  onRemove,
}: {
  options: string;
  onRemove: (arg: string) => void;
}) {
  // Initial state for checkboxes
  const [checkboxes, setCheckboxes] = useState<CheckboxOption[]>(
    options === "gloomhaven"
      ? gloomhaveConditions
      : options === "dnd"
        ? dndConditions
        : [],
  );

  // Function to handle checkbox change
  const handleCheckboxChange = (id: string, checked: Checked) => {
    setCheckboxes((current) =>
      current.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: checked } : checkbox,
      ),
    );
  };

  // Function to handle remove condition
  const handleRemoveCondition = (id: string) => {
    setCheckboxes((current) =>
      current.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: false } : checkbox,
      ),
    );
  };

  return (
    <div className="flex w-full items-end justify-between gap-2">
      <div className="flex w-full flex-col gap-2">
        <ul className="flex min-h-6 gap-1">
          {checkboxes
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => (
              <li key={checkbox.id}>
                <Badge className="flex gap-1">
                  {checkbox.label}{" "}
                  <button onClick={() => handleRemoveCondition(checkbox.id)}>
                    <XMark />
                  </button>
                </Badge>
              </li>
            ))}
        </ul>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Conditions</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="h-56 w-56 overflow-scroll">
            {checkboxes.map(({ id, label, checked, disabled }) => (
              <DropdownMenuCheckboxItem
                key={id}
                checked={checked}
                onCheckedChange={(checked) => handleCheckboxChange(id, checked)}
                disabled={disabled}
              >
                {label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <RemoveButton name={options} onRemove={onRemove} />
    </div>
  );
}
