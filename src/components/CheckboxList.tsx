import type { CheckboxOption, Checked } from "~/types/checkboxTypes";

import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "~/components/ui/dropdown-menu";

type CheckboxListProps = {
  checkboxes: CheckboxOption[];
  onCheckboxChange: (id: string, checked: Checked) => void;
  disabled: boolean;
};

const CheckboxList = ({
  checkboxes,
  onCheckboxChange,
  disabled,
}: CheckboxListProps) => (
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

export { CheckboxList };
