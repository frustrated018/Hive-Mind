import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout/login")({
  component: LoginComponent,
});

function LoginComponent() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="flex flex-col gap-5 h-96 w-full md:w-[70%] lg:w-[90%] xl:w-[70%] mx-auto">
        <h3 className="text-center font-semibold text-4xl my-5">Login!</h3>
        <CardContent>
          <form className="space-y-5">
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
            <Button className="w-full text-lg font-medium" type="submit">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="inline-flex items-center">
            Don&apos;t have an accout?
            <Link to="/signup" className={buttonVariants({ variant: "link" })}>
              Signup
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
