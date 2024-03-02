"use client";

import { useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

import CopyDocument from "./icons/CopyDocument";

type CopyOnClickButtonProps = {
  text: string;
};

export default function CopyOnClickButton({ text }: CopyOnClickButtonProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const textToCopy: string = text;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast("Game ID Copied!");
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex gap-1">
      <Input value={textToCopy} readOnly />
      <Button
        onClick={handleCopy}
        className="pointer font-medium"
        title={copied ? "Copied!" : "Click to copy"}
        variant="outline"
      >
        <CopyDocument />
      </Button>
    </div>
  );
}
