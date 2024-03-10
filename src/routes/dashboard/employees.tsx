import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/employees')({
  component: () => <div>Hello /dashboard/employees!</div>
})