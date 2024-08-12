/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from "./index.js";
import { EmergencyInfoInputSchema } from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from './helper.js';
import { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input(EmergencyInfoInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyInfo.createMany(input as any))),

        create: procedure.input(EmergencyInfoInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyInfo.create(input as any))),

        deleteMany: procedure.input(EmergencyInfoInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyInfo.deleteMany(input as any))),

        delete: procedure.input(EmergencyInfoInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyInfo.delete(input as any))),

        findFirst: procedure.input(EmergencyInfoInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).emergencyInfo.findFirst(input as any))),

        findMany: procedure.input(EmergencyInfoInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).emergencyInfo.findMany(input as any))),

        findUnique: procedure.input(EmergencyInfoInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).emergencyInfo.findUnique(input as any))),

        updateMany: procedure.input(EmergencyInfoInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyInfo.updateMany(input as any))),

        update: procedure.input(EmergencyInfoInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyInfo.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EmergencyInfoCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyInfoCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyInfoCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyInfoCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EmergencyInfoCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyInfoCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmergencyInfoGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmergencyInfoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyInfoCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyInfoCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmergencyInfoGetPayload<T>, Context>) => Promise<Prisma.EmergencyInfoGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EmergencyInfoDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyInfoDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyInfoDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyInfoDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EmergencyInfoDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyInfoDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmergencyInfoGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmergencyInfoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyInfoDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyInfoDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmergencyInfoGetPayload<T>, Context>) => Promise<Prisma.EmergencyInfoGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EmergencyInfoFindFirstArgs, TData = Prisma.EmergencyInfoGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmergencyInfoFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmergencyInfoGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmergencyInfoFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmergencyInfoFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmergencyInfoGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmergencyInfoGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EmergencyInfoFindManyArgs, TData = Array<Prisma.EmergencyInfoGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.EmergencyInfoFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EmergencyInfoGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmergencyInfoFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmergencyInfoFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EmergencyInfoGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EmergencyInfoGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EmergencyInfoFindUniqueArgs, TData = Prisma.EmergencyInfoGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmergencyInfoFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmergencyInfoGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmergencyInfoFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmergencyInfoFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmergencyInfoGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmergencyInfoGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EmergencyInfoUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyInfoUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyInfoUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyInfoUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EmergencyInfoUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyInfoUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmergencyInfoGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmergencyInfoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyInfoUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyInfoUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmergencyInfoGetPayload<T>, Context>) => Promise<Prisma.EmergencyInfoGetPayload<T>>
            };

    };
}
