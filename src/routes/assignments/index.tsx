import Acard from "@/components/Assignment/Acard";
import Footer from "@/components/Home/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Nav/Navbar";
import { Data } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios"; // Corrected import statement for axios

//! Creating Route

export const Route = createFileRoute("/assignments/")({
  component: AssignmentPage,
});

export default function AssignmentPage() {
  //! Fetching Data
  const { data } = useQuery({
    queryKey: ["Assignments"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/assignments");

      return data as Data[];
    },
  });

  // todo: edit the cards to look decent
  // todo: Make the data that goes into Acards contain only necessary info
  // todo: See if you can mutate the data from the backend to only send necessary info

  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center my-10">
          All assignments currently available
        </h2>
        <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {/* Added 'gap-4' for spacing between cards and 'justify-items-center' to center cards within grid */}
          {data &&
            data.map((assignment) => (
              <Acard key={assignment._id} data={assignment} />
            ))}
        </MaxWidthWrapper>
      </section>
      <Footer />
    </>
  );
}
