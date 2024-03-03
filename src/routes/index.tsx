import Navbar from "@/components/Home/Navbar";
import HomePage from "@/pages/Home/HomePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeLayoutComponent,
});

function HomeLayoutComponent() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}
