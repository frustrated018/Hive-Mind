import { Link } from "@tanstack/react-router";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useContext } from "react";
import { AuthContext } from "@/firebase/AuthProvider";

export default function Navbar() {
  const { user } = useContext(AuthContext);

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
            </div>
          </section>
        </MaxWidthWrapper>
      </header>
    </>
  );
}
