import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

type CheckboxOption = {
    id: string;
    label: string;
    checked: Checked;
    disabled?: boolean;
  };

export const gloomhaveConditions: CheckboxOption[] = [
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
  
export const dndConditions: CheckboxOption[] = [
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