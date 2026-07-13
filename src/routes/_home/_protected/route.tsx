import { createFileRoute } from '@tanstack/react-router'
import ProtectedLayout from './-protected.layout'
import { checkAuth } from '@/middlewares/auth.middleware'
import AuthLoader from '@/components/custom/auth-loader.component'

export const Route = createFileRoute('/_home/_protected')({
  beforeLoad: checkAuth,
  pendingComponent: AuthLoader,
  component: ProtectedLayout,
})
