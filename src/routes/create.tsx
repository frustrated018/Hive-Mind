import CreateForm from "@/components/Assignment/CreateForm";
import Footer from "@/components/Home/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Nav/Navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/create")({
  component: CreatePageLayout,
});

export default function CreatePageLayout() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="min-h-screen">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center my-10">
          Create Assignment
        </h2>
        <CreateForm />
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
