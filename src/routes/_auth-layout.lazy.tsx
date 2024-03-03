import { Link, Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth-layout")({
  component: AuthLayoutComponent,
});

function AuthLayoutComponent() {
  return (
    <section className="w-full min-h-screen flex">
      <div className="w-1/2 hidden lg:block h-dvh border-r relative">
        <div
          className="h-full bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/three-people-sitting-in-front-of-table-laughing-together-g1Kr4Ozfoac')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Content */}
          <div className="absolute p-10 inset-0 flex flex-col justify-between text-secondary z-20">
            <Link to="/" className="flex items-center gap-2 text-4xl font-bold">
              <img src="/Logo.svg" alt="logo" /> Hive Mind
            </Link>
            <p className="text-lg">
              A collaborative space for students and learners. Our site provides
              you with a space to collaborate on projects with your partners.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="p-5 lg:p-10 h-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
