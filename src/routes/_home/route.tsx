import { createFileRoute, Outlet } from '@tanstack/react-router'
import Navbar from './-components/navbar.component'
import Footer from './-components/footer.component'

const HomeLayout = () => {
    return (
      <div className="bg-background z-10">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
}

export const Route = createFileRoute('/_home')({
  component: HomeLayout,
})
