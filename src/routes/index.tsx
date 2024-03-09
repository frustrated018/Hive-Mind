import Mission from "@/components/Home/Mission";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Unique from "@/components/Home/Unique";
import Navbar from "@/components/Nav/Navbar";
import { createFileRoute } from "@tanstack/react-router";
import About from "@/components/Home/About";
import ContactUs from "@/components/Home/ContactUs";
import Team from "@/components/Home/Team";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Unique />
      <About />
      <Mission />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}
