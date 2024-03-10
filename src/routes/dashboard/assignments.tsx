import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/assignments")({
  component: AssingmentsTable,
});

export default function AssingmentsTable() {
  return (
    <div>
      <h2 className="text-2xl font-bold">
        This page will contain all the available assingments in a tanstack table
      </h2>
    </div>
  );
}
