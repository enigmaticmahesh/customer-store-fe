import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/user/')({
    beforeLoad: () => {
        throw redirect({
            to: '/user/dashboard',
            viewTransition: true
        })
    },
})
