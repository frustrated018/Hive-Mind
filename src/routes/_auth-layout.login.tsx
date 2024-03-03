import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout/login")({
  component: LoginComponent,
});

function LoginComponent() {
  return (
    <div>
      <Link to="/">Home</Link>
      <p>Login form will be here</p>
      <Link to="/signup">Signup</Link>
    </div>
  );
}
