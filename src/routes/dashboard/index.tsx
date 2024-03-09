import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardWelcome,
});

export function DashboardWelcome() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h2 className="font-semibold text-2xl">
          Hi! Welcome to the admin dashboard click any of the buttons to get
          started
        </h2>
      </div>
    </>
  );
}
