import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/overview')({
  component: () => <div>Hello /dashboard/overview!</div>
})