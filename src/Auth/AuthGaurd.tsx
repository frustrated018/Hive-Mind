import { ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { useRouter } from "@tanstack/react-router";
import { ReloadIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

const AuthGuard: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  // TODO: Tried to send a pathname to the login page to return to the page that this was triggerd from but can't find a solution in the tanstack docs
  // const pathName = router.latestLocation.pathname;

  //! ISSUE: Toast is renering 2 times when user navigates form / to /create but if they are already in /create page then it's fine?

  useEffect(() => {
    if (!loading && !user) {
      router.navigate({ to: "/login" });
      toast.error("Please Login!", {
        description:
          "The route you were trying to access is protected. Please login to continue.",
      });
    }
  }, [loading, user, router]);

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
