import { QueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,

      retry: (failureCount, error) => {
        if (error instanceof Error && error.message.includes('4')) {
          return false
        }
        return failureCount < 3
      },
      refetchOnWindowFocus: false,
    //   onError: (error) => {
    //     toast.error(`Query error: ${error.message}`)
    //   },
    },
    mutations: {
      onError: (error) => {
        toast.error(`Mutation error: ${error.message}`)
      },
    },
  },
})