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

        createMany: procedure.input($Schema.InterestInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.createMany(input as any))),

        create: procedure.input($Schema.InterestInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.create(input as any))),

        deleteMany: procedure.input($Schema.InterestInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.deleteMany(input as any))),

        delete: procedure.input($Schema.InterestInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.delete(input as any))),

        findFirst: procedure.input($Schema.InterestInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).interest.findFirst(input as any))),

        findMany: procedure.input($Schema.InterestInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).interest.findMany(input as any))),

        findUnique: procedure.input($Schema.InterestInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).interest.findUnique(input as any))),

        updateMany: procedure.input($Schema.InterestInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.updateMany(input as any))),

        update: procedure.input($Schema.InterestInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).interest.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.InterestCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InterestCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InterestCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InterestCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.InterestCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InterestCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InterestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InterestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InterestCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InterestCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InterestGetPayload<T>, Context>) => Promise<Prisma.InterestGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.InterestDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InterestDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InterestDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InterestDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.InterestDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InterestDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InterestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InterestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InterestDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InterestDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InterestGetPayload<T>, Context>) => Promise<Prisma.InterestGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.InterestFindFirstArgs, TData = Prisma.InterestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.InterestFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.InterestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InterestFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.InterestFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.InterestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.InterestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.InterestFindManyArgs, TData = Array<Prisma.InterestGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.InterestFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.InterestGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InterestFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.InterestFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.InterestGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.InterestGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.InterestFindUniqueArgs, TData = Prisma.InterestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.InterestFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.InterestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InterestFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.InterestFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.InterestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.InterestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.InterestUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InterestUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InterestUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InterestUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.InterestUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InterestUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InterestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InterestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InterestUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InterestUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InterestGetPayload<T>, Context>) => Promise<Prisma.InterestGetPayload<T>>
            };

    };
}
