"use client";

import * as React from "react";
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import XMark from "./icons/XMark";

type Checked = DropdownMenuCheckboxItemProps["checked"];

// Define a type for the checkbox configuration
type CheckboxOption = {
  id: string;
  label: string;
  checked: Checked;
  disabled?: boolean;
};

const conditions: CheckboxOption[] = [
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

export default function DropdownMenuCheckboxes() {
  // Initial state for checkboxes
  const [checkboxes, setCheckboxes] =
    React.useState<CheckboxOption[]>(conditions);

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
    <div className="flex flex-col gap-2">
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
  );
}
