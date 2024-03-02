import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import CopyOnClickButton from "./ClipboardCopyButton";

export default function GameCreator() {
  return (
    <div className="flex min-w-[450px] flex-col gap-5 rounded border border-slate-950 bg-slate-300 p-10 pb-8 text-slate-900">
      <div className="flex flex-col gap-2">
        <Label htmlFor="game-name">Game name</Label>
        <Input
          type="text"
          id="game-name"
          placeholder="Gloomhaven with the homies"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium leading-none">Game ID</span>
        <CopyOnClickButton text="PBxjzIt/u5ZX3JIrhsjBfUKfJhqu0oa5o4TNMfjBWec=" />
      </div>
      <div className="flex w-full justify-end">
        <Button>Create</Button>
      </div>
    </div>
  );
}
