import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/orders/')({
    beforeLoad: () => {
        throw redirect({
            to: '/user/orders',
            viewTransition: true
        })
    }
})
