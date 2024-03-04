import About from "@/components/Home/About";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Unique from "@/components/Home/Unique";
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
      <Unique />
      <About />
      <Footer />
    </>
  );
}
