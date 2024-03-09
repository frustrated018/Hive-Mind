import { Link, createFileRoute } from "@tanstack/react-router";
import { FaRegUser } from "react-icons/fa6";
import { MdGroups, MdHome, MdOutlineAssignment } from "react-icons/md";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardLayout,
});

export function DashboardLayout() {
  const sidenavLinks = [
    { label: "Home", href: "/dashboard", icon: MdHome },
    { label: "Users", href: "/dashboar/users", icon: MdGroups },
    { label: "Employees", href: "/dashboard/employees", icon: FaRegUser },
    { label: "Assignments", href: "/dashboard/assignments", icon: MdOutlineAssignment },
  ];

  return (
    <section className="w-[200px] bg-secondary border-r border-2 min-h-screen">
      <div className="flex flex-col gap-5 mt-5">
        {sidenavLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            activeProps={{ className: "bg-primary" }}
            className="flex gap-2 bg-background px-2 py-2.5 rounded-xl w-3/4 mx-auto justify-start"
          >
            <link.icon size={20} />
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
