/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.OfferingInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).offering.createMany(input as any))),

        create: procedure.input($Schema.OfferingInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).offering.create(input as any))),

        deleteMany: procedure.input($Schema.OfferingInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).offering.deleteMany(input as any))),

        delete: procedure.input($Schema.OfferingInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).offering.delete(input as any))),

        findFirst: procedure.input($Schema.OfferingInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).offering.findFirst(input as any))),

        findMany: procedure.input($Schema.OfferingInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).offering.findMany(input as any))),

        findUnique: procedure.input($Schema.OfferingInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).offering.findUnique(input as any))),

        updateMany: procedure.input($Schema.OfferingInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).offering.updateMany(input as any))),

        update: procedure.input($Schema.OfferingInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).offering.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.OfferingCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfferingCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfferingCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfferingCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.OfferingCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfferingCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OfferingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OfferingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfferingCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfferingCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OfferingGetPayload<T>, Context>) => Promise<Prisma.OfferingGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.OfferingDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfferingDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfferingDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfferingDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.OfferingDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfferingDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OfferingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OfferingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfferingDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfferingDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OfferingGetPayload<T>, Context>) => Promise<Prisma.OfferingGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.OfferingFindFirstArgs, TData = Prisma.OfferingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.OfferingFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.OfferingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OfferingFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OfferingFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.OfferingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.OfferingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.OfferingFindManyArgs, TData = Array<Prisma.OfferingGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.OfferingFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.OfferingGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OfferingFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OfferingFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.OfferingGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.OfferingGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.OfferingFindUniqueArgs, TData = Prisma.OfferingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.OfferingFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.OfferingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OfferingFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OfferingFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.OfferingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.OfferingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.OfferingUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfferingUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfferingUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfferingUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.OfferingUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OfferingUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OfferingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OfferingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OfferingUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OfferingUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OfferingGetPayload<T>, Context>) => Promise<Prisma.OfferingGetPayload<T>>
            };

    };
}
