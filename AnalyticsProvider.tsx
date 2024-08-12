// @ts-nocheck
'use client'

import React, { useEffect, type ReactNode } from 'react'
import { Api } from './trpc.client.js'
import posthog from 'posthog-js'

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = (Api as any).configuration?.getPublic?.useQuery?.() ?? { data: undefined, isLoading: false }

  useEffect(() => {
    const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === 'production'
    const canActivate = !isLoading && data && isProduction

    if (canActivate && typeof window !== 'undefined') {
      const key = process.env.NEXT_PUBLIC_POSTHOG_KEY || data?.['PUBLIC_POSTHOG_KEY']
      const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || data?.['PUBLIC_POSTHOG_HOST']

      if (key && host) {
        try {
          (posthog as any).init(key, {
            api_host: host,
            capture_pageview: false,
          })
        } catch (error) {
          console.error(`Could not start analytics: ${(error as Error).message}`)
        }
      }
    }
  }, [data, isLoading])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleRouteChange = () => {
        (posthog as any).capture('$pageview')
      };

      handleRouteChange(); // Capture initial pageview
      window.addEventListener('popstate', handleRouteChange);

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, []);

  return <>{children}</>
}
