import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/orders/')({
    beforeLoad: () => {
        throw redirect({
            to: '/user/orders',
            viewTransition: true
        })
    }
})
