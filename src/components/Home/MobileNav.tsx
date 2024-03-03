import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import NavItems from "./NavItems";

export default function MobileNav() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon className="size-8" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link to="/" className="font-bold">
                Hive Mind
              </Link>
            </SheetTitle>
            <SheetDescription>
              Online space for colaborative studying.
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col mt-5 gap-5 font-semibold text-xl">
            <NavItems />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
