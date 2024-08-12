/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from "./index.js";
import { z } from 'zod';
import { checkRead, checkMutate } from './helper.js';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

const EventInputSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  description: z.string().optional(),
  date: z.string().optional(),
  location: z.string().optional(),
  createdById: z.string().optional(),
  dateCreated: z.date().optional(),
  dateUpdated: z.date().optional(),
});

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        createMany: procedure.input(z.object({
            data: z.array(z.object({
                name: z.string().min(1),
                description: z.string().optional(),
                date: z.string().optional(),
                location: z.string().optional(),
                createdById: z.string().optional(),
            }))
        })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).event.createMany({ data: input.data }))),

        create: procedure.input(EventInputSchema).mutation(async ({ ctx, input }) => checkMutate(db(ctx).event.create({ data: input }))),

        deleteMany: procedure.input(z.object({ where: z.any() })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).event.deleteMany(input))),

        delete: procedure.input(z.object({ where: z.any() })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).event.delete(input))),

        findFirst: procedure.input(z.object({ where: z.any(), select: z.any().optional(), include: z.any().optional() })).query(({ ctx, input }) => checkRead(db(ctx).event.findFirst(input))),

        findMany: procedure.input(z.object({ where: z.any(), select: z.any().optional(), include: z.any().optional() })).query(({ ctx, input }) => checkRead(db(ctx).event.findMany(input))),

        findUnique: procedure.input(z.object({ where: z.any(), select: z.any().optional(), include: z.any().optional() })).query(({ ctx, input }) => checkRead(db(ctx).event.findUnique(input))),

        updateMany: procedure.input(z.object({ where: z.any(), data: z.any() })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).event.updateMany(input))),

        update: procedure.input(z.object({ where: z.any(), data: z.any() })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).event.update(input))),
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {
        useMutation: <T extends z.infer<typeof EventInputSchema>[]>(
            opts?: UseTRPCMutationOptions<
                T,
                TRPCClientErrorLike<AppRouter>,
                { count: number },
                Context
            >
        ) => Omit<UseTRPCMutationResult<{ count: number }, TRPCClientErrorLike<AppRouter>, T, Context>, 'mutateAsync'> & {
            mutateAsync: (variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, { count: number }, Context>) => Promise<{ count: number }>
        };
    };
    create: {
        useMutation: <T extends z.infer<typeof EventInputSchema>>(
            opts?: UseTRPCMutationOptions<
                T,
                TRPCClientErrorLike<AppRouter>,
                T,
                Context
            >
        ) => Omit<UseTRPCMutationResult<T, TRPCClientErrorLike<AppRouter>, T, Context>, 'mutateAsync'> & {
            mutateAsync: (variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, T, Context>) => Promise<T>
        };
    };
    deleteMany: {
        useMutation: <T extends { where: z.infer<typeof EventInputSchema> }>(
            opts?: UseTRPCMutationOptions<
                T,
                TRPCClientErrorLike<AppRouter>,
                { count: number },
                Context
            >
        ) => Omit<UseTRPCMutationResult<{ count: number }, TRPCClientErrorLike<AppRouter>, T, Context>, 'mutateAsync'> & {
            mutateAsync: (variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, { count: number }, Context>) => Promise<{ count: number }>
        };
    };
    delete: {
        useMutation: <T extends { where: z.infer<typeof EventInputSchema> }>(
            opts?: UseTRPCMutationOptions<
                T,
                TRPCClientErrorLike<AppRouter>,
                T,
                Context
            >
        ) => Omit<UseTRPCMutationResult<T, TRPCClientErrorLike<AppRouter>, T, Context>, 'mutateAsync'> & {
            mutateAsync: (variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, T, Context>) => Promise<T>
        };
    };
    findFirst: {
        useQuery: <T extends z.infer<typeof EventInputSchema>>(
            input: { where: T },
            opts?: UseTRPCQueryOptions<string, { where: T }, T, T, Error>
        ) => UseTRPCQueryResult<T, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends z.infer<typeof EventInputSchema>>(
            input: { where: T },
            opts?: UseTRPCInfiniteQueryOptions<string, { where: T }, T, Error>
        ) => UseTRPCInfiniteQueryResult<T, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends z.infer<typeof EventInputSchema>>(
            input: { where: T },
            opts?: UseTRPCQueryOptions<string, { where: T }, T[], T[], Error>
        ) => UseTRPCQueryResult<T[], TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends z.infer<typeof EventInputSchema>>(
            input: { where: T },
            opts?: UseTRPCInfiniteQueryOptions<string, { where: T }, T[], Error>
        ) => UseTRPCInfiniteQueryResult<T[], TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends z.infer<typeof EventInputSchema>>(
            input: { where: T },
            opts?: UseTRPCQueryOptions<string, { where: T }, T, T, Error>
        ) => UseTRPCQueryResult<T, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends z.infer<typeof EventInputSchema>>(
            input: { where: T },
            opts?: UseTRPCInfiniteQueryOptions<string, { where: T }, T, Error>
        ) => UseTRPCInfiniteQueryResult<T, TRPCClientErrorLike<AppRouter>>;
    };
    updateMany: {
        useMutation: <T extends { where: z.infer<typeof EventInputSchema>; data: z.infer<typeof EventInputSchema> }>(
            opts?: UseTRPCMutationOptions<
                T,
                TRPCClientErrorLike<AppRouter>,
                { count: number },
                Context
            >
        ) => Omit<UseTRPCMutationResult<{ count: number }, TRPCClientErrorLike<AppRouter>, T, Context>, 'mutateAsync'> & {
            mutateAsync: (variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, { count: number }, Context>) => Promise<{ count: number }>
        };
    };
    update: {
        useMutation: <T extends { where: z.infer<typeof EventInputSchema>; data: z.infer<typeof EventInputSchema> }>(
            opts?: UseTRPCMutationOptions<
                T,
                TRPCClientErrorLike<AppRouter>,
                T,
                Context
            >
        ) => Omit<UseTRPCMutationResult<T, TRPCClientErrorLike<AppRouter>, T, Context>, 'mutateAsync'> & {
            mutateAsync: (variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, T, Context>) => Promise<T>
        };
    };
}
