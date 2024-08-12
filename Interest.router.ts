/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from "./index.js";
import { z } from 'zod';
import { checkRead, checkMutate } from './helper.js';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

const InterestInputSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  description: z.string().optional(),
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
                createdById: z.string().optional(),
            }))
        })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.createMany({ data: input.data }))),

        create: procedure.input(InterestInputSchema).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.create({ data: input }))),

        deleteMany: procedure.input(z.object({ where: z.any() })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.deleteMany(input))),

        delete: procedure.input(z.object({ where: z.object({ id: z.string() }) })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.delete(input))),

        findFirst: procedure.input(z.object({ where: z.any(), select: z.any().optional(), include: z.any().optional() })).query(({ ctx, input }) => checkRead(db(ctx).interest.findFirst(input))),

        findMany: procedure.input(z.object({ where: z.any(), select: z.any().optional(), include: z.any().optional() })).query(({ ctx, input }) => checkRead(db(ctx).interest.findMany(input))),

        findUnique: procedure.input(z.object({ where: z.object({ id: z.string() }), select: z.record(z.boolean()).optional(), include: z.record(z.boolean()).optional() })).query(({ ctx, input }) => checkRead(db(ctx).interest.findUnique({ where: { id: input.where.id }, ...(input.select && { select: input.select }), ...(input.include && { include: input.include }) }))),

        updateMany: procedure.input(z.object({ where: z.any(), data: z.object({}).refine(obj => Object.keys(obj).length > 0, { message: "Data object cannot be empty" }) })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.updateMany(input))),

        update: procedure.input(z.object({
            where: z.object({ id: z.string() }),
            data: InterestInputSchema.partial().omit({ id: true })
        })).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.update(input))),
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {
        useMutation: <T extends z.infer<typeof InterestInputSchema>[]>(
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
        useMutation: <T extends z.infer<typeof InterestInputSchema>>(
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
        useMutation: <T extends { where: z.infer<typeof InterestInputSchema> }>(
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
        useMutation: <T extends { where: z.infer<typeof InterestInputSchema> }>(
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
        useQuery: <T extends z.infer<typeof InterestInputSchema>>(
            input: { where: T },
            opts?: UseTRPCQueryOptions<string, { where: T }, T, T, Error>
        ) => UseTRPCQueryResult<T, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends z.infer<typeof InterestInputSchema>>(
            input: { where: T },
            opts?: UseTRPCInfiniteQueryOptions<string, { where: T }, T, Error>
        ) => UseTRPCInfiniteQueryResult<T, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends z.infer<typeof InterestInputSchema>>(
            input: { where: T },
            opts?: UseTRPCQueryOptions<string, { where: T }, T[], T[], Error>
        ) => UseTRPCQueryResult<T[], TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends z.infer<typeof InterestInputSchema>>(
            input: { where: T },
            opts?: UseTRPCInfiniteQueryOptions<string, { where: T }, T[], Error>
        ) => UseTRPCInfiniteQueryResult<T[], TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends z.infer<typeof InterestInputSchema>>(
            input: { where: T },
            opts?: UseTRPCQueryOptions<string, { where: T }, T, T, Error>
        ) => UseTRPCQueryResult<T, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends z.infer<typeof InterestInputSchema>>(
            input: { where: T },
            opts?: UseTRPCInfiniteQueryOptions<string, { where: T }, T, Error>
        ) => UseTRPCInfiniteQueryResult<T, TRPCClientErrorLike<AppRouter>>;
    };
    updateMany: {
        useMutation: <T extends { where: z.infer<typeof InterestInputSchema>; data: z.infer<typeof InterestInputSchema> }>(
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
        useMutation: <T extends { where: z.infer<typeof InterestInputSchema>; data: z.infer<typeof InterestInputSchema> }>(
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
