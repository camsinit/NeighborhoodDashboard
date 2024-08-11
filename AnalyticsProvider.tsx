'use client'
import dynamic from 'next/dynamic'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import * as React from 'react'
import { ConfigurationRouter } from './configuration.router'
import { Api } from './trpc'

// Add type definitions for process.env
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
    }
  }
}

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = Api.configuration.getPublic.useQuery()

  React.useEffect(() => {
    const isProduction = process.env.NODE_ENV === 'production'
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
