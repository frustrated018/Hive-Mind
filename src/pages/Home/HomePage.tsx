import Navbar from "@/components/Home/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="h-96 w-full bg-blue-300 grid place-items-center">
        <h2 className="text-center font-semibold text-4xl">
          This will be the HomePage
        </h2>
      </div>
    </>
  );
};

export default HomePage;
