'use client' // This directive is necessary for using hooks in a Next.js app
import React, { useEffect, type ReactNode } from 'react'
import posthog from 'posthog-js'
import { Api } from './trpc.client.js'

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
          capture_pageview: true, // Changed to true to capture pageviews automatically
        })
      } catch (error) {
        console.log(`Could not start analytics: ${(error as Error).message}`)
      }
    }
  }, [data, isLoading])

  // Capture pageview on route change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.capture('$pageview')
    }
  }, [])

  return <>{children}</>
}
