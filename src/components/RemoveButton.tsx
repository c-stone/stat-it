import { Button } from "./ui/button";
import { XMark } from "./icons/XMark";

function RemoveButton({
  name,
  onRemove,
}: {
  name: string;
  onRemove: (arg: string) => void;
}) {
  return (
    <Button
      variant={"destructive"}
      size={"icon"}
      onClick={() => onRemove(name)}
    >
      <XMark />
    </Button>
  );
}

export { RemoveButton };
