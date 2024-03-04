import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/firebase/AuthProvider";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { FormEvent, useContext } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/_auth-layout/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const navigate = useNavigate();
  const { logInUser, loading } = useContext(AuthContext);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const res = await logInUser(email, password);

    if (res.user) {
      navigate({
        to: "/",
      });
      toast.success("Welcome Back!");
    } else {
      toast.error("Sorry, we couldn't create your account.");
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="flex flex-col gap-5 w-full md:w-[70%] lg:w-[90%] xl:w-[70%] mx-auto">
        <h3 className="text-center font-semibold text-4xl my-5">Login!</h3>
        <CardContent>
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password:</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
              />
            </div>
            {loading ? (
              <Button disabled className="w-full">
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button className="w-full text-lg font-medium" type="submit">
                Login
              </Button>
            )}
          </form>
        </CardContent>
        <CardFooter>
          <div className="inline-flex items-center text-xl">
            Don&apos;t have an accout?
            <Link
              to="/signup"
              className={buttonVariants({
                variant: "link",
                className: "text-xl -ml-2.5",
              })}
            >
              Signup
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
