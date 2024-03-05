import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Nav/Navbar";
import { createFileRoute } from "@tanstack/react-router";

//!Fetching Data

function fetchAssignment(id: string) {
  console.log(id);
}

//! Creating Route
export const Route = createFileRoute("/assignments/$assignmentId")({
  component: AssignmentDetials,
  loader: ({ params: { assignmentId } }) => fetchAssignment(assignmentId),
});

export default function AssignmentDetials() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        <h2>Bla bla bullshit</h2>
      </section>
      <Footer />
    </>
  );
}
