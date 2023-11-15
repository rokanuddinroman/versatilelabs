"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Workflow,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function SearchDialog({
  setOpen,
  open,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
}) {
  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Trending">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Linkup</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Popular">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Templates</span>
              <CommandShortcut>⌘T</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Workflow className="mr-2 h-4 w-4" />
              <span>Work</span>
              <CommandShortcut>⌘W</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
