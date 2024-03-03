import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout/signup")({
  component: SignupComponent,
});

function SignupComponent() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="flex flex-col gap-5 w-full md:w-[70%] lg:w-[90%] xl:w-[70%] mx-auto">
        <h3 className="text-center font-semibold text-4xl my-5">Signup!</h3>
        <CardContent>
          <form className="space-y-5">
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
          <div className="inline-flex items-center">
            Already have an accout?
            <Link to="/login" className={buttonVariants({ variant: "link" })}>
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
