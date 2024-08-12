import { createTRPCReact } from '@trpc/react-query';
import { loggerLink, unstable_httpBatchStreamLink } from '@trpc/client'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import superjson from 'superjson'
import type { AppRouter } from '../server/api/root';

export const Api = createTRPCReact<AppRouter>();

const transformer = superjson

export const createTrpcClient = () => {
  return {
    transformer,
    links: [
      loggerLink({
        enabled: (op) =>
          process.env.NEXT_PUBLIC_NODE_ENV === 'development' ||
          (op.direction === 'down' && op.result instanceof Error),
      }),
      unstable_httpBatchStreamLink({
        url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/trpc`,
        headers: () => {
          const headers = new Headers();
          headers.set('x-trpc-source', 'react');
          return Object.fromEntries(headers.entries());
        },
      }),
    ],
  };
};

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>
