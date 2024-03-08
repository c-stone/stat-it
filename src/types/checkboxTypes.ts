import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

type CheckboxOption = {
    id: string;
    label: string;
    checked: Checked;
    disabled?: boolean;
};

export type { CheckboxOption, Checked };