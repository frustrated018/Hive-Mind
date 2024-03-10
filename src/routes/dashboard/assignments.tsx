import AssignmentTable from "@/components/Tables/AssignmentTable";
import { assignmentData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";

export const Route = createFileRoute("/dashboard/assignments")({
  component: AssingmentTablePage,
});

export default function AssingmentTablePage() {
  //! Fetching Data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["AssignmentsTable"],
    staleTime: 5,
    queryFn: async () => {
      const { data } = await axios.get(
        "https://hive-mind-server-snowy.vercel.app/assignments"
      );

      return data as assignmentData[];
    },
  });

  return (
    <section className="p-5">
      <div className="border-b pb-5 space-y-1.5">
        <h2 className="text-3xl font-bold">Assignments (10)</h2>
        <h5>
          All assignments on the site meaning this incudes approved pending and
          rejected assignments
        </h5>
      </div>

      <div>
        {/* Will add data table here  */}
        {isLoading && (
          <div className="h-96 flex justify-center items-center">
            <div className="animate-spin">
              <ImSpinner9 size={50} />
            </div>
          </div>
        )}

        {isError && <div>Shit we got an error!!! AHHHHHH!!!</div>}

        {!isLoading && !isError && data && <AssignmentTable data={data} />}
      </div>
    </section>
  );
}
