import type { CheckboxOption } from "../types/checkboxTypes";

import { Badge } from "./ui/badge";
import { XMark } from "./icons/XMark";

type BadgeListProps = {
  checkboxes: CheckboxOption[];
  onRemove: (id: string) => void;
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

export { BadgeList };
