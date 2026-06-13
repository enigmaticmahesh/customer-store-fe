import {
//   useQuery,
//   useMutation,
//   useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { ReactNode } from 'react'

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // 1. Stop automatic API calls when the user switches browser tabs
            refetchOnWindowFocus: false, 

            // 2. Consider data "fresh" for 5 minutes before trying to fetch it again
            staleTime: 1000 * 60 * 5, 

            // 3. Keep unused data in the local cache memory for 10 minutes before discarding
            gcTime: 1000 * 60 * 10, 

            // 4. Automatically retry a failing network request 2 times before showing an error
            retry: false, 
        }
    }
})

const ApiQueryProvider = ({children}: {children: ReactNode}) => {
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

export default ApiQueryProvider