import { ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "@tanstack/react-router";
import { ReloadIcon } from "@radix-ui/react-icons";

const AuthGuard: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/login" });
    }
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ReloadIcon className="mr-2 size-20 animate-spin" />
      </div>
    );
  }

  return user ? <>{children}</> : null;
};

export default AuthGuard;
