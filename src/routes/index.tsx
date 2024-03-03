import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Nav/Navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeLayoutComponent,
});

function HomeLayoutComponent() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
