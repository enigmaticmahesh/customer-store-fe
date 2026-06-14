import { createFileRoute, Outlet } from '@tanstack/react-router'

const HomeLayout = () => {
    return <Outlet />
}

export const Route = createFileRoute('/_home')({
  component: HomeLayout,
})
