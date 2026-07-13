import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/_protected/orders/')({
    beforeLoad: () => {
        throw redirect({
            to: '/user/orders',
            viewTransition: true
        })
    }
})
