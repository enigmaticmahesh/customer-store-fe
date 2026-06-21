import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/product/')({
    beforeLoad: () => {
        throw redirect({
            to: '/search',
            viewTransition: true
        })
    }
})
