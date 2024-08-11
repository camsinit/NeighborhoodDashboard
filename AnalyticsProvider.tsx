'use client'

import React, { useState, useEffect, type ReactNode } from 'react'
import { Api } from './trpc.client.js'
import posthog from 'posthog-js'

type PostHogType = typeof posthog

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = (Api as any).configuration?.getPublic?.useQuery?.() ?? { data: undefined, isLoading: false }
  const [posthogClient, setPosthogClient] = useState<PostHogType | null>(null)

  useEffect(() => {
    const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === 'production'
    const canActivate = !isLoading && data && isProduction

    if (canActivate && typeof window !== 'undefined') {
      const key = process.env.NEXT_PUBLIC_POSTHOG_KEY || data?.['PUBLIC_POSTHOG_KEY']
      const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || data?.['PUBLIC_POSTHOG_HOST']

      if (key && host) {
        import('posthog-js').then((PostHogModule) => {
          try {
            const PostHog = PostHogModule.default
            PostHog.init(key, {
              api_host: host,
              capture_pageview: false,
            })
            setPosthogClient(PostHog)
          } catch (error) {
            console.error(`Could not start analytics: ${(error as Error).message}`)
          }
        }).catch(error => {
          console.error(`Failed to import PostHog: ${error.message}`)
        })
      }
    }
  }, [data, isLoading])

  useEffect(() => {
    if (posthogClient && typeof window !== 'undefined') {
      const handleRouteChange = () => {
        posthogClient.capture('$pageview')
      };

      handleRouteChange(); // Capture initial pageview
      window.addEventListener('popstate', handleRouteChange);

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [posthogClient]);

  return <>{children}</>
}
