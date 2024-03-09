import { FaRegUser } from "react-icons/fa6";
import { MdGroups, MdOutlineAssignment } from "react-icons/md";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";

const sidenavLinks = [
  { label: "Overview", href: "/dashboard/overview", icon: DashboardIcon },
  { label: "Users", href: "/dashboard/users", icon: MdGroups },
  { label: "Employees", href: "/dashboard/employees", icon: FaRegUser },
  {
    label: "Assignments",
    href: "/dashboard/assignments",
    icon: MdOutlineAssignment,
  },
];

export default function Sidenav() {
  return (
    <section className="w-[200px] bg-secondary border-r border-2 min-h-screen">
      <div className="flex flex-col gap-5 mt-5">
        {sidenavLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            activeProps={{ className: "bg-primary" }}
            className="flex gap-2 bg-background px-2 py-2.5 rounded-xl w-3/4 mx-auto justify-center items-center"
          >
            <link.icon size={20} />
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
