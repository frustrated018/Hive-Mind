import Acard from "@/components/Assignment/Acard";
import Footer from "@/components/Home/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Nav/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { Data } from "@/lib/types";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import axios from "axios"; // Corrected import statement for axios

//! Creating Route

export const Route = createFileRoute("/assignments/")({
  component: AssignmentPage,
});

export default function AssignmentPage() {
  //! Fetching Data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Assignments"],
    staleTime: 5,
    queryFn: async () => {
      const { data } = await axios.get(
        "https://hive-mind-server-snowy.vercel.app/assignments"
      );

      return data as Data[];
    },
  });

  //! Issue: cheking if vercel deployment issues are fixed
  // TODO: Paginate the cards
  // TODO: Only show status: "Approved" products
  // TODO: Make the data that goes into Acards contain only necessary info
  // TODO: See if you can mutate the data from the backend to only send necessary info

  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center my-10">
          All assignments currently available
        </h2>

        {isLoading && (
          <div className="h-[50vh]  flex justify-center items-center">
            <ReloadIcon className="size-20 animate-spin" />
          </div>
        )}
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
        <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {/* Added 'gap-4' for spacing between cards and 'justify-items-center' to center cards within grid */}

          {!isLoading &&
            !isError &&
            data &&
            data.map((assignment) => (
              <Acard key={assignment._id} data={assignment} />
            ))}
        </MaxWidthWrapper>
      </section>
      <Footer />
    </>
  );
}
