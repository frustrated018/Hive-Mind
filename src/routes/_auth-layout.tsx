import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout")({
  component: AuthLayoutComponent,
});

function AuthLayoutComponent() {
  return (
    <div>
      <div>This will be the layout</div>
      <hr />
      <Outlet />
    </div>
  );
}
