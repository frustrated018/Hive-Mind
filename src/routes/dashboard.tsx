import Sidenav from "@/components/Sidenav/Sidenav";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

export function DashboardLayout() {
  return (
    <section className="min-h-screen overflow-hidden flex">
      <Sidenav />
      <div className="h-full w-full">
        <Outlet />
      </div>
    </section>
  );
}
