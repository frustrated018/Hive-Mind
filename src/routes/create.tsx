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
      <MaxWidthWrapper className="min-h-screen">things go here</MaxWidthWrapper>
      <Footer />
    </>
  );
}
