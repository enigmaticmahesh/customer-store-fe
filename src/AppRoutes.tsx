import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import NotFound from './components/custom/not-found.component'

// Create a new router instance
const router = createRouter({ routeTree, defaultNotFoundComponent: NotFound })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function AppRoutes() {
    return <RouterProvider router={router} />
}