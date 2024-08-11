'use client' // This directive is necessary for using hooks in a Next.js app
import { useEffect, type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { Api } from './trpc.client'

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

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
    <PostHogProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PostHogProvider>
  )
}
