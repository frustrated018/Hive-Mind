import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardWelcome,
});

export function DashboardWelcome() {
  return (
    <>
      <div>
        Hi! Welcome to the admin dashboard click any of the buttons to get
        started
      </div>
    </>
  );
}
