import { Link } from "@tanstack/react-router";

export default function NavItems() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Assignments", path: "/assignments" },
    { name: "Create Assignment", path: "/create" },
    { name: "Login", path: "/login" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          to={item.path}
          key={item.path}
          className="font-semibold hover:underline"
          activeProps={{ className: "font-bold underline" }}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
