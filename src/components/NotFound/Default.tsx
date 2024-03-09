import { Link } from "@tanstack/react-router";
import { buttonVariants } from "../ui/button";

export default function DefaultNotFound() {
  return (
    <section className="h-screen w-full">
      <div
        className="bg-cover bg-center w-full h-full"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/matrix-movie-still-iar-afB0QQw')",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-5 h-full text-white">
          <h1 className="text-6xl md:text-7xl xl:text-9xl">404</h1>
          <h2 className=" text-xl md:text-3xl xl:text-4xl text-center font-bold">
            The page you were looking for doesn't exist!
          </h2>
          <Link
            to="/"
            className={buttonVariants({
              variant: "default",
              className: "text-xl",
            })}
          >
            Go Home!
          </Link>
        </div>
      </div>
    </section>
  );
}
