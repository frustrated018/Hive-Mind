import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Nav/Navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/assignments")({
  component: AssignmentPage,
});

export default function AssignmentPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        All the assignments will be here
      </section>
      <Footer />
    </>
  );
}
