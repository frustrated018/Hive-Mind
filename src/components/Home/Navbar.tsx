import { Link } from "@tanstack/react-router";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "../ui/button";

export default function Navbar() {
  return (
    <>
      <header className="bg-secondary flex h-16 items-center">
        <MaxWidthWrapper>
          <section className="flex justify-between">
            <Link
              to="/"
              className={buttonVariants({
                variant: "ghost",
                className: "text-2xl font-bold",
              })}
            >
              Hive Mind
            </Link>

            <div className="flex items-center gap-3">
              <Link to="/">Assignmnts</Link>
              <Link to="/">Create Assignmnts</Link>
              <Link to="/">Login</Link>
            </div>
          </section>
        </MaxWidthWrapper>
      </header>
    </>
  );
}
