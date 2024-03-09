import DefaultNotFound from "@/components/NotFound/Default";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-left" />
      <Toaster position="top-center" richColors />
    </>
  ),
  notFoundComponent: DefaultNotFound
});
