'use client' // This directive is necessary for using hooks in a Next.js app
import React, { useEffect, type ReactNode } from 'react'
import posthog from 'posthog-js'
import { Api } from './trpc.client.js'
import PostHogPageView from './PostHogPageView.js'

// Declare the module to satisfy TypeScript
declare module 'posthog-js/react' {
  interface PostHogProviderProps {
    client: typeof posthog;
    children: React.ReactNode;
  }
  export default function PostHogProvider(props: PostHogProviderProps): JSX.Element;
}

// Dynamic import to avoid SSR issues
const PostHogProvider = React.lazy(() => import('posthog-js/react'));

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = (Api as any).configuration?.getPublic?.useQuery?.() ?? { data: undefined, isLoading: false }

  useEffect(() => {
    const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === 'production'
    const canActivate =
      typeof window !== 'undefined' && !isLoading && data && isProduction

    if (canActivate) {
      const key = data['PUBLIC_POSTHOG_KEY']
      const host = data['PUBLIC_POSTHOG_HOST']

      try {
        posthog.init(key, {
          api_host: host,
          person_profiles: 'identified_only',
          capture_pageview: false,
        })
      } catch (error) {
        console.log(`Could not start analytics: ${(error as Error).message}`)
      }
    }
  }, [data, isLoading])

  return (
    <React.Suspense fallback={<>{children}</>}>
      <PostHogProvider client={posthog}>
        <PostHogPageView />
        {children}
      </PostHogProvider>
    </React.Suspense>
  )
}
