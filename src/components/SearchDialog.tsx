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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export function SearchDialog({
  setOpen,
  open,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
}) {
  const [query, setQuery] = React.useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  console.log(search);
  React.useEffect(() => {
    setOpen(false);
  }, [search]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };
  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a search..."
          value={query}
          onValueChange={(heading) => setQuery(heading)}
          handleButton={handleSubmit}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Trending">
            <Link href="/search?q=Linkup">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Linkup</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Popular">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Templates</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Workflow className="mr-2 h-4 w-4" />
              <span>Work</span>
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
