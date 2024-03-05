import Details from "@/components/Assignment/Details";
import Footer from "@/components/Home/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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

  const { data, isLoading, isError } = useQuery({
    queryKey: ["Assignment"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/assignments/findbyid?id=${assignmentId}`
      );

      return data as Data;
    },
  });

  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="min-h-screen">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center my-10">
          Details
        </h2>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Couldn't find any data...</p>}
        {!isLoading && data && <Details data={data} />}
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
