import DetialsSkeleton from "@/Skeletons/Assignment/DetialsSkeleton";
import Details from "@/components/Assignment/Details";
import Footer from "@/components/Home/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Nav/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { Data } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
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
        {isLoading && <DetialsSkeleton />}
        {isError && (
          <div>
            <p className="scroll-m-20 text-3xl font-semibold tracking-tight text-center">
              Coudn't find the assignment you were looking for.
            </p>
            <div className="flex justify-center items-center mt-10">
              <Link to="/assignments" className={buttonVariants()}>
                Go back
              </Link>
            </div>
          </div>
        )}
        {!isLoading && data && <Details data={data} />}
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
