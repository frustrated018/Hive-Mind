import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout/signup")({
  component: SignupComponent,
});

function SignupComponent() {
  return (
    <div>
      <h2>signup form will be here</h2>
      <Link to="/login">Login</Link>
    </div>
  );
}
