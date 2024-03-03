import { Link } from "@tanstack/react-router";
import { buttonVariants } from "../ui/button";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Hero() {
  return (
    <section className="w-full py-10">
      <MaxWidthWrapper>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            alt="Hero"
            className="mx-auto h-[310px] w-[550px] aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            src="https://source.unsplash.com/three-men-laughing-while-looking-in-the-laptop-inside-room-XkKCui44iM0"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Study Smarter, Together, Anywhere
              </h1>
              <p className="max-w-[600px] md:text-xl">
                Collaborate with peers, gain new perspectives, and elevate your
                learning experience through our group study sessions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link className={buttonVariants()} to="/">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
