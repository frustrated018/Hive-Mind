import CreatePage from "@/pages/create/Create";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create")({
  component: CreatePage,
});
