import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Nav/Navbar";
import { Data } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";

//! Creating Route
export const Route = createFileRoute("/assignments/$assignmentId")({
  component: AssignmentDetials,
});

export default function AssignmentDetials() {
  const { assignmentId } = Route.useParams();

  const { data } = useQuery({
    queryKey: ["Assignments"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/assignments/findbyid?id=${assignmentId}`
      );

      return data as Data[];
    },
  });

  console.log(data);

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
