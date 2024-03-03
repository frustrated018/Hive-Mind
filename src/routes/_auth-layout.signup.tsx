import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/firebase/AuthProvider";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";

export const Route = createFileRoute("/_auth-layout/signup")({
  component: SignupComponent,
});

function SignupComponent() {
  const { createUserWithEmailAndPass, loading } = useContext(AuthContext);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const photo = formData.get("photo") as string;
    console.log(name, photo);

    // Creating user
    if (!loading) {
      const res = await createUserWithEmailAndPass(email, password);

      if (res.user) {
        console.log("redirect to home or something");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="flex flex-col gap-5 w-full md:w-[70%] lg:w-[90%] xl:w-[70%] mx-auto">
        <h3 className="text-center font-semibold text-4xl my-5">Signup!</h3>
        <CardContent>
          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <Label htmlFor="name">Name:</Label>
              <Input id="name" name="name" type="text" autoComplete="name" />
            </div>
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password:</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
              />
            </div>
            <div>
              <Label htmlFor="photo">PhotoURL (unsplash):</Label>
              <Input id="photo" name="photo" type="url" />
            </div>
            <Button className="w-full text-lg font-medium" type="submit">
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="inline-flex items-center text-xl">
            Already have an account?
            <Link
              to="/login"
              className={buttonVariants({
                variant: "link",
                className: "text-xl -ml-2.5",
              })}
            >
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
