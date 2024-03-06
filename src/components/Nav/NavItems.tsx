import { AuthContext } from "@/Auth/AuthProvider";
import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { Button, buttonVariants } from "../ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/Auth/firebase.config";
import { toast } from "sonner";

export default function NavItems() {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logout Successful!");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Assignments", path: "/assignments" },
    { name: "Create Assignment", path: "/create" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          to={item.path}
          key={item.path}
          className="hover:underline"
          activeProps={{ className: "font-bold underline" }}
        >
          {item.name}
        </Link>
      ))}

      <>
        {user ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Link to="/login" className={buttonVariants()}>Login</Link>
        )}
      </>
    </>
  );
}
