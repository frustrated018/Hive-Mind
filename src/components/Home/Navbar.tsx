import { Link } from "@tanstack/react-router";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <>
      <header className="bg-secondary flex h-24 items-center">
        <MaxWidthWrapper>
          <section className="flex justify-between">
            <Link
              to="/"
              className="flex gap-2 items-center text-xl md:text-2xl lg:text-3xl font-semibold "
            >
              <img src="/Logo.svg" alt="logo" /> Hive Mind
            </Link>

            <div className="hidden lg:flex items-center gap-5">
              <NavItems />
            </div>
          </section>
        </MaxWidthWrapper>
      </header>
    </>
  );
}
