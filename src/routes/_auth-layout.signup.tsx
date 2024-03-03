import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout/signup")({
  component: SignupComponent,
});

function SignupComponent() {
  return <div>signup form will be here</div>;
}
