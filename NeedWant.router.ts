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

        createMany: procedure.input($Schema.NeedWantInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).needWant.createMany(input as any))),

        create: procedure.input($Schema.NeedWantInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).needWant.create(input as any))),

        deleteMany: procedure.input($Schema.NeedWantInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).needWant.deleteMany(input as any))),

        delete: procedure.input($Schema.NeedWantInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).needWant.delete(input as any))),

        findFirst: procedure.input($Schema.NeedWantInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).needWant.findFirst(input as any))),

        findMany: procedure.input($Schema.NeedWantInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).needWant.findMany(input as any))),

        findUnique: procedure.input($Schema.NeedWantInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).needWant.findUnique(input as any))),

        updateMany: procedure.input($Schema.NeedWantInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).needWant.updateMany(input as any))),

        update: procedure.input($Schema.NeedWantInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).needWant.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.NeedWantCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NeedWantCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NeedWantCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NeedWantCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.NeedWantCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NeedWantCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NeedWantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NeedWantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NeedWantCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NeedWantCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NeedWantGetPayload<T>, Context>) => Promise<Prisma.NeedWantGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.NeedWantDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NeedWantDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NeedWantDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NeedWantDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.NeedWantDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NeedWantDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NeedWantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NeedWantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NeedWantDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NeedWantDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NeedWantGetPayload<T>, Context>) => Promise<Prisma.NeedWantGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.NeedWantFindFirstArgs, TData = Prisma.NeedWantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.NeedWantFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.NeedWantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NeedWantFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NeedWantFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.NeedWantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.NeedWantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.NeedWantFindManyArgs, TData = Array<Prisma.NeedWantGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.NeedWantFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.NeedWantGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NeedWantFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NeedWantFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.NeedWantGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.NeedWantGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.NeedWantFindUniqueArgs, TData = Prisma.NeedWantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.NeedWantFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.NeedWantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NeedWantFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NeedWantFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.NeedWantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.NeedWantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.NeedWantUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NeedWantUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NeedWantUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NeedWantUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.NeedWantUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NeedWantUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NeedWantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NeedWantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NeedWantUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NeedWantUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NeedWantGetPayload<T>, Context>) => Promise<Prisma.NeedWantGetPayload<T>>
            };

    };
}
