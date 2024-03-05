import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Nav/Navbar";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios"; // Corrected import statement for axios

export const Route = createFileRoute("/assignments")({
  component: AssignmentPage,
});

//! declearing type of data

interface Creator {
  name: string;
  email: string;
}

interface Data {
  title: string;
  description: string;
  thumbnail: string;
  marks: number;
  difficulty: string;
  status: string;
  creator: Creator;
  due?: Date;
}

export default function AssignmentPage() {
  //! Fetching Data
  const { data } = useQuery({
    queryKey: ["Assignments"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/assignments");

      return data as Data[];
    },
  });

  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center my-10">
          All assignments currently available
        </h2>
        {data &&
          data.map((assignment, index) => (
            <div key={index}>
              {/* Render your assignment data here */}
              <p>{assignment.title}</p>
              {/* Add other assignment properties as needed */}
            </div>
          ))}
      </section>
      <Footer />
    </>
  );
}
