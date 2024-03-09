import { Link, useRouter } from "@tanstack/react-router";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useContext } from "react";
import { AuthContext } from "@/Auth/AuthProvider";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  //! Comming soon

  function comingSoon() {
    toast.info("Coming Soon...", {
      description:
        "The Creator of this project was busy with Admisson tests so.... 💀",
      duration: 6000,
      closeButton: true,
    });
  }

  return (
    <>
      <header className="bg-secondary flex h-24 items-center">
        <MaxWidthWrapper>
          <section className="flex justify-between items-center">
            <div>
              <Link
                to="/"
                className="flex gap-2 items-center text-xl md:text-2xl lg:text-3xl font-semibold "
              >
                <img src="/Logo.svg" alt="logo" /> Hive Mind
              </Link>
            </div>

            <div className="block lg:hidden pr-5">
              <MobileNav />
            </div>

            <div className="hidden lg:flex items-center gap-5">
              <NavItems />
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage
                      src={
                        user
                          ? user.photoURL!
                          : "https://source.unsplash.com/a-blurry-image-of-a-rainbow-colored-background-FQ7cRFUU1y0"
                      }
                    />
                    <AvatarFallback>{user?.displayName}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    {user ? user.displayName : "No user"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={comingSoon}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={comingSoon}>
                    My Assignments
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.navigate({ to: "/dashboard" })}
                  >
                    Dashboard (for admins)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </section>
        </MaxWidthWrapper>
      </header>
    </>
  );
}
