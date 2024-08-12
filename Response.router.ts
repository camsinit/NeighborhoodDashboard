/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from './helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ResponseInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).response.createMany(input as any))),

        create: procedure.input($Schema.ResponseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).response.create(input as any))),

        deleteMany: procedure.input($Schema.ResponseInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).response.deleteMany(input as any))),

        delete: procedure.input($Schema.ResponseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).response.delete(input as any))),

        findFirst: procedure.input($Schema.ResponseInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).response.findFirst(input as any))),

        findMany: procedure.input($Schema.ResponseInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).response.findMany(input as any))),

        findUnique: procedure.input($Schema.ResponseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).response.findUnique(input as any))),

        updateMany: procedure.input($Schema.ResponseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).response.updateMany(input as any))),

        update: procedure.input($Schema.ResponseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).response.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ResponseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResponseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResponseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResponseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ResponseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResponseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ResponseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ResponseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResponseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResponseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ResponseGetPayload<T>, Context>) => Promise<Prisma.ResponseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ResponseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResponseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResponseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResponseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ResponseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResponseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ResponseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ResponseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResponseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResponseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ResponseGetPayload<T>, Context>) => Promise<Prisma.ResponseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ResponseFindFirstArgs, TData = Prisma.ResponseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ResponseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ResponseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ResponseFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ResponseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ResponseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ResponseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ResponseFindManyArgs, TData = Array<Prisma.ResponseGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ResponseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ResponseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ResponseFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ResponseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ResponseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ResponseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ResponseFindUniqueArgs, TData = Prisma.ResponseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ResponseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ResponseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ResponseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ResponseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ResponseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ResponseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ResponseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResponseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResponseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResponseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ResponseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResponseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ResponseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ResponseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResponseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResponseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ResponseGetPayload<T>, Context>) => Promise<Prisma.ResponseGetPayload<T>>
            };

    };
}
