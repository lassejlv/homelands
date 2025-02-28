import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/$profileId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile/$profileId"!</div>
}
